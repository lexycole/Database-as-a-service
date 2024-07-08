import * as React from 'react';
import { useEffect, useState } from 'react';
import { Paper, Table, TableBody, TableContainer } from '@material-ui/core';
import { CommonShareList, FirmData, ShareData } from '../FirmProps';
import getLang from '../../../lang/Lang';

import { GraphData } from '../../../components/graph/GraphProps';
import { DetailBoxSubTitle } from '../../../components/detail/BoxTitle';
import { BoxRows } from '../../../components/detail/BoxStyle';
import { useRecoilState } from 'recoil';
import { appTheme } from '@/storage/ThemeAtom';
import { TableContainerStyled } from '@/view/firm/style/SimilarStyle';
import {
  BasicShareItem,
  CommonShareItem,
  ShareItem,
  StocksShareItem,
} from './ShareRows';
import { ShareRowsContainer } from '../style/ShareStyle';

export function Share(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);
  const [data, setData] = useState<GraphData[]>([]);
  const loading = data.length === 0;

  const { shareList } = props.firmData.authority;

  useEffect(() => {
    if (shareList !== undefined && shareList.partner !== undefined) {
      const graphData: GraphData[] = [];
      shareList.partner.map((item: ShareData) => {
        graphData.push({
          id: item.name,
          label: item.name,
          value: item.shareValueRaw,
        });
      });
      setData(graphData);
    }
  }, [loading]);

  return shareList === undefined ? null : (
    <>
      <DetailBoxSubTitle title={getLang(`firmDetail`, `shareTitle`)} />
      <BoxRows t={Boolean(theme)} noPadding>
        <ShareRowsContainer>
          <TableContainerStyled t={Boolean(theme)}>
            <TableContainer
              elevation={0}
              component={Paper}
              style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
              className="tableContainer"
            >
              <Table>
                {shareList.partner && (
                  <TableBody className="share-type-partner">
                    {shareList.partner.map((item: ShareData, key: number) => (
                      <ShareItem key={key} {...item} />
                    ))}
                  </TableBody>
                )}
                {shareList.commonShare && (
                  <TableBody className="share-type-common">
                    {shareList.commonShare.map(
                      (item: CommonShareList, key: number) => (
                        <CommonShareItem key={key} {...item} />
                      ),
                    )}
                  </TableBody>
                )}
                {shareList.stocks && (
                  <TableBody className="share-type-stocks">
                    {shareList.stocks.map((item: ShareData, key: number) => (
                      <StocksShareItem key={key} {...item} />
                    ))}
                  </TableBody>
                )}
                {shareList.basic && (
                  <TableBody className="share-type-basic">
                    {shareList.basic.map((item: ShareData, key: number) => (
                      <BasicShareItem key={key} {...item} />
                    ))}
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </TableContainerStyled>
        </ShareRowsContainer>
      </BoxRows>

      {
        // todo vz for future use
      }
      {/* {!loading && <ShareGraph data={data} />} */}
    </>
  );
}
