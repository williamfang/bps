import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gov-border bg-white mt-12">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center text-gov-gray text-xs">
        <p>版权所有 © {new Date().getFullYear()} 中国银行 Bank of China</p>
      </div>
    </footer>
  );
};