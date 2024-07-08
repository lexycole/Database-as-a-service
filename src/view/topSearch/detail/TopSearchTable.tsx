import * as React from 'react';
import { CSSProperties, ReactNode } from 'react';
import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { PRIMARY_COLOR } from '@/../styles/BaseStyle';

type TopSearchRowProps = {
  name: ReactNode;
  value: string | ReactNode;
  valueCellStyle?: CSSProperties;
};

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);

export function TopSearchRow(props: TopSearchRowProps) {
  return (
    <StyledTableRow>
      <TableCell scope="row">{props.name}</TableCell>
      <TableCell
        align="right"
        style={{
          ...props.valueCellStyle,
          marginLeft: '3rem',
          minWidth: '70px',
          height: 20,
          padding: '0 1rem',
        }}
      >
        {props.value}
      </TableCell>
    </StyledTableRow>
  );
}

type TopSearchTableProps = {
  title: ReactNode;
  children: ReactNode;
};

export function TopSearchTable(props: TopSearchTableProps) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead style={{ background: PRIMARY_COLOR }}>
          <TableRow>
            <TableCell colSpan={2} align="center">
              <h3 className="flex items-center justify-center font-[800] text-[1.2rem] text-white h-[50px]">
                {props.title}
              </h3>
            </TableCell>
          </TableRow>
        </TableHead>
        {props.children}
      </Table>
    </TableContainer>
  );
}
