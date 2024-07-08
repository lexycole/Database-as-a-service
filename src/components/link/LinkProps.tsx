export type LinkProps = {
  id: string | undefined;
  name: string | undefined;
  title?: string | undefined;
  textAfter?: string | undefined;
};

export function getLink(href: string): string {
  return `/${href}`;
}

export function getExternalLink(href: string): string {
  return `${href}`;
}

export interface IOriginalUrl {
  originalUrl: string;
}
