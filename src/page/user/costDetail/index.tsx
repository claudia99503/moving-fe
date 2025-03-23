import React, { useState, useEffect, useCallback} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DriverCard from '../../../components/card/DriverCard';
import CostDetailBottomTab from '../costDetail/components/CostDetailBottomTab';
import CostInfo from '../../../components/costInfo/CostInfo';
import Button from '../../../components/btn/Button';
import Tab from '../../../components/tab/Tab';
import Toast from '../../../components/toast/Toast';
import HeartEmptyIcon from '../../../assets/icons/ic_empty_heart_small.svg';
import HeartIcon from '../../../assets/icons/ic_full_heart_small.svg';
import style from './index.module.css';
import {
  useGetEstimateDetail,
  useUpdateEstimateConfirmed,
} from '../../../lib/useQueries/estimate';
import { useToggleFavoriteMover } from '../../../lib/useQueries/favorite';
import { useMedia } from '../../../lib/function/useMediaQuery';
import { EstimateConsumer } from '../../../types/apiTypes';
import LoadingSpinner from '../../../components/loading/LoadingSpinner';
import SnsShare from '../../../components/snsShare/SnsShare';
import { Helmet } from 'react-helmet-async';
import { ENV } from '../../../lib/api/STORAGE_KEY';
import PageError from '../../../components/pageError/PageError';
import noItems from '../../../assets/icons/ic_noItems.svg';

const CostDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { mobileWithChipCostDetail } = useMedia();

  const {
    data: estimate,
    refetch,
    error,
  } = useGetEstimateDetail(Number(id), 'consumer') as {
    data: EstimateConsumer;
    refetch: () => void;
    error: any;
  };
  const toggleFavoriteMutation = useToggleFavoriteMover();
  const { mutate: updateEstimateConfirmed } = useUpdateEstimateConfirmed();

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1199);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView((prev) => {
        const newValue = window.innerWidth <= 1199;
        return prev === newValue ? prev : newValue;
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
        if (isFavorite !== estimate.isFavorite) {
          refetch();
        }
      },
      onError: (error) => console.error('기사님 찜하기 상태 변경 실패:', error),
    });
  }, [estimate, toggleFavoriteMutation, refetch]);

  const handleConfirmClick = useCallback(() => {
    if (isConfirmed || !estimate?.estimateId) return;

    updateEstimateConfirmed(estimate.estimateId, {
      onSuccess: () => refetch(),
      onError: (error) => console.error('견적 확정 실패:', error),
    });
  }, [isConfirmed, estimate, updateEstimateConfirmed, refetch]);

  if (error) {
    const errorMessage =
      error.status === 401 ? '권한이 없습니다.' : '존재하지 않는 견적입니다.';

    return (
      <div className={`${style.outerContainer} ${style.errorContainer}`}>
        <PageError
          image={noItems}
          contentTextFirst='데이터를 불러오는 중 에러가 발생했습니다:'
          contentTextSecond={errorMessage}
          buttonText='홈으로 돌아가기'
          buttonHandler={() => navigate('/')}
        />
      </div>
    );
  }

  if (!estimate) {
    return (
      <div className={style.outerContainer}>
        <div className={style.noPadding}>
          <Tab firstText='견적 상세' />
        </div>
        <LoadingSpinner />
      </div>
    );
  }

  const costInfoData = {
    id: estimate.estimateId,
    name: estimate.moverName || '기사님',
    isConfirmed,
    movingRequest: estimate.movingRequest || '정보 없음',
    movingType: estimate.movingType || 'HOUSE',
    movingDate: estimate.movingDate || '2025-01-15',
    departure: estimate.departure || '서울특별시 강남구',
    arrival: estimate.arrival || '경기도 성남시',
    comment: estimate.customerComment || '추가 요청 사항 없음',
  };

  const shouldShowToast = estimate.isReqConfirmed && !isConfirmed;

  const url = `${ENV.API_FRONT}${location.pathname}`;

  const handleSnsShareClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleMoverCardClick = (id: number | undefined) => {
    if (id === undefined) return;
    navigate(`/driver/${id}`);
  };

  return (
    <>
      <Helmet>
        <meta property='og:url' content={url} />
        <meta property='og:title' content='기사님 견적 페이지 공유하기' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://github.com/moving-team/moving-fe/blob/main/public/img_logo_icon_text_xlarge.jpg'
        />
        <meta
          property='og:description'
          content={`이 페이지는 ${estimate?.moverName} 기사님 견적 페이지입니다.`}
        />
        <title>기사님 견적 페이지</title>
      </Helmet>
      <div className={style.outerContainer}>
        <div className={style.noPadding}>
          <Tab firstText='견적 상세' />
        </div>

        <div className={style.container}>
          <div
            className={`${style.leftFilters} ${
              isMobileView && !estimate.isReqConfirmed
                ? style.isReqNotConfirmed
                : ''
            }`}
          >
            <DriverCard
              list={estimate}
              type='cost'
              showPrice={false}
              count={mobileWithChipCostDetail ? 3 : 6}
              onClick={() => handleMoverCardClick(estimate.moverId)}
            />

            {isMobileView && (
              <>
                <div className={style.border}></div>
                <div style={{ height: '24px' }}></div>
                <SnsShare
                  nickname={estimate.moverName}
                  type='shareEstimate'
                  onClick={handleSnsShareClick}
                />
                <div style={{ height: '24px' }}></div>
                <div className={style.border}></div>
              </>
            )}

            <div className={style.section}>
              <h2 className={style.sectionTitle}>견적가</h2>
              <p className={style.costValue}>
                {estimate.price != null
                  ? `${estimate.price.toLocaleString()} 원`
                  : '가격 정보 없음'}
              </p>
              <div className={style.border}></div>
              <h2 className={style.sectionTitle}>
                {estimate.moverName} 기사님의 코멘트
              </h2>
              <p className={style.comment}>
                {estimate.moverComment || '기사님의 코멘트입니다.'}
              </p>
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
              {shouldShowToast && (
                <div className={style.toastWrapper}>
                  <Toast text='확정하지 않은 견적이에요!' />
                </div>
              )}
            </div>
          </div>

          {!isMobileView && (
            <div className={style.rightFilters}>
              {estimate.isReqConfirmed ? (
                <>
                  <div className={style.snsShareDesktop}>
                    <SnsShare
                      nickname={estimate.moverName}
                      type='shareEstimate'
                      onClick={handleSnsShareClick}
                    />
                  </div>
                </>
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
                  <div style={{ height: '40px' }}></div>
                  <div
                    style={{ border: '1px solid #FAFAFA', width: '100%' }}
                  ></div>
                  <div style={{ height: '40px' }}></div>
                  <SnsShare
                    nickname={estimate.moverName}
                    type='shareEstimate'
                    onClick={handleSnsShareClick}
                  />
                </>
              )}
            </div>
          )}
        </div>

        {isMobileView && (
          <CostDetailBottomTab
            isFavorite={isFavorite}
            handleFavoriteToggle={handleFavoriteToggle}
            isConfirmed={isConfirmed}
            isReqConfirmed={estimate.isReqConfirmed}
            handleConfirmClick={handleConfirmClick}
          />
        )}
      </div>
    </>
  );
};

export default CostDetail;

