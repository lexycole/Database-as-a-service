import React, { useState } from 'react';

type FirmLogoProps = {
  countryCode: string;
  idNumber: string;
  size: string;
};

export function FirmLogo(props: FirmLogoProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      {!imageError && (
        <img
          src={`https://logobox.cz/getimage.ashx?size=${props.size}&id=${props.countryCode}${props.idNumber}&error404=true`}
          onError={() => setImageError(true)}
          height="100px"
          width="100px"
          alt="firm logo"
        />
      )}
    </>
  );
}
