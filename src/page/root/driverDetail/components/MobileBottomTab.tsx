import React, { Dispatch, SetStateAction } from 'react';
import FixedBottomTab from '../../../root/searchDriver/components/FixedBottomTab';

interface MobileBottomTabProps {
  moverId: number;
  isFavorite: boolean;
  isAssigned: boolean;
  isConfirmed: boolean;
  isLoggedIn: boolean;
  handleFavoriteToggle: () => void;
  handleAssignRequest: () => void;
  setModalOpen: Dispatch<SetStateAction<boolean>>; // ✅ 수정됨
  setLoginModalOpen: Dispatch<SetStateAction<boolean>>; // ✅ 수정됨
}

const MobileBottomTab = ({
  moverId,
  isFavorite,
  isAssigned,
  isConfirmed,
  isLoggedIn,
  handleFavoriteToggle,
  handleAssignRequest,
  setModalOpen,
  setLoginModalOpen,
}: MobileBottomTabProps) => {
  return (
    <FixedBottomTab
      moverId={moverId}
      isFavorite={isFavorite}
      handleFavoriteToggle={handleFavoriteToggle}
      isAssigned={isAssigned}
      handleAssignRequest={handleAssignRequest}
      isConfirmed={isConfirmed}
      setModalOpen={setModalOpen}
      isLoggedIn={isLoggedIn}
      setLoginModalOpen={setLoginModalOpen}
    />
  );
};

export default MobileBottomTab;
