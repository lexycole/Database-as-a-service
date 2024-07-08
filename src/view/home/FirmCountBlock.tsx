import * as React from 'react';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/pro-regular-svg-icons';
import Link from 'next/link';
import { Button, Hidden, Tooltip } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import {
  CountSpan,
  FirmContainerText,
  FirmCountContainer,
} from './style/HomeStyle';
import { FormatNumber } from '../../formatter/Formatter';
import getLang, { langByCount } from '../../lang/Lang';
import { getFirmCountUrl } from '../../components/link/FirmCountLink';
import { firmCountryCountSumLoader } from '../../data/firm/FirmCountryCountSumLoader';
import { firmCountrySumState } from '../../storage/AppAtom';
import { appTheme } from '@/storage/ThemeAtom';

export function FirmCountBlock() {
  const [theme] = useRecoilState(appTheme);
  const [firmCountrySum, setFirmCountrySum] =
    useRecoilState(firmCountrySumState);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (isError === false && firmCountrySum === null) {
      firmCountryCountSumLoader()
        .then(({ data }) => {
          setFirmCountrySum(data);
        })
        .catch(() => {
          setError(true);
        });
    }
  }, []);

  if (isError) {
    // todo vz co tady vratit ?
    return null;
  }

  return (
    <FirmCountContainer t={Boolean(theme)}>
      <Hidden mdDown>
        <Link href={getFirmCountUrl()} passHref>
          <FirmContainerText>
            <CountSpan>
              <img
                style={{ width: 25, marginRight: 10, marginTop: -3 }}
                src="/img/databaseFirm/count-czech.svg"
                alt="firm"
              />
              <span>
                {`${FormatNumber(firmCountrySum?.totalFirm ?? 0)} ${getLang(
                  'firmCount',
                  'firmsText',
                )}`}
              </span>
              <img
                style={{ width: 25, margin: '0 10px 0 1.42rem', marginTop: 3 }}
                src="/img/databaseFirm/count-world.svg"
                alt="firm"
              />
              <span>
                {`
                  ${FormatNumber(firmCountrySum?.totalCountry ?? 0)}
                  ${langByCount(
                    'firmCount',
                    'countriesText',
                    firmCountrySum?.totalCountry ?? 0,
                  )}
                  `}
              </span>
            </CountSpan>
            {/* <Button
              disableElevation
              color="primary"
              variant="contained"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ fontSize: '1.2rem', marginTop: -5 }}
              />
            </Button> */}
            <Button
              disableElevation
              size="small"
              variant="contained"
              color="primary"
              style={{ width: 40, height: 40, minWidth: 40 }}
            >
              <FontAwesomeIcon
                style={{ fontSize: '1.6rem', paddingBottom: 5, color: '#FFF' }}
                icon={faArrowRight}
              />
            </Button>
          </FirmContainerText>
        </Link>
      </Hidden>

      <Hidden lgUp>
        <Link href={getFirmCountUrl()} passHref>
          <Tooltip
            title={`${FormatNumber(firmCountrySum?.totalFirm ?? 0)} ${getLang(
              `firmCount`,
              `firmsText`,
            )} - ${FormatNumber(
              firmCountrySum?.totalCountry ?? 0,
            )} ${langByCount(
              `firmCount`,
              `countriesText`,
              firmCountrySum?.totalCountry ?? 0,
            )}`}
            aria-label="add"
          >
            {/* <Button
              disableElevation
              color="primary"
              variant="contained"
              style={{ display: 'block ' }}
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ fontSize: '1.3rem', marginTop: -5 }}
              />
            </Button> */}
            <Button
              disableElevation
              size="small"
              variant="contained"
              color="primary"
              style={{ width: 40, height: 40, minWidth: 40 }}
            >
              <FontAwesomeIcon
                style={{ fontSize: '1.6rem', paddingBottom: 5, color: '#FFF' }}
                icon={faArrowRight}
              />
            </Button>
          </Tooltip>
        </Link>
      </Hidden>
    </FirmCountContainer>
  );
}
