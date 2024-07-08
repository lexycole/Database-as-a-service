import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getServicesUrl(): string {
  return getLink(getLang(`link`, `services`));
}
