import React from 'react';

export default function DynastiesSection() {
  return (
    <section id="dynasties" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
            The Three Dynasties
          </span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-black/50 p-8 rounded-2xl border border-yellow-500/20">
            <h3 className="text-xl font-bold mb-4">Dynasty 1</h3>
            <p className="text-gray-300 mb-4">The Great Battle Begins</p>
            <ul className="space-y-2 text-gray-400">
              <li>• WuKong vs Demons</li>
              <li>• Earn $ANIME rewards</li>
              <li>• Mysterious Manuscripts</li>
            </ul>
          </div>
          <div className="bg-black/50 p-8 rounded-2xl border border-yellow-500/20">
            <h3 className="text-xl font-bold mb-4">Dynasty 2</h3>
            <p className="text-gray-300 mb-4">The GuiCai Arrival</p>
            <ul className="space-y-2 text-gray-400">
              <li>• Character enhancement</li>
              <li>• Legendary items</li>
              <li>• Strategic gameplay</li>
            </ul>
          </div>
          <div className="bg-black/50 p-8 rounded-2xl border border-yellow-500/20">
            <h3 className="text-xl font-bold mb-4">Dynasty 3</h3>
            <p className="text-gray-300 mb-4">Path to Immortality</p>
            <ul className="space-y-2 text-gray-400">
              <li>• Character progression</li>
              <li>• Competitive rankings</li>
              <li>• Epic gameplay unlock</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}