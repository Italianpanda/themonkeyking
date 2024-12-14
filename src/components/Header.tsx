import React from 'react';
import { Sword } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Sword className="w-8 h-8 text-yellow-500" />
          <span className="text-xl font-bold">The Monkey King</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#token" className="hover:text-yellow-500 transition">$ANIME</a>
          <a href="#nft" className="hover:text-yellow-500 transition">NFT</a>
          <a href="#staking" className="hover:text-yellow-500 transition">Staking</a>
          <a href="#dynasties" className="hover:text-yellow-500 transition">Dynasties</a>
          <button className="px-6 py-2 bg-yellow-500 text-black rounded-full font-bold hover:bg-yellow-400 transition">
            Connect Wallet
          </button>
        </div>
      </nav>
    </header>
  );
}