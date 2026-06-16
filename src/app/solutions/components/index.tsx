import Breadcrumb from '@/components/ui/Breadcrumb';
import { type CardItem } from '@/components/ui/card';
import CardGrid from '@/components/ui/card';
import { solutions } from '@/utils/solutions';
import HeaderTitle from '@/components/ui/HeaderTitle';

const SolutionsGrid = () => {
  return (
    <section className="container pb-5 ">
      <Breadcrumb
        items={[{ label: 'Solutions', href: '/solutions' }]}
        style={{
          paddingTop: '12rem',
        }}
      />
      <HeaderTitle
        title={
          <>
            Scalable Network Solutions for Enterprise, <br className='d-md-block d-none' /> AI & Modern Workloads
          </>
        }
        style={{
          padding: '31px 0px ',
        }}
        className="h1"
        textAlign="center"
      />
      <ul className="list-unstyled d-flex flex-wrap text-center justify-content-center mb-5">
        <li className="d-flex fs-xl  mx-3 mt-2 mt-sm-3" style={{ maxWidth: '55rem' }}>
          <span className="text-muted-50 h4">
            {' '}
            Improve performance, resilience, and visibility across
            <br /> your infrastructure without replacing existing systems.
          </span>
        </li>
      </ul>

      <CardGrid
        data={solutions as CardItem[]}
        columns="col-12 col-md-12 col-lg-6"
        buttonLabel="Explore"
      
      />
    </section>
  );
};

export default SolutionsGrid;
