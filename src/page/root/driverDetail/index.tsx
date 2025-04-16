import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import style from './index.module.css';
import { AuthContext } from '../../../context/authContext';
import { useGetMoverDetail } from '../../../lib/useQueries/driver';
import { useGetMoverReviewList } from '../../../lib/useQueries/review';
import { useMedia } from '../../../lib/function/useMediaQuery';
import DriverDetailCard from './components/DriverDetailCard';
import DriverDetailInfo from './components/DriverDetailInfo';
import ReviewSection from './components/ReviewSection';
import DesktopSidebar from './components/DesktopSidebar';
import MobileBottomTab from './components/MobileBottomTab';
import MetaHelmet from './components/MetaHelmet';
import Modals from './components/Modals';
import LoadingSpinner from '../../../components/loading/LoadingSpinner';
import PageError from '../../../components/pageError/PageError';
import NotFound from '../../../components/404/NotFound';
import noItems from '../../../assets/icons/ic_noItems.svg';
import Toast from '../../../components/toast/Toast';
import SnsShare from '../../../components/snsShare/SnsShare';
import { useGetPendingEstimate } from '../../../lib/useQueries/estimate';
import { useDriverDetail } from './hooks/useDriverDetail';
import { useIsMobileView } from './hooks/useIsMobileView';

const DriverDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { userValue } = useContext(AuthContext);
  const isLoggedIn = !!userValue.user;
  const { mobileWithChipDriverDetail } = useMedia();
  const isMobileView = useIsMobileView();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [showToast, setShowToast] = useState(false);

  const {
    data: driver,
    isLoading,
    error,
    refetch,
  } = useGetMoverDetail(Number(id));

  const {
    data: reviewData,
    isLoading: isReviewLoading,
    error: reviewError,
  } = useGetMoverReviewList(Number(id), currentPage, itemsPerPage);

  const { data: pendingMoverList } = useGetPendingEstimate();

  const {
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
  } = useDriverDetail(driver, refetch, isLoggedIn);

  const handleSnsShareClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className={style.outerContainer}>
        <div className={style.noPadding}></div>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className={style.outerContainer}>
        <NotFound />
      </div>
    );
  }

  if (!driver) {
    return (
      <div className={`${style.outerContainer} ${style.noDriverError}`}>
        <PageError
          image={noItems}
          contentTextFirst='데이터를 불러오는 중 에러가 발생했습니다:'
          contentTextSecond='해당하는 기사님이 존재하지 않습니다.'
          buttonText='홈으로 돌아가기'
          buttonHandler={() => navigate('/')}
        />
      </div>
    );
  }

  const serviceType = pendingMoverList?.list?.some(
    (p: { moverId: number }) => p.moverId === driver.id,
  )
    ? [...driver.serviceType, 'WAITING']
    : driver.serviceType;

  return (
    <>
      <MetaHelmet moverName={driver.moverName} path={location.pathname} />
      <div className={style.outerContainer}>
        <div className={style.noPadding}></div>
        <div className={style.container}>
          <div className={style.leftFilters}>
            <DriverDetailCard
              driver={{
                ...driver,
                serviceType,
                profileImg: driver.profileImg ?? undefined,
              }}
            />

            {isMobileView && (
              <>
                <div className={style.border}></div>

                <SnsShare
                  nickname={driver.moverName}
                  onClick={handleSnsShareClick}
                />
              </>
            )}

            <DriverDetailInfo
              description={driver.description}
              serviceType={serviceType}
              serviceRegion={driver.serviceRegion}
            />

            <ReviewSection
              isLoading={isReviewLoading}
              error={!!reviewError}
              reviewData={reviewData}
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              setCurrentPage={setCurrentPage}
            />
          </div>

          {!mobileWithChipDriverDetail && (
            <DesktopSidebar
              moverName={driver.moverName}
              isFavorite={isFavorite}
              isAssigned={isAssigned}
              isLoggedIn={isLoggedIn}
              onFavoriteToggle={handleFavoriteToggle}
              onAssignRequest={handleAssignRequest}
              onSnsClick={handleSnsShareClick}
              setLoginModalOpen={setIsLoginModalOpen}
            />
          )}
        </div>

        {isMobileView && (
          <MobileBottomTab
            moverId={driver.id}
            isFavorite={isFavorite}
            handleFavoriteToggle={handleFavoriteToggle}
            isAssigned={isAssigned}
            handleAssignRequest={handleAssignRequest}
            isConfirmed={driver.isConfirmed}
            isLoggedIn={isLoggedIn}
            setModalOpen={setIsModalOpen}
            setLoginModalOpen={setIsLoginModalOpen}
          />
        )}

        <Modals
          driverName={driver.moverName}
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

        {showToast && (
          <Toast
            text='링크 복사가 완료됐습니다.'
            autoDismiss={true}
            type='copy'
          />
        )}
      </div>
    </>
  );
};

export default DriverDetailPage;
