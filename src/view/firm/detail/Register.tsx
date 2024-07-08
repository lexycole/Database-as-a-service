import * as React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
} from '@material-ui/core';
import { useRecoilState } from 'recoil';
import getLang from '../../../lang/Lang';
import { appTheme } from '@/storage/ThemeAtom';
import { FormatDate } from '../../../formatter/Formatter';
import { TableContainerStyled } from '../style/SimilarStyle';
import { BankAccountRow } from '@/view/firm/style/RegisterStyle';
import { BankAccountsBox, FirmDetailBox } from '../style/FirmStyle';
import { DetailBoxTitle } from '../../../components/detail/BoxTitle';
import { AccordionListTableContainer } from '../../../../styles/Style';
import { BankAccountsList, FirmData, RegisterList } from '../FirmProps';
import { AccordionList } from '../../../components/accordion/AccordionList';
import { renderRegisterDetails } from '@/view/firm/detail/RegisterDetails';

function BankAccountsData(props: RegisterList) {
  const { bankAccounts } = props;
  const [theme] = useRecoilState(appTheme);

  return (
    <BankAccountsBox>
      <AccordionList
        title={getLang(`firmDetail`, `registerBankAccounts`)}
        count={bankAccounts?.length ?? 0}
      >
        <AccordionListTableContainer>
          <TableContainerStyled t={Boolean(theme)}>
            <TableContainer
              elevation={0}
              component={Paper}
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
              className="tableContainer"
            >
              <Table>
                <TableBody>
                  {props?.bankAccounts?.map(
                    (item: BankAccountsList, key: number) => (
                      <BankAccountRow key={key}>
                        <TableCell>{item.number}</TableCell>
                        <TableCell>
                          {getLang(`firmDetail`, `registerBankAccountsDate`)}
                          {` `}
                          {FormatDate(item.date)}
                        </TableCell>
                      </BankAccountRow>
                    ),
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainerStyled>
        </AccordionListTableContainer>
      </AccordionList>
    </BankAccountsBox>
  );
}

export function Register(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);

  if (props.firmData.registerList === undefined) {
    return null;
  }

  const { bankAccounts } = props.firmData.registerList;

  return (
    <FirmDetailBox id="firm-register">
      <DetailBoxTitle
        title={getLang(`firmDetail`, `registerTitle`)}
        icon="register.svg"
      />

      <TableContainerStyled t={Boolean(theme)}>
        <TableContainer
          elevation={0}
          component={Paper}
          className="tableContainer"
        >
          <Table aria-label="simple table">
            <TableBody>
              <>{renderRegisterDetails({ firmData: props.firmData })}</>
            </TableBody>
          </Table>
        </TableContainer>
      </TableContainerStyled>

      {bankAccounts && bankAccounts.length > 0 && (
        <BankAccountsData {...props.firmData.registerList} />
      )}
    </FirmDetailBox>
  );
}
