import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sword } from 'lucide-react';
import Hero3D from './Hero3D';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: "url('/temple-bg.png')"
        }}
      />
      <Hero3D />
      <div className="relative container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 uppercase tracking-wider"
            animate={{ 
              textShadow: [
                "0 0 10px #FFB800",
                "0 0 20px #FFB800",
                "0 0 10px #FFB800"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            The Monkey King
          </motion.h1>
          <div className="flex justify-center mb-8">
            <Sword className="w-24 h-24 text-yellow-500 animate-pulse" />
          </div>
          <p className="text-2xl md:text-3xl mb-8 text-gray-300">
            Launching Soon On Hypurr
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <button className="px-8 py-3 bg-yellow-500 text-black rounded-full font-bold hover:bg-yellow-400 transition">
            Buy $ANIME
          </button>
          <button className="px-8 py-3 border-2 border-yellow-500 rounded-full font-bold hover:bg-yellow-500/10 transition">
            Join Telegram
          </button>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="mt-20"
        >
          <ChevronDown className="w-12 h-12 mx-auto text-yellow-500" />
        </motion.div>
      </div>
    </section>
  );
}