import React from 'react';

type Props = {
  text: string  | React.ReactNode;
  className?: string;
};

const FooterStatement = ({ text, className = '' }: Props) => {
  return (
    <div className={`py-4 my-5 ${className}`}>
      <div
        className="mx-auto rounded-5 bg-secondary p-4 p-md-5 text-center transition-all"
        style={{
          maxWidth: '900px',

          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-6px)';
          e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0px)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
        }}
      >
        <p
          className="mb-0 fst-italic  h3 mx-auto"
          style={{
            maxWidth: '800px',
            lineHeight: '1.9',

            fontWeight: 500,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default FooterStatement;
