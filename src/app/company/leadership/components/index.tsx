import {
  AdemHeaps,
  ANdyRodger,
  BrunaLopes,
  Drik,
  Gino,
  Glenn,
  Hamna,
  JaneOsborne,
  Kaspar,
  Ketherine,
  Koby,
  leadershipLanding,
  Mae,
  Santosh,
  TracyHaynes,
  Victoria,
  Mohammed,
  JosephHoward,
} from '@/assets/img/company';
import {
  BusinessIcon,
  DesignIcon,
  EngineeringIcon,
  OperationIcon,
} from '@/assets/svgs/company/leadership';
import Breadcrumb from '@/components/ui/Breadcrumb';
import Br from '@/components/ui/NewLine';
import PremiumButton from '@/components/ui/PremiumButton';
import { useState } from 'react';
import { LatestUpdates } from './LatestUpdates';
import { CredibilityBand } from './CredibilityBand';
import { type Person } from './Avatar';
import { LeadershipStatement } from './LeadershipStatement';
import { BioModal } from './BioModal';
import { SectionHeader } from './SectionHeader';
import { LeaderCard } from './LeaderCard';
import { SpecialistTeamCard } from './SpecialistTeamCard';
import { FounderCard } from './FounderCard';
import './style.css'
// ─── Types ────────────────────────────────────────────────────────────────────

export interface SpecialistTeam {
  id: string;
  icon?: string | React.ReactNode;
  name: string;
  description: string | React.ReactNode;
  areas: string[];
  teamDetail: string;
  members: Person[];
}

export const founders: Person[] = [
  {
    id: 'glenn',
    name: 'Glenn Melford Colegate',
    role: 'Founder & CTO',
    badge: 'FOUNDER',
    tagline: `Glenn founded Enigma in 2020 with a vision to create efficient network protocols for the AI and   
IoT era. He is responsible for the company's intellectual property and leads the design and   
construction of products across wide-ranging network markets.   `,
    tags: ['Founder', 'CTO', 'APN Core', 'Network Systems', 'R&D'],
    avatarColor: '#1a3a5c',
    bio: (
      <>
        Glenn founded Enigma in 2020 with a vision to create efficient network protocols that would
        meet the demands of the internet in the era of AI and IoT and be ubiquitous. Glenn is
        responsible for the creation of the companies Intellecutal Property, and the design and
        construction of products for the wide ranging network markets. Glenn leads the R&D team of
        engineers, AI and network specialists.
        <br />
        Glenn's prior experience all involved network systems and knowing this was always the weak
        link created Enigma to solve for corporate network problems.
      </>
    ),
    experience: [
      'Chief Engineer - Lumina Tech, designed & built prototype EV Earth Moving Equipment (2022) ',
      'Chief Engineer - Morris Commercial, designed and built prototype EV van (2020-21) ',
      'Principal Systems Designer, Operations Director - Master Ki Systems (2013-2019) ',
      'Designed gaming terminals for variety of operators including, TCS John Huxley, Sega, JPM, Inspired Gaming Group (William Hill) ',
      'Designed self service terminals for variety operations including for Argos, Tesco, Woolworth, Post Office',
    ],
    qualifications: [
      'HND Mechanical & Manufacture Engineering',
      'with Electrical & Software Engineering (Incomplete)',
      'NVQ Level 5 - Managing IT Systems ',
    ],
    // expertise: [
    //   'APN Core Architecture',
    //   'Network Infrastructure',
    //   'Strategic Vision',
    //   'Product Innovation',
    //   'R&D Leadership',
    // ],
    // linkedin: 'https://linkedin.com',
    avatar: Glenn,
  },
  {
    id: 'katherine',
    name: 'Katherine Priestley',
    role: 'Co-Founder',
    badge: 'CO-FOUNDER',
    tagline: `Katherine works with Enigma Net’s senior leadership team on growth strategy, strategic   
partnerships and finance strategy. She brings 35 years of global experience in finance,   
consulting and M&A, with experience across more than 25 investment deals and 18 successful   
exits.   `,
    tags: ['Co-Founder', 'Investment', 'Strategy', 'Partnerships', 'Finance'],
    avatarColor: '#1e4060',
    bio: (
      <>
        Katherine joined Enigma Inc in 2022 and works with the SLT on the company's growth strategy,
        strategic partnerships and finance strategy. Katherine is an entrepreneur and active
        investor, director in certain specialist technology areas. Katherine has 35 years' global
        experience in finance, consulting, & M&A and has been an active investors in over 25 deals.
        She has extensive experience leading, funding, and growing businesses at various levels of
        technology development with 18 successful exits to date
        <br />
        <br />
        Certain investment deals include: Radius Health, Orna Therapeutics, ReNAgade Therapeutics,
        Dearman, Natural Motion, Ixxus, Orivium, Somos and Enigma Inc.
      </>
    ),
    experience: [
      'Founding Partner - Park Vale Capital, an FCA regulated investment firm',
      'Founding Partner - Lincoln Vale Group & Nantucket Partners, FCA regulated investment firms ',
      'Investment Advisor -Icenic Limited, Seganti Limited',
      'Finance Director - Bodfari Quarries Ltd (8 year growth plan then Industry exit)',
      'Chuo Coopers & Lybrand (M&A structuring, Tokyo, Japan)',
      'NatWest International Bank (Japan desk, associate)',
      'Advisory Board to the President of the Royal Society (2010-2025)',
    ],
    qualifications: [
      'MBA - Columbia Business School',
      'NY USA (Student Prize) ',
      'BA (Hons) Politics and East Asian Studies',
      'UK and Japan IMC (Investment Management Certificate) ',
    ],
    // expertise: [
    //   'Investment Strategy',
    //   'Corporate Finance',
    //   'M&A',
    //   'Strategic Partnerships',
    //   'Company Development',
    // ],
    // linkedin: 'https://linkedin.com',
    avatar: Ketherine,
  },
  {
    id: 'jane',
    name: 'Jane Osborne-Buglear',
    role: 'Chief Executive Officer',
    badge: 'CEO',
    tagline: `Jane leads Enigma Net as the business grows and matures, guiding departments from   
engineering and product management through to sales, marketing and business development.   
She brings deep internet industry experience, including designing and operating large   
corporate networks and contributing to the development of the public Internet.   `,
    tags: ['CEO', 'Internet Infrastructure', 'Engineering', 'Strategy', 'Growth'],
    avatarColor: '#163550',
    bio: (
      <>
        Jane has spent many years in the Internet industry, designing and operating many large
        corporate networks as well as designing and building the public Internet. Jane was an early
        Cisco employee working in the field with customers, growing the business and eventually
        leading global technology strategy as head of the CTO office. Since stepping down from
        Cisco, Jane has mentored and supported the growth of many Deep Tech companies in Silicon
        Valley and in London, supporting all stages through to exit.
        <br />
        <br />
        My role at Enigma is to shape and lead the business as it grows and matures, guiding all
        departments from Engineering and Product Management through to Sales, Marketing and Business
        Development.
        <br />
        <br />
        Jane is a Chartered Engineer, a Fellow of the Royal Academy of Engineering, a Fellow of the
        Institution of Electronic and Technology and a Fellow of the British Computer Society.
        <br />
        <br />
        Jane cares passionately about supporting diversity in engineering, supporting young people
        in choosing to pursue engineering. She also continues to work on opening up access to the
        Internet globally especially in parts of the world where infrastructure is challenging.
      </>
    ),
    // experience: [
    //   'Deep internet infrastructure and corporate networking experience',
    //   'Contributed to the development of the public Internet',
    //   'Led cross-functional teams across engineering, product and commercial functions',
    // ],
    // qualifications: [
    //   'BEng Electrical Engineering, Imperial College London',
    //   'Executive MBA, Wharton School',
    // ],
    // expertise: [
    //   'P&L Management',
    //   'Global Operations',
    //   'Internet Infrastructure',
    //   'Commercial Strategy',
    //   'Growth Leadership',
    // ],
    // linkedin: 'https://linkedin.com',
    avatar: JaneOsborne,
  },
  {
    id: 'adam',
    name: 'Adam Heaps',
    role: 'Chief Financial Officer',
    badge: 'CFO',
    tagline: `Adam is an FCA-regulated chartered accountant with over 25 years of experience across   
multiple sectors. He specialises in helping new and scaling businesses build financial discipline,   
operational structure and commercially focused decision-making.   `,
    tags: ['CFO', 'Finance', 'Governance', 'Operations', 'Scaling'],
    avatarColor: '#0f2e4a',
    bio: (
      <>
        Chief Financial Officer and FCA-regulated chartered accountant with over 25 years of
        experience across multiple industry sectors. Specialises in supporting new and scaling
        businesses to achieve their initial corporate objectives, combining strong commercial acumen
        with expertise in finance, operations, compliance, and contract management. Known for
        bringing structure, clarity, and financial discipline to early-stage environments while
        enabling agile, growth-focused decision-making.
        <br />
        <br />
        My 5 years with Enigma have focused on helping emerging businesses establish strong
        financial and operational foundations, align strategy with execution, and achieve
        sustainable growth. I work closely with founders and leadership teams to translate vision
        into measurable outcomes, implement scalable processes, and build high-performing,
        world-class teams that can support long-term success.
      </>
    ),
    // experience: [
    //   'FCA-regulated chartered accountant',
    //   '25+ years across multiple sectors',
    //   'Specialist in scaling business financial structure',
    // ],
    // qualifications: [
    //   'BCom/LLB, University of Queensland',
    //   'CPA Australia',
    //   'AICD Graduate',
    //   'FCA Regulated',
    // ],
    expertise: [
      'Early-Stage & Growth Business Support ',
      'Financial Strategy & Planning ',
      'Project & Programme Management ',
      'Operational Scaling ',
      'Building High-Performance Teams ',
      'Corporate Structuring ',
      'Legal & Contract Negotiation ',
    ],
    linkedin: 'https://www.linkedin.com/in/adam-heaps-fca-2450b71a3',
    avatar: AdemHeaps,
  },
];

export const techLeaders: Person[] = [
  {
    id: 'nasim',
    name: 'Nasim Ahmad',
    role: 'Head of Software Development',
    tagline: `Nasim leads software strategy, product innovation, engineering excellence and the delivery of   
scalable technology solutions at Enigma Net. He brings over two decades of experience across   
software engineering, digital transformation, cloud solutions, SaaS platforms, AI-powered   
solutions and enterprise applications. `,
    tags: ['Software Development', 'AI', 'SaaS', 'Cloud', 'Engineering Leadership'],
    avatarColor: '#1a3a5c',
    bio: (
      <>
        Nasim Ahmad is the Head of Software Development at Enigma Net, bringing over two decades of
        experience in software engineering, digital transformation, cloud solutions and technology
        leadership. Throughout his career, Nasim has successfully led the design, development and
        delivery of enterprise-grade applications, SaaS platforms, AI-powered solutions, ERP
        systems, eCommerce marketplaces and mobile applications across multiple industries including
        automotive, travel, education, telecommunications and professional services.
        <br />
        <br />
        Prior to joining Enigma Net, Nasim has led technology consulting and software development
        organizations, helping startups, SMEs and large enterprises accelerate innovation and
        digital growth. He is passionate about leveraging Artificial Intelligence, cloud
        technologies and modern software architectures to solve complex business challenges.
        <br />
        <br />
        At Enigma Net, Nasim is responsible for driving software strategy, product innovation,
        engineering excellence and the delivery of scalable technology solutions that create
        measurable business value for clients.
      </>
    ),
    // experience: [
    //   '20+ years in software engineering and digital transformation',
    //   'Cloud solutions, SaaS platforms and AI-powered applications',
    //   'Enterprise application architecture and delivery',
    // ],
    // qualifications: ['BEng Software Engineering, UNSW', 'AWS Solutions Architect Professional'],
    expertise: [
      'Software Development & Engineering Leadership  ',
      'Artificial Intelligence (AI) & Automation  ',
      'SaaS Product Development  ',
      'Cloud Architecture & Digital Transformation  ',
      'Enterprise Applications & ERP Solutions  ',
      'Web & Mobile Application Development  ',
      'Solution Architecture',
      'Technology Strategy & Innovation ',
      'Agile Delivery & Project Management  ',
      'Product Development & Commercialization  ',
      'Team Building & Engineering Operations  ',
      'Startup & Scale-Up Technology Leadership  ',
    ],
    linkedin: 'https://www.linkedin.com/in/nash-facile/',
    avatar: '',
  },
  {
    id: 'andy',
    name: 'Andy Rodger',
    role: 'Head of Deployment',
    tagline: `Andy leads Enigma Net’s deployment strategy and works closely with customers to integrate   
Enigma’s technologies into their workloads and environments. He also leads internal IT   
development, infrastructure, operations and cybersecurity.   `,
    tags: ['Deployment', 'IT Infrastructure', 'Cybersecurity', 'Technical Delivery'],
    avatarColor: '#1e4060',
    bio: (
      <>
        Andy Rodger is an IT consultant, leader, and engineer with over 20 years of experience
        across a diverse range of industry sectors. Known as a pragmatic and highly effective
        problem-solver, Andy brings his varied expertise to bear on the most intractable technical
        challenges.
        <br />
        <br />
        As Head of Deployment at Enigma, Andy leads a highly experienced team dedicated to
        developing and executing robust deployment strategies. For the past two years, he has worked
        closely with customers to seamlessly integrate Enigma’s suite of technologies into their
        specific workloads and environments. In addition to his client-facing work, Andy leads
        Enigma’s internal IT development, overseeing operations, infrastructure, and cybersecurity.
        <br />
        <br />
        Passionate about innovation, Andy works with businesses of all sizes to provide the
        technical leadership, strategy, and operational execution required to thrive in today’s
        technological revolution.
      </>
    ),
    // experience: [
    //   'Customer-facing deployment leadership across enterprise environments',
    //   'Internal IT development and infrastructure operations',
    //   'Cybersecurity strategy and execution',
    // ],
    // qualifications: ['BEng Computer Systems, QUT', 'PMP Certified', 'SAFe Agilist'],
    expertise: [
      'IT Infrastructure ',
      'IT Operations ',
      'Technical Leadership ',
      'Cyber Security ',
      'Physical Installation & Deployment ',
    ],
    linkedin: 'https://www.linkedin.com/in/andyrodger/ ',
    avatar: ANdyRodger,
  },
  {
    id: 'joseph',
    name: 'Joseph Howard',
    role: 'Head of Product',
    tagline: `Joseph leads product strategy and execution across secure, scalable technology solutions. He   
works across engineering, design and commercial teams to translate customer and business   
requirements into clear product direction and executable roadmaps.   `,
    tags: ['Product Strategy', 'Roadmap', 'Security', 'Scalability', 'Delivery'],
    avatarColor: '#163550',
    bio: (
      <>
        Head of Product at Enigma Net, leading product strategy and execution across secure,
        scalable technology solutions. Focused on aligning emerging market trends with robust
        technical architecture to deliver high-performance, enterprise-ready products. I work across
        engineering, design, and commercial teams to translate customer and business requirements
        into clear product direction and executable roadmaps. My role spans discovery through to
        delivery, ensuring products are both technically sound and commercially viable.
        <br />
        <br />I place strong emphasis on security, scalability, and reliability, particularly in
        complex, distributed systems. I also drive prioritisation decisions and go-to-market
        readiness. By combining product thinking with technical understanding, I help bridge the gap
        between user needs and system design, ensuring we build solutions that are not only
        innovative but operationally effective at scale.
      </>
    ),
    //   experience: [
    //   'Cross-functional product leadership across engineering, design and commercial',
    //   'Translating customer requirements into executable product roadmaps',
    //   'Secure and scalable technology product delivery',
    // ],
    // qualifications: ['BDes Interaction Design, UTS', 'Certified Product Manager (AIPMM)'],
    // expertise: [
    //   'Product Strategy',
    //   'Roadmap Planning',
    //   'Security',
    //   'Scalability',
    //   'Commercial Product Management',
    // ],
    linkedin: 'https://www.linkedin.com/in/iamjoehoward/',
    avatar: JosephHoward,
  },
];

export const commercialLeaders: Person[] = [
  {
    id: 'koby',
    name: 'Koby Yogaretnam',
    role: 'Head of Growth',
    tagline: `Koby leads commercial growth, strategic partnerships and ecosystem engagement across the   
UK startup, AI and technology sectors. He has worked with more than 700 founders through   
accelerators, investment programmes, venture studios and corporate innovation initiatives.   `,
    tags: ['Growth', 'Partnerships', 'Startups', 'AI', 'Commercial Strategy'],
    avatarColor: '#1a3a5c',
    bio: (
      <>
        Koby Yogaretnam is Head of Growth at Enigma Net, leading commercial growth, strategic
        partnerships, and ecosystem engagement across the UK startup, AI, and technology sectors.
        <br />
        <br />
        With more than 15 years of experience spanning consulting, venture building, startup growth,
        and innovation, Koby has worked with over 700 founders through accelerators, investment
        programmes, venture studios, and corporate innovation initiatives across the UK, Europe,
        North America, and Asia. He began his career in business consulting at Accenture, advising
        organisations on transformation, growth, and operational improvement.
        <br />
        <br />
        Koby has also supported investment funds through venture scouting, startup sourcing, founder
        assessment, and commercial due diligence. Throughout his career, he has advised founders on
        fundraising, growth strategy, partnerships, and scaling.
        <br />
        <br />
        At Enigma Net, Koby helps AI, SaaS, and technology businesses optimise infrastructure,
        reduce cloud spend, improve performance, and build scalable foundations for sustainable
        growth.
      </>
    ),
    // experience: [
    //   'Worked with 700+ founders through accelerators and investment programmes',
    //   'Venture studios and corporate innovation initiatives',
    //   'Commercial growth across UK startup and AI sectors',
    // ],
    // qualifications: [
    //   'BBus Marketing, Macquarie University',
    //   'HubSpot Revenue Operations Certification',
    // ],
    // expertise: [
    //   'Growth Strategy',
    //   'Strategic Partnerships',
    //   'Startup Ecosystems',
    //   'Commercial Strategy',
    //   'Founder Engagement',
    // ],
    linkedin: 'https://www.linkedin.com/in/koby-yogaretnam/',
    avatar: Koby,
  },
  {
    id: 'tracey',
    name: 'Tracey Haynes',
    role: 'Head of Marketing & PR',
    tagline: `Tracey leads marketing, brand and public relations for Enigma Net, shaping the company’s   
external voice, market positioning and commercial communications. She translates complex   
infrastructure, networking and cloud technology into clear, credible and engaging messaging   
for customers, partners, investors and the wider market.   `,
    tags: ['Brand', 'Messaging', 'Marketing', 'PR', 'Commercial Positioning'],
    avatarColor: '#1e4060',
    bio: (
      <>
        Tracey leads marketing, brand and public relations for Enigma Net, with responsibility for
        shaping the company’s external voice, market positioning and commercial communications.
        <br />
        <br />
        With a background across fashion and interior design, manufacturing, creative development
        and business support, Tracey brings a multidisciplinary perspective to brand building. Her
        experience working with start-ups, SMEs and larger organisations has developed a practical
        understanding of how businesses communicate, grow and position themselves in competitive
        markets.
        <br />
        <br />
        Tracey has built her career by adapting across roles, sectors and responsibilities combining
        creative instinct with commercial awareness, attention to detail and a strong understanding
        of emerging trends. At Enigma Net, she focuses on translating complex infrastructure,
        networking and cloud technology into clear, credible and engaging messaging for customers,
        partners, investors and the wider market.
        <br />
        <br />
        Her work spans company positioning, product messaging, website content, campaign strategy,
        PR activity, partner collateral and go-to-market communications ensuring every touchpoint is
        clear, consistent, commercially focused and visually aligned with the Enigma Net brand.
      </>
    ),
    // experience: [
    //   'B2B technology marketing and public relations leadership',
    //   'Translating complex infrastructure and cloud tech into market messaging',
    //   'Brand strategy for customers, partners and investors',
    // ],
    // qualifications: [
    //   'BA Communications, University of Adelaide',
    //   'Accredited in Public Relations (PRIA)',
    // ],
    // expertise: [
    //   'Brand Strategy',
    //   'Public Relations',
    //   'Content Marketing',
    //   'Market Positioning',
    //   'Commercial Messaging',
    // ],
    linkedin: 'https://www.linkedin.com/in/tracey-colegate-63972164/',
    avatar: TracyHaynes,
  },
];

export const specialistTeams: SpecialistTeam[] = [
  {
    id: 'biz-dev',
    icon: <BusinessIcon />,
    name: 'Business Development & Sales',
    description:
      'Supporting customer growth, partner development, commercial strategy and pipeline activity.',
    areas: [
      'Sales & Account Management',
      'Partner Development',
      'Commercial Strategy',
      'Pipeline Management',
    ],
    teamDetail:
      'Dirk supports initiatives across new and existing customers and partnerships, with a focus on market strategy, product positioning and go-to-market execution.   ',
    members: [
      {
        id: 'bd1',
        name: 'Dirk Pitblado',
        role: 'Growth Manager',
        tagline: 'Supports initiatives across new and existing customers and partnerships.',
        tags: [],
        avatarColor: '#1a3a5c',
        bio: (
          <>
            Dirk holds a First Class Honours degree in Geography from Durham University and has also
            completed an MSc at Brown University.
            <br />
            <br />
            He first joined Enigma Net as an intern, working directly with senior leadership on
            market strategy, product positioning, and go-to-market execution. The quality of the
            work, and the problem Enigma Net is solving , made the decision to stay with the company
            an easy one. He now works as a Growth Manager supporting our initiatives across new and
            existing customers and partnerships. He has a strong interest in technology, commercial
            growth, and the future of cloud and network infrastructure.
            <br />
            <br />
            Outside of work, Dirk is a Scholastic All American having played D1 Rugby and also have
            a passion for scuba diving.
          </>
        ),
        // expertise: [
        //   'Market Strategy',
        //   'Product Positioning',
        //   'Go-to-Market Execution',
        //   'Partnership Development',
        // ],
        // linkedin: 'https://linkedin.com',
        avatar: Drik,
      },
    ],
  },
  {
    id: 'design',
    icon: <DesignIcon />,
    name: 'Design, UX/UI & Front-End',
    description:
      'Creating the visual, digital and front-end experience across the Enigma Net website, product interfaces and brand communications.',
    areas: ['UI / UX Design', 'Brand & Creative', 'Front-End Development', 'Design Systems'],
    teamDetail:
      'This group supports visual communication, user-centred design, Figma-to-code implementation, website graphics, interface design and scalable front-end development.',
    members: [
      {
        id: 'des1',
        name: 'Bruna Lopes',
        role: 'Graphic Designer',
        tagline: "Crafting Enigma Net's visual communications and brand assets.",
        tags: [],
        avatarColor: '#1a3a5c',
        bio: (
          <>
            Graphic Designer at Enigma Net, creating visual assets that support the company's
            marketing, branding, and communication initiatives. My work includes website graphics,
            social media content, case studies, presentations, marketing materials, and iconography,
            helping transform complex technical concepts into clear, engaging visual experiences
            while maintaining a consistent and professional brand presence across digital channels.
            <br />
            <br />
            My role focuses on strengthening the connection between Enigma Net's technical expertise
            and its audience through effective visual communication. By developing clear, cohesive,
            and impactful design solutions, I help showcase the company's products, services, and
            industry insights in a way that is accessible, professional, and aligned with its brand
            identity.
          </>
        ),
        expertise: [
          'Graphic Design',
          'Visual Communication',
          'Brand Identity',
          'Website Graphics',
          'Social Media Design',
          'Iconography',
          'Digital Branding',
          'Visual Storytelling',
          'Layout Design',
        ],
        linkedin: 'https://www.linkedin.com/in/bruna-lopes-0a2246178/',
        avatar: BrunaLopes,
      },
      {
        id: 'des2',
        name: 'Viktoria Petryk',
        role: 'UI/UX Designer',
        tagline: "Designing intuitive interfaces across Enigma Net's product and digital surfaces.",
        tags: ['UX', 'UI', 'Design Systems'],
        avatarColor: '#163550',
        bio: (
          <>
            I am a UI/UX Designer with 5+ years of experience specializing in user-centered design.
            I have experience in all stages of the design process, from brief analysis to final
            implementation.
            <br />
            <br />
            My experience includes creating a variety of projects across different industries. I
            have strong communication skills and can work directly with developers, which allows me
            to effectively transform business requirements into high-quality user interfaces.
          </>
        ),
        expertise: [
          'Product Design',
          'User Interface/User Experience',
          ' Analysis of Competitors',
          'In-depth Interviews',
          'Customer Journey Map',
          'User Flow',
          'User Stories',
          'User Persona',
          'Information Architecture',
          'Typography/Composition',
          'Color Theory',
          'Design Research',
          'Adaptive Design',
        ],
        // linkedin: 'https://linkedin.com',
        avatar: Victoria,
      },
      {
        id: 'des3',
        name: 'Santosh Kumar Maurya',
        role: 'Front-End React Developer',
        tagline: 'Implementing Figma-to-code front-end development for Enigma Net.',
        tags: ['React', 'Front-End', 'Development', 'Figma-to-Code', 'API Integration'],
        avatarColor: '#1e4060',
        bio: (
          <>
            Front-End React Developer at Enigma Net with a strong passion for building high-quality,
            user-centric web applications that enhance user experiences and support business growth.
            Experienced in developing responsive, scalable, and performance-driven applications
            using modern front-end technologies and best practices.
            <br />
            <br />
            Skilled in translating Figma designs into web-app, production-ready interfaces while
            ensuring accessibility, responsiveness, and cross-browser compatibility. Proficient in
            creating reusable components, managing application state, integrating APIs, optimizing
            performance, and maintaining clean, maintainable codebases.
            <br />
            <br />
            Collaborates effectively with designers, product managers, and back-end developers to
            deliver seamless digital experiences. Dedicated to continuous learning and staying up to
            date with emerging technologies to build innovative and impactful web solutions.
          </>
        ),

        expertise: [
          'Front-End Architecture',
          'Reusable Component Libraries',
          'SEO Optimization',
          'Accessibility & Web Standards',
          'CI/CD Integration',
          'Scalable Front-End Solutions',
          'Product-Focused Development',
          'Team Collaboration & Mentoring',
          'Modern Web Application Development',
          'React & Next.js Ecosystem',
          'State Management',
          'API Integration & Data Handling',
          'Performance Optimization',
          'Responsive & Mobile-First Development',
          'Cross-Browser Compatibility',
          'UI/UX Implementation',
          'Design-to-Code Conversion',
          'Application Scalability',
          'Code Quality & Best Practices',
          'Technical Problem Solving',
        ],
        linkedin: 'https://www.linkedin.com/in/santosh-maurya-10294a154/',
        avatar: Santosh,
      },
    ],
  },
  {
    id: 'ops',
    icon: <OperationIcon />,
    name: 'Operations & Delivery',
    description:
      'Keeping teams aligned, delivery on track and operational systems structured as Enigma Net scales.',
    areas: [
      'Project Management',
      'Agile Execution',
      'Cross-Functional Coordination',
      'Atlassian Administration',
    ],
    teamDetail:
      'This group supports project delivery, Agile execution, cross-functional coordination, Atlassian administration, service desk optimisation, operational documentation and process structure.',
    members: [
      {
        id: 'ops1',
        name: 'Hamna Jalil',
        role: 'Technical Project Manager',
        tagline: 'Keeping engineering and delivery teams aligned and on track.',
        tags: ['Project Management', 'Agile', 'Delivery'],
        avatarColor: '#1a3a5c',
        bio: (
          <>
            Technical Project Manager and Game Producer with over 5 years of experience across game
            production, ecommerce, Web3, and AI-powered platforms. Specialises in helping new and
            scaling businesses build the operational foundations they need to ship; combining
            technical fluency with expertise in project delivery, Agile execution, and
            cross-functional coordination. Known for bringing structure and clarity to fast-moving,
            ambiguous environments while keeping teams aligned and delivery on track.
            <br />
            <br />
            Works closely with founders and leadership to take products from concept to release;
            owning the roadmap, driving alignment across disciplines, and building the delivery
            infrastructure that keeps teams shipping reliably. Less coordinator, more embedded
            producer; in the work, not just managing around it.
            <br />
            <br />A Women in Games Ambassador, committed to building more inclusive spaces across
            the industry.
          </>
        ),
        expertise: [
          'New & Scaling Business Delivery Support',
          'Agile Project & Programme Management',
          'Digital & Ecommerce Product Execution',
          'Game Production (AAA, Web3, Live Service)',
          'Remote Team Building & Cross-Functional Leadership',
          'Stakeholder Communication & Reporting',
        ],
        linkedin: 'https://www.linkedin.com/in/hamnabukhari/',
        avatar: Hamna,
      },
      {
        id: 'ops2',
        name: 'Mae Maniego',
        role: 'Jira & Ops Administrator',
        tagline: 'Administering Atlassian tooling and internal operational systems.',
        tags: ['Jira', 'Operations', 'Administration'],
        avatarColor: '#163550',
        bio: (
          <>
            Mae Maniego is a Jira & Ops Administrator at Enigma Net, where she leads the
            administration and advancement of Atlassian systems, supports the build-out of customer
            support functions, and maintains central operational policies.
            <br />
            <br />
            With over six years of experience across IT operations and Atlassian platform
            administration, Mae brings proven expertise in workflow design, automation, service desk
            optimization, and process documentation. Prior to her current roles, she served as Team
            Lead for IT Support at Sterling Talent Solutions (First Advantage), overseeing global
            support operations across APAC, EMEA, the Americas, and Canada. She holds a Microsoft
            Azure Fundamentals (AZ-900) certification and a Bachelor of Science in Information
            Technology from Cavite State University.
          </>
        ),
        expertise: [
          'Jira Administration',
          'Jira Service Management (JSM)',
          'Confluence Administration ',
          'Jira Assets (CMDB & Asset Schema Design)',
          'IT Operations & Service Delivery',
          'Workflow Design & Issue Type Schemes',
          'Process Automation & SLA Configuration',
          'Service Desk Optimization',
          'Documentation & SOP Development',
          'IT Asset Management',
          'Cloud Fundamentals (Microsoft Azure AZ-900)',
          'Cross-functional Coordination & Escalation Management',
        ],
        // linkedin: 'https://linkedin.com',
        avatar: Mae,
      },
    ],
  },
  {
    id: 'tech-ops',
    icon: <EngineeringIcon />,
    name: 'Engineering Support',
    description:
      "Supporting Enigma Net's infrastructure, IT, platform environments and technical delivery across internal systems, customer deployments and operational support.",
    areas: [
      'Cloud Infrastructure',
      'DevOps & Automation',
      'IT Operations',
      'Observability & Monitoring',
    ],
    teamDetail:
      'This group supports hands-on engineering execution, IT operations, cloud infrastructure, DevOps, automation, networking, observability, backup, data protection and resilient platform environments.',
    members: [
      {
        id: 'tec1',
        name: 'Kaspar Pitblado',
        role: 'Technical Associate',
        tagline: 'Supporting engineering execution and technical operations.',
        // tags: ['Infrastructure', 'Technical Support'],
        avatarColor: '#1a3a5c',
        bio: (
          <>
            Kaspar is a Technical Associate at Enigma, where he accelerates CTO-led delivery across
            core technical priorities. He provides hands-on engineering execution, reproducible
            evidence, high-quality technical documentation, and also supports technical sales
            activities. A recent graduate of Brown University with dual degrees in Applied
            Mathematics & Computer Science and Economics, Kaspar is passionate about problem-solving
            and applying rigorous analytical thinking to real-world technical challenges.{' '}
          </>
        ),
        expertise: ['Infrastructure Support', 'Technical Operations', 'Engineering Execution'],
        // linkedin: 'https://linkedin.com',
        avatar: Kaspar,
      },
      {
        id: 'tec2',
        name: 'Gino Mathew',
        role: 'IT Engineer',
        tagline: 'Managing IT operations and internal systems across Enigma Net.',
        // tags: ['IT', 'Networking', 'Operations'],
        avatarColor: '#163550',
        bio: (
          <>
            I am a Computer Engineer with 15+ years of IT Support experience working with multiple
            companies in India and Canada. I am skilled in analyzing complex problems, identifying
            potential challenges, and delivering strategic, actionable recommendations to optimize
            IT operations and ensure seamless resolution.{' '}
          </>
        ),
        expertise: [
          'Azure AD',
          'Intune',
          'Microsoft 365',
          'Google Workspace',
          'Technical problem-solving',
          'VOIP',
          'Print Server',
        ],
        linkedin: 'https://www.linkedin.com/in/gino-mathew-25974568/',
        avatar: Gino,
      },
      {
        id: 'tec3',
        name: 'Mohammed Abul Azad Faisal',
        role: 'Senior Infrastructure & DevOps Engineer',
        tagline: 'Leading cloud infrastructure, DevOps and platform reliability.',
        // tags: ['DevOps', 'Cloud', 'Infrastructure'],
        avatarColor: '#0f2e4a',
        bio: (
          <>
            Mohammed Abul Azad Faisal is a Senior Infrastructure and DevOps Engineer at Enigma Net,
            specializing in cloud infrastructure, virtualization, automation, networking, and
            enterprise systems architecture. With over 10 years of experience supporting
            organizations across multiple industries, he has designed, deployed, and managed highly
            available environments utilizing Proxmox, VMware, AWS, Azure, Linux, Windows Server, and
            containerized platforms.
            <br />
            <br />
            Throughout his career, Faisal has successfully delivered large-scale cloud migrations,
            disaster recovery solutions, virtualization platforms, backup infrastructures, and
            DevOps automation frameworks for clients ranging from startups to global enterprises.
            His expertise includes network architecture, cybersecurity, infrastructure monitoring,
            business continuity planning, and performance optimization.
            <br />
            <br />
            At Enigma Net, Faisal contributes technical leadership, infrastructure strategy, cloud
            transformation initiatives, and operational excellence, helping clients build secure,
            scalable, and resilient technology environments.
          </>
        ),
        experience: [
          'Designed and deployed high-availability virtualization and cloud platforms for international clients. ',
          'Delivered enterprise-grade disaster recovery and backup solutions protecting production workloads. ',
          'Led cloud migration and infrastructure modernization projects across AWS, Azure, and private datacenters. ',
          'Extensive experience supporting mission-critical environments for organizations ranging from SMBs to global enterprises. ',
          'Top-rated infrastructure consultant with a proven record of successful project delivery and client satisfaction. ',
        ],
        expertise: [
          'Cloud Infrastructure (AWS, Azure, Hybrid Cloud) ',
          'DevOps & Automation',
          'Proxmox Virtualization',
          'VMware vSphere',
          'Linux & Windows Server Administration',
          'Disaster Recovery & Business Continuity',
          'Network Architecture & Security',
          'High Availability Infrastructure ',
          'Monitoring & Observability',
          'Backup & Data Protection',
          'Containerization (Docker, Kubernetes)',
          'Infrastructure as Code (Terraform, Ansible)',
          'Database Administration (SQL Server, PostgreSQL, MySQL)',
          'Enterprise Systems Architecture',
        ],
        linkedin: 'https://www.linkedin.com/in/mohammed-abul-azad-faisal/',
        avatar: Mohammed,
      },
    ],
  },
];

export default function LeadershipPage() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <>
      <div className="bg-dark">
        {/* Hero */}

        <div
          style={{
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '1rem',
            paddingBottom: '4rem',
          }}
        >
          <div className="container">
            <div className="row align-items-end g-4  leadership-row">
              <div className="col-lg-5">
                <Breadcrumb
                  items={[
                    { label: 'Company', href: '/company' },
                    { label: 'Leadership', href: '/company/leadership' },
                  ]}
                  style={{ paddingTop: '11rem' }}
                />
                <h1
                  className="text-md-center text-lg-start"
                  style={{
                    color: '#e8f0ff',
                    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    margin: '0 0 1rem',
                    marginTop: '2rem',
                  }}
                >
                  The people behind
                  <Br isDesktop />
                  <span style={{ color: '#2adeff' }}> Enigma Net</span>
                </h1>
                <p
                  className="text-md-center text-lg-start"
                  style={{
                    color: '#e8f0ff',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,

                    margin: '0 0 2rem',
                  }}
                >
                  Enigma Net is led by a team with experience across infrastructure, networking,
                  software development, security, finance, product, commercial growth, marketing and
                  technical delivery.
                </p>
                <div className="d-flex flex-wrap gap-3 align-items-center justify-content-lg-start justify-content-md-center justify-content-center">
                  <PremiumButton
                    label="Contact us →"
                    href="/get-in-touch"
                    variant="blue"
                    className="rounded-4 card-box "
                  />
                  <PremiumButton
                    label=" Visit newsroom"
                    href="#"
                    variant="gold"
                    className="rounded-4  card-box"
                    outline
                  />
                </div>
              </div>

              <div className="col-lg-7 text-lg-end text-md-center text-center">
                <div style={{ position: 'relative' }}>
                  <img
                    src={leadershipLanding}
                    alt="Leadership"
                    style={{
                      width: '100%',
                      height: '100%',
                      display: 'block',
                      // Aggressive left fade + soft fade on top/bottom/right
                      WebkitMaskImage: `linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,0.5) 10%,
            black 45%,
            black 91%,
            transparent 100%
          ),
          linear-gradient(
            to bottom,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          )`,
                      WebkitMaskComposite: 'intersect',
                      maskImage: `linear-gradient(
            to right,
            transparent 0%,
            rgba(0,0,0,0.5) 20%,
            black 45%,
            black 80%,
            transparent 100%
          ),
          linear-gradient(
            to bottom,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          )`,
                      maskComposite: 'intersect',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ paddingTop: '3.5rem' }}>
          {/* 01 — Founders & Executive Leadership */}
          <section className="mb-5">
            <SectionHeader
              number="01"
              title="Founders & Executive Leadership"
              subtitle="The leadership team guiding Enigma Net’s company direction, technology vision, commercial   
              growth and financial strategy.  "
            />
            <div className="row g-4">
              {founders.map(p => (
                <div key={p.id} className="col-12 col-sm-6 col-xl-4">
                  <FounderCard person={p} onRead={setSelectedPerson} />
                </div>
              ))}
            </div>
          </section>

          {/* 02 — Technology & Product Leadership */}
          <section className="mb-5">
            <SectionHeader
              number="02"
              title="Technology & Product Leadership"
              subtitle="Leading the software, deployment and product strategy behind Enigma Net’s infrastructure stack.  "
            />
            <div className="row g-4">
              {techLeaders.map(p => (
                <div key={p.id} className="col-12 col-sm-6 col-lg-4">
                  <LeaderCard person={p} onRead={setSelectedPerson} />
                </div>
              ))}
            </div>
          </section>
          {/* 03 — Commercial, Growth & Marketing */}
          <section className="mb-5">
            <SectionHeader
              number="03"
              title="Commercial, Growth & Marketing Leadership"
              subtitle="Growing the business, shaping the market message and strengthening Enigma Net's commercial presence."
            />
            <div className="row g-4">
              {commercialLeaders.map(p => (
                <div key={p.id} className="col-12 col-sm-6 col-lg-4">
                  <LeaderCard person={p} onRead={setSelectedPerson} />
                </div>
              ))}
            </div>
          </section>
          {/* 04 — Specialist Teams */}
          <section>
            <div className="row mb-4 align-items-center">
              <div className="col">
                <SectionHeader
                  number="04"
                  title="Specialist Teams"
                  subtitle="  A wider team of specialists supports Enigma Net across business development,
                  design, operations, delivery and technical infrastructure."
                />
              </div>
            </div>
            <div className="row g-4">
              {specialistTeams.map(team => (
                <div key={team.id} className="col-12 col-sm-6 col-xl-6">
                  <SpecialistTeamCard team={team} onReadMember={setSelectedPerson} />
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 05 — Engineering Credibility Band */}
        <CredibilityBand />

        {/* 06 — Leadership Statement */}
        <LeadershipStatement onRead={setSelectedPerson} />

        {/* 07 — Latest Leadership Updates */}
        <LatestUpdates />
      </div>

      <BioModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </>
  );
}
