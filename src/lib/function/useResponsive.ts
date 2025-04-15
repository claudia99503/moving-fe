import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';

export type ScreenSize = 'SMALL' | 'MEDIUM' | 'LARGE';

export const useResponsive = (): ScreenSize => {
  const getScreenSize = (): ScreenSize => {
    const width = window.innerWidth;
    if (width >= 375 && width <= 744) return 'SMALL';
    if (width >= 745 && width <= 1199) return 'MEDIUM';
    return 'LARGE';
  };

  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize());

  const handleResize = useDebounce(() => {
    setScreenSize(getScreenSize());
  }, 200);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return screenSize;
};

