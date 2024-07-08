import { MAX_LIST_ROWS } from '../../view/firm/FirmProps';

export function getBoxTitleWithCount(title: string, count: number) {
  return count > MAX_LIST_ROWS ? `${title} (${count.toFixed()})` : title;
}
