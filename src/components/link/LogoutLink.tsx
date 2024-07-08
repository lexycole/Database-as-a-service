import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getLogoutUrl(): string {
  return getLink(getLang(`link`, `logout`));
}
