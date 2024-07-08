import React, { useCallback } from 'react';
import RadioButton from '@/components/form/RadioButton';
import { RatingContainer } from '../style/PhoneStyle';
import { OptionType } from '@/data/DataType';
import getLang from '@/lang/Lang';

function CallTypeItemForm({
  onChange,
  options,
}: {
  onChange: (value: string) => void;
  options?: OptionType[];
}) {
  if (options === undefined) {
    return null;
  }
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [],
  );

  return (
    <RatingContainer>
      <p className="label">{getLang(`phoneDetail`, `callType`)}: </p>
      <div className="form">
        <div className="-ml-[20px] flex flex-wrap">
          {options.map((option: OptionType) => (
            <RadioButton
              onChange={handleChange}
              label={option.name}
              name={option.code}
              value={option.code}
            />
          ))}
        </div>
      </div>
    </RatingContainer>
  );
}

export default CallTypeItemForm;
