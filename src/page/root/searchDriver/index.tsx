import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useGetMoverList } from '../../../lib/useQueries/driver';
import { useGetPendingEstimate } from '../../../lib/useQueries/estimate';
import Tab from '../../../components/tab/Tab';
import LoadingSpinner from '../../../components/loading/LoadingSpinner';
import { AuthContext } from '../../../context/authContext';
import { Mover } from '../../../types/apiTypes';
import { useMedia } from '../../../lib/function/useMediaQuery';
import { useResponsive } from '../../../lib/function/useResponsive';
import { useInfiniteScroll } from './hooks/useInfiniteScroll';
import ResponsiveLayout from './layouts/ResponsiveLayout';
import { translations } from './filters/FilterConstants';
import { FILTER_TYPES } from './filters/FilterConfig';
import DriverList from './layouts/DriverList';
import style from './index.module.css';

const SearchDriver = () => {
  const screenSize = useResponsive();
  const { userValue } = useContext(AuthContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const {
    mobileWithChipSearDriver,
    mobileWithChipSearDriverSecond,
    mobileWithChipSearDriveLast,
  } = useMedia();

  const [page, setPage] = useState<number>(1);
  const [movers, setMovers] = useState<Mover[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [pendingKeyword, setPendingKeyword] = useState<string>('');
  const [openFilter, setOpenFilter] = useState<string | null>(null);
  const [selectedRegionLabel, setSelectedRegionLabel] =
    useState<string>('지역');
  const [selectedServiceLabel, setSelectedServiceLabel] =
    useState<string>('서비스');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [sortOption, setSortOption] = useState<
    'reviewCount' | 'averageScore' | 'career' | 'confirmationCount'
  >('reviewCount');

  const queryParams = useMemo(
    () => ({
      sortBy: sortOption,
      keyword: searchKeyword || undefined,
      selectedServiceRegion:
        selectedRegionLabel !== '지역'
          ? translations[selectedRegionLabel]
          : undefined,
      selectedServiceType:
        selectedServiceLabel !== '서비스'
          ? translations[selectedServiceLabel]
          : undefined,
      page,
      limit: 10,
    }),
    [
      sortOption,
      searchKeyword,
      selectedRegionLabel,
      selectedServiceLabel,
      page,
    ],
  );

  const regionFilterRef = useRef<HTMLDivElement>(null);
  const serviceFilterRef = useRef<HTMLDivElement>(null);
  const sortFilterRef = useRef<HTMLDivElement>(null);

  const { data: moverList, isLoading: isMoverLoading } =
    useGetMoverList(queryParams);
  const { data: pendingMoverList } = useGetPendingEstimate();

  useEffect(() => {
    if (
      !userValue?.isPending &&
      userValue?.user?.Customer &&
      userValue?.user?.Customer?.region === 'NULL' &&
      userValue?.user?.Customer?.serviceType.length <= 0
    ) {
      navigate('/user/register');
    }
  }, [pathname]);

  useEffect(() => {
    if (!moverList) return;

    const baseList = moverList.list;

    const updatedList =
      pendingMoverList?.list?.length > 0
        ? baseList.map((mover) => ({
            ...mover,
            serviceType: pendingMoverList.list.some(
              (pending: Mover) => pending.moverId === mover.id,
            )
              ? [...mover.serviceType, 'WAITING']
              : mover.serviceType,
          }))
        : baseList;

    // 초기 로딩 or 페이지 추가
    if (page === 1) {
      setMovers(updatedList);
      setIsInitialLoading(false);
    } else {
      setMovers((prev) => [...prev, ...updatedList]);
    }

    setHasNextPage(
      updatedList.length > 0 && moverList.currentPage < moverList.totalPages,
    );
  }, [moverList, pendingMoverList, page]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPendingKeyword(e.target.value);
  };

  const handleSearchKeyPress = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== 'Enter') return;
      setSearchKeyword(pendingKeyword);
    },
    [pendingKeyword],
  );

  const handleLoadMore = useCallback(() => {
    if (!hasNextPage) return;
    setPage((prev) => prev + 1);
  }, [hasNextPage]);

  const sentinelRef = useInfiniteScroll({
    hasNextPage,
    onLoadMore: handleLoadMore,
    rootMargin: '300px',
    threshold: 0.2,
  });

  const handleSelect = (type: string, label: string) => {
    if (type === FILTER_TYPES.REGION) {
      setSelectedRegionLabel(label);
    } else if (type === FILTER_TYPES.SERVICE) {
      setSelectedServiceLabel(label);
    }
  };

  const handleSortSelect = (value: string) => {
    setSortOption(
      value as 'reviewCount' | 'averageScore' | 'career' | 'confirmationCount',
    );
  };

  const handleToggleFilter = (filterName: string) => {
    setOpenFilter((prev) => (prev === filterName ? null : filterName));
  };

  useEffect(() => {
    setMovers([]);
    setPage(1);
    setIsInitialLoading(true);
  }, [searchKeyword, selectedRegionLabel, selectedServiceLabel, sortOption]);

  const handleDriverCardClick = (id: number) => {
    navigate(`/driver/${id}`);
  };

  const cardCount =
    mobileWithChipSearDriver || mobileWithChipSearDriverSecond
      ? 4
      : mobileWithChipSearDriveLast
        ? 3
        : 6;

  return (
    <div className={style.outerContainer}>
      <div className={style.noPadding}>
        <Tab firstText='기사님 찾기' />
      </div>
      {isInitialLoading || isMoverLoading ? (
        <LoadingSpinner />
      ) : (
        <ResponsiveLayout
          screenSize={screenSize}
          renderDriverCards={() => (
            <DriverList
              movers={movers}
              hasNextPage={hasNextPage}
              sentinelRef={sentinelRef}
              onClick={handleDriverCardClick}
              cardCount={cardCount}
              screenSize={screenSize}
            />
          )}
          pendingKeyword={pendingKeyword}
          handleSearchChange={handleSearchChange}
          handleSearchKeyPress={handleSearchKeyPress}
          selectedRegionLabel={selectedRegionLabel}
          selectedServiceLabel={selectedServiceLabel}
          sortOption={sortOption}
          openFilter={openFilter}
          handleSelect={handleSelect}
          handleSortSelect={handleSortSelect}
          handleToggleFilter={handleToggleFilter}
          regionFilterRef={regionFilterRef}
          serviceFilterRef={serviceFilterRef}
          sortFilterRef={sortFilterRef}
        />
      )}
    </div>
  );
};

export default SearchDriver;
