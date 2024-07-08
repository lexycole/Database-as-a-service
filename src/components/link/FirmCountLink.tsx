import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getFirmCountUrl(): string {
  return getLink(getLang(`link`, `firmCount`));
}
