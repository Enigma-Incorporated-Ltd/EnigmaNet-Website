type Props = {
  img: string;
  alt?: string;
  isbg?: boolean;
};
const HeroImage = ({ img, alt , isbg = false }: Props) => {
  return (
    <div className=" px-4 px-sm-5 mb-3 mb-md-4">
      <img
        src={img}
        width={1079}
        alt={alt}
        className={`d-block mx-auto ${isbg ? 'bg-white' : 'bg-dark'}`}
        style={{
          borderRadius: '1.5rem',
          boxShadow: '0 1.875rem 7.5rem -.625rem rgba(124,125,152, .2)',
        }}
      />
    </div>
  );
};

export default HeroImage;
