import React from 'react';

export const handleCardMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.transform = 'translateY(-4px)';
  e.currentTarget.style.boxShadow = `
    0px 30px 12px rgba(0, 0, 0, 0.02),
    0px 18px 10px rgba(0, 0, 0, 0.04),
    0px 10px 8px rgba(0, 0, 0, 0.08),
    0px 4px 4px rgba(0, 0, 0, 0.10)
  `;
};

export const handleCardMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
  e.currentTarget.style.transform = 'translateY(0)';
  e.currentTarget.style.boxShadow = `
    0px 21px 6px rgba(0, 0, 0, 0.00),
    0px 13px 5px rgba(0, 0, 0, 0.01),
    0px 8px 5px rgba(0, 0, 0, 0.05),
    0px 3px 3px rgba(0, 0, 0, 0.09),
    0px 1px 2px rgba(0, 0, 0, 0.10)
  `;
};
