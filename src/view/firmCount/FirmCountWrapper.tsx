import * as React from 'react';
import { Button } from '@material-ui/core';
import Link from 'next/link';
import getLang from '../../lang/Lang';
import { FirmCountProps } from './FirmCountProps';
import { FirmCountTable } from './FirmCountTable';
import { FirmCountSum } from './FirmCountSum';
import { ContactInfoContainer } from './style/FirmCountStyle';
import { getContactUrl } from '../../components/link/ContactLink';
import { DataPlaceholder } from '../../components/page/PageHelper';
import { ContentWrapper } from '../ContentWrapper';
import { PRIMARY_BUTTON_TEXT_COLOR } from '../../../styles/BaseStyle';

function FirmCountAnnotation() {
  return <h3>{getLang(`firmCount`, `annotation`)}</h3>;
}

function ContactInfoBox() {
  return (
    <ContactInfoContainer>
      <span>{getLang(`firmCount`, `contactInfoText`)}</span>
      <Link href={getContactUrl()}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          style={{
            color: PRIMARY_BUTTON_TEXT_COLOR,
            padding: '0.7rem 1rem',
          }}
        >
          {getLang(`firmCount`, `contactUs`)}
        </Button>
      </Link>
    </ContactInfoContainer>
  );
}

export function FirmCountWrapper(props: FirmCountProps) {
  if (!props.firmCountryCount) {
    return <DataPlaceholder rows={10} />;
  }

  return (
    <ContentWrapper title={getLang(`firmCount`, `title`)}>
      <FirmCountSum {...props} />
      <FirmCountAnnotation />
      <ContactInfoBox />
      <FirmCountTable {...props} />
    </ContentWrapper>
  );
}
