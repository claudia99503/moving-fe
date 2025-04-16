import React, { ReactNode } from 'react';
import DesktopLayout from './DesktopLayout';
import MediumLayout from './MediumLayout';

interface Props {
  screenSize: 'SMALL' | 'MEDIUM' | 'LARGE';
  renderDriverCards: () => ReactNode;
  pendingKeyword: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;

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

const ResponsiveLayout = ({
  screenSize,
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
  const isMediumScreen = screenSize === 'SMALL' || screenSize === 'MEDIUM';

  if (isMediumScreen) {
    return (
      <MediumLayout
        renderDriverCards={renderDriverCards}
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
    );
  }

  return (
    <DesktopLayout
      renderDriverCards={renderDriverCards}
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
  );
};

export default ResponsiveLayout;

