import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getRegistrationUrl(): string {
  return getLink(getLang(`link`, `registration`));
}
