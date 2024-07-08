import * as React from 'react';
import { Grid } from '@material-ui/core';
import { ContactData, FirmData } from '../FirmProps';
import { ContactRow } from '../style/ContactStyle';
import {
  ContactType,
  ContactTypes,
} from '../../../components/contact/ContactType';
import { BoxRows, ContactTitle } from '../../../components/detail/BoxStyle';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import getLang from '@/lang/Lang';
import { UcFirst } from '@/formatter/Formatter';
import {
  WebImageContainer,
  WebImageData,
} from '@/view/firm/detail/WebImageContainer';
import {
  ContactIconByType,
  ContactLink,
  ContactLinkProps,
} from '@/components/contact/ContactLink';

function ContactItem(props: ContactLinkProps) {
  const [theme] = useRecoilState(appTheme);

  return (
    <ContactRow t={theme}>
      <span className="content">
        <ContactLink {...props} />
      </span>
    </ContactRow>
  );
}

function ContactByType(props: {
  type: ContactType;
  contactData: ContactData[];
}) {
  return (
    <>
      {props.contactData.map((item: ContactData, key) => (
        <ContactItem key={key} type={props.type} contactData={item} />
      ))}
    </>
  );
}

function ContactBlockByType(props: {
  type: ContactType;
  contactData: ContactData[];
}) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <ContactTitle>
        <span style={{ marginRight: '10px' }}>
          <ContactIconByType type={props.type} />
        </span>
        {getLang(`firmDetail`, `contactType${UcFirst(props.type)}`)}
      </ContactTitle>
      {props.contactData.length && (
        <ContactRow>
          <ContactByType type={props.type} contactData={props.contactData} />
        </ContactRow>
      )}
    </Grid>
  );
}

export function Contact(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);

  const { contactList } = props.firmData.contact;

  if (contactList === undefined) {
    return null;
  }
  const WebImages: WebImageData[] = [];
  if (contactList.www) {
    contactList.www.map((item: ContactData) => {
      if (item.webImage) {
        const imgData: WebImageData = {
          url: item.contact,
          image: item.webImage,
        };
        WebImages.push(imgData);
      }
    });
  }

  return (
    <>
      <BoxRows t={Boolean(theme)} padding>
        <Grid container spacing={0}>
          {contactList.phone !== undefined && (
            <ContactBlockByType
              type={ContactTypes.phone}
              contactData={contactList.phone}
            />
          )}
          {contactList.email !== undefined && (
            <ContactBlockByType
              type={ContactTypes.email}
              contactData={contactList.email}
            />
          )}
          {contactList.www !== undefined && (
            <ContactBlockByType
              type={ContactTypes.www}
              contactData={contactList.www}
            />
          )}
          {contactList.fax !== undefined && (
            <ContactBlockByType
              type={ContactTypes.fax}
              contactData={contactList.fax}
            />
          )}
        </Grid>
      </BoxRows>

      {WebImages.length > 0 && <WebImageContainer data={WebImages} />}
    </>
  );
}
