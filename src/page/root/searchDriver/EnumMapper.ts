export const serviceRegionMapper: Record<string, string> = {
    SEOUL: '서울',
    GYEONGGI: '경기',
    INCHEON: '인천',
    GANGWON: '강원',
    CHUNGBUK: '충북',
    CHUNGNAM: '충남',
    SEJONG: '세종',
    DAEJEON: '대전',
    JEONBUK: '전북',
    JEONNAM: '전남',
    GWANGJU: '광주',
    GYEONGBUK: '경북',
    GYEONGNAM: '경남',
    DAEGU: '대구',
    ULSAN: '울산',
    BUSAN: '부산',
    JEJU: '제주',
  };

export const serviceTypeMapper: Record<string, string> = {
  SMALL: '소형이사',
  HOUSE: '가정이사',
  OFFICE: '사무실이사',
};

export const translateServiceRegion = (region: string): string =>
  serviceRegionMapper[region] || region;

export const translateServiceType = (type: string): string =>
  serviceTypeMapper[type] || type;

