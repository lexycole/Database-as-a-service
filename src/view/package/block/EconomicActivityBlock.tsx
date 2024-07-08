import * as React from 'react';
import { Dispatch } from 'react';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { BlockContainer, FilterBlock } from '../style/PackageStyle';
import getLang from '../../../lang/Lang';
import { PackageBlockTitle } from '../component/PackageBlockTitle';
import {
  FilterValues,
  PackageEconomicDataProps,
} from '../props/PackageDataProps';
import { useRecoilState } from 'recoil';
import { Grid } from '@material-ui/core';
import { appTheme } from '@/storage/ThemeAtom';
import { TreeView } from '../../../components/tree/TreeView';
import TreeViewSkeleton from '@/components/utils/skeleton/TreeViewSkeleton';

type EconomicActivityBlockProps = {
  economicActivity: FilterValues;
  setEconomicActivity: Dispatch<FilterValues>;
  economicActivityData?: PackageEconomicDataProps | null;
  packageCountryLoading?: boolean;
};

export function EconomicActivityBlock(props: EconomicActivityBlockProps) {
  const [theme] = useRecoilState(appTheme);

  let title: string = getLang(`package`, `economicActivity`);
  if (
    props.economicActivityData &&
    props.economicActivityData.economicActivityName
  ) {
    title += ` - ${props.economicActivityData.economicActivityName}`;
  }

  return (
    <FilterBlock t={theme}>
      <>
        <PackageBlockTitle title={title} icon={faBriefcase} />
        <BlockContainer>
          <Grid container justify="space-around">
            <Grid item xs={12}>
              {props.economicActivityData && !props.packageCountryLoading ? (
                <TreeView
                  options={props.economicActivityData.economicActivity}
                  checked={props.economicActivity}
                  setChecked={props.setEconomicActivity}
                />
              ) : (
                <div>
                  <TreeViewSkeleton rows={10} />
                </div>
              )}
            </Grid>

            {/*
              //todo vz should replace icons - expand all / collapse all
            */}

            {/* <Grid item xs={12} md={5} justify="center">
              <Button variant="outlined" style={{ margin: 10 }}>
                <AddCircleOutlineIcon />
                {getLang('form', 'expandAll')}
              </Button>
              <Button variant="outlined" style={{ margin: 10 }}>
                <RemoveCircleOutlineIcon />
                {getLang('form', 'collapseAll')}
              </Button>
            </Grid> */}
          </Grid>
        </BlockContainer>
      </>
    </FilterBlock>
  );
}
