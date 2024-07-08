import { getHomeUrl } from '../link/HomeLink';
import { getServicesUrl } from '../link/ServicesLink';
import { getPackageUrl } from '../link/PackageLnk';
import { getEshopUrl } from '../link/EshopLink';
import { getContactUrl } from '../link/ContactLink';
import { getPhonesUrl } from '../link/PhoneLink';
import { getTopSearchFirmUrl } from '../link/TopSearchLink';

// main
export const NavigationHome = `home`;
export const NavigationServices = `services`;
export const NavigationEshop = `eshop`;
export const NavigationPackage = `package`;

// footer
export const NavigationContact = `contact`;
export const NavigationPhone = `phone`;
export const NavigationTopSearch = `topSearch`;

export type NavigationItemType = {
  key: string;
  url: string;
  newWindow: boolean;
};

export const NavigationItems: NavigationItemType[] = [
  {
    key: NavigationHome,
    url: getHomeUrl(),
    newWindow: false,
  },
  {
    key: NavigationServices,
    url: getServicesUrl(),
    newWindow: false,
  },
  {
    key: NavigationPackage,
    url: getPackageUrl(),
    newWindow: false,
  },
  {
    key: NavigationEshop,
    url: getEshopUrl(),
    newWindow: true,
  },
];

export const FooterNavItems: NavigationItemType[] = [
  {
    key: NavigationContact,
    url: getContactUrl(),
    newWindow: false,
  },
  {
    key: NavigationPhone,
    url: getPhonesUrl(),
    newWindow: false,
  },
  {
    key: NavigationTopSearch,
    url: getTopSearchFirmUrl(),
    newWindow: false,
  },
];
