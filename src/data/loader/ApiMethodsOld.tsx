import { IQuery } from '../DataLoaderProps';

export function prepareParams(query: IQuery) {
  // todo vz pridat token !!
  return JSON.stringify(query);
}

export enum ApiMethodsOld {
  // address
  localityAutocomplete = `localityAutocomplete`,

  // person
  personDetail = `personDetail`,

  // firm
  firmDetail = `firmDetail`,
  similarFirmList = `similarFirmList`,
  firmResult = `firmResult`, // todo vz seznam

  // product
  productDetail = `productDetail`,

  // phone
  phoneDetail = `phoneDetail`,
  phoneCommentFormOptions = `phoneCommentFormOptions`,
  phoneCommentForm = `phoneCommentForm`,
  phone = `phone`,

  // search
  autocompleteList = `autocompleteList`,
  advancedSearch = `advancedSearch`,

  // top search
  topSearchFirm = `topSearchFirm`,
  topSearchPerson = `topSearchPerson`,
  topSearchPhone = `topSearchPhone`,
  latestPhone = `latestPhone`,

  // package
  packageData = `packageData`,
  packageEconomicData = `packageEconomicData`,
  packageCalculate = `packageCalculate`,
  sendPackageInquiry = `sendPackageInquiry`,

  // account
  lostPassword = `lostPassword`,
  newPassword = `newPassword`,
  changePassword = `changePassword`,
  registration = `registration`,

  // article
  articleDetail = `articleDetail`,
}

export type ApiMethodType = keyof typeof ApiMethodsOld;
