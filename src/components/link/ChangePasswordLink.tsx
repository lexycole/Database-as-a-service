import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getChangePasswordUrl(): string {
  return getLink(getLang(`link`, `changePassword`));
}
