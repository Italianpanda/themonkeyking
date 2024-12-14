import React from 'react';
import { Coins, ScrollText } from 'lucide-react';
import { Card } from './ui/Card';
import { SectionTitle } from './ui/SectionTitle';

export default function TokenSection() {
  return (
    <section id="token" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle>$ANIME: The Lifeblood of the Protocol</SectionTitle>
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <Coins className="w-12 h-12 text-yellow-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Token Utility</h3>
            <ul className="space-y-4 text-gray-300">
              <li>• Upgrade characters and unlock legendary items</li>
              <li>• Stake WuKong and demons to earn daily rewards</li>
              <li>• Participate in governance decisions</li>
              <li>• Access exclusive content and events</li>
            </ul>
          </Card>
          <Card>
            <ScrollText className="w-12 h-12 text-yellow-500 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Tokenomics</h3>
            <ul className="space-y-4 text-gray-300">
              <li>• Total Supply: Limited Edition</li>
              <li>• Daily Staking Rewards</li>
              <li>• Deflationary Mechanics</li>
              <li>• Community-Driven Value</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}