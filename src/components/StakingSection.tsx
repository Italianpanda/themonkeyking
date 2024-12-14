import React from 'react';
import { Sparkles } from 'lucide-react';

export default function StakingSection() {
  return (
    <section id="staking" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
            Staking Rewards
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-black/50 p-8 rounded-2xl border border-yellow-500/20">
            <h3 className="text-2xl font-bold mb-6">HyperDemons</h3>
            <ul className="space-y-4 text-gray-300">
              <li>• Earn 10 $ANIME / Day</li>
              <li>• Genesis Demons: 11 $ANIME / Day</li>
              <li>• Soul harvesting mechanics</li>
            </ul>
          </div>
          <div className="bg-black/50 p-8 rounded-2xl border border-yellow-500/20">
            <h3 className="text-2xl font-bold mb-6">WuKong Warriors</h3>
            <ul className="space-y-4 text-gray-300">
              <li>• Earn 20% of Demons' $ANIME</li>
              <li>• Soul protection benefits</li>
              <li>• Special unstaking mechanics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}