export function parseUidFromUrl(sourceUrl: string): string | null {
  // eslint-disable-next-line no-useless-escape
  const regex = new RegExp(`^(\\d{10})`, `g`);
  const matches = regex.exec(sourceUrl);

  return matches?.shift() ?? null;
}

export function parseCryptIdFromUrl(sourceUrl: string): string | null {
  const regex = new RegExp(`^h~\\w{10,}`, `g`);
  const matches = regex.exec(sourceUrl);

  return matches?.shift() ?? null;
}

export function parseCountryCodeFromUrl(sourceUrl: string): string | null {
  const regex = new RegExp(`^[a-z]{2}`, `g`);
  const matches = regex.exec(sourceUrl);

  return matches?.shift() ?? null;
}

export function validateCryptUrl(
  originalUrl: string,
  urlText: string,
): boolean {
  // firma/0771172284-dho-s-r-o-borivojova-praha
  const regex = new RegExp(`^h~\\w{10,}-${urlText}$`, `g`);
  const match = regex.exec(originalUrl.toString());

  if (match === null) {
    // todo vz debug !!!!
    alert(`${originalUrl.toString()} ${regex}`);
  }
  return match !== null;
}

export function validateUidUrl(originalUrl: string, urlText: string): boolean {
  const regex = new RegExp(`^\\d{10}-${urlText}$`, `g`);
  const match = regex.exec(originalUrl.toString());

  if (match === null) {
    // todo vz debug !!!!
    alert(`${originalUrl.toString()} ${regex}`);
  }

  return match !== null;
}

export function validateCountryCodeUrl(
  originalUrl: string,
  urlText: string,
): boolean {
  const regex = new RegExp(`^[a-z]{2}-${urlText}$`, `g`);
  const match = regex.exec(originalUrl.toString());

  if (match === null) {
    // todo vz debug !!!!
    alert(`${originalUrl.toString()} ${regex}`);
  }

  return match !== null;
}
