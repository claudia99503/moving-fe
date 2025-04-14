import { useEffect, useRef, useCallback } from 'react';

interface Props {
  hasNextPage: boolean;
  onLoadMore: () => void;
  threshold?: number;
  rootMargin?: string;
}

export const useInfiniteScroll = ({
  hasNextPage,
  onLoadMore,
  threshold = 0.3,
  rootMargin = '300px',
}: Props) => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const prevNodeRef = useRef<HTMLDivElement | null>(null);
  const isFetchingRef = useRef(false);
  const targetRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node || isFetchingRef.current || !hasNextPage) return;

      if (prevNodeRef.current === node) return;

      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      observerRef.current = new IntersectionObserver(
        (entries, observer) => {
          const [entry] = entries;

          if (entry.isIntersecting) {
            isFetchingRef.current = true;

            const target = entry.target;

            Promise.resolve(onLoadMore()).finally(() => {
              isFetchingRef.current = false;
              observer.unobserve(target);
            });
          }
        },
        {
          rootMargin,
          threshold,
        },
      );

      setTimeout(() => {
        observerRef.current?.observe(node);
        prevNodeRef.current = node;
      }, 0);
    },
    [hasNextPage, onLoadMore, rootMargin, threshold],
  );

  useEffect(() => {
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return targetRef;
};

