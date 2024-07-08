import getLang from '../../lang/Lang';
import { getLink } from './LinkProps';

export function getLostPasswordUrl(): string {
  return getLink(getLang(`link`, `lostPassword`));
}

export function getNewPasswordUrl(): string {
  return getLink(getLang(`link`, `newPassword`));
}
