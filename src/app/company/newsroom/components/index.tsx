import { useMemo, useRef, useState } from 'react';
import { JaneOsborne, Koby, leadershipLanding } from '@/assets/img/company';
import BlogCard, { type BlogPost } from '@/components/ui/BlogCard';
import Breadcrumb from '@/components/ui/Breadcrumb';
import HeaderTitle from '@/components/ui/HeaderTitle';
import HeroSection from '@/components/ui/HeroSection';
import { useTheme } from '@/utils/useTheme';
import './style.css';
import { startup3, startup4, startup5 } from '@/assets/img/partners/inddex';
import CardSlider from '@/components/ui/CardSlider';
import NewsLetter from '../../blog-insight/components/NewsLetter';
import CTA from '@/components/ui/CtaBand';
import CaseStudyHighlight from '@/components/ui/CaseStudyHighlight';
import { remoteWork } from '@/assets/img';
import { GridHero } from '@/assets/img/products';
const featuredPosts: BlogPost[] = [
  {
    id: 1,
    slug: '/company/leadership?member=jane-osborne-buglear',
    title: 'Jane Osborne-Buglear appointed Chief Executive Officer',
    summary:
      'Enigma Net announces the appointment of Jane Osborne-Buglear as Chief Executive Officer as the company continues to scale its infrastructure, product and commercial strategy.',
    category: 'Company announcements',
    image: JaneOsborne,
    date: 'July 2, 2026',
    readingTime: '5 min read',
    buttonText: 'Read announcement',
    isleadership: true,
  },
  {
    id: 2,
    slug: '/company/leadership?member=koby',
    title: 'Koby Yogaretnam appointed Head of Growth  ',
    summary:
      'Koby joins Enigma Net to lead growth, strategic partnerships and ecosystem engagement across AI, SaaS and technology sectors.  ',
    category: 'Leadership updates',
    image: Koby,
    date: 'July 2, 2026',
    readingTime: '5 min read',
    buttonText: 'Read update',
    isleadership: true,
  },
  {
    id: 3,
    slug: '/partners',
    title: 'Enigma Net expands partner ecosystem  ',
    summary:
      'Updates on Enigma Net’s strategic partnerships, channel relationships and joint market activity.  ',
    category: 'Partnership news',
    image: startup5,
    date: 'July 2, 2026',
    readingTime: '5 min read',
    buttonText: 'Read update',
    isleadership: true,
  },
  {
    id: 4,
    slug: '/company/blog-insight',
    title: 'Enigma Net in the media  ',
    summary: 'Recent media coverage, interviews, commentary or external mentions.  ',
    category: 'Media updates',
    image: startup4,
    date: 'July 2, 2026',
    readingTime: '5 min read',
    buttonText: 'Read more',
    isleadership: true,
  },
];

// Replace/extend this with your real newsroom feed
const allPosts: BlogPost[] = [...featuredPosts];

const CATEGORIES = [
  'All',
  ...Array.from(
    new Set(
      allPosts
        .map(post => post.category)
        .filter((category): category is string => Boolean(category)),
    ),
  ),
];

const NewsroomPage = () => {
  const { theme } = useTheme();
  type Category = (typeof CATEGORIES)[number];
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollCategories = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -220 : 220,
      behavior: 'smooth',
    });
  };
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return allPosts;
    return allPosts.filter(
      post => (post.category ?? '').trim() === activeCategory,
    );
  }, [activeCategory]);

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Newsroom', href: '/company/leadership' },
        ]}
        style={{ paddingTop: '12rem' }}
      />

      <HeroSection
        title={<>Latest news from Enigma Net.</>}
        description="Read official Enigma Net announcements, leadership updates, partnership news, press releases and media updates."
        image={leadershipLanding}
        isbg
        buttons={[
          {
            label: 'View latest news',
            href: '#',
            variant: 'blue',
            disableSentenceCase: true,
          },
        ]}
        features={['Company announcements', 'Partnership news', 'Press releases', 'Media updates']}
      />

      <BlogCard
        title={
          <HeaderTitle
            key={theme}
            title={<>Featured announcement</>}
            variant={theme === 'dark' ? 'gold' : 'blue'}
          />
        }
        description={
          <>
            Highlight the most important current article, guide or thought leadership piece.
            Highlight the most important current company update or leadership announcement.
          </>
        }
        posts={[
          {
            id: 1,
            slug: '/company/leadership?member=jane-osborne-buglear',
            title: 'Jane Osborne-Buglear appointed Chief Executive Officer',
            summary:
              'Enigma Net announces the appointment of Jane Osborne-Buglear as Chief Executive Officer as the company continues to scale its infrastructure, product and commercial strategy.',
            category: 'Company announcements',
            image: JaneOsborne,
            date: 'July 2, 2026',
            readingTime: '5 min read',
            buttonText: 'Read announcement',
            isleadership: true,
          },
        ]}
      />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Latest updates </>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Browse recent Enigma Net news, leadership updates, partnerships and media
            announcements.{' '}
          </>
        }
      />
      <nav className="container my-2 position-relative" aria-label="Newsroom categories">
        {/* Left Arrow (Mobile Only) */}
        <button
          type="button"
          className="category-arrow category-arrow-left bg-body text-primary border border-gray-100 rounded-circle"
          onClick={() => scrollCategories('left')}
        >
          ❮
        </button>

        <div
          ref={scrollRef}
          className="category-scroll d-flex flex-nowrap gap-2 overflow-auto  hide-scrollbar"
          style={{
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {CATEGORIES.map(category => (
            <button
              key={category}
              type="button"
              className={`btn rounded-pill py-2 text-nowrap fw-medium shrink-0 ${
                activeCategory === category
                  ? theme === 'dark'
                    ? 'btn-light-blue'
                    : 'btn-primary'
                  : theme === 'dark'
                    ? 'btn-outline-light-blue'
                    : 'btn-outline-primary'
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right Arrow (Mobile Only) */}
        <button
          type="button"
          className="category-arrow category-arrow-right bg-body text-primary border border-gray-100 rounded-circle"
          onClick={() => scrollCategories('right')}
        >
          ❯
        </button>
      </nav>

      <BlogCard posts={filteredPosts} />

      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Press releases </>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={<>Access official Enigma Net press releases and formal company statements.</>}
        showButtons={true}
        primaryButton={{
          label: 'View all press releases  ',
          href: '#',
          variant: 'blue',
          disableSentenceCase: true,
        }}
      />
      <BlogCard
        title={
          <HeaderTitle
            key={theme}
            title={<>Media resources </>}
            variant={theme === 'dark' ? 'gold' : 'blue'}
          />
        }
        description={
          <>
            Useful resources for journalists, partners and stakeholders looking for approved Enigma
            Net information.
          </>
        }
        posts={[
          {
            id: 1,
            slug: '/company/about-enigma',
            title: 'Company overview  ',
            image: remoteWork,
            date: 'July 2, 2026',
            readingTime: '5 min read',
            buttonText: 'Read more',
          },
          {
            id: 2,
            slug: '/company/leadership',
            title: 'Leadership updates  ',
            image: leadershipLanding,
            date: 'July 2, 2026',
            readingTime: '5 min read',
            buttonText: 'Read more',
          },
          {
            id: 3,
            slug: '/Products',
            title: 'Product overview   ',
            image: GridHero,
            date: 'July 2, 2026',
            readingTime: '5 min read',
            buttonText: 'Read more',
          },
          {
            id: 3,
            slug: '/',
            title: 'Barnd assets',
            image: startup3,
            date: 'July 2, 2026',
            readingTime: '5 min read',
            buttonText: 'Read more',
          },
        ]}
      />
      <CaseStudyHighlight
        data={[
          'What happens when free cloud credits end  ',
          'Where hidden cloud, compute and data movement costs can build up',
          'Why scaling infrastructure without visibility can affect runway  ',
          'How to spot early signs of infrastructure cost pressure  ',
          'How the TrueCost diagnostic helps founders understand what is driving spend  ',
        ]}
        title={
          <>
            <HeaderTitle
              key={theme}
              title={
                <>
                  Building in the Cloud Without Burning Cash <br />
                  How Founders Scale Without Killing Runway{' '}
                </>
              }
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            A 60-minute founder session on cloud costs, free credit cliffs and how to scale
            infrastructure without burning runway.
            <br />
            <br />
            This session introduces the TrueCost diagnostic approach, helping founders and scaling
            teams understand where cloud usage, compute demand, data movement and infrastructure
            decisions can quietly become expensive as products grow.
          </>
        }
        showButtons={true}
        primaryButton={{
          label: 'Register for workshop  ',
          href: 'https://bitc.enigmanet.ai/',
          variant: 'gold',
          disableSentenceCase: true,
        }}
      />
      <CardSlider
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Stay in the loop</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Stay close to the infrastructure conversations that matter as you scale including
            TrueCost workshops, cloud-cost guidance, secure networking, data movement, compute,
            resilience and AI-ready infrastructure updates from Enigma Net.
          </>
        }
      />
      <NewsLetter />
      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline={
          <>
            Follow Enigma Net as we build secure infrastructure
            <br />
          </>
        }
        headline2="for data-intensive environments."
        primaryButton={{
          label: 'Explore company  ',
          href: '/company/about-enigma',
          variant: 'gold',
          disableSentenceCase: true,
        }}
      />
    </div>
  );
};

export default NewsroomPage;
