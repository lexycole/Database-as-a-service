import React from 'react';
import { Skeleton } from '@material-ui/lab';

function TreeViewSkeleton({ rows }: { rows: number }) {
  return (
    <>
      {Array(rows)
        .fill(0)
        .map((_, i) => (
          <div style={{ display: 'flex', margin: '5px' }} key={i}>
            <Skeleton
              variant="rect"
              style={{ width: 30, height: 30, borderRadius: 5 }}
              width="50%"
            />
            <Skeleton
              variant="text"
              style={{
                marginLeft: 10,
                minWidth: Math.floor(Math.random() * 50) + 110,
              }}
              width={`${Math.floor(Math.random() * 30) + 30}%`}
            />
          </div>
        ))}
    </>
  );
}

export default TreeViewSkeleton;
