import * as React from 'react';
import { ReactNode } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { ListStyleEnum } from './ListStyleSwitch';
import { SearchItemContainer } from '../style/SearchStyle';
import {
  SearchCategories,
  SearchCategoryType,
} from '../../../components/search/SearchProps';
import getLang from '../../../lang/Lang';

type SearchListContainerProps = {
  listStyle: ListStyleEnum;
  children: ReactNode;
  category: SearchCategoryType | null;
};

function ListHeader(props: { category: SearchCategoryType | null }) {
  switch (props.category) {
    case SearchCategories.firm:
      return (
        <TableHead>
          <TableRow>
            <TableCell>{getLang(`firmDetail`, `registerName`)}</TableCell>
            <TableCell>{getLang(`firmDetail`, `registerIdNumber`)}</TableCell>
            <TableCell>{getLang(`firmDetail`, `registerLegalForm`)}</TableCell>
            <TableCell>
              {getLang(`firmDetail`, `registerRegisterAddress`)}
            </TableCell>
          </TableRow>
        </TableHead>
      );
    case SearchCategories.phone:
      return (
        <TableHead>
          <TableRow>
            <TableCell>{getLang(`phoneDetail`, `title`)}</TableCell>
            <TableCell>{getLang(`phoneDetail`, `viewCount`)}</TableCell>
            <TableCell>{getLang(`phoneDetail`, `firmName`)}</TableCell>
          </TableRow>
        </TableHead>
      );
    default:
      return <></>;
  }
}

export function SearchListContainer(props: SearchListContainerProps) {
  switch (props.listStyle) {
    case ListStyleEnum.tile:
    case ListStyleEnum.tileSmall:
      return <SearchItemContainer>{props.children}</SearchItemContainer>;
    case ListStyleEnum.rows:
      return (
        <TableContainer>
          <Table aria-label="simple table">
            <ListHeader category={props?.category ?? null} />
            <TableBody>{props.children}</TableBody>
          </Table>
        </TableContainer>
      );
  }
}
