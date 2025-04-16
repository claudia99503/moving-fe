import React from 'react';
import Review from '../../../../components/review/Review';
import Pagination from '../../../../components/pagination/Pagination';
import NoContents from '../../../../components/noContents/NoContents';
import style from '../index.module.css';

interface ReviewSectionProps {
  isLoading: boolean;
  error: boolean;
  reviewData: any;
  currentPage: number;
  itemsPerPage: number;
  setCurrentPage: (page: number) => void;
}

const ReviewSection = ({
  isLoading,
  error,
  reviewData,
  currentPage,
  itemsPerPage,
  setCurrentPage,
}: ReviewSectionProps) => {
  if (isLoading) return <div>리뷰 데이터를 로딩 중입니다...</div>;
  if (error) {
    return (
      <div className={style.noContents}>
        <NoContents image='file' contentText='일시적인 오류로 리뷰를 가져오지 못했습니다!' />
      </div>
    );
  }

  if (reviewData && reviewData.reviewStats.totalReviews !== 0) {
    const averageRating =
      Object.entries(reviewData.reviewStats.reviewCount).reduce(
        (acc, [score, count]) => acc + Number(score) * Number(count),
        0
      ) / reviewData.reviewStats.totalReviews;

    return (
      <>
        <Review
          totalReviews={reviewData.reviewStats.totalReviews}
          averageRating={averageRating}
          reviewStats={reviewData.reviewStats.reviewCount}
          reviews={reviewData.reviews.list}
        />
        <div className={style.paginationWrapper}>
          <Pagination
            currentPage={currentPage}
            data={reviewData.reviewStats.totalReviews}
            itemsPerPage={itemsPerPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </>
    );
  }

  return (
    <div className={style.noContents}>
      <NoContents image='file' contentText='아직 리뷰가 없습니다!' />
    </div>
  );
};

export default ReviewSection;

