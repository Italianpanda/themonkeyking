import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-yellow-500/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">The Monkey King</h3>
            <p className="text-gray-400">Powered by Hyperliquid</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
              <MessageCircle className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-yellow-500 transition">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2024 The Monkey King. All rights reserved.
        </div>
      </div>
    </footer>
  );
}