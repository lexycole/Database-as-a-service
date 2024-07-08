import * as React from 'react';
import { Rating } from '@material-ui/lab';
import { UseCompanyEvaluation } from '@/environment/Environment';

type FirmRatingProps = {
  rating?: number | null;
  readonly?: boolean;
};

export function FirmRating(props: FirmRatingProps) {
  if (!UseCompanyEvaluation) {
    return null;
  }
  const [value, setValue] = React.useState<number | null>(props.rating || 2);
  return (
    <Rating
      name="simple-controlled"
      value={value}
      readOnly={props.readonly || true}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
