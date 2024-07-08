import * as React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { TopSearchRow, TopSearchTable } from './TopSearchTable';
import getLang from '../../../lang/Lang';
import Skeleton from '@material-ui/lab/Skeleton';
import { PhoneBasic } from '../../phone/PhoneBasicProps';
import { RatingImage } from '../../phone/detail/RatingList';
import { PHONE_ROW_RATING_STYLE } from '../style/TopSearchStyle';
import { PhoneLink } from '../../../components/link/PhoneLink';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';

type LatestPhoneTableProps = {
  loading: boolean;
  topSearchData: PhoneBasic[];
};

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

export function LatestPhoneRatingTable(props: LatestPhoneTableProps) {
  return (
    <TopSearchTable title={getLang(`topSearch`, `latestPhoneRating`)}>
      <TableBody>
        {!props.loading ? (
          props.topSearchData === null ? (
            <StyledTableRow>
              <StyledTableCell>
                {/* <DataPlaceholder rows={15} /> */}
              </StyledTableCell>
            </StyledTableRow>
          ) : (
            <>
              {props.topSearchData.map((item: PhoneBasic, key: number) => (
                <TopSearchRow
                  key={key}
                  name={<PhoneLink {...item} name={item.phone} id={item.id} />}
                  valueCellStyle={PHONE_ROW_RATING_STYLE}
                  value={<RatingImage rating={item?.ratingAvg ?? ''} />}
                />
              ))}
            </>
          )
        ) : (
          Array(10)
            .fill(1)
            .map(() => (
              <Skeleton
                height={35}
                style={{
                  margin: '10px 0',
                }}
                key={Math.random()}
                variant="rect"
              />
            ))
        )}
      </TableBody>
    </TopSearchTable>
  );
}
