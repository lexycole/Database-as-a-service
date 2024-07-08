import getLang from '../../lang/Lang';
import { UcFirst } from '../../formatter/Formatter';
import { UsePhone, UseProduct } from '../../environment/Environment';

export const SearchMinChars = 3;
export const SearchDelay = 500; // 500 ms

export enum SearchCategories {
  all = `all`,
  firm = `firm`,
  phone = `phone`,
  product = `product`,
}

export type CategoryItem = {
  enabled: boolean;
  category: SearchCategoryType;
};

export const AvailableCategory: CategoryItem[] = [
  {
    enabled: true,
    category: SearchCategories.all,
  },
  {
    enabled: true,
    category: SearchCategories.firm,
  },
  {
    enabled: UsePhone,
    category: SearchCategories.phone,
  },
  {
    enabled: UseProduct,
    category: SearchCategories.product,
  },
];

export type SearchCategoryType = keyof typeof SearchCategories;

export function getCategoryName(category: SearchCategoryType | null): string {
  if (!category) {
    return '';
  }
  return getLang(`search`, `category${UcFirst(category)}`);
}

export type SearchQuery = {
  countryCode: string;
  term: string;
  category?: SearchCategoryType;
  city?: string;
  district?: string;
  region?: string;
  searchInactive?: boolean;
};
