import React from 'react';
import { Skeleton } from '@material-ui/lab';

function LegalFormSkeleton() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '10px 40px',
            justifyContent: 'center',
          }}
        >
          <Skeleton
            variant="rect"
            style={{ width: 25, height: 25, borderRadius: 5 }}
          />
          <Skeleton
            width="50%"
            variant="rect"
            style={{
              marginTop: 10,
              width: 180,
              height: 25,
              borderRadius: 5,
              margin: 10,
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '10px 40px',
            justifyContent: 'center',
          }}
        >
          <Skeleton
            variant="rect"
            style={{ width: 25, height: 25, borderRadius: 5 }}
          />
          <Skeleton
            width="50%"
            variant="rect"
            style={{
              marginTop: 10,
              width: 180,
              height: 25,
              borderRadius: 5,
              margin: 10,
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            margin: '10px 40px',
            justifyContent: 'center',
          }}
        >
          <Skeleton
            variant="rect"
            style={{ width: 25, height: 25, borderRadius: 5 }}
          />
          <Skeleton
            width="50%"
            variant="rect"
            style={{
              marginTop: 10,
              width: 180,
              height: 25,
              borderRadius: 5,
              margin: 10,
            }}
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
        <Skeleton
          width="50%"
          variant="rect"
          style={{
            marginTop: 10,
            marginLeft: '6%',
            width: '80%',
            height: 50,
            borderRadius: 10,
            margin: 10,
          }}
        />
      </div>
    </div>
  );
}

export default LegalFormSkeleton;
