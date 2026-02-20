'use client';

import { useState } from 'react';
import { connectWallet } from '@/lib/web3';

export default function Header() {
  const [wallet, setWallet] = useState<string>('');

  const onConnect = async () => {
    const account = await connectWallet();
    if (account) setWallet(account);
  };

  return (
    <header className="mb-8 flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
      <div>
        <h1 className="text-xl font-bold text-brand">Crisbee Hospital Management System</h1>
        <p className="text-xs text-slate-500">Smart Hospital + Web3 + AI</p>
      </div>
      <button onClick={onConnect} className="rounded bg-brand px-4 py-2 text-sm font-medium text-white">
        {wallet ? `${wallet.slice(0, 6)}...${wallet.slice(-4)}` : 'Connect MetaMask'}
      </button>
    </header>
  );
}
