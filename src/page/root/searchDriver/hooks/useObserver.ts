import { useEffect, useRef, useCallback } from 'react';

interface ObserverOptions {
  onIntersect: () => void;
  enabled: boolean;
  threshold?: number;
  rootMargin?: string;
}

export const useObserver = ({
  onIntersect,
  enabled,
  threshold = 0.3,
  rootMargin = '300px',
}: ObserverOptions) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const prevNodeRef = useRef<Element | null>(null);

  const targetRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || !enabled) return;

      if (prevNodeRef.current === node) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      observerRef.current = new IntersectionObserver(
        ([entry], observer) => {
          if (entry.isIntersecting) {
            onIntersect();
            observer.unobserve(entry.target);
          }
        },
        { rootMargin, threshold },
      );

      setTimeout(() => {
        observerRef.current?.observe(node);
        prevNodeRef.current = node;
      }, 0);
    },
    [onIntersect, enabled, threshold, rootMargin],
  );

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return targetRef;
};

