import React from 'react';

function BoxCard({ children, width = 'w-full', height = 'h-auto', className = '' }) {
  return (
    <div
      className={`bg-red-50 border border-red-300 rounded-lg ${width} ${height} ${className}`}
    >
      {children}
    </div>
  );
}

export default BoxCard;
