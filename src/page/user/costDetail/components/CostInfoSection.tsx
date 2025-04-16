import React from 'react';
import style from '../index.module.css';
import CostInfo from '../../../../components/costInfo/CostInfo';
import Toast from '../../../../components/toast/Toast';

interface CostInfoSectionProps {
  price: number | null;
  moverName: string;
  moverComment: string;
  costInfoData: any;
  showToast: boolean;
}

const CostInfoSection = ({
  price,
  moverName,
  moverComment,
  costInfoData,
  showToast,
}: CostInfoSectionProps) => {
  const formattedPrice =
    price != null ? `${price.toLocaleString()} 원` : '가격 정보 없음';

  return (
    <div className={style.section}>
      <h2 className={style.sectionTitle}>견적가</h2>
      <p className={style.costValue}>{formattedPrice}</p>

      <div className={style.border}></div>
      <h2 className={style.sectionTitle}>{moverName} 기사님의 코멘트</h2>
      <p className={style.comment}>{moverComment || '기사님의 코멘트입니다.'}</p>

      <div className={style.border}></div>
      <div className={style.costInfoWrapper}>
        <CostInfo {...costInfoData} />
        {showToast && (
          <Toast
            text='링크 복사가 완료됐습니다.'
            autoDismiss={true}
            type='copy'
          />
        )}
      </div>
      {costInfoData?.isReqConfirmed && !costInfoData?.isConfirmed && (
        <div className={style.toastWrapper}>
          <Toast text='확정하지 않은 견적이에요!' />
        </div>
      )}
    </div>
  );
};

export default CostInfoSection;

