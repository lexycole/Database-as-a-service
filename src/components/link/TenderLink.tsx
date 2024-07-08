import { getLink } from './LinkProps';
import getLang from '../../lang/Lang';

export function getTenderUrl(): string {
  return getLink(getLang(`link`, `tender`));
}
