import React from 'react';
import Button from '../../../../components/btn/Button';
import HeartIcon from '../../../../assets/icons/ic_full_heart_small.svg';
import HeartEmptyIcon from '../../../../assets/icons/ic_empty_heart_small.svg';
import SnsShare from '../../../../components/snsShare/SnsShare';
import style from '../index.module.css';

interface DesktopSidebarProps {
  moverName: string;
  isFavorite: boolean;
  isAssigned: boolean;
  isLoggedIn: boolean;
  onFavoriteToggle: () => void;
  onAssignRequest: () => void;
  onSnsClick: () => void;
  setLoginModalOpen: (open: boolean) => void;
}

const DesktopSidebar = ({
  moverName,
  isFavorite,
  isAssigned,
  isLoggedIn,
  onFavoriteToggle,
  onAssignRequest,
  onSnsClick,
  setLoginModalOpen,
}: DesktopSidebarProps) => {
  return (
    <div className={style.rightFilters}>
      <h2>{moverName} 기사님에게 지정 견적을 요청해보세요!</h2>
      <div className={style.rightButtons}>
        <Button
          text='기사님 찜하기'
          btnStyle='outlined354pxLine200'
          src={isFavorite ? HeartIcon : HeartEmptyIcon}
          srcLocationFront
          className={style.heartButton}
          onClick={() => {
            if (!isLoggedIn) {
              setLoginModalOpen(true);
              return;
            }
            onFavoriteToggle();
          }}
        />
        <Button
          text={isAssigned ? '지정 견적 요청 완료' : '지정 견적 요청하기'}
          btnStyle='solid354pxBlue300'
          className={style.requestButton}
          disabled={isAssigned}
          onClick={() => {
            if (!isLoggedIn) {
              setLoginModalOpen(true);
              return;
            }
            onAssignRequest();
          }}
        />
        <div className={style.border}></div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <SnsShare nickname={moverName} onClick={onSnsClick} />
      </div>
    </div>
  );
};

export default DesktopSidebar;

