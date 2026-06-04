import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const FileTransfer = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: 'Data & File Services', href: '/products/data-&-file-services' },
          { label: 'Large File Transfer' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Large File Transfer"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default FileTransfer;
