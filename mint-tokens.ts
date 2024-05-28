import { mintTo } from "@solana/spl-token";
import "dotenv/config";
import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));

// Our token has two decimal places
const MINOR_UNITS_PER_MAJOR_UNITS = Math.pow(10, 2);

const sender = getKeypairFromEnvironment("SECRET_KEY");

// Substitute in your token mint account from create-token-mint.ts
const tokenMintAccount = new PublicKey(
  "GxHktyX4WKfyhVPETWuZBM6hQYmQDx5uoDazaCmQsA1h"
);

// Subtitute in a recipient token account you just made
const recipientAssociatedTokenAccount = new PublicKey(
  "EwfxWQDd81UHNjjpY4VDY68TtfYXyiRoaURCNG8xq697"
);

const transactionSignature = await mintTo(
  connection,
  sender,
  tokenMintAccount,
  recipientAssociatedTokenAccount,
  sender,
  10 * MINOR_UNITS_PER_MAJOR_UNITS
);

const link = getExplorerLink("transaction", transactionSignature, "devnet");

// Mint Token Transaction: https://explorer.solana.com/tx/2gPMAEffqbjAcgNq1Y86bogjfE7MvmNwpPo7xHCkgGUkEm2C2h4Hn2PBgi86r2xnsjVM58NDTGwJQCHbZKjP1nGh?cluster=devnet
console.log(`✅ Success! Mint Token Transaction: ${link}`);