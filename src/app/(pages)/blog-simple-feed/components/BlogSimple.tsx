import IconifyIcon from '@/components/IconifyIcon';
import { Link } from 'react-router';

type Post = {
  title: string;
  link: string;
  date: string;
  likes: number;
  comments: number;
  shares: number;
};

type Category = {
  name: string;
  badgeColor: string;
  posts: Post[];
};

const BlogSimple = () => {
  const categories: Category[] = [
    {
      name: 'Digital',
      badgeColor: 'bg-info shadow-info',
      posts: [
        {
          title: '5 Bad Landing Page Examples & How We Would Fix Them',
          link: '/blog-single',
          date: '12 hours ago',
          likes: 8,
          comments: 4,
          shares: 2,
        },
        {
          title: 'How Agile is Your Forecasting Process?',
          link: '/blog-single',
          date: 'Sep 3, 2023',
          likes: 4,
          comments: 1,
          shares: 0,
        },
        {
          title: 'Inclusive Marketing: Why and How Does it Work?',
          link: '/blog-single',
          date: 'Oct 9, 2023',
          likes: 5,
          comments: 1,
          shares: 2,
        },
      ],
    },
    {
      name: 'Technology',
      badgeColor: 'bg-danger shadow-danger',
      posts: [
        {
          title: 'This Long-Awaited Technology May Finally Change the World',
          link: '/blog-single',
          date: 'Sep 3, 2023',
          likes: 8,
          comments: 7,
          shares: 3,
        },
        {
          title: 'This Week in Search: New Limits and Exciting Features',
          link: '/blog-single',
          date: 'Sep 16, 2023',
          likes: 4,
          comments: 7,
          shares: 2,
        },
        {
          title: 'Why UX Design Matters and How it Affects Ranking',
          link: '/blog-single',
          date: 'Aug 19, 2023',
          likes: 2,
          comments: 0,
          shares: 0,
        },
      ],
    },
    {
      name: 'Marketing',
      badgeColor: 'bg-warning shadow-warning',
      posts: [
        {
          title: 'Five Effective Lead Generation Techniques For Your Business',
          link: '/blog-single',
          date: 'Sep 10, 2023',
          likes: 0,
          comments: 4,
          shares: 1,
        },
        {
          title: 'Your Guide to Optimising A JavaScript-enabled Website',
          link: '/blog-single',
          date: '1 day ago',
          likes: 3,
          comments: 4,
          shares: 2,
        },
        {
          title: 'A Study on Smartwatch Design Qualities and People’s Preferences',
          link: '/blog-single',
          date: '12 hours ago',
          likes: 8,
          comments: 1,
          shares: 3,
        },
      ],
    },
    {
      name: 'Startups',
      badgeColor: 'bg-success shadow-success',
      posts: [
        {
          title: 'Does Brand Activism Impact Earning Potential?',
          link: '/blog-single',
          date: 'Sep 3, 2023',
          likes: 3,
          comments: 9,
          shares: 1,
        },
        {
          title: 'The Ultimate Guide to On-Page SEO',
          link: '/blog-single',
          date: 'Aug 19, 2023',
          likes: 8,
          comments: 4,
          shares: 2,
        },
        {
          title: 'Brand Analysis: Second Step to the Brand Identity',
          link: '/blog-single',
          date: 'May 24, 2023',
          likes: 5,
          comments: 0,
          shares: 3,
        },
      ],
    },
  ];

  return (
    <section className="container mb-lg-4 pb-5">
      {categories.map((category, idx) => (
        <article key={idx} className="mb-5 pt-5 border-top">
          <header className="d-flex align-items-center justify-content-between mb-4">
            <span className={`badge ${category.badgeColor} fs-base fw-normal`}>
              {category.name}
            </span>
            <Link to="#" className="btn btn-outline-primary ms-4">
              See all
              <IconifyIcon icon="bx:right-arrow-alt" className="ms-1 fs-lg" />
            </Link>
          </header>

          <ul className="list-unstyled mb-0">
            {category.posts.map((post, postIdx) => (
              <li key={postIdx} className="mb-4">
                <h3 className="h4 mb-2">
                  <Link to={post.link}>{post.title}</Link>
                </h3>
                <div className="d-flex align-items-center text-muted pt-1">
                  <div className="fs-sm border-end pe-3 me-3">{post.date}</div>
                  <div className="d-flex align-items-center me-3">
                    <IconifyIcon icon="bx:like" className="fs-lg me-1" />
                    <span className="fs-sm">{post.likes}</span>
                  </div>
                  <div className="d-flex align-items-center me-3">
                    <IconifyIcon icon="bx:comment" className="fs-lg me-1" />
                    <span className="fs-sm">{post.comments}</span>
                  </div>
                  <div className="d-flex align-items-center">
                    <IconifyIcon icon="bx:share-alt" className="fs-lg me-1" />
                    <span className="fs-sm">{post.shares}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default BlogSimple;
