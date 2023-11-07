import type { Hash, Hex, SignTypedDataParameters } from "viem";

export interface SmartAccountSigner<Inner, AuthParams, UserDetails> {
  signerType: string;
  inner: Inner;
  user: User<UserDetails> | undefined;

  getAddress: () => Promise<Hash>;

  signMessage: (msg: Uint8Array | Hex | string) => Promise<Hex>;

  signTypedData: (params: SignTypedDataParameters) => Promise<Hex>;

  authenticateUser: (params: AuthParams) => Promise<UserDetails>;

  getUserDetails: () => Promise<UserDetails>;
}

export interface User<UserDetails> {
  id: string;

  isAuthenticated: () => Promise<boolean>;

  getDetails: () => Promise<UserDetails>;
}
