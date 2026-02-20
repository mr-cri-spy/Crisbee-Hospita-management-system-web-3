import { BrowserProvider } from 'ethers';

declare global {
  interface Window {
    ethereum?: unknown;
  }
}

export async function connectWallet(): Promise<string | null> {
  if (!window.ethereum) {
    alert('MetaMask is required to use wallet authentication.');
    return null;
  }

  const provider = new BrowserProvider(window.ethereum as never);
  const accounts = await provider.send('eth_requestAccounts', []);
  return accounts[0] ?? null;
}
