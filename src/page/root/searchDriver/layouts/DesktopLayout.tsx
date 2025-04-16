import React, { ReactNode, Suspense } from 'react';
import FilterDropdown from '../components/FilterDropdown';
import SortDropdown from '../components/SortDropdown';
import DriverSearch from '../components/DriverSearch';
import FavoriteDrivers from './FavoriteDrivers';
import style from '../index.module.css';
import { REGION_ITEMS, SERVICE_ITEMS } from '../filters/FilterConstants';
import { SORT_OPTIONS, FILTER_TYPES } from '../filters/FilterConfig';

interface Props {
  renderDriverCards: () => ReactNode;
  pendingKeyword: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  // 필터 관련
  selectedRegionLabel: string;
  selectedServiceLabel: string;
  sortOption: string;
  openFilter: string | null;
  handleSelect: (type: string, label: string) => void;
  handleSortSelect: (value: string) => void;
  handleToggleFilter: (filterName: string) => void;
  regionFilterRef: React.RefObject<HTMLDivElement>;
  serviceFilterRef: React.RefObject<HTMLDivElement>;
  sortFilterRef: React.RefObject<HTMLDivElement>;
}

const DesktopLayout = ({
  renderDriverCards,
  pendingKeyword,
  handleSearchChange,
  handleSearchKeyPress,
  selectedRegionLabel,
  selectedServiceLabel,
  sortOption,
  openFilter,
  handleSelect,
  handleSortSelect,
  handleToggleFilter,
  regionFilterRef,
  serviceFilterRef,
  sortFilterRef,
}: Props) => {
  return (
    <div className={style.container}>
      <div className={style.filterRow}>
        <div className={style.leftFilters}>
          <div ref={regionFilterRef} style={{ marginTop: '20px' }}>
            <FilterDropdown
              title="지역을 선택해주세요"
              placeholder={selectedRegionLabel}
              items={REGION_ITEMS}
              onSelect={(label) => handleSelect(FILTER_TYPES.REGION, label)}
              isRegion
              isOpen={openFilter === FILTER_TYPES.REGION}
              onToggle={() => handleToggleFilter(FILTER_TYPES.REGION)}
            />
          </div>
          <div ref={serviceFilterRef} style={{ marginTop: '30px' }}>
            <FilterDropdown
              title="어떤 서비스가 필요하세요?"
              placeholder={selectedServiceLabel}
              items={SERVICE_ITEMS}
              onSelect={(label) => handleSelect(FILTER_TYPES.SERVICE, label)}
              isOpen={openFilter === FILTER_TYPES.SERVICE}
              onToggle={() => handleToggleFilter(FILTER_TYPES.SERVICE)}
            />
          </div>
          <div className={style.favoriteDrivers}>찜한 기사님</div>
          <Suspense fallback={<div>Loading...</div>}>
            <FavoriteDrivers />
          </Suspense>
        </div>
        <div className={style.rightFilters}>
          <div ref={sortFilterRef} className={style.sortSection}>
            <SortDropdown
              placeholder={
                SORT_OPTIONS.find((option) => option.value === sortOption)?.label || '정렬'
              }
              options={[...SORT_OPTIONS]}
              isOpen={openFilter === FILTER_TYPES.SORT}
              onToggle={() => handleToggleFilter(FILTER_TYPES.SORT)}
              onSelect={handleSortSelect}
            />
          </div>
          <div className={style.searchSection}>
            <DriverSearch
              placeholder="기사님을 검색하세요"
              value={pendingKeyword}
              onChange={handleSearchChange}
              onKeyPress={handleSearchKeyPress}
            />
          </div>
          <div className={style.cardSection}>{renderDriverCards()}</div>
        </div>
      </div>
    </div>
  );
};

export default DesktopLayout;

