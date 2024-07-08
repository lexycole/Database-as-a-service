import { getExternalLink } from './LinkProps';
import getLang from '../../lang/Lang';

export function getEshopUrl(): string {
  return getExternalLink(getLang(`link`, `eshop`));
}
