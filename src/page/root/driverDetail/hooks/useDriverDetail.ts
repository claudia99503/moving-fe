import { useEffect, useState, useCallback } from 'react';
import { useRequestAssignedEstimate } from '../../../../lib/useQueries/assignedEstimateReq';
import { useToggleFavoriteMover } from '../../../../lib/useQueries/favorite';
import { getErrorMessage } from '../utils/errorHandler';

export const useDriverDetail = (
  driver: any,
  refetch: () => void,
  isLoggedIn: boolean,
) => {
  const { mutate: requestAssignedEstimate } = useRequestAssignedEstimate();
  const toggleFavoriteMutation = useToggleFavoriteMover();

  const [isFavorite, setIsFavorite] = useState(false);
  const [isAssigned, setIsAssigned] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState<string | null>(
    null,
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAssignedEstimateReqOpen, setIsAssignedEstimateReqOpen] =
    useState(false);

  useEffect(() => {
    setIsFavorite(driver?.isFavorite ?? false);
    setIsAssigned(driver?.isAssigned ?? false);
  }, [driver]);

  const handleFavoriteToggle = useCallback(() => {
    if (!driver) return;
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }
    toggleFavoriteMutation.mutate(driver.id, {
      onSuccess: (data) => {
        setIsFavorite(data.isFavorite);
        refetch();
      },
      onError: console.error,
    });
  }, [driver, isLoggedIn, toggleFavoriteMutation, refetch]);

  const handleAssignRequest = useCallback(() => {
    if (!driver) return;

    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
      return;
    }

    const handleErrorResponse = (code: string) => {
      const message = getErrorMessage(code, driver?.moverName || '기사님');
      setErrorModalMessage(message);

      if (code === 'MISSING_GENERAL_ESTIMATE') setIsModalOpen(true);
      if (code === 'UNAUTHORIZED_ACCESS') setIsLoginModalOpen(true);
    };

    if (!isAssigned && driver.isConfirmed) {
      requestAssignedEstimate(driver.id, {
        onSuccess: (data) => {
          if (data?.status === 201) {
            refetch();
            setIsAssignedEstimateReqOpen(true);
          } else {
            const code = data?.code || 'UNKNOWN_ERROR';
            setIsAssigned(false);
            handleErrorResponse(code);
          }
        },
        onError: (error: any) => {
          const code = error?.response?.code ?? error?.code ?? 'UNKNOWN_ERROR';
          const message = getErrorMessage(code, driver?.moverName || '기사님');

          setIsAssigned(false);
          setErrorModalMessage(message);
        },
      });
    } else if (!driver.isConfirmed) {
      setIsModalOpen(true);
    }
  }, [driver, isAssigned, requestAssignedEstimate, refetch]);

  return {
    isFavorite,
    isAssigned,
    errorModalMessage,
    isModalOpen,
    isLoginModalOpen,
    isAssignedEstimateReqOpen,
    setErrorModalMessage,
    setIsModalOpen,
    setIsLoginModalOpen,
    setIsAssignedEstimateReqOpen,
    handleFavoriteToggle,
    handleAssignRequest,
  };
};

