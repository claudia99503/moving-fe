import React from 'react';
import { render, screen } from '@testing-library/react';
import DesktopLayout from '../layouts/DesktopLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../../context/authContext';

const queryClient = new QueryClient();

const mockProps = {
  renderDriverCards: () => <div>기사 카드 리스트</div>,
  pendingKeyword: '',
  handleSearchChange: jest.fn(),
  handleSearchKeyPress: jest.fn(),

  // 필터 관련
  selectedRegionLabel: '서울',
  selectedServiceLabel: '가정이사',
  sortOption: 'default',
  openFilter: null,
  handleSelect: jest.fn(),
  handleSortSelect: jest.fn(),
  handleToggleFilter: jest.fn(),
  regionFilterRef: { current: null },
  serviceFilterRef: { current: null },
  sortFilterRef: { current: null },
};

describe('DesktopLayout', () => {
  it('필터와 검색창, 찜한 기사님 영역이 정상 렌더링된다', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={{ userValue: { user: { id: 1 } } }}>
          <MemoryRouter>
            <DesktopLayout {...mockProps} />
          </MemoryRouter>
        </AuthContext.Provider>
      </QueryClientProvider>
    );

    expect(screen.getByPlaceholderText('기사님을 검색하세요')).toBeInTheDocument();
    expect(screen.getByText('기사 카드 리스트')).toBeInTheDocument();
  });
});

