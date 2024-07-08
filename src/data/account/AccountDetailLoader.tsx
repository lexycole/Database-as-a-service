import { AccountData } from '@/components/account/AccountData';
import { ApiMethods } from '@/data/loader/ApiMethods';
import { api } from '@/data/loader/Api';

export function accountDetailLoader() {
  return api.get<AccountData>(
    ApiMethods.accountDetail,
    // prepareParams(query),
  );
}
