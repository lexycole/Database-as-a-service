import * as React from 'react';
import getLang from '../../lang/Lang';
import { useRecoilState } from 'recoil';
import Link from 'next/link';
import { appTheme } from '@/storage/ThemeAtom';
import Spacer from '@/components/utils/Spacer';
import { ContentWrapper } from '../ContentWrapper';
import { Container, Button } from '@material-ui/core';
import { DescriptionText } from './style/DatabaseFirmStyles';
import { DatabaseFirmCardContainer } from '@/view/databaseFirm/DatabaseFirmCardContainer';
import { DatabaseFirmWorld } from '@/view/databaseFirm/DatabaseFirmWorld';
import { DatabaseFirmContains } from '@/view/databaseFirm/DatabaseFirmContains';
import { DatabaseFirmBenefits } from '@/view/databaseFirm/DatabaseFirmBenefits';
import { DatabaseFirmServices } from '@/view/databaseFirm/DatabaseFirmServices';
import { getPackageUrl } from '@/components/link/PackageLnk';

export function DatabaseFirmWrapper() {
  const [theme] = useRecoilState(appTheme);

  return (
    <ContentWrapper
      icon={<img className="w-[50px]" src="/img/category/firm.svg" alt="" />}
      title={getLang(`databaseFirm`, `title`)}
    >
      <Container>
        <div className="flex items-center justify-center">
          <DescriptionText>
            {getLang(`databaseFirm`, `description`)}
          </DescriptionText>
        </div>
        <Spacer t="30px" />

        <DatabaseFirmCardContainer theme={Boolean(theme)} />
        <DatabaseFirmWorld theme={Boolean(theme)} />
        <DatabaseFirmContains theme={Boolean(theme)} />
        <DatabaseFirmBenefits theme={Boolean(theme)} />
        <DatabaseFirmServices theme={Boolean(theme)} />

        <Link href={getPackageUrl()}>
          <Button
            color="primary"
            variant="contained"
            disableElevation
            size="large"
            style={{
              marginTop: '2rem',
              padding: '1.2rem 3rem',
              borderRadius: 10,
              background: '#000',
              color: '#fff',
              textTransform: 'uppercase',
            }}
          >
            {getLang(`databaseFirm`, `inquiry`)}
          </Button>
        </Link>
        <div className="h-[40px]" />
      </Container>
    </ContentWrapper>
  );
}
