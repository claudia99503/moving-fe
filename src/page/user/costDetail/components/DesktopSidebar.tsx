import React from 'react';
import Button from '../../../../components/btn/Button';
import HeartEmptyIcon from '../../../../assets/icons/ic_empty_heart_small.svg';
import HeartIcon from '../../../../assets/icons/ic_full_heart_small.svg';
import SnsShare from '../../../../components/snsShare/SnsShare';
import style from '../index.module.css';

interface DesktopSidebarProps {
  moverName: string;
  isFavorite: boolean;
  isConfirmed: boolean;
  isReqConfirmed: boolean;
  handleFavoriteToggle: () => void;
  handleConfirmClick: () => void;
  onSnsClick: () => void;
}

const DesktopSidebar = ({
  moverName,
  isFavorite,
  isConfirmed,
  isReqConfirmed,
  handleFavoriteToggle,
  handleConfirmClick,
  onSnsClick,
}: DesktopSidebarProps) => {
  return (
    <div className={style.rightFilters}>
      {isReqConfirmed ? (
        <div className={style.snsShareDesktop}>
          <SnsShare
            nickname={moverName}
            type='shareEstimate'
            onClick={onSnsClick}
          />
        </div>
      ) : (
        <>
          <Button
            text='기사님 찜하기'
            btnStyle='outlined354pxLine200'
            src={isFavorite ? HeartIcon : HeartEmptyIcon}
            srcLocationFront
            className={style.heartButton}
            onClick={handleFavoriteToggle}
          />
          <div style={{ height: '32px' }} />
          <Button
            text={isConfirmed ? '견적 확정 완료' : '견적 확정하기'}
            btnStyle={
              isConfirmed ? 'outlined314pxBlue300' : 'solid314pxBlue300'
            }
            className={style.confirmButton}
            disabled={isConfirmed}
            onClick={handleConfirmClick}
          />
          <div style={{ height: '40px' }} />
          <div style={{ border: '1px solid #FAFAFA', width: '100%' }} />
          <div style={{ height: '40px' }} />
          <SnsShare
            nickname={moverName}
            type='shareEstimate'
            onClick={onSnsClick}
          />
        </>
      )}
    </div>
  );
};

export default DesktopSidebar;

