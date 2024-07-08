import * as React from 'react';
import { useState } from 'react';
import {
  Paper,
  Tab,
  Table,
  TableBody,
  TableContainer,
} from '@material-ui/core';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import {
  BusinessTypeData,
  FirmData,
  TradeLicenseData,
  TradeLicenseList,
} from '../FirmProps';
import getLang from '../../../lang/Lang';
import {
  TradeLicenseBox,
  TradeLicenseOfficeRow,
} from '../style/TradeLicenceStyle';
import { FirmDetailBox } from '../style/FirmStyle';
import { DetailBoxSubTitle } from '../../../components/detail/BoxTitle';
import { BoxRows } from '../../../components/detail/BoxStyle';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { TradeLicenseItem } from '@/view/firm/detail/TradeLicenseItem';
import { TableContainerStyled } from '@/view/firm/style/SimilarStyle';

enum TradeLicenseType {
  Active = `Active`,
  Suspended = `Suspended`,
  Canceled = `Canceled`,
}

type TradeLicenseTabPanelProps = {
  type: string;
  tradeLicenseData: TradeLicenseList;
  businessType: BusinessTypeData[];
};

function TradeLicenseTypeContainer(props: TradeLicenseTabPanelProps) {
  let data: TradeLicenseData[] = [];

  switch (props.type) {
    case TradeLicenseType.Active: {
      data = props.tradeLicenseData.active;
      break;
    }
    case TradeLicenseType.Suspended: {
      data = props.tradeLicenseData.suspended;
      break;
    }
    case TradeLicenseType.Canceled: {
      data = props.tradeLicenseData.canceled;
      break;
    }
  }

  return (
    <>
      {data.map((item: TradeLicenseData, key: number) => (
        <TradeLicenseItem
          key={key}
          data={item}
          businessType={props.businessType}
        />
      ))}
    </>
  );
}

export function TradeLicense(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);
  const { tradeLicenseList } = props.firmData.business;

  if (tradeLicenseList === undefined) {
    return null;
  }

  function outputLicenseLength(data: TradeLicenseData[] | undefined): string {
    return data !== undefined ? ` (${data.length.toFixed()})` : ``;
  }

  const activeLicense: boolean = tradeLicenseList.active !== undefined;
  const suspendedLicense: boolean = tradeLicenseList.suspended !== undefined;
  const canceledLicense: boolean = tradeLicenseList.canceled !== undefined;

  const [value, setValue] = useState<string>(
    activeLicense
      ? TradeLicenseType.Active
      : suspendedLicense
      ? TradeLicenseType.Suspended
      : TradeLicenseType.Canceled,
  );

  const handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    if (value) {
      setValue(value);
    }
  };

  return (
    <FirmDetailBox>
      <DetailBoxSubTitle title={getLang(`firmDetail`, `tradeLicenseTitle`)} />
      <BoxRows t={Boolean(theme)}>
        <TradeLicenseOfficeRow>
          {`${getLang(`firmDetail`, `tradeLicenseOffice`)}: `}
          <span>{tradeLicenseList.tradeLicenseOffice}</span>
        </TradeLicenseOfficeRow>
        <TradeLicenseBox>
          <TabContext value={value}>
            <TabList onChange={handleChange} aria-label="simple tabs example">
              <Tab
                label={
                  getLang(`firmDetail`, `tradeLicenseActive`) +
                  outputLicenseLength(tradeLicenseList.active)
                }
                value={TradeLicenseType.Active}
                disabled={!activeLicense}
              />
              <Tab
                label={
                  getLang(`firmDetail`, `tradeLicenseSuspended`) +
                  outputLicenseLength(tradeLicenseList.suspended)
                }
                value={TradeLicenseType.Suspended}
                disabled={!suspendedLicense}
              />
              <Tab
                label={
                  getLang(`firmDetail`, `tradeLicenseCanceled`) +
                  outputLicenseLength(tradeLicenseList.canceled)
                }
                value={TradeLicenseType.Canceled}
                disabled={!canceledLicense}
              />
            </TabList>
            <TabPanel value={value}>
              <TableContainerStyled t={Boolean(theme)}>
                <TableContainer
                  elevation={0}
                  component={Paper}
                  style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
                  className="tableContainer"
                >
                  <Table>
                    <TableBody>
                      <TradeLicenseTypeContainer
                        type={value}
                        tradeLicenseData={tradeLicenseList}
                        businessType={
                          props?.firmData?.business?.businessTypeList ?? []
                        }
                      />
                    </TableBody>
                  </Table>
                </TableContainer>
              </TableContainerStyled>
            </TabPanel>
          </TabContext>
        </TradeLicenseBox>
      </BoxRows>
    </FirmDetailBox>
  );
}
