import * as React from 'react';
import styled from 'styled-components';
import { FirmListItemTile } from './FirmListItemTile';
import { FirmBasic } from '../FirmBasicProps';
import { Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const FirmListContainer = styled.ul`
  width: 80%;
  list-style: none;
  margin: 0 auto;
`;

type FirmListProps = {
  loading: boolean;
  data: FirmBasic[] | null;
};

export function FirmList(props: FirmListProps) {
  const loadingComponent = Array(6)
    .fill(0)
    .map((_, i) => (
      <Grid item xs={12} md={6} key={i}>
        <Skeleton
          variant="text"
          style={{ minWidth: 150 }}
          width="40%"
          height={30}
        />
        <Skeleton variant="text" style={{ minWidth: 110 }} width="50%" />
        <Skeleton variant="text" style={{ minWidth: 220 }} width="65%" />
        <Skeleton variant="text" style={{ minWidth: 200 }} width="60%" />
        <Skeleton variant="text" style={{ minWidth: 220 }} width="67%" />
      </Grid>
    ));

  return (
    // todo vz debug component
    <FirmListContainer>
      {!props.loading ? (
        <Grid container spacing={5}>
          {props?.data?.map((value: FirmBasic, key: number) => (
            <Grid item xs={12} md={6}>
              <FirmListItemTile key={key} {...value} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={5}>
          {loadingComponent}
        </Grid>
      )}
    </FirmListContainer>
  );
}
