import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getSearchUrl(): string {
  return getLink(getLang(`link`, `search`));
}
