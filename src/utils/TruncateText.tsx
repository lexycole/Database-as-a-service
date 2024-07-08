import React from 'react';

interface Props {
  children?: string | React.ReactNode;
  styles?: any;
  title?: string;
}

function TruncateText({ children, styles, title }: Props) {
  return (
    <div
      title={title}
      style={{
        width: 'auto',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        ...styles,
      }}
    >
      {children}
    </div>
  );
}

export default TruncateText;
