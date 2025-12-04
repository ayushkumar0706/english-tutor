import React from 'react';
import { AI_INTRO } from '../constants.js';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-4 py-3">
      <div className="flex items-center justify-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-sky-600 to-violet-600 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-sm">AI</span>
        </div>
        <div className="text-sm font-semibold text-gray-700">English Tutor AI</div>
      </div>
      
      {/* Copyright */}
      <div className="text-center mt-2">
        <p className="text-xs text-gray-500">
          © 2025 English Tutor. Made with ❤️ for language learners by @Ayush.
        </p>
      </div>
    </footer>
  );
};

export default Footer;