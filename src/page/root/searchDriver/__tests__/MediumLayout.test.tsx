import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MediumLayout from '../../../root/searchDriver/layouts/MediumLayout';

const mockRenderDriverCards = () => <div data-testid="mocked-cards">Mocked Cards</div>;

const baseProps = {
  renderDriverCards: mockRenderDriverCards,
  pendingKeyword: '',
  handleSearchChange: jest.fn(),
  handleSearchKeyPress: jest.fn(),
  selectedRegionLabel: '서울',
  selectedServiceLabel: '소형이사',
  sortOption: 'recent',
  openFilter: null,
  handleSelect: jest.fn(),
  handleSortSelect: jest.fn(),
  handleToggleFilter: jest.fn(),
  regionFilterRef: { current: null },
  serviceFilterRef: { current: null },
  sortFilterRef: { current: null },
};

describe('MediumLayout', () => {
  it('DriverSearch와 드라이버 카드가 렌더링된다', () => {
    render(<MediumLayout {...baseProps} />);
    expect(screen.getByPlaceholderText('기사님을 검색하세요')).toBeInTheDocument();
    expect(screen.getByTestId('mocked-cards')).toBeInTheDocument();
  });
});

