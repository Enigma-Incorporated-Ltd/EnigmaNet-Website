import React, { type FC } from 'react';
import './styles.css';
import TrueCostCalculator from './TrueCostCalculator';
import { Drik, Koby } from '@/assets/img/company';
import Br from '@/components/ui/NewLine';
import {
  BannerIcons,
  // BannerVideo,
  Workshop1
} from '@/assets/img/worksohp';

// ── TYPES ──
interface ToolCardProps {
  number: string;
  title: string;
  description: string | React.ReactNode;
  features: string[];
}

interface HostCardProps {
  image: string;
  name: string;
  role: string | React.ReactNode;
  description: string;
}

const HERO_DATA = {
  badge: 'Free 60-Minute Online Workshop · 9 July 2026',
  title: "Build in the Cloud.\nDon't Burn Cash.",
  subtitle: 'How founders scale without killing runway',
  description: (
    <>
      Free cloud credits are useful until they hide the real cost of growth. <br /> This free
      60-minute online workshop helps AI, SaaS and tech founders understand the hidden
      infrastructure risks that appear as products scale, usage increases, free credits expire and
      cloud bills become harder to predict.
      <br /> <br />
      Join Enigma Net for a practical founder session on cloud cost visibility, infrastructure
      waste, scalability pressure and how to use the TrueCost Diagnostic suite to spot issues before
      they affect runway, growth or investor confidence.
    </>
  ),
  ctaText: 'Reserve Your Free Place',
  ctaUrl: 'https://luma.com/42m3evi0',
};



const AUDIENCE_TAGS = [
  'AI founders  ',
  'SaaS founders  ',
  'Technical founders  ',
  'CTOs',
  'Seed to Series A Teams',
  'Data-Heavy Businesses',
  'Accelerator programme members  ',
  'Startup teams approaching funding or investor scrutiny  ',
];

const PROBLEMS = [
  'Compute usage rises',
  'Storage accumulates',
  'Data movement becomes expensive',
  'Idle services are left running ',
  'Credits expire',
  'Investors begin asking harder questions about burn, runway and operational efficiency',
];

const LEARNING_POINTS = [
  'How free cloud credits can create false comfort  ',
  'Where hidden infrastructure costs commonly appear  ',
  'Why storage, egress and idle services are often missed  ',
  'How infrastructure spend affects runway and investor confidence  ',
  'When to start thinking differently about cloud setup and migration timing  ',
  'How to identify early warning signs before costs become harder to control  ',
  'How selected tools from the TrueCost Diagnostic suite can support better infrastructure decisions  '
];

const SYLLABUS = [
  {
    number: '01',
    title: 'Introductions and Context',
    description:
      'A short introduction to Enigma Net, the workshop hosts and the startup infrastructure reality facing scaling teams.',
  },
  {
    number: '02',
    title: 'The Hidden Infrastructure Trap',
    description:
      'Why cloud costs can compound faster than founders expect, especially once free credits expire and usage starts to grow.  ',
  },
  {
    number: '03',
    title: 'When to Start Thinking Differently  ',
    description:
      'How to recognise the warning signs that infrastructure decisions are becoming commercial decisions.  ',
  },
  {
    number: '04',
    title: ' Live TrueCost Diagnostic Walkthrough  ',
    description:
      'A guided walkthrough of selected tools from the TrueCost Diagnostic suite, helping attendees explore cost visibility, usage patterns, waste areas and migration timing.  ',
  },
  {
    number: '05',
    title: 'Live Q&A',
    description:
      'An opportunity for attendees to ask questions about cloud costs, infrastructure scaling, diagnostic results and next steps.',
  },
];

const TOOLS: ToolCardProps[] = [
  {
    number: '01',
    title: 'When Should I Migrate?',
    description: (
      <>
        This tool helps founders explore whether their current cloud setup is still commercially
        viable as usage grows. <br /> <br /> It supports discussion around:{' '}
      </>
    ),
    features: [
      'Current cloud setup  ',
      'Usage growth trajectory  ',
      'Infrastructure cost curve  ',
      'Credit expiry timing   ',
      'Migration timing indicators  ',
      'Commercial risk of waiting too long  ',
    ],
  },
  {
    number: '02',
    title: 'What Are You Consuming?',
    description: (
      <>
        This tool helps founders identify areas where infrastructure waste or cost leakage may
        already exist. <br /> <br />
        It supports discussion around:
      </>
    ),
    features: [
      'Compute usage  ',
      'Storage growth  ',
      'Data movement  ',
      'Idle or underused services  ',
      'Visibility gaps  ',
      'Cost leakage  ',
      'Infrastructure waste areas  ',
    ],
  },
  {
    number: '03',
    title: 'Hot Storage TCO Calculator',
    description: (
      <>
        Helps founders compare the true cost of storing, accessing and moving high-volume or
        frequently used data as their product scales.
        <br /> <br /> Supports discussion around:
      </>
    ),
    features: [
      'Hot storage usage  ',
      'Storage growth patterns  ',
      'Data access frequency  ',
      'Cloud storage costs  ',
      'Migration cost considerations  ',
      'Total cost of ownership  ',
      'Data movement and transfer costs  ',
      'Runway impact of continuing with the current setup  ',
    ],
  },
];

const HOSTS: HostCardProps[] = [
  {
    image: Koby,
    name: 'Koby Yogaretnam',
    role: <>Head of Growth</>,
    description: 'Head of Growth',
  },
  {
    image: Drik,
    name: 'Dirk Pitblado',
    role: <>Growth Manager</>,
    description: 'Growth Manager',
  },
];

const BEFORE_SESSION_QUESTIONS = [
  'Your current cloud or infrastructure setup  ',
  'Whether you are using free credits or paid cloud services  ',
  'Any recent changes in usage, storage or compute demand  ',
  'Whether costs are becoming harder to predict',
  'Any areas where performance, reliability or scalability are becoming a concern',
  'Whether investors, customers or internal teams are starting to ask more detailed questions about infrastructure efficiency  ',
];

// --- Hero ---
const Hero: FC = () => (
  <section className="hero">
    <div className="container">
      <div className="row align-items-center  ">
        <div className="col-lg-7 fade-in-up">
          <span className="hero-badge">{HERO_DATA.badge}</span>
          <h1>
            {HERO_DATA.title.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < HERO_DATA.title.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h1>
          <p className="hero-sub">{HERO_DATA.subtitle}</p>
          <div className="gold-rule" />
          <p className="hero-copy">{HERO_DATA.description}</p>
          <div className="d-flex flex-wrap gap-3 mt-4">
            <a
              href={HERO_DATA.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyan"
            >
              {HERO_DATA.ctaText}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="col-lg-5 mt-5 mt-lg-0 fade-in-up delay-2">
          <div className="audience-wrapper" style={{ borderColor: 'rgba(42,222,255,0.22)' }}>
            <span className="eyebrow"> Key Workshop Details </span>
            <ul className="cyan-list">
              <li>Format - Free online workshop</li>
              <li>Duration - 60 minutes </li>
              <li>Audience - AI, SaaS and tech founders </li>
              <li>Best suited for - Pre-seed to Series A teams </li>
              <li>Hosted by - Koby Yogaretnam and Dirk Pitblado </li>
              <li>Date - 9 July 2026 </li>
              <li>Registration - Luma </li>
              <li>Includes - TrueCost Diagnostic suite walkthrough and live Q&A </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- Who It's For ---
const WhoItFor: FC = () => (
  <section className="section">
    <div className="container">
      <div className="row ">
        <div className="col-lg-5 mb-5 mb-lg-0">
          <h1>Who This Workshop Is For</h1>

          <div className="gold-rule" />

          <p className="who-description">
            This session is designed for founders and teams who are building cloud-based, AI-driven,
            SaaS or data-heavy products and want to understand how infrastructure costs can quietly
            build as they scale.
          </p>
        </div>

        <div className="col-lg-7">
          <div className="audience-wrapper">
            <p className="hero-sub">It is especially relevant for:</p>

            <div className="audience-grid">
              {AUDIENCE_TAGS.map((tag, index) => (
                <div key={index} className="audience-card">
                  <span className="audience-icon">✦</span>
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- The Problem ---
const ProblemSection: FC = () => (
  <section className="section ">
    <div className="container">
      <div className="row align-items-start">
        <div className="col-lg-5 mb-4 mb-lg-0">
          {/* <span className="eyebrow">The Problem</span> */}
          <h2 className="section-title">The Problem</h2>
          <div className="gold-rule" />
          <p style={{ color: 'var(--text-body)', fontSize: '0.9rem' }}>
            Most founders focus on product, users and growth first. Infrastructure decisions come
            later. <Br isDesktop isTablet />That works at MVP stage, when free credits are available and usage is still
            manageable. But as products grow, the hidden costs beneath cloud infrastructure can
            start to compound.
          </p>
          <p style={{ color: 'var(--text-body)', fontSize: '0.9rem', marginTop: '1rem' }}>
            By the time the bill becomes obvious, the options are often more limited, more expensive
            and more disruptive.
          </p>
        </div>
        <div className="col-lg-7">
          <div className="ps-lg-4">
            {PROBLEMS.map((problem, index) => (
              <div key={index} className="problem-item">
                {problem}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- What You'll Learn ---
const LearningSection: FC = () => (
  <section className="section">
    <div className="container">
      <div className="row mb-4">
        <div className="col-lg-7">
          <h2 className="section-title">What You'll Learn</h2>
          <div className="gold-rule" />
        </div>
      </div>
      <div className="row g-3">
        <span className="eyebrow">In this workshop, founders will learn -</span>
        {LEARNING_POINTS.map((point, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="audience-wrapper">
              <p className="card-body-text">{point}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Syllabus ---
const SyllabusSection: FC = () => (
  <section className="section " id="syllabus">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-6">
          <span className="eyebrow">Workshop Syllabus</span>
          <h2 className="section-title">60 minutes. Five clear sections.</h2>
          <div className="gold-rule" />
        </div>
      </div>
      <div className="row g-4">
        {SYLLABUS.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="audience-wrapper">
              <span className="card-num">{item.number}</span>
              <p className="card-title">{item.title}</p>
              <p className="card-body-text">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="col-md-6 col-lg-4 d-flex align-items-center justify-content-center">
          <a
            href="https://luma.com/42m3evi0"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyan"
          >
            Join the Workshop
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

// --- TrueCost Tools ---
const ToolsSection: FC = () => (
  <section className="section">
    <div className="container">
      <div className="row mb-5">
        <div className=" col-lg-8">
          <span className="eyebrow">TrueCost Diagnostic Suite </span>
          <h2 className="section-title">
            {' '}
            Calculate the optimal time to switch and use your remaining cloud credits.{' '}
          </h2>
          <div className="gold-rule " />
        </div>
        <TrueCostCalculator />
      </div>
      <p
        className="text-center"
        style={{ color: 'var(--text-body)', fontSize: '1.2rem', marginBottom: '2rem' }}
      >
        The workshop includes selected tools from the{' '}
        <strong className="text-white">TrueCost Diagnostic suite </strong>
        These tools are designed to help founders understand where infrastructure costs may be
        building up, where visibility is limited, and when their current setup may need to be
        reviewed.
      </p>
      <div className="row g-4">
        {TOOLS.map((tool, index) => (
          <div key={index} className="col-lg-4">
            <div className="audience-wrapper h-100 ">
              <span className="tool-num">TOOL {tool.number}</span>
              <p className="tool-title">{tool.title}</p>
              <p className="card-body-text mb-3">{tool.description}</p>
              <hr className="dark-hr" style={{ margin: '1rem 0' }} />
              <ul className="cyan-list">
                {tool.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <p
        className="mx-auto mt-5 text-center"
        style={{
          color: '#2ADEFF',
          fontSize: '1.8rem',
          maxWidth: '800px',
          fontWeight: 800,
          fontStyle: 'italic',
        }}
      >
        This is especially relevant for AI, SaaS and data-heavy businesses where storage and data
        movement can quietly become a major part of infrastructure spend.
      </p>
    </div>
  </section>
);

// --- Why It Matters ---
const WhyItMattersSection: FC = () => (
  <section className="section section-alt">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 ">
          <h2 className="section-title">Why This Matters</h2>

          <div className="gold-rule " style={{ marginBottom: '1.5rem' }} />

          <p style={{ color: 'var(--text-body)' }}>
            Cloud infrastructure is no longer just a technical decision. For scaling AI, SaaS and
            tech businesses, it becomes a commercial decision.
            <br />
            <br />
            The right infrastructure choices can protect runway, improve visibility and support
            growth. The wrong ones can quietly increase burn, reduce flexibility and create
            difficult questions during funding conversations.
          </p>

          <p
            style={{
              color: 'var(--text-body)',
              marginTop: '1rem',
              fontStyle: 'italic',
            }}
          >
            The goal of this workshop is not to scare founders away from hyperscalers. It is to help
            them understand when infrastructure starts working against them, where waste may exist,
            and how to scale with more control, visibility and efficiency.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const WhatToHaveMind: FC = () => (
  <section className="section  ">
    <div className="container">
      <div className="row align-items-stretch g-4">
        {/* Left Side */}
        <div className="col-lg-7 d-flex">
          <div className=" w-100">
            <h2 className="section-title">What to Have in Mind Before the Session </h2>

            <div className="gold-rule" />

            <p style={{ color: 'var(--text-body)' }}>
              You do not need exact numbers to join the workshop. <br/> This session is designed to help
              founders, technical teams, product leads, operations teams and commercial or marketing
              teams start asking the right questions about infrastructure cost, scalability and
              efficiency.
            </p>
            <hr className="dark-hr w-50" style={{ margin: '1rem 0' }} />
            <p
              style={{
                color: 'var(--text-body)',
                marginTop: '1rem',
                fontStyle: 'italic',
              }}
            >
              Exact figures are helpful, but not required. The aim is to give you a clearer way to
              understand where costs, waste or scalability pressure may be building up.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-5 d-flex">
          <div className="audience-wrapper w-100">
            <span className="eyebrow">It may be useful to think about: </span>

            <ul className="cyan-list">
              {BEFORE_SESSION_QUESTIONS.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
// --- Hosts ---
const HostsSection: FC = () => (
  <section className="section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-6">
          <span className="eyebrow">Your Hosts</span>
          <h2 className="section-title">Meet the Enigma Net team</h2>
          <div className="gold-rule" />
        </div>
      </div>
      <div className="row g-4">
        {HOSTS.map((host, index) => (
          <div key={index} className="col-md-6">
            <div className="audience-wrapper d-flex align-items-center  gap-3 h-100">
              <div className="host-avatar">
                <img src={host.image} alt={host.name} />
              </div>
              <div>
                <p className="host-name">{host.name}</p>
                <p className="host-role mb-1">{host.role}</p>
               
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- CTA ---
const CTASection: FC = () => (
  <section className="p-5 audience-wrapper text-center">
    <div className="container position-relative">
      <span className="eyebrow d-block text-center mb-3">Ready to Join?</span>
      <h2>Understand your real infrastructure cost</h2>
      <div className="gold-rule mx-auto" />
      <p style={{ color: 'var(--text-body)', maxWidth: '540px', margin: '0 auto 2rem' }}>
        Join the free workshop and walk through the TrueCost Diagnostic tools with the Enigma Net
        team.
      </p>
      <div className="d-flex flex-wrap gap-3 justify-content-center">
        <a
          href="https://luma.com/42m3evi0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cyan"
        >
          Reserve Your Free Place
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
        <a href="/get-in-touch" className="btn-outline-cyan">
          Book a Follow-Up Call
        </a>
      </div>
      {/* <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', marginTop: '2rem' }}>
        After the workshop, attendees can request an infrastructure review, download a founder
        checklist or submit feedback.
      </p> */}
    </div>
  </section>
);

// ── MAIN COMPONENT ──
const LandingPage: FC = () => {
  return (
    <div
      className="landing-page container"
      style={{
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '4rem',
        paddingBottom: '1rem',
        width: '100%',
      }}
    >
      <Hero />
      <img
        src={BannerIcons}
        alt="Workshop"
        className="  mx-auto d-flex justify-content-center align-items-center"
      />
      
      {/* <div className="hero-video-wrap">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto">
          <source src={BannerVideo} type="video/mp4" />
        </video>
      </div> */}
      <WhoItFor />
      <img
        src={Workshop1}
        alt="Workshop"
        className="  mx-auto d-flex justify-content-center align-items-center"
      />

      <ProblemSection />
      <LearningSection />
      <SyllabusSection />
      <ToolsSection />
      <WhyItMattersSection />
      <WhatToHaveMind />
      <HostsSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;
