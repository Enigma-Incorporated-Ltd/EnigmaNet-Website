import { memo, useEffect } from 'react';

type Props = {
  img: string;
  alt?: string;
};

const HeroImage = ({ img, alt }: Props) => {
 
  useEffect(() => {
    if (!img) return;
    const image = new Image();
    image.src = img;
  }, [img]);

  return (
    <div className="px-4 px-sm-5 mb-3 mb-md-4">
      <img
        src={img}
        width={1079}
        alt={alt || 'Hero image'}
        className="d-block mx-auto bg-dark"
        style={{
          borderRadius: '1.5rem',
          boxShadow: '0 1.875rem 7.5rem -.625rem rgba(124,125,152, .2)',
        }}
        loading="lazy" 
        decoding="async"
        fetchPriority="high" 
      />
    </div>
  );
};

export default memo(HeroImage);
