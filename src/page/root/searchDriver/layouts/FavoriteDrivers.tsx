import React, { Suspense, useContext } from 'react';
import { AuthContext } from '../../../../context/authContext';
import { useGetFavoriteMover } from '../../../../lib/useQueries/favorite';
import DriverCard from '../../../../components/card/DriverCard';
import LoadingSpinner from '../../../../components/loading/LoadingSpinner';
import style from '../index.module.css';
import { ChipProps } from '../../../../components/chip/Chip';
import { Mover } from '../../../../types/apiTypes';
import { useNavigate } from 'react-router-dom';

const FavoriteDrivers = () => {
  const { userValue } = useContext(AuthContext);
  const { data: favoriteMoverData } = useGetFavoriteMover();
  const navigate = useNavigate();

  const favoriteMoverList: Mover[] = favoriteMoverData?.data?.list || [];

  if (!userValue.user || Object.keys(userValue.user).length === 0) {
    return (
      <div style={{ fontWeight: 600, fontSize: '20px', lineHeight: '32px', marginTop: '20px' }}>
        로그인 후 이용 가능한 서비스입니다
      </div>
    );
  }

  if (favoriteMoverList.length === 0) {
    return (
      <div style={{ fontWeight: 400, fontSize: '16px', lineHeight: '28px', marginTop: '20px', textAlign: 'center' }}>
        찜한 기사님이 없습니다.
      </div>
    );
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className={style.favoriteDriversContainer}>
        {favoriteMoverList.slice(0, 5).map((user, index) => (
          <DriverCard
            key={`${user.moverId ?? 'no-moverId'}-${index}`}
            list={{
              ...user,
              profileImg: user.profileImg || undefined,
              serviceType: user.serviceType.map(
                (type: string) => type as ChipProps['type'],
              ),
            }}
            type='dibs'
            styles='small'
            onClick={() => navigate(`/driver/${user.moverId}`)}
            count={2}
          />
        ))}
      </div>
    </Suspense>
  );
};

export default FavoriteDrivers;

