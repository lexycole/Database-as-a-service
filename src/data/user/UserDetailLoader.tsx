import { ApiMethods } from '../loader/ApiMethods';
import { JsonApiResult } from '../DataType';
import { UserData } from '../../components/user/UserData';
import { api } from '../loader/Api';

export type UserDetailResult = JsonApiResult & {
  isUserLogged: boolean;
  userData: UserData;
  allowedApplication: string[];
};

export function userDetailLoader() {
  return api.get<UserDetailResult>(ApiMethods.userDetail);
}
