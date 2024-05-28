import "dotenv/config"
import {
    Connection,
    LAMPORTS_PER_SOL,
    PublicKey,
    clusterApiUrl,
} from "@solana/web3.js"
import { getKeypairFromEnvironment } from "@solana-developers/helpers";

const connection = new Connection(clusterApiUrl("devnet"))

const publicKey = getKeypairFromEnvironment("SECRET_KEY").publicKey;

console.log(`PublicKey: `, publicKey.toBase58());

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSOL = balanceInLamports/LAMPORTS_PER_SOL;

console.log(`The balance for the wallet at address ${publicKey} is ${balanceInSOL}`);