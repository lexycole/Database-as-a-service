import moment from 'moment';
import { PriceData } from '../view/product/ProductProps';

const FORMAT_TIMESTAMP = `X`;
const FORMAT_DATE_LOCAL = `L`;
const FORMAT_DATE_TEXT_LOCAL = `LL`;
const FORMAT_DATETIME_LOCAL = `LLL`;

export function FormatDate(timestamp: string): string {
  const date: moment.Moment = moment(timestamp, FORMAT_TIMESTAMP);
  return date.isValid() ? date.format(FORMAT_DATE_LOCAL) : ``;
}

export function FormatDateText(timestamp: string): string {
  const date: moment.Moment = moment(timestamp, FORMAT_TIMESTAMP);
  return date.isValid() ? date.format(FORMAT_DATE_TEXT_LOCAL) : ``;
}

export function FormatDateTime(timestamp: string): string {
  const date: moment.Moment = moment(timestamp, FORMAT_TIMESTAMP);
  return date.isValid() ? date.format(FORMAT_DATETIME_LOCAL) : ``;
}

export function FormatNumber(data: number | undefined): string {
  if (data === undefined) {
    return ``;
  }
  return data.toLocaleString();
}

export function UcFirst(text: string): string {
  if (text?.length > 0) return text?.charAt(0)?.toUpperCase() + text?.slice(1);
  return '';
}

export function FormatPrice(price: PriceData | null): string {
  return price ? `${FormatNumber(price.value)} ${price.currency}` : ``;
}
