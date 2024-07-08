import { getLink } from './LinkProps';
import getLang from '../../lang/Lang';

export function getJobsUrl(): string {
  return getLink(getLang(`link`, `jobs`));
}
