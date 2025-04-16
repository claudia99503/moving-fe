import React from 'react';
import DriverCard from '../../../../components/card/DriverCard';
import { useMedia } from '../../../../lib/function/useMediaQuery';
import { ChipProps } from '../../../../components/chip/Chip';

interface DriverDetailCardProps {
  driver: {
    id: number;
    moverName: string;
    serviceType: string[];
    serviceRegion: string[];
    profileImg?: string;
    isConfirmed: boolean;
    description: string;
  };
}

const DriverDetailCard = ({ driver }: DriverDetailCardProps) => {
  const { mobileWithChipDriverDetail } = useMedia();

  const transformedDriver = {
    ...driver,
    serviceType: driver.serviceType.map((type) => type as ChipProps['type']),
    profileImg: driver.profileImg || undefined,
  };

  return (
    <DriverCard
      list={{ ...transformedDriver, isConfirmed: false }}
      count={mobileWithChipDriverDetail ? 3 : 6}
      styles='none'
    />
  );
};

export default DriverDetailCard;

