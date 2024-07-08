import React from 'react';

interface Props {
  render: React.ReactElement | React.ReactNode;
  count: number;
}

function DuplicateRenderer({ render, count }: Props) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <React.Fragment key={Math.random()}>{render}</React.Fragment>
        ))}
    </>
  );
}

export default DuplicateRenderer;
