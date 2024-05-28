import { getOrCreateAssociatedTokenAccount } from "@solana/spl-token";
import "dotenv/config";
import {
  getExplorerLink,
  getKeypairFromEnvironment,
} from "@solana-developers/helpers";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));

const sender = getKeypairFromEnvironment("SECRET_KEY");

console.log(
  `🔑 Loaded our keypair securely, using an env file! Our public key is: ${sender.publicKey.toBase58()}`
);

// Subtitute in your token mint account from create-token-mint.ts
const tokenMintAccount = new PublicKey(
  "GxHktyX4WKfyhVPETWuZBM6hQYmQDx5uoDazaCmQsA1h"
);

// Subtitute in a recipient from addresses.ts
const recipient = new PublicKey("BoEgGHc53qSnxhbvxznXqSasSaQ9F9H6PP8ZxKoXiySh");

const tokenAccount = await getOrCreateAssociatedTokenAccount(
  connection,
  sender,
  tokenMintAccount,
  recipient
);

console.log(`Token Account: ${tokenAccount.address.toBase58()}`);

const link = getExplorerLink(
  "address",
  tokenAccount.address.toBase58(),
  "devnet"
);

// Created token Account: https://explorer.solana.com/address/EwfxWQDd81UHNjjpY4VDY68TtfYXyiRoaURCNG8xq697?cluster=devnet
console.log(`✅ Created token Account: ${link}`);
