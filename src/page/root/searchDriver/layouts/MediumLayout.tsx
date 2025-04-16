import React, { ReactNode } from 'react';
import FilterDropdownMedium from '../components/FilterDropdownMedium';
import SortDropdown from '../components/SortDropdown';
import DriverSearch from '../components/DriverSearch';
import style from '../index.module.css';
import { REGION_ITEMS, SERVICE_ITEMS } from '../filters/FilterConstants';
import { FILTER_TYPES, SORT_OPTIONS } from '../filters/FilterConfig';

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

const MediumLayout = ({
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
        <div className={style.compactFilters}>
          <div ref={regionFilterRef}>
            <FilterDropdownMedium
              placeholder={selectedRegionLabel}
              items={REGION_ITEMS}
              onSelect={(label) => handleSelect(FILTER_TYPES.REGION, label)}
              isRegion
              isOpen={openFilter === FILTER_TYPES.REGION}
              onToggle={() => handleToggleFilter(FILTER_TYPES.REGION)}
            />
          </div>
          <div ref={serviceFilterRef}>
            <FilterDropdownMedium
              placeholder={selectedServiceLabel}
              items={SERVICE_ITEMS}
              onSelect={(label) => handleSelect(FILTER_TYPES.SERVICE, label)}
              isOpen={openFilter === FILTER_TYPES.SERVICE}
              onToggle={() => handleToggleFilter(FILTER_TYPES.SERVICE)}
            />
          </div>
        </div>
        <div ref={sortFilterRef}>
          <SortDropdown
            placeholder={
              SORT_OPTIONS.find((option) => option.value === sortOption)?.label || '정렬'
            }
            options={[...SORT_OPTIONS]}
            isOpen={openFilter === FILTER_TYPES.SORT}
            onToggle={() => handleToggleFilter(FILTER_TYPES.SORT)}
            onSelect={handleSortSelect}
            className={`${style.sortDropdown} ${
              openFilter === FILTER_TYPES.SORT ? style.dropdownOpen : ''
            }`}
            hasWrapper={window.innerWidth > 1199}
          />
        </div>
      </div>

      <div className={style.searchBarCompact}>
        <DriverSearch
          placeholder="기사님을 검색하세요"
          value={pendingKeyword}
          onChange={handleSearchChange}
          onKeyPress={handleSearchKeyPress}
        />
      </div>

      {renderDriverCards()}
    </div>
  );
};

export default MediumLayout;

