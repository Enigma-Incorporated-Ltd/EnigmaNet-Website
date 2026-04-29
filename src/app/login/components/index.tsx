import CommingSoon from '@/components/comming-soon';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Header from '@/components/ui/Header';

const LoginPage = () => {
  return (
    <div className="container">
      <Breadcrumb
        items={[{ label: 'Login', href: '/login' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <Header
        title="Login"
        style={{
          padding: '21px 0px ',
        }}
      />
      <CommingSoon />
    </div>
  );
};

export default LoginPage;
