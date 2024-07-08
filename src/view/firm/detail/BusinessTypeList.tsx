import * as React from 'react';
import { BusinessTypeData } from '../FirmProps';
import {
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';
import { appTheme } from '@/storage/ThemeAtom';
import { TableContainerStyled } from '@/view/firm/style/SimilarStyle';
import { useRecoilState } from 'recoil';
import { AccordionListTableContainer } from '../../../../styles/Style';
import { BusinessTypeListTable } from '@/view/firm/style/BusinessStyle';

export function BusinessTypeList(props: { businessType: BusinessTypeData[] }) {
  const [theme] = useRecoilState(appTheme);
  return (
    <AccordionListTableContainer>
      <TableContainerStyled t={Boolean(theme)}>
        <TableContainer
          elevation={0}
          component={Paper}
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          className="tableContainer"
        >
          <BusinessTypeListTable>
            <TableBody>
              {props.businessType.map((item: BusinessTypeData, key: number) => (
                <TableRow key={key}>
                  <TableCell className="label">{item.code}</TableCell>
                  <TableCell className="value">{item.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </BusinessTypeListTable>
        </TableContainer>
      </TableContainerStyled>
    </AccordionListTableContainer>
  );
}
