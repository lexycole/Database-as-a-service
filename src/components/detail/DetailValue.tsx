import * as React from 'react';

type DetailValueProps = {
  value: string | undefined | null;
};

export function DetailValue(props: DetailValueProps) {
  if (!props.value) {
    return null;
  }

  return <>{props.value}</>;
}
