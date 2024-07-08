import * as React from 'react';
import Link from 'next/link';
import { ListItems } from '@/view/databaseFirm/style/DatabaseFirmStyles';
import { Button, Grid } from '@material-ui/core';
import getLang from '@/lang/Lang';
import { getRegistrationUrl } from '@/components/link/RegistrationLink';

type DatabaseFirmBenefitsProps = {
  theme: boolean;
};

export function DatabaseFirmBenefits(props: DatabaseFirmBenefitsProps) {
  return (
    <div
      style={{
        border: `${props.theme ? '1px solid #999' : '1px solid #555'}`,
        borderRadius: 10,
        margin: '4rem 0 0',
        padding: '2rem',
      }}
    >
      <h2 className="font-[700] text-[2rem] mb-[3.5rem]">
        {getLang(`databaseFirm`, `databaseFirmBenefits`)}
      </h2>

      <Grid container justify="center" spacing={2}>
        <Grid xs={12} md={6} lg={5}>
          <ListItems>
            <ul className="font-[600]">
              <li> {getLang(`databaseFirm`, `databaseFirmBenefits1`)} </li>
              <li> {getLang(`databaseFirm`, `databaseFirmBenefits2`)} </li>
              <li> {getLang(`databaseFirm`, `databaseFirmBenefits3`)} </li>
              <li> {getLang(`databaseFirm`, `databaseFirmBenefits4`)} </li>
              <li> {getLang(`databaseFirm`, `databaseFirmBenefits5`)} </li>
            </ul>
          </ListItems>
        </Grid>
        <Grid xs={12} md={6} lg={5}>
          <ListItems>
            <ul className="font-[600]">
              <li> {getLang(`databaseFirm`, `databaseFirmBenefits6`)} </li>
              <li> {getLang(`databaseFirm`, `databaseFirmBenefits7`)} </li>
              <li> {getLang(`databaseFirm`, `databaseFirmBenefits8`)} </li>
              <li> {getLang(`databaseFirm`, `databaseFirmBenefits9`)} </li>
            </ul>
          </ListItems>
        </Grid>
      </Grid>

      <div className="mt-10">
        <Link href={getRegistrationUrl()}>
          <Button
            color="primary"
            variant="contained"
            disableElevation
            size="large"
            style={{
              marginTop: '2rem',
              padding: '1.3rem 3rem',
              borderRadius: 15,
              color: '#FFF',
              fontWeight: 'bold',
            }}
          >
            {getLang(`databaseFirm`, `registration`)}
          </Button>
        </Link>
      </div>
    </div>
  );
}
