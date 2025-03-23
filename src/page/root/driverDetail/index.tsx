import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from './index.module.css';
import DriverCard from '../../../components/card/DriverCard';
import Review from '../../../components/review/Review';
import FixedBottomTab from '../searchDriver/components/FixedBottomTab';
import Button from '../../../components/btn/Button';
import Pagination from '../../../components/pagination/Pagination';
import { useGetMoverDetail } from '../../../lib/useQueries/driver';
import { useGetMoverReviewList } from '../../../lib/useQueries/review';
import { useRequestAssignedEstimate } from '../../../lib/useQueries/assignedEstimateReq';
import { useToggleFavoriteMover } from '../../../lib/useQueries/favorite';
import { ChipProps } from '../../../components/chip/Chip';
import {
  translateServiceRegion,
  translateServiceType,
} from '../searchDriver/EnumMapper';
import HeartIcon from '../../../assets/icons/ic_full_heart_small.svg';
import HeartEmptyIcon from '../../../assets/icons/ic_empty_heart_small.svg';
import ModalContainer from '../../../components/modal/ModalContainer';
import LoadingSpinner from '../../../components/loading/LoadingSpinner';
import NoContents from '../../../components/noContents/NoContents';
import { AuthContext } from '../../../context/authContext';
import { useMedia } from '../../../lib/function/useMediaQuery';
import SnsShare from '../../../components/snsShare/SnsShare';
import { Helmet } from 'react-helmet-async';
import Toast from '../../../components/toast/Toast';
import { useGetPendingEstimate } from '../../../lib/useQueries/estimate';
import { ENV } from '../../../lib/api/STORAGE_KEY';
import PageError from '../../../components/pageError/PageError';
import NotFound from '../../../components/404/NotFound';
import noItems from '../../../assets/icons/ic_noItems.svg';

const DriverDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { userValue } = useContext(AuthContext);
  const isLoggedIn = !!userValue.user;

  const {
    data: driver,
    isLoading,
    error,
    refetch,
  } = useGetMoverDetail(Number(id));

  const { data: pendingMoverList } = useGetPendingEstimate();

  const { mutate: requestAssignedEstimate } = useRequestAssignedEstimate();
  const toggleFavoriteMutation = useToggleFavoriteMover();

  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 1199);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAssignedEstimateReqOpen, setIsAssignedEstimateReqOpen] =
    useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isAssigned, setIsAssigned] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const { mobileWithChipDriverDetail } = useMedia();

  const {
    data: reviewData,
    isLoading: isReviewLoading,
    error: reviewError,
  } = useGetMoverReviewList(Number(id), currentPage, itemsPerPage);

  const [showToast, setShowToast] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState<string | null>(
    null,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setIsFavorite(driver?.isFavorite ?? false);
    setIsAssigned(driver?.isAssigned ?? false);
  }, [driver]);

  const handleResize = useCallback(() => {
    setIsMobileView(window.innerWidth <= 1199);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const handleFavoriteToggle = () => {
    if (!driver) {
      console.error('기사님 데이터가 없습니다.');
      return;
    }

    toggleFavoriteMutation.mutate(driver.id, {
      onSuccess: (data) => {
        setIsFavorite(data.isFavorite);
        refetch();
      },
      onError: console.error,
    });
  };

  const handleAssignRequest = () => {
    if (!driver) {
      console.error('기사님 데이터가 없습니다.');
      return;
    }

    const handleErrorResponse = (status: number, message: string) => {
      const errorMessages: Record<number, string> = {
        400:
          message === '일반 견적 요청을 먼저 진행해 주세요.'
            ? '일반 견적 요청을 먼저 진행해주세요.'
            : message === '해당 기사님의 서비스 지역이 아닙니다.'
              ? `${driver?.moverName} 기사님은 해당 지역에서 서비스를 제공하지 않습니다.`
              : '요청이 잘못되었습니다. 다시 시도해주세요.',
        401: '권한이 없습니다. 로그인 후 다시 시도해주세요.',
        403: '이 서비스는 소비자 전용입니다. 접근 권한이 없습니다.',
        500: '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      };

      setErrorModalMessage(
        errorMessages[status] ||
          `알 수 없는 오류가 발생했습니다. 다시 시도해주세요. (오류 코드: ${status})`,
      );

      if (
        status === 400 &&
        message === '일반 견적 요청을 먼저 진행해 주세요.'
      ) {
        setIsModalOpen(true);
      } else if (status === 401) {
        setIsLoginModalOpen(true);
      }
    };

    if (!isAssigned && driver.isConfirmed) {
      requestAssignedEstimate(driver.id, {
        onSuccess: (data) => {
          const status = data?.status;
          if (status === 201) {
            if (!isAssigned) {
              refetch();
              setIsAssignedEstimateReqOpen(true);
            }
          }
        },
        onError: (error: any) => {
          const status = error.status || error.response?.status;
          const message = error.message || error.response?.data?.message;

          setIsAssigned(false);
          handleErrorResponse(status, message);
        },
      });
    } else if (!driver.isConfirmed) {
      setIsModalOpen(true);
    }
  };

  const handleModalButtonClick = () => {
    navigate('/user/costCall');
  };

  const url = `${ENV.API_REACT_APP}${location.pathname}`;

  const handleSnsShareClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5000);
  };

  if (isLoading) {
    return (
      <div className={style.outerContainer}>
        <div className={style.noPadding}></div>
        <LoadingSpinner />
      </div>
    );
  }

  if (!driver) {
    const errorMessage = '해당하는 기사님이 존재하지 않습니다.';

    return (
      <div className={`${style.outerContainer} ${style.noDriverError}`}>
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

  if (error) {
    return (
      <div className={style.outerContainer}>
        <NotFound />
      </div>
    );
  }

  const transformedDriver = {
    ...driver,
    serviceType: driver.serviceType.map((type) => type as ChipProps['type']),
    profileImg: driver.profileImg || undefined,
  };

  if (pendingMoverList && transformedDriver) {
    for (let i = 0; i < pendingMoverList.list.length; i++) {
      const pendingMover = pendingMoverList.list[i];

      if (pendingMover.moverId === transformedDriver.id) {
        if (!transformedDriver.serviceType.includes('WAITING')) {
          transformedDriver.serviceType.push('WAITING');
        }
      }
    }
  }

  return (
    <>
      <Helmet>
        <meta property='og:url' content={url} />
        <meta property='og:title' content='기사님 상세페이지 공유하기' />
        <meta property='og:type' content='website' />
        <meta
          property='og:image'
          content='https://github.com/moving-team/moving-fe/blob/main/public/img_logo_icon_text_xlarge.jpg'
        />
        <meta
          property='og:description'
          content={`이 페이지는 ${driver?.moverName} 기사님 페이지입니다.`}
        />
        <title>기사님 상세페이지</title>
      </Helmet>
      <div className={style.outerContainer}>
        <div className={style.noPadding}></div>
        <div className={style.container}>
          <div className={style.leftFilters}>
            <DriverCard
              list={{ ...transformedDriver, isConfirmed: false }}
              count={mobileWithChipDriverDetail ? 3 : 6}
              styles='none'
            />
            <div className={style.section}>
              <div className={style.border}></div>
              {isMobileView && (
                <>
                  <div style={{ marginTop: '24px' }}>
                    <SnsShare
                      nickname={driver.moverName}
                      onClick={handleSnsShareClick}
                    />
                  </div>
                  <div className={style.mobileBorder}></div>
                </>
              )}
              <h2 className={style.sectionTitle}>상세설명</h2>
              <p className={style.description}>{driver.description}</p>
              <div className={style.border}></div>
              <h2 className={style.sectionTitle}>제공 서비스</h2>
              <div className={style.chips}>
                {driver.serviceType.map((type, index) => (
                  <span key={index} className={style.serviceChip}>
                    {translateServiceType(type)}
                  </span>
                ))}
              </div>
              <div className={style.border}></div>
              <h2 className={style.sectionTitle}>서비스 가능 지역</h2>
              <div className={style.chips}>
                {driver.serviceRegion.map((region, index) => (
                  <span key={index} className={style.regionChip}>
                    {translateServiceRegion(region)}
                  </span>
                ))}
              </div>
              <div className={style.reviewSeparator}></div>
              {isReviewLoading ? (
                <div>리뷰 데이터를 로딩 중입니다...</div>
              ) : reviewError ? (
                <div className={style.noContents}>
                  <NoContents
                    image='file'
                    contentText='일시적인 오류로 리뷰를 가져오지 못했습니다!'
                  />
                </div>
              ) : reviewData && reviewData.reviewStats.totalReviews !== 0 ? (
                <>
                  <Review
                    totalReviews={reviewData.reviewStats.totalReviews}
                    averageRating={
                      Object.entries(reviewData.reviewStats.reviewCount).reduce(
                        (acc, [score, count]) =>
                          acc + Number(score) * Number(count),
                        0,
                      ) / reviewData.reviewStats.totalReviews
                    }
                    reviewStats={reviewData.reviewStats.reviewCount}
                    reviews={reviewData.reviews.list}
                  />
                  <div
                    style={{
                      marginTop: '60px',
                      marginBottom: '60px',
                      display: 'flex',
                      justifyContent: 'center',
                    }}
                  >
                    <Pagination
                      currentPage={currentPage}
                      data={reviewData.reviewStats.totalReviews}
                      itemsPerPage={itemsPerPage}
                      onPageChange={setCurrentPage}
                    />
                  </div>
                </>
              ) : (
                <div className={style.noContents}>
                  <NoContents
                    image='file'
                    contentText='아직 리뷰가 없습니다!'
                  />
                </div>
              )}
            </div>
          </div>
          {!isMobileView && (
            <div className={style.rightFilters}>
              <h2>{driver.moverName} 기사님에게 지정 견적을 요청해보세요!</h2>
              <div className={style.rightButtons}>
                <Button
                  text='기사님 찜하기'
                  btnStyle='outlined354pxLine200'
                  src={isFavorite ? HeartIcon : HeartEmptyIcon}
                  srcLocationFront
                  alt='찜하기 아이콘'
                  className={style.heartButton}
                  onClick={() => {
                    if (!isLoggedIn) {
                      setIsLoginModalOpen(true);
                      return;
                    }
                    handleFavoriteToggle();
                  }}
                />
                <Button
                  text={
                    isAssigned ? '지정 견적 요청 완료' : '지정 견적 요청하기'
                  }
                  btnStyle='solid354pxBlue300'
                  className={style.requestButton}
                  disabled={isAssigned}
                  onClick={() => {
                    if (!isLoggedIn) {
                      setIsLoginModalOpen(true);
                      return;
                    }
                    handleAssignRequest();
                  }}
                />
                <div className={style.border}></div>
              </div>
              <div style={{ marginTop: '10px' }}>
                <SnsShare
                  nickname={driver.moverName}
                  onClick={handleSnsShareClick}
                />
              </div>
            </div>
          )}
        </div>
        {isMobileView && (
          <FixedBottomTab
            moverId={driver.id}
            isFavorite={isFavorite}
            handleFavoriteToggle={handleFavoriteToggle}
            isAssigned={isAssigned}
            handleAssignRequest={handleAssignRequest}
            isConfirmed={driver.isConfirmed}
            setModalOpen={setIsModalOpen}
            isLoggedIn={isLoggedIn}
            setLoginModalOpen={setIsLoginModalOpen}
          />
        )}

        {errorModalMessage && (
          <ModalContainer
            title='지정 견적 요청 실패'
            isText={true}
            text={errorModalMessage}
            buttonText='확인'
            closeBtnClick={() => setErrorModalMessage(null)}
            buttonClick={() => setErrorModalMessage(null)}
            btnColorRed={true}
          />
        )}

        {isModalOpen && (
          <ModalContainer
            title='지정 견적 요청하기'
            isText={true}
            text='일반 견적 요청을 먼저 진행해주세요.'
            buttonText='일반 견적 요청하기'
            closeBtnClick={() => setIsModalOpen(false)}
            buttonClick={handleModalButtonClick}
          />
        )}
        {isLoginModalOpen && (
          <ModalContainer
            title='로그인 후 이용해주세요'
            isText={true}
            text='서비스를 이용하시려면 로그인이 필요합니다.'
            buttonText='로그인 하기'
            closeBtnClick={() => setIsLoginModalOpen(false)}
            buttonClick={() => navigate('/user/login')}
          />
        )}
        {isAssignedEstimateReqOpen && (
          <ModalContainer
            title='지정 견적 요청 성공'
            isText={true}
            text={`${driver.moverName} 기사님에게 지정 견적 요청이 성공적으로 전달되었습니다.`}
            buttonText='확인'
            closeBtnClick={() => setIsAssignedEstimateReqOpen(false)}
            buttonClick={() => setIsAssignedEstimateReqOpen(false)}
          />
        )}

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

