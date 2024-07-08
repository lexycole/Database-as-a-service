import React, { useCallback } from 'react';
import RadioButton from '@/components/form/RadioButton';
import {
  RatingBox,
  RatingContainer,
  RatingListContainer,
} from '../style/PhoneStyle';
import { PhoneRatings, PhoneRatingType } from '../PhoneProps';
import getLang from '@/lang/Lang';
import { getRatingName, RatingImage } from '@/view/phone/detail/RatingList';

function RatingRadioForm({ onChange }: { onChange: (value: string) => void }) {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    },
    [],
  );

  const groupName = 'RatingRadioForm';
  const options = [
    PhoneRatings.useful,
    PhoneRatings.normal,
    PhoneRatings.annoying,
    PhoneRatings.dangerously,
  ];

  return (
    <RatingContainer>
      <p className="label">{getLang(`phoneDetail`, `ratingAvg`)}: </p>
      <div className="flex flex-wrap -ml-3">
        <RatingListContainer>
          {options.map((item: PhoneRatingType, key: number) => (
            <div key={key}>
              <RadioButton
                onChange={handleChange}
                name={groupName}
                value={item}
                label={
                  <RatingBox>
                    <RatingImage rating={item} />
                    <span className="flex items-center">
                      {getRatingName(item)}
                    </span>
                  </RatingBox>
                }
              />
            </div>
          ))}
        </RatingListContainer>
      </div>
    </RatingContainer>
  );
}

export default RatingRadioForm;
