export type AccountData = {
  customer: {
    name: string;
    adminEmail?: string;
    adminPhone?: string;
    firmUid?: string;
    firmName?: string;
    idNumber?: string;
  };
  user: {
    login: string;
    email?: string;
    phone?: string;
  };
};
