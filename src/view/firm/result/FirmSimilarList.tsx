import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { SearchResultData } from '../../../data/SearchResultData';
import { DataPlaceholder } from '../../../components/page/PageHelper';
import getLang from '../../../lang/Lang';
import { FirmLink } from '../../../components/link/FirmLink';
import { DetailBoxTitle } from '../../../components/detail/BoxTitle';
import { TableContainerStyled } from '../style/SimilarStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';

export function FirmSimilarTable(props: { similarFirm: SearchResultData[] }) {
  const [theme] = useRecoilState(appTheme);

  return (
    <>
      <DetailBoxTitle title={getLang(`firmDetail`, `similarFirm`)} />
      <TableContainerStyled t={Boolean(theme)}>
        <TableContainer
          elevation={0}
          component={Paper}
          className="tableContainer"
        >
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>{getLang(`firmDetail`, `registerName`)}</TableCell>
                <TableCell align="left">
                  {getLang(`firmDetail`, `registerIdNumber`)}
                </TableCell>
                <TableCell align="left">
                  {getLang(`firmDetail`, `registerRegisterAddress`)}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.similarFirm.map((firm: SearchResultData, key: number) => (
                <TableRow key={key}>
                  <TableCell>
                    <FirmLink
                      id={firm?.uid ?? ``}
                      name={firm.name}
                      uid={firm?.uid || ``}
                      address={firm?.address}
                      visible={firm.visible}
                    />
                  </TableCell>
                  <TableCell align="left">{firm.idNumber}</TableCell>
                  <TableCell align="left">{firm.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </TableContainerStyled>
    </>
  );
}

export function FirmSimilarList(props: {
  similarResult: SearchResultData[] | null;
}) {
  return (
    <>
      {props.similarResult ? (
        <FirmSimilarTable similarFirm={props.similarResult} />
      ) : (
        <DataPlaceholder rows={5} />
      )}
    </>
  );
}
