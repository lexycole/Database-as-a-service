import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getLoginUrl(): string {
  return getLink(getLang(`link`, `login`));
}
