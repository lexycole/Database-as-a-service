import * as React from 'react';
import { ContactType, ContactTypes } from '@/components/contact/ContactType';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faFax,
  faGlobe,
  faPhoneAlt,
} from '@fortawesome/pro-solid-svg-icons';
import { ContactData } from '@/view/firm/FirmProps';

import Link from 'next/link';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import {
  LIGHT_LINK_COLOR,
  LIGHT_LINK_COLOR_DARK,
  PRIMARY_TEXT_COLOR,
  PRIMARY_TEXT_COLOR_DARK,
} from '../../../styles/BaseStyle';
import { LinkStyled } from '../link/WebLink';

export type ContactLinkProps = { type: ContactType; contactData: ContactData };

function EncodeStringToHtmlChar(contactValue: string): string {
  return contactValue.replace(
    /[\u00A0-\u9999<>&]/g,
    (i) => `&#${i.charCodeAt(0)};`,
  );
}

function ContactUrlByType(props: ContactLinkProps): string {
  switch (props.type.toString()) {
    case ContactTypes.phone: {
      return `tel:${props.contactData?.contact}`;
    }
    case ContactTypes.email: {
      return `mailto:${EncodeStringToHtmlChar(props.contactData?.contact)}`;
    }
    case ContactTypes.www: {
      return `http://${props.contactData.contact.replace(`\\w{3,5}://i`, ``)}`; // todo vz use standard for link
    }
    case ContactTypes.fax: {
      return `fax:${props.contactData.contact}`;
    }
    default:
      return `/`;
  }
}

export function ContactLink(props: ContactLinkProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <Link href={ContactUrlByType(props)}>
      <LinkStyled
        style={{
          width: '100%',
          color: theme ? PRIMARY_TEXT_COLOR : PRIMARY_TEXT_COLOR_DARK,
          textDecorationColor: theme ? LIGHT_LINK_COLOR : LIGHT_LINK_COLOR_DARK,
        }}
        target="_blank"
      >
        <div
          className="content-text"
          style={{
            color: theme ? LIGHT_LINK_COLOR : LIGHT_LINK_COLOR_DARK,
            fontSize: '1.2rem',
          }}
        >
          {props.contactData.contact}
        </div>
      </LinkStyled>
    </Link>
  );
}

export function ContactIconByType(props: { type: ContactType }) {
  switch (props.type.toString()) {
    case ContactTypes.phone: {
      return <FontAwesomeIcon icon={faPhoneAlt} />;
    }
    case ContactTypes.email: {
      return <FontAwesomeIcon icon={faEnvelope} />;
    }
    case ContactTypes.www: {
      return <FontAwesomeIcon icon={faGlobe} />;
    }
    case ContactTypes.fax: {
      return <FontAwesomeIcon icon={faFax} />;
    }
    default:
      return <></>;
  }
}
