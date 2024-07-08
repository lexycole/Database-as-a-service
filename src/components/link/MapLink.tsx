import { AddressData } from '../address/AddressProps';

function cleanUrlString(addressData: AddressData): string {
  return addressData.address.replaceAll(`/`, `%2F`);
}

export function getMapUrl(addressData: AddressData) {
  return `https://www.google.cz/maps/place/${cleanUrlString(addressData)}`;
}

export function getRouteUrl(addressData: AddressData) {
  return `https://www.google.cz/maps/dir//${cleanUrlString(addressData)}`;
}
