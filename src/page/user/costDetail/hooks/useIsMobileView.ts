import { useResponsive } from '../../../../lib/function/useResponsive';

export const useIsMobileView = (): boolean => {
  const screenSize = useResponsive();
  return screenSize === 'SMALL' || screenSize === 'MEDIUM';
};

