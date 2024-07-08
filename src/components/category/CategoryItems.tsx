import getLang from '@/lang/Lang';
import {
  ShowCrm,
  ShowOpenData,
  UseJobs,
  UsePhone,
  UseProduct,
  UseTender,
} from '@/environment/Environment';
import { getProductUrl } from '@/components/link/ProductLink';
import { getPhonesUrl } from '@/components/link/PhoneLink';
import { getCrmUrl } from '@/components/link/CrmLink';
import { getOpenDataUrl } from '@/components/link/OpenDataLink';
import { getJobsUrl } from '@/components/link/JobsLink';
import { getTenderUrl } from '@/components/link/TenderLink';
import { getEshopUrl } from '@/components/link/EshopLink';
import { getDatabaseFirmUrl } from '@/components/link/FirmLink';
import { ReactNode } from 'react';
import { IconThemeProps } from '@/components/icon/IconWrapper';

export type CategoryItem = {
  link: string;
  icon: React.ReactElement | string | ((props: IconThemeProps) => ReactNode);
  title: string;
  description: string;
  enabled: boolean;
  newWindow: boolean;
};

export function FirmDatabaseCategoryItem(): CategoryItem {
  return {
    enabled: true,
    link: getDatabaseFirmUrl(),
    // icon: FirmIcon,
    icon: (
      <img width="70px" height="70px" src="/img/category/firm.svg" alt="." />
    ),
    title: getLang(`category`, `firmTitle`),
    description: getLang(`category`, `firmDescription`),
    newWindow: false,
  };
}

export function PhoneCategoryItem(): CategoryItem {
  return {
    enabled: UsePhone,
    link: getPhonesUrl(),
    // icon: PhoneIcon,
    icon: (
      <img width="70px" height="70px" src="/img/category/phone.svg" alt="." />
    ),
    title: getLang(`category`, `phoneTitle`),
    description: getLang(`category`, `phoneDescription`),
    newWindow: false,
  };
}

export function CrmCategoryItem(): CategoryItem {
  return {
    enabled: ShowCrm,
    link: getCrmUrl(),
    // icon: CrmIcon,
    icon: (
      <img width="70px" height="70px" src="/img/category/crm.svg" alt="." />
    ),
    title: getLang(`category`, `crmTitle`),
    description: getLang(`category`, `crmDescription`),
    newWindow: true,
  };
}

export function OpenDataCategoryItem(): CategoryItem {
  return {
    enabled: ShowOpenData,
    link: getOpenDataUrl(), // temporary URL
    // icon: GdprIcon,
    icon: (
      <img width="70px" height="70px" src="/img/category/gdpr.svg" alt="." />
    ),
    title: getLang(`category`, `openDataTitle`),
    description: getLang(`category`, `openDataDescription`),
    newWindow: false,
  };
}

export function ProductCategoryItem(): CategoryItem {
  return {
    enabled: UseProduct,
    link: getProductUrl(),
    // icon: ProductIcon,
    icon: (
      <img
        width="100px"
        height="100px"
        src="/img/category/product.svg"
        alt="."
      />
    ),
    title: getLang(`category`, `productTitle`),
    description: getLang(`category`, `productDescription`),
    newWindow: false,
  };
}

export function JobsCategoryItem(): CategoryItem {
  return {
    enabled: UseJobs,
    link: getJobsUrl(), // temporary URL
    // icon: JobsIcon,
    icon: (
      <img width="70px" height="70px" src="/img/category/jobs.svg" alt="." />
    ),
    title: getLang(`category`, `jobsTitle`),
    description: getLang(`category`, `jobsDescription`),
    newWindow: false,
  };
}

export function TenderCategoryItem(): CategoryItem {
  return {
    enabled: UseTender,
    link: getTenderUrl(), // temporary URL
    // icon: TenderIcon,
    icon: (
      <img
        width="100px"
        height="100px"
        src="/img/category/tender.svg"
        alt="."
      />
    ),
    title: getLang(`category`, `tenderTitle`),
    description: getLang(`category`, `tenderDescription`),
    newWindow: false,
  };
}

export function EshopDatabaseCategoryItem(): CategoryItem {
  return {
    enabled: true,
    link: getEshopUrl(), // temporary URL
    icon: (
      <img width="70px" height="70px" src="/img/category/eshop.png" alt="." />
    ),
    title: getLang(`category`, `eshopTitle`),
    description: getLang(`category`, `eshopDescription`),
    newWindow: true,
  };
}
