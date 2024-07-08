export enum FormStatus {
  success = `success`,
  info = `info`,
  warning = `warning`,
  error = `error`,
}

export type FormStatusType = keyof typeof FormStatus;
