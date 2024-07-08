import * as React from 'react';
import { Grid } from '@material-ui/core';
import getLang from '@/lang/Lang';
import { CardWithCount } from '@/view/databaseFirm/CardWithCount';
import { CardWithCountDouble } from '@/view/databaseFirm/CardWithCountDouble';
// todo vz theme type
export function DatabaseFirmContains({ theme }: any) {
  return (
    <div className="-mt-[4rem] relative z-[100]">
      <h2 className="mb-10 font-[700] text-[2rem]">
        {getLang(`databaseFirm`, `databaseFirmContains`)}
      </h2>
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} md={6}>
          <Grid container direction="row" spacing={3}>
            <Grid item container direction="column" xs spacing={3}>
              <Grid item xs>
                <CardWithCount
                  theme={theme}
                  count={48000000}
                  icon={
                    <img
                      src="/img/databaseFirm/count-world.svg"
                      alt={getLang(`databaseFirm`, `countWorld`)}
                    />
                  }
                  description={getLang(`databaseFirm`, `countWorld`)}
                />
              </Grid>
              <Grid item xs>
                <CardWithCount
                  theme={theme}
                  count={57000000}
                  icon={
                    <img
                      src="/img/databaseFirm/count-phone.svg"
                      alt={getLang(`databaseFirm`, `countPhone`)}
                    />
                  }
                  description={getLang(`databaseFirm`, `countPhone`)}
                />
              </Grid>
            </Grid>
            <Grid item container direction="column" xs spacing={3}>
              <Grid item xs>
                <CardWithCount
                  theme={theme}
                  count={2690000}
                  icon={
                    <img
                      src="/img/databaseFirm/count-czech.svg"
                      alt={getLang(`databaseFirm`, `countCzech`)}
                    />
                  }
                  description={getLang(`databaseFirm`, `countCzech`)}
                />
              </Grid>
              <Grid item xs>
                <CardWithCount
                  theme={theme}
                  count={12000000}
                  icon={
                    <img
                      src="/img/databaseFirm/count-www.svg"
                      alt={getLang(`databaseFirm`, `countWww`)}
                    />
                  }
                  description={getLang(`databaseFirm`, `countWww`)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container direction="row" spacing={3}>
            <Grid item xs>
              <CardWithCountDouble
                theme={theme}
                count={32000000}
                icon={
                  <img
                    src="/img/databaseFirm/count-worker-count.svg"
                    alt={getLang(`databaseFirm`, `countWorkerCount`)}
                  />
                }
                description={getLang(`databaseFirm`, `countWorkerCount`)}
              />
            </Grid>
            <Grid item container direction="column" xs spacing={3}>
              <Grid item xs>
                <CardWithCount
                  theme={theme}
                  count={29000000}
                  icon={
                    <img
                      src="/img/databaseFirm/count-revenue.svg"
                      alt={getLang(`databaseFirm`, `countRevenue`)}
                    />
                  }
                  description={getLang(`databaseFirm`, `countRevenue`)}
                />
              </Grid>
              <Grid item xs>
                <CardWithCount
                  theme={theme}
                  count={235}
                  icon={
                    <img
                      src="/img/databaseFirm/count-country.svg"
                      alt={getLang(`databaseFirm`, `countCountry`)}
                    />
                  }
                  description={getLang(`databaseFirm`, `countCountry`)}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
