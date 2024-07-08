import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getHomeUrl(): string {
  return getLink(getLang(`link`, `home`));
}
