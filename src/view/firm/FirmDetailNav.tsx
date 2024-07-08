import * as React from 'react';
import {
  faBoxOpen,
  faChartBar,
  faFileAlt,
  faInfoCircle,
  faUserGraduate,
  faWrench,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Button, styled } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FirmData } from './FirmProps';
import getLang from '../../lang/Lang';
import { appTheme } from '@/storage/ThemeAtom';
import { useRecoilState } from 'recoil';
import {
  BACKGROUND_COLOR,
  BACKGROUND_COLOR_DARK,
  SECONDARY_BORDER_COLOR,
  SECONDARY_BORDER_COLOR_DARK,
} from '@/../styles/BaseStyle';
import { faPhoneAlt } from '@fortawesome/pro-solid-svg-icons';

type FirmDetailNavProps = {
  id: string;
  langKey: string;
  list: string;
  icon: IconDefinition;
  isFirstItem?: boolean;
};

const FirmDetailNavItems: FirmDetailNavProps[] = [
  {
    id: `firm-contact`,
    langKey: `contactGroupTitle`,
    list: `contact`,
    icon: faPhoneAlt,
  },
  {
    id: `firm-register`,
    langKey: `registerTitle`,
    list: `registerList`,
    icon: faFileAlt,
  },
  {
    id: `firm-authority`,
    langKey: `authorityGroupTitle`,
    list: `authority`,
    icon: faUserGraduate,
  },
  {
    id: `firm-business`,
    langKey: `businessGroupTitle`,
    list: `business`,
    icon: faWrench,
  },
  {
    id: `firm-evolution`,
    langKey: `evolutionTitle`,
    list: `evolutionList`,
    icon: faChartBar,
  },
  {
    id: `firm-other-fact`,
    langKey: `otherFactTitle`,
    list: `otherFactList`,
    icon: faInfoCircle,
  },
  {
    id: `firm-offer`,
    langKey: `offerGroupTitle`,
    list: `offer`,
    icon: faBoxOpen,
  },
];

const ScrollToButton = styled(Button)({
  height: 38,
  fontSize: 14,
  minWidth: 130,
  padding: '0 20px',
  boxShadow: 'none',
  borderBottom: 'none',
  borderRadius: '3px 3px 0px 0px !important',
});

function FirmDetailNavButton({ isFirstItem, ...item }: FirmDetailNavProps) {
  const [theme] = useRecoilState(appTheme);

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    const anchor = (
      (event.currentTarget as HTMLButtonElement).ownerDocument || document
    ).querySelector(`#${event.currentTarget.value}`);

    if (anchor) {
      anchor.scrollIntoView({ behavior: `smooth`, block: `start` });
    }
  };
  return (
    <ScrollToButton
      value={item.id}
      onClick={handleChange}
      style={{
        flex: 1,
        padding: '30px 10px',
        borderRadius: 0,
        borderLeft: isFirstItem
          ? 'none'
          : theme
          ? `1px solid ${SECONDARY_BORDER_COLOR}`
          : `1px solid ${SECONDARY_BORDER_COLOR_DARK}`,
      }}
      size="large"
      startIcon={<FontAwesomeIcon icon={item.icon} />}
    >
      {getLang(`firmDetail`, item.langKey).substring(0, 20)}
    </ScrollToButton>
  );
}

export function FirmDetailNav(props: { firmData: FirmData }) {
  const [theme] = useRecoilState(appTheme);

  return (
    <div
      style={{
        top: 75,
        zIndex: 10,
        display: 'flex',
        position: 'sticky',
        borderRadius: '10px',
        border: theme
          ? `1px solid ${SECONDARY_BORDER_COLOR}`
          : `1px solid ${SECONDARY_BORDER_COLOR_DARK}`,
        background: theme ? BACKGROUND_COLOR : BACKGROUND_COLOR_DARK,
      }}
    >
      {FirmDetailNavItems.map((item: FirmDetailNavProps, key: number) =>
        item.list !== undefined &&
        Object.prototype.hasOwnProperty.call(props.firmData, item.list) ? (
          <FirmDetailNavButton isFirstItem={key === 0} key={key} {...item} />
        ) : null,
      )}
    </div>
  );
}
