export enum ContactTypes {
  phone = `phone`,
  email = `email`,
  www = `www`,
  fax = `fax`,
  dataBox = 'dataBox',
}

export type ContactType = keyof typeof ContactTypes;
