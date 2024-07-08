import { getLink } from './LinkProps';
import getLang from '../../lang/Lang';

export function getOpenDataUrl(): string {
  return getLink(getLang(`link`, `openData`));
}
