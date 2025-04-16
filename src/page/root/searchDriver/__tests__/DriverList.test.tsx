import React from 'react';
import { render } from '@testing-library/react';
import DriverList from '../layouts/DriverList';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Mover } from '../../../../types/apiTypes';

describe('DriverList', () => {
  const mockMover: Mover = {
    id: 1,
    userId: 1,
    moverName: '현빈 기사님',
    profileImg: '',
    serviceType: ['소형이사'],
    career: 5,
    summary: '친절하고 신속한 기사님',
    confirmationCount: 10,
    serviceRegion: ['서울'],
    favoriteCount: 0,
    isAssigned: false,
    isFavorite: false,
    reviewStats: {
      averageScore: 4.5,
      totalReviews: 20,
    },
  };

  it('hasNextPage가 true인 경우, 드라이버 카드와 sentinel이 렌더링된다', () => {
    const { getByTestId, getByText } = render(
      <MemoryRouter>
        <DriverList
          movers={[mockMover]}
          hasNextPage={true}
          onClick={jest.fn()}
          sentinelRef={jest.fn()}
          cardCount={6}
          screenSize="LARGE"
        />
      </MemoryRouter>
    );

    expect(getByText((text) => text.includes('현빈 기사님'))).toBeInTheDocument();
    expect(getByTestId('sentinel')).toBeInTheDocument();
  });
});

