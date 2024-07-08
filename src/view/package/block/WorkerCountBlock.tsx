import * as React from 'react';
import { Dispatch } from 'react';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { BlockContainer, FilterBlock } from '../style/PackageStyle';
import getLang from '../../../lang/Lang';
import { WorkerCountData } from '../props/PackageDataProps';
import {
  PackageSlider,
  SliderRange,
} from '../../../components/slider/PackageSlider';
import { PackageBlockTitle } from '../component/PackageBlockTitle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import PackageSliderSkeleton from '@/components/utils/skeleton/PackageSliderSkeleton';

type WorkerCountBlockProps = {
  workerCount: SliderRange;
  workerCountOptions?: WorkerCountData[];
  setWorkerCount: Dispatch<SliderRange>;
  packageCountryLoading?: boolean;
};

export function WorkerCountBlock(props: WorkerCountBlockProps) {
  const [theme] = useRecoilState(appTheme);

  if (
    props.workerCountOptions === undefined ||
    props.workerCountOptions === null
  ) {
    return null;
  }

  return (
    <FilterBlock t={theme}>
      <PackageBlockTitle
        title={getLang(`package`, `workerCount`)}
        icon={faUserFriends}
      />
      <BlockContainer>
        {props.workerCountOptions.length &&
        props.workerCountOptions &&
        !props.packageCountryLoading ? (
          <PackageSlider
            id="workerCount"
            options={props.workerCountOptions}
            handleChange={props.setWorkerCount}
            rangeValue={props.workerCount}
          />
        ) : (
          <PackageSliderSkeleton />
        )}
        {/* todo vz for future use */}
        {/* <Button variant="outlined" style={{ margin: 10 }}> */}
        {/*  <AddCircleOutlineIcon /> */}
        {/*  /!* */}
        {/*    //todo vz  the button toggles between the scroll bar display and the check box */}
        {/*    //as on the current site https://portal.expanzo.com/cs/expanzo/package/page? */}
        {/*    *!/ */}
        {/*  {getLang('form', 'moreOptions')} */}
        {/*  /!* {getLang('form', 'lessOptions')} *!/ */}
        {/* </Button> */}
      </BlockContainer>
    </FilterBlock>
  );
}
