import React from 'react';
import { Skeleton } from '@material-ui/lab';
import DuplicateRenderer from './DuplicateRenderer';

function ResultDataSkeleton() {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          margin: '10px 40px',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            marginTop: 10,
            width: '60%',
            height: 25,
            borderRadius: 5,
            margin: 5,
          }}
        />

        <DuplicateRenderer
          render={
            <div
              style={{
                width: '17%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Skeleton
                variant="rect"
                style={{
                  marginTop: 10,
                  width: 50,
                  height: 35,
                  borderRadius: 5,
                  margin: 5,
                }}
              />
            </div>
          }
          count={3}
        />
      </div>

      <DuplicateRenderer
        render={
          <div
            key={Math.random()}
            style={{
              display: 'flex',
              margin: '10px 40px',
              justifyContent: 'flex-end',
            }}
          >
            <Skeleton
              variant="rect"
              style={{
                marginTop: 10,
                width: '60%',
                height: 25,
                borderRadius: 5,
                margin: 5,
              }}
            />

            <DuplicateRenderer
              render={
                <div
                  style={{
                    width: '17%',
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Skeleton
                    variant="rect"
                    style={{
                      marginTop: 10,
                      width: 50,
                      height: 25,
                      borderRadius: 5,
                      margin: 5,
                    }}
                  />
                </div>
              }
              count={3}
            />
          </div>
        }
        count={3}
      />
    </div>
  );
}

export default ResultDataSkeleton;
