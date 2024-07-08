import React, { useCallback, useEffect, useState } from 'react';
import getLang from '@/lang/Lang';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import RatingRadioForm from './RatingRadioForm';
import CardBox from '@/components/utils/CardBox';
import CallTypeItemForm from './CallTypeItemForm';
import { TextArea } from '@/components/form/TextArea';
import { DetailBoxTitle } from '@/components/detail/BoxTitle';
import { faCommentPlus } from '@fortawesome/pro-solid-svg-icons';
import { SubmitField } from '@/components/form/field/SubmitField';
import { BLUE_COLOR, BLUE_COLOR_DARK } from '@/../styles/BaseStyle';
import {
  phoneCommentFormOptionsLoader,
  PhoneCommentFormOptionsResult,
} from '@/data/phone/PhoneCommentFormOptionsLoader';

export function CommentForm() {
  const [theme] = useRecoilState(appTheme);

  // Form data
  const [numberType, setNumberType] = useState('');
  const [rating, setRating] = useState('');
  const [comment, setComment] = useState('');
  const [callType, setCallType] = useState('');

  // Options load
  const [isError, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PhoneCommentFormOptionsResult>();

  useEffect(() => {
    if (!loading) {
      setLoading(true);
      phoneCommentFormOptionsLoader()
        .then(({ data }) => {
          setData(data);
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
        });
    }
  }, []);

  const handleRatingChange = useCallback((value) => {
    setRating(value);
  }, []);
  const handleCallTypeChange = useCallback((value) => {
    setCallType(value);
  }, []);
  const handleNumberTypeChange = useCallback((value) => {
    setNumberType(value);
  }, []);

  const onSubmit = () => {
    const payload = {
      comment,
      rating,
      callType,
      numberType,
    };

    // todo vz API route, omezeni delky komentare
    console.log(payload);
  };

  return (
    <>
      <DetailBoxTitle
        bg={{
          light: BLUE_COLOR,
          dark: BLUE_COLOR_DARK,
        }}
        title={getLang(`phoneDetail`, `addComment`)}
        icon={faCommentPlus}
      />

      <CardBox t={theme} p="1.52rem" noTopRadius>
        <div className="w-full">
          <div className="flex flex-col">
            <TextArea
              placeholder={getLang(`phoneDetail`, `commentPlaceholder`)}
              value={comment}
              onChange={(
                e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
              ) => setComment(e.target.value)}
              t={theme}
              rows={4}
              maxLength={1000}
            />

            <RatingRadioForm onChange={handleRatingChange} />
            <CallTypeItemForm
              onChange={handleCallTypeChange}
              options={data?.callTypeOptions}
            />
            {
              // todo vz will not be used yet
              /* <NumberTypeForm onChange={ handleNumberTypeChange }/> */
            }
          </div>

          <div className="max-w-[250px] mx-auto">
            <SubmitField
              onClick={onSubmit}
              disabled={false}
              submitText={getLang(`phoneDetail`, `addComment`)}
            />
          </div>
        </div>
      </CardBox>
    </>
  );
}
