import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getAccountDataChangeUrl(): string {
  return getLink(getLang(`link`, `accountDataChange`));
}
