import * as React from 'react';
import { TableContainerStyled } from '@/view/firm/style/SimilarStyle';
import {
  TableRowDetail,
  TableRowDetailLabelBold,
} from '@/components/detail/DetailRow';
import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  Grid,
  Container,
  withStyles,
} from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { DetailBoxTitle } from '@/components/detail/BoxTitle';
import { FirmLink } from '@/components/link/FirmLink';
import { CountryValue } from '@/components/address/AddressValue';
import JobsHeaderTitle from './JobsHeaderTitle';
import MuiTableCell from '@material-ui/core/TableCell';
import { BOX_TITLE_BACKGROUND, DARK_COLOR } from '@/../styles/BaseStyle';

const TableCell = withStyles({
  root: {
    borderBottom: 'none',
  },
})(MuiTableCell);

export default function JobsWrapper() {
  const [theme] = useRecoilState(appTheme);

  return (
    <Container>
      <JobsHeaderTitle />
      <Grid container spacing={5}>
        <Grid item xs={12} md={7} lg={8}>
          <div style={{ marginTop: '-9px' }} />
          <DetailBoxTitle title="Základní informace" />
          <TableContainerStyled t={Boolean(theme)}>
            <TableContainer className="tableContainer">
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TableRowDetail>
                        <span className="label">label</span>
                        <span className="value">value</span>
                      </TableRowDetail>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetail>
                        <span className="label">link example</span>
                        <span className="value">
                          <FirmLink
                            uid="8607843057"
                            id="8607843057"
                            name="DHO"
                          />
                        </span>
                      </TableRowDetail>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetail>
                        <span className="label">country example</span>
                        <span className="value">
                          <CountryValue
                            includeCountry
                            addressData={{
                              countryCode: 'cz',
                              country: 'Česká republika',
                              region: '',
                              address: '',
                              city: ``,
                            }}
                          />
                        </span>
                      </TableRowDetail>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainerStyled>

          <DetailBoxTitle title="Základní informace" />
          <TableContainerStyled t={Boolean(theme)}>
            <TableContainer
              elevation={0}
              component={Paper}
              className="tableContainer"
            >
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TableRowDetail>
                        <span className="label">label</span>
                        <span className="value">value</span>
                      </TableRowDetail>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetail>
                        <span className="label">link example</span>
                        <span className="value">
                          <FirmLink
                            uid="8607843057"
                            id="8607843057"
                            name="DHO"
                          />
                        </span>
                      </TableRowDetail>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetail>
                        <span className="label">country example</span>
                        <span className="value">
                          <CountryValue
                            includeCountry
                            addressData={{
                              countryCode: 'cz',
                              country: 'Česká republika',
                              region: '',
                              address: '',
                              city: ``,
                            }}
                          />
                        </span>
                      </TableRowDetail>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainerStyled>

          <DetailBoxTitle title="Základní informace" />
          <TableContainerStyled t={Boolean(theme)}>
            <TableContainer
              elevation={0}
              component={Paper}
              className="tableContainer"
            >
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TableRowDetail>
                        <span className="label">label</span>
                        <span className="value">value</span>
                      </TableRowDetail>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetail>
                        <span className="label">link example</span>
                        <span className="value">
                          <FirmLink
                            uid="8607843057"
                            id="8607843057"
                            name="DHO"
                          />
                        </span>
                      </TableRowDetail>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetail>
                        <span className="label">country example</span>
                        <span className="value">
                          <CountryValue
                            includeCountry
                            addressData={{
                              countryCode: 'cz',
                              country: 'Česká republika',
                              region: '',
                              address: '',
                              city: ``,
                            }}
                          />
                        </span>
                      </TableRowDetail>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainerStyled>
        </Grid>

        {/* Side Component */}
        <Grid item xs={12} md={5} lg={4}>
          <div style={{ marginTop: '-9px' }} />
          <DetailBoxTitle
            bg={{
              light: BOX_TITLE_BACKGROUND,
              dark: DARK_COLOR,
            }}
            title="Základní informace"
          />
          <TableContainerStyled t={Boolean(theme)}>
            <TableContainer className="tableContainer">
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TableRowDetailLabelBold>
                        <span className="label">label</span>
                        <span className="value">value</span>
                      </TableRowDetailLabelBold>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetailLabelBold>
                        <span className="label">link example</span>
                        <span className="value">
                          <FirmLink
                            uid="8607843057"
                            id="8607843057"
                            name="DHO"
                          />
                        </span>
                      </TableRowDetailLabelBold>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetailLabelBold>
                        <span className="label">country example</span>
                        <span className="value">
                          <CountryValue
                            includeCountry
                            addressData={{
                              countryCode: 'cz',
                              country: 'Česká republika',
                              region: '',
                              address: '',
                              city: ``,
                            }}
                          />
                        </span>
                      </TableRowDetailLabelBold>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetailLabelBold>
                        <span className="label">country example</span>
                        <span className="value">
                          <CountryValue
                            includeCountry
                            addressData={{
                              countryCode: 'cz',
                              country: 'Česká republika',
                              region: '',
                              address: '',
                              city: ``,
                            }}
                          />
                        </span>
                      </TableRowDetailLabelBold>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetailLabelBold>
                        <span className="label">country example</span>
                        <span className="value">
                          <CountryValue
                            includeCountry
                            addressData={{
                              countryCode: 'cz',
                              country: 'Česká republika',
                              region: '',
                              address: '',
                              city: ``,
                            }}
                          />
                        </span>
                      </TableRowDetailLabelBold>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetailLabelBold>
                        <span className="label">country example</span>
                        <span className="value">
                          <CountryValue
                            includeCountry
                            addressData={{
                              countryCode: 'cz',
                              country: 'Česká republika',
                              region: '',
                              address: '',
                              city: ``,
                            }}
                          />
                        </span>
                      </TableRowDetailLabelBold>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetailLabelBold>
                        <span className="label">country example</span>
                        <span className="value">
                          <CountryValue
                            includeCountry
                            addressData={{
                              countryCode: 'cz',
                              country: 'Česká republika',
                              region: '',
                              address: '',
                              city: ``,
                            }}
                          />
                        </span>
                      </TableRowDetailLabelBold>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainerStyled>

          <DetailBoxTitle
            bg={{
              light: BOX_TITLE_BACKGROUND,
              dark: DARK_COLOR,
            }}
            title="Základní informace"
          />
          <TableContainerStyled t={Boolean(theme)}>
            <TableContainer className="tableContainer">
              <Table aria-label="simple table">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <TableRowDetailLabelBold>
                        <span className="label">label</span>
                        <span className="value">value</span>
                      </TableRowDetailLabelBold>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetailLabelBold>
                        <span className="label">link example</span>
                        <span className="value">
                          <FirmLink
                            uid="8607843057"
                            id="8607843057"
                            name="DHO"
                          />
                        </span>
                      </TableRowDetailLabelBold>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableRowDetailLabelBold>
                        <span className="label">country example</span>
                        <span className="value">
                          <CountryValue
                            includeCountry
                            addressData={{
                              countryCode: 'cz',
                              country: 'Česká republika',
                              region: '',
                              address: '',
                              city: ``,
                            }}
                          />
                        </span>
                      </TableRowDetailLabelBold>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </TableContainerStyled>
        </Grid>
      </Grid>
    </Container>
  );
}
