import React from 'react';
import { render, screen } from '@testing-library/react';
import ResponsiveLayout from '../layouts/ResponsiveLayout';

jest.mock('../layouts/DesktopLayout', () => {
  const MockDesktopLayout = (props: any) => (
    <div>DesktopLayout - {props.pendingKeyword}</div>
  );
  MockDesktopLayout.displayName = 'MockDesktopLayout';
  return MockDesktopLayout;
});

jest.mock('../layouts/MediumLayout', () => {
  const MockMediumLayout = (props: any) => (
    <div>MediumLayout - {props.pendingKeyword}</div>
  );
  MockMediumLayout.displayName = 'MockMediumLayout';
  return MockMediumLayout;
});

describe('ResponsiveLayout', () => {
  const mockCommonProps = {
    renderDriverCards: () => <div>Cards</div>,
    pendingKeyword: '현빈',
    handleSearchChange: jest.fn(),
    handleSearchKeyPress: jest.fn(),
    selectedRegionLabel: '대구',
    selectedServiceLabel: '사무실이사',
    sortOption: 'review',
    openFilter: null,
    handleSelect: jest.fn(),
    handleSortSelect: jest.fn(),
    handleToggleFilter: jest.fn(),
    regionFilterRef: { current: null },
    serviceFilterRef: { current: null },
    sortFilterRef: { current: null },
  };

  it('화면 사이즈가 SMALL일 경우 MediumLayout이 렌더링된다', () => {
    render(<ResponsiveLayout screenSize="SMALL" {...mockCommonProps} />);
    expect(screen.getByText(/MediumLayout - 현빈/)).toBeInTheDocument();
  });

  it('화면 사이즈가 MEDIUM일 경우 MediumLayout이 렌더링된다', () => {
    render(<ResponsiveLayout screenSize="MEDIUM" {...mockCommonProps} />);
    expect(screen.getByText(/MediumLayout - 현빈/)).toBeInTheDocument();
  });

  it('화면 사이즈가 LARGE일 경우 DesktopLayout이 렌더링된다', () => {
    render(<ResponsiveLayout screenSize="LARGE" {...mockCommonProps} />);
    expect(screen.getByText(/DesktopLayout - 현빈/)).toBeInTheDocument();
  });
});

