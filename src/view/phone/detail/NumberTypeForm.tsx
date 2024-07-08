import React, { useCallback } from 'react';
import RadioButton from '@/components/form/RadioButton';
import { RatingContainer } from '../style/PhoneStyle';
import getLang from '@/lang/Lang';

function NumberTypeForm({ onChange }: { onChange: (value: string) => void }) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [],
  );

  const options = [
    {
      value: 'private',
      label: getLang(`phoneDetail`, `numberTypePrivate`),
    },
    {
      value: 'firm',
      label: getLang(`phoneDetail`, `numberTypeFirm`),
    },
  ];

  return (
    <RatingContainer>
      <p className="label">{getLang(`phoneDetail`, 'numberType')}: </p>
      <div className="flex flex-wrap -ml-3">
        {options.map((option) => (
          <RadioButton
            onChange={handleChange}
            name="numberType"
            label={option.label}
            value={option.value}
          />
        ))}
      </div>
    </RatingContainer>
  );
}

export default NumberTypeForm;
