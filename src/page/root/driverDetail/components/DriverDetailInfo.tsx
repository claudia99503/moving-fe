import React from 'react';
import style from '../index.module.css';
import { translateServiceRegion, translateServiceType } from '.././../../root/searchDriver/EnumMapper';

interface DriverDetailInfoProps {
  description: string;
  serviceType: string[];
  serviceRegion: string[];
}

const DriverDetailInfo = ({ description, serviceType, serviceRegion }: DriverDetailInfoProps) => {
  return (
    <div className={style.section}>
      <div className={style.border}></div>
      <h2 className={style.sectionTitle}>상세설명</h2>
      <p className={style.description}>{description}</p>
      <div className={style.border}></div>
      <h2 className={style.sectionTitle}>제공 서비스</h2>
      <div className={style.chips}>
        {serviceType.map((type, index) => (
          <span key={index} className={style.serviceChip}>
            {translateServiceType(type)}
          </span>
        ))}
      </div>
      <div className={style.border}></div>
      <h2 className={style.sectionTitle}>서비스 가능 지역</h2>
      <div className={style.chips}>
        {serviceRegion.map((region, index) => (
          <span key={index} className={style.regionChip}>
            {translateServiceRegion(region)}
          </span>
        ))}
      </div>
    </div>
  );
};

export default DriverDetailInfo;

