import * as React from 'react';
import { Dispatch } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
  Box,
} from '@material-ui/core';
import getLang from '../../../lang/Lang';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { InquiryButton } from '../component/InquiryButton';
import { faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PackageCalculateData } from '../PackageCalculateProps';
import { BlockContainer, FilterBlock } from '../style/PackageStyle';
import { FormatNumber, FormatPrice } from '../../../formatter/Formatter';
import { PackageResultBlockTitle } from '../component/PackageBlockTitle';
import { faPhoneAlt } from '@fortawesome/pro-solid-svg-icons';

type ResultBlockProps = {
  calculateResult: PackageCalculateData;
  setShowInquiry: Dispatch<boolean>;
};

export function ResultBlock(props: ResultBlockProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <FilterBlock t={theme}>
      {props.calculateResult.total ? (
        <>
          <PackageResultBlockTitle
            title={`${getLang('package', 'resultCount')} :`}
            count={props.calculateResult.total}
          />
          <BlockContainer t={theme}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell> </TableCell>
                    <TableCell align="center">
                      <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
                    </TableCell>
                    <TableCell align="center">
                      <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </TableCell>
                    <TableCell align="center">
                      <FontAwesomeIcon icon={faGlobe} size="2x" />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell align="left">
                      <Box fontWeight={700} fontSize="1rem">
                        {getLang(`package`, `firmWithContact`)}
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box fontWeight={700} fontSize="1rem">
                        {FormatNumber(props.calculateResult.phoneCount)}
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box fontWeight={700} fontSize="1rem">
                        {FormatNumber(props.calculateResult.emailCount)}
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box fontWeight={700} fontSize="1rem">
                        {FormatNumber(props.calculateResult.wwwCount)}
                      </Box>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <Box fontWeight={700} fontSize="1rem">
                        {getLang(`package`, `firmContactCount`)}
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box fontWeight={700} fontSize="1rem">
                        {FormatNumber(props.calculateResult.phoneSum)}
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box fontWeight={700} fontSize="1rem">
                        {FormatNumber(props.calculateResult.emailSum)}
                      </Box>
                    </TableCell>
                    <TableCell align="center">
                      <Box fontWeight={700} fontSize="1rem">
                        {FormatNumber(props.calculateResult.wwwSum)}
                      </Box>
                    </TableCell>
                  </TableRow>
                </TableBody>
                {props.calculateResult.price && (
                  <TableFooter>
                    <TableRow>
                      <TableCell align="left">
                        <Box fontWeight={800} fontSize="1.3rem">
                          {getLang(`package`, `packagePrice`)}
                        </Box>
                      </TableCell>
                      <TableCell align="center">
                        <Box fontWeight={800} fontSize="1.3rem">
                          {FormatPrice(props.calculateResult.price)}
                        </Box>
                      </TableCell>
                      <TableCell colSpan={2} />
                    </TableRow>
                  </TableFooter>
                )}
              </Table>
            </TableContainer>
            <div style={{ marginTop: '2rem' }}>
              <InquiryButton setShowInquiry={props.setShowInquiry} />
            </div>
          </BlockContainer>
        </>
      ) : (
        <h2>{getLang(`package`, `resultCountZero`)}</h2>
      )}
    </FilterBlock>
  );
}
