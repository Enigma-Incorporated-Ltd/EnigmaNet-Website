import { handleCardMouseEnter, handleCardMouseLeave } from '@/utils/cardHover';

type ListCardProps = {
  text: string;
  fontWeight?: string | number;
  fontSize?: string;
};

const ListCard = ({ text , fontWeight = 400, fontSize='16px' }: ListCardProps) => {
  return (
    <div
      className="mb-3 p-3"
      style={{
        background: '#FFFFFF',
        borderRadius: '12px',
        boxShadow:
          '0 21px 6px 0 rgba(0, 0, 0, 0.00), 0 13px 5px 0 rgba(0, 0, 0, 0.01), 0 8px 5px 0 rgba(0, 0, 0, 0.05), 0 3px 3px 0 rgba(0, 0, 0, 0.09), 0 1px 2px 0 rgba(0, 0, 0, 0.10)',
        transition: 'all 0.3s ease',
        width: '100%',
      
      }}
      onMouseEnter={handleCardMouseEnter}
      onMouseLeave={handleCardMouseLeave}
    >
      <ul
        style={{
          margin: 0,
          paddingLeft: '20px',
        }}
      >
        <li className="" style={{ fontWeight: fontWeight , fontSize: fontSize , color: '#000' }}>{text}</li>
      </ul>
    </div>
  );
};

export default ListCard;
