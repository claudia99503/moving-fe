import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ENV } from '../../../../lib/api/STORAGE_KEY';

interface MetaHelmetProps {
  moverName: string;
  path: string;
}

const MetaHelmet = ({ moverName, path }: MetaHelmetProps) => {
  const url = `${ENV.API_FRONT}${path}`;

  return (
    <Helmet>
      <meta property='og:url' content={url} />
      <meta property='og:title' content='기사님 견적 페이지 공유하기' />
      <meta property='og:type' content='website' />
      <meta
        property='og:image'
        content='https://github.com/moving-team/moving-fe/blob/main/public/img_logo_icon_text_xlarge.jpg'
      />
      <meta
        property='og:description'
        content={`이 페이지는 ${moverName} 기사님 견적 페이지입니다.`}
      />
      <title>기사님 견적 페이지</title>
    </Helmet>
  );
};

export default MetaHelmet;

