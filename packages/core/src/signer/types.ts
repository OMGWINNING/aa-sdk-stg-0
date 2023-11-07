import type { Hash, Hex } from "viem";
import type { SignTypedDataParams } from "../account/types.js";

export interface AuthSmartAccountSigner<Inner, AuthParams, UserDetails>
  extends SmartAccountSigner {
  inner: Inner;
  user: SmartAccountUser<UserDetails> | undefined;

  authenticateUser: (params: AuthParams) => Promise<UserDetails>;

  getUserDetails: () => Promise<UserDetails>;
}

export interface SmartAccountSigner {
  signerType: string;

  getAddress: () => Promise<Hash>;

  signMessage: (msg: Uint8Array | Hex | string) => Promise<Hex>;

  signTypedData: (params: SignTypedDataParams) => Promise<Hex>;
}

export interface SmartAccountUser<UserDetails> {
  id: string | undefined;

  isAuthenticated: () => Promise<boolean>;

  getDetails: () => Promise<UserDetails>;
}
