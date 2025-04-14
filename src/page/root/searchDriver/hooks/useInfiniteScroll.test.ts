import { renderHook } from '@testing-library/react';
import { useInfiniteScroll } from './useInfiniteScroll';

describe('useInfiniteScroll', () => {
  let observeMock: jest.Mock;
  let unobserveMock: jest.Mock;
  let disconnectMock: jest.Mock;

  beforeEach(() => {
    observeMock = jest.fn();
    unobserveMock = jest.fn();
    disconnectMock = jest.fn();

    (window as any).IntersectionObserver = jest.fn((_callback) => ({
      observe: observeMock,
      unobserve: unobserveMock,
      disconnect: disconnectMock,
    }));
  });

  it('hasNextPage가 false이면 observer가 등록되지 않아야 한다', () => {
    const onLoadMore = jest.fn();
    const { result } = renderHook(() =>
      useInfiniteScroll({ hasNextPage: false, onLoadMore }),
    );
    const node = document.createElement('div');
    result.current(node);
    expect(observeMock).not.toHaveBeenCalled();
  });

  it('hasNextPage가 true이면 observer가 호출되어야 한다', () => {
    jest.useFakeTimers();
    const onLoadMore = jest.fn();
    const { result } = renderHook(() =>
      useInfiniteScroll({ hasNextPage: true, onLoadMore }),
    );
    const node = document.createElement('div');
    result.current(node);
    jest.runAllTimers();
    expect(observeMock).toHaveBeenCalledWith(node);
  });
});

