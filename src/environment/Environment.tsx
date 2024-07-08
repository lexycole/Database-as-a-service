export const UseProduct = process.env.NEXT_PUBLIC_USE_PRODUCT === `1`;
export const UsePhone = process.env.NEXT_PUBLIC_USE_PHONE === `1`;
export const UseJobs = process.env.NEXT_PUBLIC_USE_JOBS === `1`;
export const UseTender = process.env.NEXT_PUBLIC_USE_TENDER === `1`;

export const UseCompanyEvaluation =
  process.env.NEXT_PUBLIC_USE_COMPANY_EVALUATION === `1`;
export const UsePreferredCompany =
  process.env.NEXT_PUBLIC_USE_PREFERRED_COMPANY === `1`;
export const UseCompanyDataEdit =
  process.env.NEXT_PUBLIC_USE_COMPANY_EDIT === `1`;

export const ShowCrm = true;
export const ShowOpenData = true;

export function getApiUrlOld(): string {
  return `${process.env.NEXT_PUBLIC_API_URL}/api/v1/crm/`;
}

export function getApiUrl(): string {
  return `${process.env.NEXT_PUBLIC_API_URL}/api/v1/`;
}

export function isDevelopment(): boolean {
  return process.env.NODE_ENV === `development`;
}

export function isClientSide(): boolean {
  return typeof window === `object` || typeof window !== `undefined`;
}
