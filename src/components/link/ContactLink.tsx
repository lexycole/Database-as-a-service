import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getContactUrl(): string {
  return getLink(getLang(`link`, `contact`));
}
