import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getAccountUrl(): string {
  return getLink(getLang(`link`, `account`));
}
