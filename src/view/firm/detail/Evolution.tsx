import * as React from 'react';
import { EvolutionData, FirmData } from '../FirmProps';
import { FirmDetailBox } from '../style/FirmStyle';
import { EvolutionRow, EvolutionTableContainer } from '../style/EvolutionStyle';
import getLang from '../../../lang/Lang';
import { DetailBoxTitle } from '../../../components/detail/BoxTitle';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import Link from 'next/link';
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { loggedState } from '@/storage/AppAtom';
import { DataPlaceholder } from '@/components/page/PageHelper';
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  BUTTON_COLOR_BLUE,
  SECONDARY_SUB,
  SECONDARY_SUB_DARK,
} from '@/../styles/BaseStyle';
import { isDevelopment } from '@/environment/Environment';
import { getRegistrationUrl } from '@/components/link/RegistrationLink';

function EvolutionItemRow(props: {
  odd: boolean;
  data: EvolutionData;
  showData: boolean;
}) {
  const [theme] = useRecoilState(appTheme);
  const { data } = props;

  return (
    <EvolutionRow>
      <TableCell
        style={{
          border: 'none',
          fontSize: '1.1rem',
          fontWeight: 600,
          background: props.odd
            ? theme
              ? SECONDARY_SUB
              : SECONDARY_SUB_DARK
            : theme
            ? BACKGROUND_COLOR
            : BACKGROUND_COLOR_DARK,
        }}
      >
        {data.year}
      </TableCell>

      <TableCell
        style={{
          border: 'none',
          fontSize: '1.1rem',
          background: props.odd
            ? theme
              ? SECONDARY_SUB
              : SECONDARY_SUB_DARK
            : theme
            ? BACKGROUND_COLOR
            : BACKGROUND_COLOR_DARK,
        }}
      >
        {props.showData ? (
          data.workerCount !== undefined && data.workerCount
        ) : (
          <DataPlaceholder rows={1} />
        )}
      </TableCell>

      {
        // todo vz this style is repeated, it should not use a component
      }
      <TableCell
        style={{
          border: 'none',
          fontSize: '1.1rem',
          background: props.odd
            ? theme
              ? SECONDARY_SUB
              : SECONDARY_SUB_DARK
            : theme
            ? BACKGROUND_COLOR
            : BACKGROUND_COLOR_DARK,
        }}
      >
        {props.showData ? (
          data.revenue !== undefined && data.revenue
        ) : (
          <DataPlaceholder rows={1} />
        )}
      </TableCell>
    </EvolutionRow>
  );
}

export function Evolution(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);
  const [isUserLogged] = useRecoilState(loggedState);

  const showEvolution = isUserLogged || isDevelopment();

  return props.firmData.evolutionList === undefined ? null : (
    <FirmDetailBox id="firm-evolution">
      <DetailBoxTitle
        title={getLang(`firmDetail`, `evolutionTitle`)}
        icon="evolution.svg"
      />
      <EvolutionTableContainer>
        <TableContainer
          elevation={0}
          component={Paper}
          style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
          className="tableContainer"
        >
          <Table>
            <TableHead
              style={{
                background: theme ? SECONDARY_SUB : SECONDARY_SUB_DARK,
                border: 'none',
              }}
            >
              <TableRow>
                <TableCell>{getLang(`firmDetail`, `evolutionYear`)}</TableCell>
                <TableCell>
                  {getLang(`firmDetail`, `evolutionWorkerCount`)}
                </TableCell>
                <TableCell>
                  {getLang(`firmDetail`, `evolutionRevenue`)}
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {props.firmData.evolutionList.map(
                (evolutionData: EvolutionData, key: number) => (
                  <EvolutionItemRow
                    key={key}
                    odd={key % 2 !== 0}
                    data={evolutionData}
                    showData={showEvolution ?? false}
                  />
                ),
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </EvolutionTableContainer>
      <div>
        {!showEvolution && props.firmData.evolutionList.length > 0 && (
          <Link href={getRegistrationUrl()}>
            <Button
              size="small"
              variant="contained"
              style={{
                padding: '1.2rem 2rem',
                margin: `1.44rem 0`,
                background: BUTTON_COLOR_BLUE,
                color: '#FFF',
                fontWeight: 600,
                fontSize: '.93rem',
                borderRadius: '10px',
              }}
              disableElevation
            >
              {getLang(`button`, `registrationRequired`)}
            </Button>
          </Link>
        )}
      </div>
    </FirmDetailBox>
  );
}
