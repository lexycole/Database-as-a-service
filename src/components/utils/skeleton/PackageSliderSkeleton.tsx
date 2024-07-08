import React from 'react';
import { Skeleton } from '@material-ui/lab';

function PackageSliderSkeleton() {
  return (
    <>
      <div
        style={{ display: 'flex', margin: '10px 40px', position: 'relative' }}
      >
        <Skeleton
          variant="rect"
          style={{ width: '100%', height: 10, borderRadius: 7 }}
        />
        <Skeleton
          variant="rect"
          style={{
            position: 'absolute',
            top: -7,
            left: '15%',
            width: 25,
            height: 25,
            borderRadius: 50,
          }}
          width="50%"
        />
        <Skeleton
          variant="rect"
          style={{
            position: 'absolute',
            top: -7,
            right: '25%',
            width: 25,
            height: 25,
            borderRadius: 50,
          }}
          width="50%"
        />
      </div>
      <div
        style={{
          display: 'flex',
          margin: '10px 40px',
          justifyContent: 'center',
        }}
      >
        <Skeleton
          variant="rect"
          style={{
            marginTop: 10,
            width: 140,
            height: 25,
            borderRadius: 5,
            margin: 10,
          }}
          width="50%"
        />
        <Skeleton
          variant="rect"
          style={{
            marginTop: 10,
            width: 140,
            height: 25,
            borderRadius: 5,
            margin: 10,
          }}
          width="50%"
        />
      </div>
    </>
  );
}

export default PackageSliderSkeleton;
