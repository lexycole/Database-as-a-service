export type TokenItem = {
  token: string;
  expiration: number;
};

export type TokenList = {
  loginToken: TokenItem;
  requestToken: TokenItem;
};
