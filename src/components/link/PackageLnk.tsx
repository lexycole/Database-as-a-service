import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getPackageUrl(): string {
  return getLink(getLang(`link`, `package`));
}
