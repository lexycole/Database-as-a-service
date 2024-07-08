import * as React from 'react';
import { ChangeEvent, Dispatch } from 'react';
import { Checkbox, FormControlLabel, Grid } from '@material-ui/core';
import getLang from '../../../lang/Lang';
import {
  FieldExtendedAccount,
  FormOutlinedHelper,
} from '../../../view/registration/style/RegistrationStyle';
import { WebLink } from '../../link/WebLink';
import { getPrivacyPolicyUrl } from '../../link/FooterLink';
import { QuestionMarkContainer } from '@/../styles/Style';
import {
  CARD_BACKGROUND_COLOR_BLUE,
  PRIMARY_COLOR,
} from '../../../../styles/BaseStyle';

type ConfirmCheckBoxesProps = {
  consent: boolean;
  setConsent: Dispatch<boolean>;
  newsletter: boolean;
  setNewsletter: Dispatch<boolean>;
  extendedAccount: boolean;
  setExtendedAccount: Dispatch<boolean>;
  twoColLayout?: boolean;
};

export function ConfirmCheckBoxes(props: ConfirmCheckBoxesProps) {
  return (
    <Grid
      container
      spacing={2}
      style={{
        marginTop: '2rem',
        width: `100%`,
      }}
    >
      <Grid item xs={12} md={props.twoColLayout ? 6 : 12}>
        <FormOutlinedHelper
          outlined
          style={{
            backgroundColor: CARD_BACKGROUND_COLOR_BLUE,
          }}
        >
          <FieldExtendedAccount>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.extendedAccount}
                  onChange={(event: ChangeEvent<HTMLInputElement>) => {
                    props.setExtendedAccount(event.target.checked);
                  }}
                  name="extendedAccount"
                  color="primary"
                />
              }
              label={getLang(`registration`, `extendedAccountLabel`)}
            />
          </FieldExtendedAccount>
          <QuestionMarkContainer>
            <span>?</span>
          </QuestionMarkContainer>
        </FormOutlinedHelper>
      </Grid>

      <Grid item xs={12} md={props.twoColLayout ? 6 : 12}>
        <FormOutlinedHelper>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.consent}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  props.setConsent(event.target.checked);
                }}
                name="consent"
                color="primary"
              />
            }
            label={
              <span>
                {getLang(`form`, `consent`)}
                <WebLink href={getPrivacyPolicyUrl()}>
                  <span
                    style={{
                      color: PRIMARY_COLOR,
                      textDecoration: 'underline #00C29D',
                      marginLeft: '8px',
                    }}
                  >
                    {getLang(`form`, `personalData`)}
                  </span>
                </WebLink>
              </span>
            }
          />
        </FormOutlinedHelper>
      </Grid>

      <Grid item xs={12} md={props.twoColLayout ? 6 : 12}>
        <FormOutlinedHelper>
          <FormControlLabel
            control={
              <Checkbox
                checked={props.newsletter}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  props.setNewsletter(event.target.checked);
                }}
                name="newsletter"
                color="primary"
              />
            }
            label={getLang(`registration`, `newsletterConsent`)}
          />
        </FormOutlinedHelper>
      </Grid>
    </Grid>
  );
}
