import * as React from 'react';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import { TopSearchRow, TopSearchTable } from './TopSearchTable';
import { TopSearchTitle } from './TopSearchHelper';
import getLang from '../../../lang/Lang';
import { CountryData } from '../../../components/country/CountryProps';
import { PhoneBasic } from '../../phone/PhoneBasicProps';
import { PhoneLink } from '../../../components/link/PhoneLink';
import { PHONE_ROW_RATING_STYLE } from '../style/TopSearchStyle';
import { RatingImage } from '../../phone/detail/RatingList';
import Skeleton from '@material-ui/lab/Skeleton';

type TopSearchPhoneTableProps = {
  loading?: boolean;
  topSearchData?: PhoneBasic[];
  country?: CountryData | null;
};

export function TopSearchPhoneTable(props: TopSearchPhoneTableProps) {
  return (
    <TopSearchTable
      title={
        <TopSearchTitle
          base={getLang(`topSearch`, `titlePhone`)}
          country={props.country ?? null}
        />
      }
    >
      <TableBody>
        {!props.loading ? (
          props.topSearchData === null ? (
            <TableRow>
              <TableCell>
                {Array(10)
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
                  ))}
              </TableCell>
            </TableRow>
          ) : (
            <>
              {props?.topSearchData?.map((item: PhoneBasic, key: number) => (
                <TopSearchRow
                  key={key}
                  name={<PhoneLink {...item} name={item.phone} id={item.id} />}
                  valueCellStyle={PHONE_ROW_RATING_STYLE}
                  value={<RatingImage rating={item.ratingAvg ?? ''} />}
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
