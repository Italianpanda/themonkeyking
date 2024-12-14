import React from 'react';
import { Shield } from 'lucide-react';

export default function NftSection() {
  return (
    <section id="nft" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
            NFT Collection
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/50 p-6 rounded-2xl border border-yellow-500/20">
            <h3 className="text-xl font-bold mb-4">Genesis Mint</h3>
            <p className="text-gray-300">5,000 unique WuKong warriors ready to defend the multiverse</p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• 3,500 Whitelist Spots</li>
              <li>• Max 2 per wallet</li>
              <li>• Mint with $ANIME</li>
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-2xl border border-yellow-500/20">
            <h3 className="text-xl font-bold mb-4">Metadata</h3>
            <p className="text-gray-300">Stored on Hyperliquid Chain</p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Unique traits</li>
              <li>• Special abilities</li>
              <li>• Rarity system</li>
            </ul>
          </div>
          <div className="bg-black/50 p-6 rounded-2xl border border-yellow-500/20">
            <h3 className="text-xl font-bold mb-4">Benefits</h3>
            <p className="text-gray-300">Exclusive holder rewards</p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>• Staking rewards</li>
              <li>• Governance rights</li>
              <li>• Special events access</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}