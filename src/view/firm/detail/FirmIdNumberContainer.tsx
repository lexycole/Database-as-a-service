import * as React from 'react';
import { FirmLogoContainer, IdNumberDiv } from '@/view/firm/style/FirmStyle';
import { FirmRating } from '@/components/FirmRating';
import getLang from '@/lang/Lang';
import { FirmLogo } from '@/view/firm/FirmLogo';
import { FirmData } from '@/view/firm/FirmProps';
import { Button, Grid } from '@material-ui/core';
import { BUTTON_COLOR_BLUE } from '@/../styles/BaseStyle';
import {
  UseCompanyEvaluation,
  UsePreferredCompany,
} from '@/environment/Environment';

export function FirmIdNumberContainer(props: { firmData: FirmData }) {
  const { visible } = props.firmData;

  return (
    <Grid
      item
      xs={12}
      md={6}
      style={{ display: 'flex', justifyContent: 'flex-end' }}
    >
      <FirmLogoContainer>
        <div
          style={{
            display: 'flex',
            marginRight: '1rem',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            padding: '1rem 0',
          }}
        >
          {props.firmData.idNumber && (
            <IdNumberDiv>
              {getLang(`firmDetail`, `registerIdNumber`)}:
              {props.firmData.idNumber}
            </IdNumberDiv>
          )}
          <FirmRating rating={3} readonly />
          {
            // todo vz for future use
            UseCompanyEvaluation && <IdNumberDiv>256 hodnoceni</IdNumberDiv>
          }
        </div>
        {
          // visible = company is active
          visible && (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <FirmLogo
                countryCode="cz"
                idNumber={props.firmData.idNumber}
                size="large"
              />
              {
                // for future use - v when company preferences will be used - TOP
                UsePreferredCompany && (
                  // todo vz add link !!!
                  <Button
                    size="small"
                    variant="contained"
                    style={{
                      padding: '13px 10px',
                      margin: `1.44rem 0`,
                      width: `100px`,
                      background: BUTTON_COLOR_BLUE,
                      color: '#FFF',
                      fontWeight: 'bold',
                      fontSize: '.83rem',
                      borderRadius: '10px',
                    }}
                    disableElevation
                  >
                    {getLang(`button`, `preferCompany`)}
                  </Button>
                )
              }
            </div>
          )
        }
      </FirmLogoContainer>
    </Grid>
  );
}
