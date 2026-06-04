import CommingSoon from "@/components/comming-soon";
import Breadcrumb from "@/components/ui/Breadcrumb";
import Header from "@/components/ui/Header";


const PerformanceNetworkingList = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Products', href: '/products' }, { label: 'Performance Networking' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Performance Networking"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
}

export default PerformanceNetworkingList