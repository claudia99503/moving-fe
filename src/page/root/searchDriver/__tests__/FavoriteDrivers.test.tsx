import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoriteDrivers from '../../../root/searchDriver/layouts/FavoriteDrivers';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../../context/authContext';
import { useGetFavoriteMover } from '../../../../lib/useQueries/favorite';

jest.mock('../../../../lib/useQueries/favorite');

const mockedUseGetFavoriteMover = useGetFavoriteMover as jest.Mock;

const queryClient = new QueryClient();

const mockUserValue = {
  user: {
    id: 123,
    name: '송혜교',
  },
};

const renderWithProviders = (userValue = mockUserValue) =>
  render(
    <MemoryRouter>
      <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={{ userValue }}>
          <FavoriteDrivers />
        </AuthContext.Provider>
      </QueryClientProvider>
    </MemoryRouter>
  );

describe('FavoriteDrivers', () => {
  it('찜한 기사님이 있는 경우, DriverCard가 렌더링된다', () => {
    mockedUseGetFavoriteMover.mockImplementationOnce(() => ({
      data: {
        data: {
          list: [
            {
              moverId: 1,
              moverName: '송혜교기사',
              profileImg: '',
              serviceType: ['HOUSE'],
            },
          ],
        },
      },
    }));

    renderWithProviders();

    expect(screen.getByText(/송혜교기사/)).toBeInTheDocument();
  });

  it('로그인하지 않은 경우, 로그인 안내 문구가 노출된다', () => {
    mockedUseGetFavoriteMover.mockImplementationOnce(() => ({
      data: {
        data: {
          list: [],
        },
      },
    }));

    renderWithProviders({
      user: {} as unknown as { id: number; name: string },
    });

    expect(
      screen.getByText('로그인 후 이용 가능한 서비스입니다')
    ).toBeInTheDocument();
  });

  it('찜한 기사님이 없는 경우, 안내 문구가 노출된다', () => {
    mockedUseGetFavoriteMover.mockImplementationOnce(() => ({
      data: {
        data: {
          list: [],
        },
      },
    }));

    renderWithProviders();

    expect(
      screen.getByText(/찜한 기사님이 없습니다/)
    ).toBeInTheDocument();
  });
});

