import { useRef } from 'react';
import { useObserver } from './useObserver';

interface Props {
  hasNextPage: boolean;
  onLoadMore: () => void;
  threshold?: number;
  rootMargin?: string;
}

export const useInfiniteScroll = ({
  hasNextPage,
  onLoadMore,
  threshold,
  rootMargin,
}: Props) => {
  const isFetchingRef = useRef(false);

  const handleIntersect = () => {
    if (!hasNextPage || isFetchingRef.current) return;

    isFetchingRef.current = true;
    Promise.resolve(onLoadMore()).finally(() => {
      isFetchingRef.current = false;
    });
  };

  const targetRef = useObserver({
    onIntersect: handleIntersect,
    enabled: hasNextPage,
    threshold,
    rootMargin,
  });

  return targetRef;
};

