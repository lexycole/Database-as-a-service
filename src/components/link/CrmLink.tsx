import { getExternalLink } from './LinkProps';
import getLang from '../../lang/Lang';

export function getCrmUrl(): string {
  return getExternalLink(getLang(`link`, `crm`));
}
