import * as React from 'react';
import { FirmData } from '@/view/firm/FirmProps';
import { DescriptionDiv, FirmContainer } from '@/view/firm/style/FirmStyle';
import { FirmBasic } from '@/view/firm/detail/FirmBasic';
import { UseJobs, UseProduct } from '@/environment/Environment';
import { FirmDetailNav } from '@/view/firm/FirmDetailNav';
import { ContactGroup } from '@/view/firm/detail/ContactGroup';
import { Register } from '@/view/firm/detail/Register';
import { OtherFact } from '@/view/firm/detail/OtherFact';
import Spinner from '@/components/utils/Spinner';
import { Box, Container, Paper, Tab } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import { Offer } from '@/view/firm/detail/Offer';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import { AuthorityGroup } from './AuthorityGroup';
import { Evolution } from './Evolution';
import { BusinessGroup } from './BusinessGroup';

function SelectionTabs() {
  // todo vz doplnit langy
  const [value, setValue] = React.useState(2);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper square style={{ flex: 1, width: '100%' }}>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Produkty (10)" />
        <Tab label="Volná místa" />
        <Tab label="Výběrová řízení (6)" />
      </Tabs>
    </Paper>
  );
}

export function FirmDetailWrapper(props: { firmData?: FirmData }) {
  const [theme] = useRecoilState(appTheme);

  return (
    <Container>
      {props.firmData ? (
        <Container>
          <FirmContainer>
            <FirmBasic firmData={props.firmData} />
            <Box
              style={{
                width: '100%',
                marginBottom: '20px',
                display: `flex`,
                textAlign: `center`,
                justifyContent: `left`,
              }}
            >
              {UseProduct || UseJobs || (UseProduct && <SelectionTabs />)}
            </Box>

            <FirmDetailNav firmData={props.firmData} />

            <div style={{ marginTop: '1rem' }}>
              {props.firmData.description && props.firmData && (
                <DescriptionDiv t={theme}>
                  {props.firmData.description}
                  <div />
                </DescriptionDiv>
              )}
            </div>

            <ContactGroup firmData={props.firmData} />
            <Register firmData={props.firmData} />
            <AuthorityGroup firmData={props.firmData} />
            <Evolution firmData={props.firmData} />
            <BusinessGroup firmData={props.firmData} />
            <OtherFact firmData={props.firmData} />
            <Offer firmData={props.firmData} />
          </FirmContainer>
          {
            // todo vz zapnout
            /* {props.firmData.visible && (
            <SimilarFirmWrapper uid={props.firmData.uid} />
          )} */
          }
        </Container>
      ) : (
        <div
          style={{
            margin: '15vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Spinner />
        </div>
      )}
    </Container>
  );
}
