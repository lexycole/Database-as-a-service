import React from 'react';
import { Skeleton } from '@material-ui/lab';

function SearchListSkeleton() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Skeleton
            variant="rect"
            style={{
              width: 240,
              height: 45,
              borderRadius: 5,
              marginTop: '1rem',
              marginBottom: '1rem',
            }}
          />
          <Skeleton
            variant="rect"
            style={{
              marginTop: 10,
              margin: 'auto',
              width: 260,
              height: 25,
              borderRadius: 5,
            }}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'flex',
                marginLeft: 'auto',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '-15px 40px 10px',
              }}
            >
              <Skeleton
                variant="rect"
                style={{
                  margin: '0 5px',
                  width: 45,
                  height: 45,
                  borderRadius: 5,
                }}
              />
              <Skeleton
                variant="rect"
                style={{
                  margin: '0 5px',
                  width: 45,
                  height: 45,
                  borderRadius: 5,
                }}
              />
              <Skeleton
                variant="rect"
                style={{
                  margin: '0 5px',
                  width: 45,
                  height: 45,
                  borderRadius: 5,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Skeleton
          variant="rect"
          style={{
            marginTop: 10,
            marginLeft: '6%',
            width: '100%',
            height: 500,
            borderRadius: 10,
            margin: 10,
          }}
        />
      </div>
    </div>
  );
}

export default SearchListSkeleton;
