import React, { Suspense } from 'react';
import DriverCard from '../../../../components/card/DriverCard';
import Sentinel from '../components/Sentinel';
import LoadingSpinner from '../../../../components/loading/LoadingSpinner';
import style from '../index.module.css';
import { Mover } from '../../../../types/apiTypes';
import { ChipProps } from '../../../../components/chip/Chip';

interface Props {
  movers: Mover[];
  hasNextPage: boolean;
  sentinelRef: (node: HTMLDivElement | null) => void;
  onClick: (id: number) => void;
  cardCount: number;
  screenSize: 'SMALL' | 'MEDIUM' | 'LARGE';
  className?: string;
}

const DriverList = ({
  movers,
  hasNextPage,
  sentinelRef,
  onClick,
  cardCount,
  screenSize,
  className,
}: Props) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div
        className={`${style.cardContainer} ${
          screenSize === 'SMALL' || screenSize === 'MEDIUM'
            ? screenSize === 'SMALL'
              ? style.smallScreen
              : style.compact
            : className || ''
        }`}
      >
        {movers.map((user, index) => (
          <DriverCard
            key={`${user.id ?? 'no-id'}-${index}`}
            list={{
              ...user,
              moverId: user.userId,
              profileImg: user.profileImg || undefined,
              serviceType: user.serviceType.map(
                (type) => type as ChipProps['type'],
              ),
            }}
            onClick={() => onClick(user.id)}
            count={cardCount}
          />
        ))}
        {hasNextPage && movers.length > 0 && <Sentinel ref={sentinelRef} />}
      </div>
    </Suspense>
  );
};

export default DriverList;

