export const DHO_REQUEST_TOKEN = `Dho-Request-Token`;
export const DHO_LOGIN_TOKEN = `Dho-Login-Token`;

export const DEFAULT_HOST = 'https:/portal.expanzo.com';

export enum ApiMethods {
  // account
  login = `login`,
  logout = `logout`,
  userDetail = `currentUser`,
  accountDetail = `account/accountDetail`,

  // token
  tokenRenew = `token/renew`,

  // address
  firmCountry = `firm/country/firmCountry`,
  localityCountry = `locality/country/localityCountry`,
  // getLocalityAutocomplete = "getLocalityAutocomplete",//old

  // person
  getPersonDetail = `person/detail/personDetail`, // todo vz zatim ne
  // getPersonResult         = "getPersonResult",//old  //todo vz seznam

  // firm
  firmName = `firm/name/firmName`,
  getFirmDetail = `firm/detail/firmDetail`, // todo vz zatim ne
  // getFirmDetail           = "getFirmDetailFull",
  // getSimilarFirmList      = "getSimilarFirmList", //old

  // product
  // getProductDetail        = "getProductDetail", //old

  // phone
  // getPhoneDetail          = "getPhoneDetail", //old

  // search
  // getAutocompleteList     = "getAutocompleteList", //old

  // package
  // getPackageData          = "getPackageData", //old
  // getPackageCalculate     = "getPackageCalculate", //old

  // firmCount
  firmCountryCount = `firm/countryCount/firmCountryCount`,
  firmCountryCountSum = `firm/countryCount/firmCountryCountSum`,
}

export type ApiMethodNewType = keyof typeof ApiMethods;
