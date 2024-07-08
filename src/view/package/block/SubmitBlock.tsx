import * as React from 'react';
import { Dispatch } from 'react';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { PackageButtons, PackageSubmitBlock } from '../style/PackageStyle';
import getLang from '../../../lang/Lang';
import { PackageCalculateData } from '../PackageCalculateProps';
import { ResultBlock } from './ResultBlock';
import { InquiryButton } from '../component/InquiryButton';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import ResultDataSkeleton from '@/components/utils/skeleton/ResultDataSkeleton';

type SubmitBlockProps = {
  calculate: boolean;
  clearFilter: () => void;
  calculatePackage: () => void;
  calculateResult?: PackageCalculateData | null;
  calculateAllowed: boolean;
  resultLoaded: boolean;
  resultLoading: boolean;
  setShowInquiry: Dispatch<boolean>;
  filterModify: boolean;
};

export function SubmitBlock(props: SubmitBlockProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <PackageSubmitBlock t={theme}>
      <PackageButtons>
        <Button
          size="large"
          color="default"
          fullWidth
          disableElevation
          id="package-reset"
          variant="contained"
          onClick={props.clearFilter}
          disabled={props.resultLoading}
          style={{
            padding: `1rem 2rem`,
            maxWidth: 250,
          }}
          startIcon={<FontAwesomeIcon icon={faTrashAlt} />}
        >
          {getLang(`package`, `clear`)}
        </Button>

        {props.calculateAllowed ? (
          <Button
            size="large"
            color="primary"
            fullWidth
            disableElevation
            variant="contained"
            id="package-calculate"
            onClick={props.calculatePackage}
            style={{
              color: '#FFF',
              padding: `1rem 2rem`,
              maxWidth: 250,
            }}
            disabled={props.resultLoading || props.filterModify === false}
            startIcon={<FontAwesomeIcon icon={faCalculator} />}
          >
            {getLang(`package`, `calculate`)}
          </Button>
        ) : (
          <InquiryButton setShowInquiry={props.setShowInquiry} />
        )}
      </PackageButtons>
      {props.resultLoading && <ResultDataSkeleton />}
      {props.resultLoaded && props.calculateResult && (
        <ResultBlock
          calculateResult={props.calculateResult}
          setShowInquiry={props.setShowInquiry}
        />
      )}
    </PackageSubmitBlock>
  );
}
