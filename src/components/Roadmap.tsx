import React from 'react';
import { motion } from 'framer-motion';

const roadmapSteps = [
  {
    phase: "Phase 1: Genesis",
    title: "The Great Battle Begins",
    items: [
      "Token Launch on Hypurr DEX",
      "Community Building & Marketing",
      "Initial Staking Program",
      "Partnership Announcements"
    ]
  },
  {
    phase: "Phase 2: Evolution",
    title: "Power Unleashed",
    items: [
      "NFT Collection Launch",
      "Enhanced Staking Mechanics",
      "Marketplace Integration",
      "Cross-Chain Expansion"
    ]
  },
  {
    phase: "Phase 3: Ascension",
    title: "Path to Immortality",
    items: [
      "Governance Implementation",
      "Advanced Gaming Features",
      "Metaverse Integration",
      "Global Expansion"
    ]
  }
];

export default function Roadmap() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-gradient-to-r from-yellow-500 to-red-500 bg-clip-text text-transparent">
            Journey to Victory
          </span>
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-500/20" />

          {roadmapSteps.map((step, index) => (
            <motion.div
              key={step.phase}
              className="relative mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2 px-6">
                  <div className="bg-black/50 p-6 rounded-2xl border border-yellow-500/20">
                    <h3 className="text-xl font-bold text-yellow-500 mb-2">{step.phase}</h3>
                    <h4 className="text-lg mb-4">{step.title}</h4>
                    <ul className="space-y-2 text-gray-400">
                      {step.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-500 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}