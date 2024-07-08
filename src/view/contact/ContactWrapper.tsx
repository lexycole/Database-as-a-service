import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/pro-solid-svg-icons';
import getLang from '../../lang/Lang';
import { ContentWrapper } from '../ContentWrapper';
import {
  ContactBlock,
  ContactContainer,
  ContactTitle,
} from './style/ContactStyle';

export function ContactWrapper() {
  return (
    <ContentWrapper title={getLang(`contact`, `title`)}>
      <ContactContainer>
        <ContactBlock>
          <ContactTitle>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            {getLang(`contact`, `register`)}
          </ContactTitle>
          <div>DHO s.r.o.</div>
          <div>Bořivojova 878/35</div>
          <div>130 00 Praha 3</div>
        </ContactBlock>
        <ContactBlock>
          <ContactTitle>
            <FontAwesomeIcon icon={faEnvelope} />
            {getLang(`contact`, `email`)}
          </ContactTitle>
          <div>info@expanzo.com</div>
        </ContactBlock>
        {/* <SendioForm/> */}
      </ContactContainer>
    </ContentWrapper>
  );
}
