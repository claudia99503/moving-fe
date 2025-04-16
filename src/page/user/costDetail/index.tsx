import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Tab from '../../../components/tab/Tab';
import DriverCard from '../../../components/card/DriverCard';
import SnsShare from '../../../components/snsShare/SnsShare';
import Toast from '../../../components/toast/Toast';
import LoadingSpinner from '../../../components/loading/LoadingSpinner';
import PageError from '../../../components/pageError/PageError';
import CostDetailBottomTab from './components/CostDetailBottomTab';
import DesktopSidebar from './components/DesktopSidebar';
import CostInfoSection from './components/CostInfoSection';
import MetaHelmet from './components/MetaHelmet';
import { useMedia } from '../../../lib/function/useMediaQuery';
import { useGetEstimateDetail } from '../../../lib/useQueries/estimate';
import { useCostDetail } from './hooks/useCostDetail';
import { EstimateConsumer } from '../../../types/apiTypes';
import { useIsMobileView } from './hooks/useIsMobileView';
import { getErrorMessage } from '../../root/driverDetail/utils/errorHandler';
import Modals from '../../root/driverDetail/components/Modals';
import noItems from '../../../assets/icons/ic_noItems.svg';
import style from './index.module.css';

const CostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { mobileWithChipCostDetail } = useMedia();
  const isMobileView = useIsMobileView();

  const {
    data: estimate,
    refetch,
    error,
  } = useGetEstimateDetail(Number(id), 'consumer') as {
    data: EstimateConsumer;
    refetch: () => void;
    error: any;
  };

  const {
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
  } = useCostDetail(estimate, refetch);

  const handleSnsShareClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    const code = error?.response?.data?.code ?? error?.code ?? 'UNKNOWN_ERROR';
    const errorMessage = getErrorMessage(code, estimate?.moverName || '기사님');

    return (
      <div className={`${style.outerContainer} ${style.errorContainer}`}>
        <PageError
          image={noItems}
          contentTextFirst="데이터를 불러오는 중 에러가 발생했습니다:"
          contentTextSecond={errorMessage}
          buttonText="홈으로 돌아가기"
          buttonHandler={() => navigate('/')}
        />
      </div>
    );
  }

  if (!estimate) {
    return (
      <div className={style.outerContainer}>
        <div className={style.noPadding}>
          <Tab firstText="견적 상세" />
        </div>
        <LoadingSpinner />
      </div>
    );
  }

  const costInfoData = {
    id: estimate.estimateId,
    name: estimate.moverName || '기사님',
    isConfirmed,
    isReqConfirmed: estimate.isReqConfirmed,
    movingRequest: estimate.movingRequest || '정보 없음',
    movingType: estimate.movingType || 'HOUSE',
    movingDate: estimate.movingDate || '2025-01-15',
    departure: estimate.departure || '서울특별시 강남구',
    arrival: estimate.arrival || '경기도 성남시',
    comment: estimate.customerComment || '추가 요청 사항 없음',
  };

  return (
    <>
      <MetaHelmet moverName={estimate.moverName} path={location.pathname} />

      <div className={style.outerContainer}>
        <div className={style.noPadding}>
          <Tab firstText="견적 상세" />
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
              type="cost"
              showPrice={false}
              count={mobileWithChipCostDetail ? 3 : 6}
              onClick={() => navigate(`/driver/${estimate.moverId}`)}
            />

            {isMobileView && (
              <>
                <div className={style.border}></div>
                <div style={{ height: '24px' }}></div>
                <SnsShare
                  nickname={estimate.moverName}
                  type="shareEstimate"
                  onClick={handleSnsShareClick}
                />
                <div style={{ height: '24px' }}></div>
                <div className={style.border}></div>
              </>
            )}

            <CostInfoSection
              price={estimate.price}
              moverName={estimate.moverName}
              moverComment={estimate.moverComment ?? '기사님의 코멘트입니다.'}
              costInfoData={costInfoData}
              showToast={showToast}
            />
          </div>

          {!isMobileView && (
            <DesktopSidebar
              moverName={estimate.moverName}
              isFavorite={isFavorite}
              isConfirmed={isConfirmed}
              isReqConfirmed={estimate.isReqConfirmed}
              handleFavoriteToggle={handleFavoriteToggle}
              handleConfirmClick={handleConfirmClick}
              onSnsClick={handleSnsShareClick}
            />
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

        {showToast && (
          <Toast
            text="링크 복사가 완료됐습니다."
            autoDismiss={true}
            type="copy"
          />
        )}

        <Modals
          driverName={estimate.moverName}
          isModalOpen={isModalOpen}
          isLoginModalOpen={isLoginModalOpen}
          isAssignedEstimateReqOpen={isAssignedEstimateReqOpen}
          errorModalMessage={errorModalMessage}
          handleModalButtonClick={() => navigate('/user/costCall')}
          navigateLogin={() => navigate('/user/login')}
          closeErrorModal={() => setErrorModalMessage(null)}
          closeModal={() => setIsModalOpen(false)}
          closeLoginModal={() => setIsLoginModalOpen(false)}
          closeAssignedModal={() => setIsAssignedEstimateReqOpen(false)}
        />
      </div>
    </>
  );
};

export default CostDetailPage;
