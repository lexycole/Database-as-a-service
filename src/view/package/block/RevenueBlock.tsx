import * as React from 'react';
import { Dispatch } from 'react';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { BlockContainer, FilterBlock } from '../style/PackageStyle';
import getLang from '../../../lang/Lang';
import { RevenueData } from '../props/PackageDataProps';
import {
  PackageSlider,
  SliderRange,
} from '../../../components/slider/PackageSlider';
import { PackageBlockTitle } from '../component/PackageBlockTitle';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import PackageSliderSkeleton from '@/components/utils/skeleton/PackageSliderSkeleton';

type RevenueBlockProps = {
  revenueOptions?: RevenueData[];
  revenue: SliderRange;
  setRevenue: Dispatch<SliderRange>;
  packageCountryLoading?: boolean;
};

export function RevenueBlock(props: RevenueBlockProps) {
  const [theme] = useRecoilState(appTheme);

  if (props.revenueOptions === undefined || props.revenueOptions === null) {
    return null;
  }

  return (
    <FilterBlock t={theme}>
      <PackageBlockTitle title={getLang(`package`, `revenue`)} icon={faCoins} />
      <BlockContainer>
        {props.revenueOptions.length &&
        props.revenueOptions &&
        !props.packageCountryLoading ? (
          <PackageSlider
            id="revenue"
            rangeValue={props.revenue}
            options={props.revenueOptions}
            handleChange={props.setRevenue}
          />
        ) : (
          <PackageSliderSkeleton />
        )}
        {/* todo vz for future use */}
        {/* <Button variant="outlined" style={{ margin: 10 }}> */}
        {/*  <AddCircleOutlineIcon /> */}
        {/*  {getLang('form', 'moreOptions')} */}
        {/* </Button> */}
      </BlockContainer>
    </FilterBlock>
  );
}
