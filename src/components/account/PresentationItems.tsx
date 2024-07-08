import getLang from '@/lang/Lang';
import {
  UseCompanyDataEdit,
  UseJobs,
  UsePreferredCompany,
} from '@/environment/Environment';
import { getCrmUrl } from '@/components/link/CrmLink';
import { CategoryItem } from '@/components/category/CategoryItems';

export function AdministrationFirmItem(): CategoryItem {
  return {
    enabled: UseCompanyDataEdit,
    link: getCrmUrl(), // temporary
    icon: <img width="50px" src="/img/category/jobs.svg" alt="." />,
    description: ``,
    title: getLang(`account`, `administrationFirm`),
    newWindow: false,
  };
}

export function AdministrationKeywordsItem(): CategoryItem {
  return {
    enabled: UsePreferredCompany,
    link: getCrmUrl(), // temporary
    icon: <img width="50px" src="/img/category/jobs.svg" alt="." />, // temporary
    description: ``,
    title: getLang(`account`, `administrationKeywords`),
    newWindow: false,
  };
}

export function AdministrationJobsItem(): CategoryItem {
  return {
    enabled: UseJobs,
    link: getCrmUrl(), // temporary
    icon: <img width="50px" src="/img/category/jobs.svg" alt="." />, // temporary
    description: ``,
    title: getLang(`account`, `administrationJobs`),
    newWindow: false,
  };
}
