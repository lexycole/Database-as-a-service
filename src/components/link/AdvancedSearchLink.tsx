import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getAdvancedSearchUrl(): string {
  return getLink(getLang(`link`, `advancedSearch`));
}
