import type { Hash, Hex } from "viem";
import type { SignTypedDataParams } from "../account/types.js";

export interface AuthSmartAccountSigner<
  Inner = any,
  AuthParams = any,
  UserDetails = any
> extends SmartAccountSigner {
  inner: Inner;
  user: User<UserDetails> | undefined;

  authenticateUser: (params: AuthParams) => Promise<UserDetails>;

  getUserDetails: () => Promise<UserDetails>;
}

export interface SmartAccountSigner {
  signerType: string;

  getAddress: () => Promise<Hash>;

  signMessage: (msg: Uint8Array | Hex | string) => Promise<Hex>;

  signTypedData: (params: SignTypedDataParams) => Promise<Hex>;
}

export interface User<UserDetails> {
  id: string;

  isAuthenticated: () => Promise<boolean>;

  getDetails: () => Promise<UserDetails>;
}
