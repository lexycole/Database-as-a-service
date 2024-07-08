import * as React from 'react';
import { rewriteUrl, UrlDelimiter, WebLink } from './WebLink';
import { getLink, LinkProps as LinkProperties } from './LinkProps';
import getLang from '../../lang/Lang';
import { parseCryptIdFromUrl, validateCryptUrl } from '../../url/UrlParser';
import { ProductBasic } from '../../view/product/ProductBasicProps';
import { Box } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import {
  TEXT_COLOR_DARK_SECONDARY,
  TEXT_COLOR_SECONDARY,
} from '@/../styles/BaseStyle';
import { appTheme } from '@/storage/ThemeAtom';

type ProductLinkProps = ProductBasic & LinkProperties;

export function getProductUrl(): string {
  return getLink(getLang(`link`, `product`));
}

function makeProductDetailUrl(props: ProductBasic): string {
  const productName: string = props.name;

  return props.id + UrlDelimiter + rewriteUrl(productName);
}

export function parseProductId(sourceUrl: string): string | null {
  return parseCryptIdFromUrl(sourceUrl);
}

export function validateProductUrl(
  originalUrl: string,
  productName: string,
): boolean {
  return validateCryptUrl(originalUrl, rewriteUrl(productName));
}

export function ProductAutocompleteLink(props: ProductLinkProps) {
  const [theme] = useRecoilState(appTheme);
  const url = `${getProductUrl()}/${makeProductDetailUrl(props)}`;

  return (
    <WebLink href={url} title={props.title}>
      <div style={{ width: '100%' }}>
        <Box p={0} m={0} fontWeight={800}>
          {props.name}
        </Box>
        <Box
          color={`${theme ? TEXT_COLOR_SECONDARY : TEXT_COLOR_DARK_SECONDARY}`}
        >
          {props.productCategory ? ` (${props.productCategory})` : ``}
        </Box>
      </div>
    </WebLink>
  );
}

export function ProductLink(props: ProductLinkProps) {
  const url = `${getProductUrl()}/${makeProductDetailUrl(props)}`;
  return (
    <WebLink href={url} title={props.title}>
      {props.name +
        (props.productCategory ? ` (${props.productCategory})` : ``)}
    </WebLink>
  );
}
