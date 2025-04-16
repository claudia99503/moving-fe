import { useEffect, useState, useCallback } from 'react';
import { useToggleFavoriteMover } from '../../../../lib/useQueries/favorite';
import { useUpdateEstimateConfirmed } from '../../../../lib/useQueries/estimate';
import { EstimateConsumer } from '../../../../types/apiTypes';
import { getErrorMessage } from '../../../root/driverDetail/utils/errorHandler';

export const useCostDetail = (
  estimate: EstimateConsumer | undefined,
  refetch: () => void,
) => {
  const toggleFavoriteMutation = useToggleFavoriteMover();
  const { mutate: updateEstimateConfirmed } = useUpdateEstimateConfirmed();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [errorModalMessage, setErrorModalMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAssignedEstimateReqOpen, setIsAssignedEstimateReqOpen] = useState(false);

  useEffect(() => {
    if (estimate) {
      setIsFavorite(estimate.isFavorite);
      setIsConfirmed(estimate.isConfirmed);
    }
  }, [estimate]);

  const handleFavoriteToggle = useCallback(() => {
    if (!estimate) return;

    toggleFavoriteMutation.mutate(estimate.moverId, {
      onSuccess: ({ isFavorite }) => {
        if (isFavorite !== estimate.isFavorite) refetch();
      },
      onError: (error: any) => {
        const code = error?.response?.data?.code ?? error?.code ?? 'UNKNOWN_ERROR';
        const message = getErrorMessage(code, estimate?.moverName || '기사님');
        setErrorModalMessage(message);
      },
    });
  }, [estimate, toggleFavoriteMutation, refetch]);

  const handleConfirmClick = useCallback(() => {
    if (isConfirmed || !estimate?.estimateId) return;

    updateEstimateConfirmed(estimate.estimateId, {
      onSuccess: () => refetch(),
      onError: (error: any) => {
        const code = error?.response?.data?.code ?? error?.code ?? 'UNKNOWN_ERROR';
        const message = getErrorMessage(code, estimate?.moverName || '기사님');
        setErrorModalMessage(message);
      },
    });
  }, [isConfirmed, estimate, updateEstimateConfirmed, refetch]);

  return {
    isFavorite,
    isConfirmed,
    showToast,
    setShowToast,
    handleFavoriteToggle,
    handleConfirmClick,
    errorModalMessage,
    setErrorModalMessage,
    isModalOpen,
    setIsModalOpen,
    isLoginModalOpen,
    setIsLoginModalOpen,
    isAssignedEstimateReqOpen,
    setIsAssignedEstimateReqOpen,
  };
};

