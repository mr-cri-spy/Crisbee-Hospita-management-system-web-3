import 'dotenv/config';

export const env = {
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/crisbee_hospital',
  ETH_NETWORK: process.env.ETH_NETWORK || 'sepolia',
  IPFS_GATEWAY: process.env.IPFS_GATEWAY || 'https://ipfs.io/ipfs'
};
