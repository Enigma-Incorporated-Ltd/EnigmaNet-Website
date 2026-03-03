import IconifyIcon from '@/components/IconifyIcon';
import { Badge, Card, CardBody, CardFooter, Container } from 'react-bootstrap';
import { Link } from 'react-router';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
;

type NewsItem = {
  id: number;
  category: string;
  date: string;
  title: string;
  link: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
};

const newsData: NewsItem[] = [
  {
    id: 1,
    category: 'Tech',
    date: '1 day ago',
    title: 'How the Millennial Lifestyle Changes as Service Prices Rise',
    link: '/blog-single',
    description:
      'Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet. Mauris duis eleifend faucibus amet sagittis.',
    likes: 2,
    comments: 0,
    shares: 3,
  },
  {
    id: 2,
    category: 'Strategy',
    date: '12 hours ago',
    title: 'Mobile App Generates Data for the Energy Management',
    link: '/blog-single',
    description:
      'Sociis sit risus id. Sit facilisis dolor arcu, fermentum vestibulum arcu ele. Pulvinar at maecenas.',
    likes: 8,
    comments: 4,
    shares: 2,
  },
  {
    id: 3,
    category: 'Software',
    date: 'May 24, 2023',
    title: 'What the Software Stock Slump Means for the Market',
    link: '/blog-single',
    description:
      'Id mollis consectetur congue egestas egestas suspendisse blandit justo. Tellus augue commodo id quis tempus etiam.',
    likes: 6,
    comments: 1,
    shares: 5,
  },
  {
    id: 4,
    category: 'Startups',
    date: 'Sep 3, 2023',
    title: '5 Bad Landing Page Examples & How We Would Fix Them',
    link: '/blog-single',
    description:
      'Totam, soluta placeat hic adipisci reprehenderit iusto est nulla dolorum doloremque inventore suscipit consequuntur.',
    likes: 8,
    comments: 7,
    shares: 3,
  },
  {
    id: 5,
    category: 'Technology',
    date: 'Aug 19, 2023',
    title: 'Why UX Design Matters and How it Affects Ranking',
    link: '/blog-single',
    description:
      'Quaerat quos assumenda numquam dolorem, repellendus est, itaque sint et odio perferendis laudantium laboriosam.',
    likes: 5,
    comments: 3,
    shares: 9,
  },
];

const NewsSlider = () => {
  return (
    <section className="bg-secondary border-bottom border-light py-5">
      <Container className="py-md-3 py-lg-5">
        <h2 className="h1 text-center pb-2">News &amp; Insights</h2>

        <div className="position-relative mx-md-2 px-md-5">
          <button
            type="button"
            id="news-prev"
            className="btn btn-prev btn-icon btn-sm position-absolute top-50 start-0 translate-middle-y mt-n4 d-none d-md-inline-flex"
            aria-label="Previous"
          >
            <IconifyIcon icon="bx:chevron-left" fontSize={20} />
          </button>
          <button
            type="button"
            id="news-next"
            className="btn btn-next btn-icon btn-sm position-absolute top-50 end-0 translate-middle-y mt-n4 d-none d-md-inline-flex"
            aria-label="Next"
          >
            <IconifyIcon icon="bx:chevron-right" fontSize={20} />
          </button>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={8}
            loop
            navigation={{
              prevEl: '#news-prev',
              nextEl: '#news-next',
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              560: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
            className="swiper-nav-onhover mx-n2"
          >
            {newsData.map(item => (
              <SwiperSlide key={item.id} className="h-auto py-3">
                <Card className="p-md-3 p-2 border-0 shadow-sm card-hover-primary h-100 mx-2">
                  <CardBody className="pb-0">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <Badge
                        bg="secondary"
                        className="fs-sm text-nav text-decoration-none position-relative zindex-2"
                      >
                        {item.category}
                      </Badge>
                      <span className="fs-sm text-muted">{item.date}</span>
                    </div>
                    <h3 className="h4">
                      <Link to={item.link} className="stretched-link">
                        {item.title}
                      </Link>
                    </h3>
                    <p className="mb-0">{item.description}</p>
                  </CardBody>
                  <CardFooter className="d-flex align-items-center py-4 text-muted border-top-0">
                    <div className="d-flex align-items-center me-3">
                      <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                      <span className="fs-sm">{item.likes}</span>
                    </div>
                    <div className="d-flex align-items-center me-3">
                      <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                      <span className="fs-sm">{item.comments}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                      <span className="fs-sm">{item.shares}</span>
                    </div>
                  </CardFooter>
                </Card>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination position-relative pt-2 pt-sm-3 mt-4"></div>
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default NewsSlider;
