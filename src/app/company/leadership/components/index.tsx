import { UsecaseRemoteWork1 } from '@/assets/img';
import {
  AdemHeaps,
  ANdyRodger,
  BrunaLopes,
  Glenn,
  Hamna,
  JaneOsborne,
  JosephHoward,
  Mae,
  NashimAhmed,
  Santosh,
  TracyHaynes,
  Victoria,
} from '@/assets/img/company';
import Breadcrumb from '@/components/ui/Breadcrumb';
import PremiumButton from '@/components/ui/PremiumButton';
import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Person {
  avatar: any;
  id: string;
  name: string;
  role: string;
  badge?: string;
  tagline: string;
  tags?: string[] | undefined;
  bio: string | React.ReactNode;
  experience?: string[];
  qualifications?: string[];
  expertise?: string[];
  linkedin?: string;
  image?: string;
  avatarColor?: string;
}

interface SpecialistTeam {
  id: string;
  icon: string;
  name: string;
  description: string | React.ReactNode;
  areas: string[];
  teamDetail: string;
  members: Person[];
}

interface NewsCard {
  id: string;
  category: string;
  headline: string;
  href?: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const founders: Person[] = [
  {
    id: 'glenn',
    name: 'Glenn Melford-Colegate',
    role: 'Founder & CTO',
    badge: 'FOUNDER',
    tagline: `Glenn founded Enigma in 2020 with a vision to create efficient network protocols for the AI and   
IoT era. He is responsible for the company’s intellectual property and leads the design and   
construction of products across wide-ranging network markets.   `,
    tags: ['Founder', 'CTO', 'APN Core', 'Network Systems', 'R&D'],
    avatarColor: '#1a3a5c',
    bio: `Glenn founded Enigma in 2020 with a vision to create efficient network protocols for the AI and   
IoT era. He is responsible for the company’s intellectual property and leads the design and   
construction of products across wide-ranging network markets.   `,
    // experience: [
    //   '20+ years in telecommunications infrastructure',
    //   'Previously CTO at TeleCore Networks',
    //   'Led network deployments across 15+ countries',
    // ],
    // qualifications: [
    //   'BSc Computer Science, University of Melbourne',
    //   'MBA, INSEAD',
    //   'Cisco Certified Internetwork Expert (CCIE)',
    // ],
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
    bio: `Katherine works with Enigma Net’s senior leadership team on growth strategy, strategic   
partnerships and finance strategy. She brings 35 years of global experience in finance,   
consulting and M&A, with experience across more than 25 investment deals and 18 successful   
exits.   `,
    //   experience: [
    //   '35+ years in finance, consulting and M&A',
    //   '25+ investment deals and 18 successful exits',
    //   'Global experience across APAC, EMEA and North America',
    // ],
    // qualifications: ['BCom (Hons), University of Sydney', 'MBA, London Business School'],
    // expertise: [
    //   'Investment Strategy',
    //   'Corporate Finance',
    //   'M&A',
    //   'Strategic Partnerships',
    //   'Company Development',
    // ],
    // linkedin: 'https://linkedin.com',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=800',
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

const techLeaders: Person[] = [
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
    avatar: NashimAhmed,
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

const commercialLeaders: Person[] = [
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
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=800',
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

const specialistTeams: SpecialistTeam[] = [
  {
    id: 'biz-dev',
    icon: '💼',
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
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=800',
      },
    ],
  },
  {
    id: 'design',
    icon: '🎨',
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
    icon: '⚙️',
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
    icon: '🔧',
    name: 'Technical Operations & Infrastructure',
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
        tags: ['Infrastructure', 'Technical Support'],
        avatarColor: '#1a3a5c',
        bio: "Kaspar supports technical operations and hands-on engineering execution across Enigma Net's infrastructure and customer environments.",
        expertise: ['Infrastructure Support', 'Technical Operations', 'Engineering Execution'],
        linkedin: 'https://linkedin.com',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=800',
      },
      {
        id: 'tec2',
        name: 'Gino Mathew',
        role: 'IT Engineer',
        tagline: 'Managing IT operations and internal systems across Enigma Net.',
        tags: ['IT', 'Networking', 'Operations'],
        avatarColor: '#163550',
        bio: 'Gino manages IT operations, networking and internal systems at Enigma Net, ensuring reliable and secure infrastructure across the business.',
        expertise: ['IT Operations', 'Networking', 'Systems Administration', 'Security'],
        linkedin: 'https://linkedin.com',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=800',
      },
      {
        id: 'tec3',
        name: 'Mohammed Abul Azad Faisal',
        role: 'Senior Infrastructure & DevOps Engineer',
        tagline: 'Leading cloud infrastructure, DevOps and platform reliability.',
        tags: ['DevOps', 'Cloud', 'Infrastructure'],
        avatarColor: '#0f2e4a',
        bio: 'Faisal leads cloud infrastructure, DevOps automation, observability and data protection at Enigma Net, ensuring resilient and scalable platform environments.',
        expertise: [
          'Cloud Infrastructure',
          'DevOps',
          'Automation',
          'Observability',
          'Data Protection',
        ],
        linkedin: 'https://linkedin.com',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=800',
      },
    ],
  },
];

const credibilityTiles = [
  {
    id: 'carrier',
    icon: '🌐',
    title: 'Carrier & enterprise experience',
    body: 'Deep experience across large-scale infrastructure, internet, network and enterprise environments.',
  },
  {
    id: 'security',
    icon: '🔒',
    title: 'Network & security engineering',
    body: 'Expertise across secure connectivity, infrastructure operations, deployment and cybersecurity.',
  },
  {
    id: 'patent',
    icon: '📐',
    title: 'Patented technology foundation',
    body: 'Technology leadership supported by company IP, R&D and specialist engineering knowledge.',
  },
  {
    id: 'deploy',
    icon: '🚀',
    title: 'Real-world deployments',
    body: 'Deployment experience across customer environments, technical workloads and operational use cases.',
  },
];

const newsCards: NewsCard[] = [
  {
    id: 'n1',
    category: 'Company news',
    headline: 'Jane Osborne-Buglear appointed CEO',
    href: '#',
  },
  {
    id: 'n2',
    category: 'Insights',
    headline: 'Why network performance is now a business-critical function',
    href: '#',
  },
  {
    id: 'n3',
    category: 'Events',
    headline: 'Enigma Net at upcoming industry events',
    href: '#',
  },
];

// ─── Avatar Component ────────────────────────────────────────────────────────

function Avatar({ person, size = 80 }: { person: Person; size?: number }) {
  const initials = person.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .slice(0, 2);

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size > 60 ? '12px' : '8px',
        overflow: 'hidden',
        border: '1px solid rgba(56, 139, 253, 0.25)',
        flexShrink: 0,
        background: `linear-gradient(135deg, ${person.avatarColor ?? '#1a3a5c'} 0%, #0a1628 100%)`,
      }}
    >
      {person.avatar ? (
        <img
          src={person.avatar}
          alt={person.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: size > 60 ? '12px' : '8px',
          }}
        />
      ) : (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: size > 60 ? 22 : 13,
            fontWeight: 700,
            color: '#88bbee',
            letterSpacing: 1,
            fontFamily: "'DM Mono', monospace",
          }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

// ─── Bio Modal ───────────────────────────────────────────────────────────────

function BioModal({ person, onClose }: { person: Person | null; onClose: () => void }) {
  if (!person) return null;
  return (
    <>
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(4, 12, 28, 0.85)',
          backdropFilter: 'blur(6px)',
          zIndex: 1050,
          animation: 'fadeIn .2s ease',
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(540px, 100vw)',
          background: 'linear-gradient(160deg, #07172e 0%, #060f1f 60%, #04090f 100%)',
          borderLeft: '1px solid rgba(42, 222, 255, 0.15)',
          zIndex: 1051,
          overflowY: 'auto',
          animation: 'slideIn .25s cubic-bezier(.16,1,.3,1)',
          boxShadow: '-20px 0 60px rgba(0,0,0,.6)',
        }}
      >
        {/* ── HERO IMAGE HEADER ── */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 620, // ← tall enough to show the full portrait
            flexShrink: 0,
            overflow: 'hidden',
          }}
        >
          <img
            src={person.avatar}
            alt={person.name}
            style={{
              width: '100%',
              height: '100%', // ← fills the container, no minHeight
              objectFit: 'cover',
              objectPosition: 'top center',
              display: 'block',
            }}
          />
          {/* gradient fade to modal bg */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 45%, rgba(6,14,34,0.88) 100%)',
              pointerEvents: 'none',
            }}
          />
          {/* badge */}
          {person.badge && (
            <span
              style={{
                position: 'absolute',
                bottom: 16,
                left: 20,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 1.6,
                color: '#2adeff',
                background: 'rgba(6,14,34,0.72)',
                border: '1px solid #2adeff',
                padding: '3px 9px',
                borderRadius: 4,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {person.badge}
            </span>
          )}
          {/* close button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'rgba(6,14,34,0.72)',
              border: '1px solid rgba(42,222,255,0.25)',
              borderRadius: 8,
              color: '#2adeff',
              width: 36,
              height: 36,
              cursor: 'pointer',
              fontSize: 18,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all .15s',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(42,222,255,0.15)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = 'rgba(6,14,34,0.72)';
            }}
          >
            ×
          </button>
        </div>

        {/* ── BODY ── */}
        <div style={{ padding: '0 2rem 2.5rem' }}>
          <div style={{ marginBottom: '1.25rem', marginTop: '1.25rem' }}>
            <h4
              style={{
                color: '#e8f0ff',
                fontSize: '1.45rem',
                fontWeight: 700,
                margin: '0 0 4px',
                lineHeight: 1.2,
              }}
            >
              {person.name}
            </h4>
            <p
              style={{
                color: '#2adeff',
                fontSize: '0.78rem',
                margin: '0 0 10px',
                fontFamily: "'DM Mono', monospace",
                letterSpacing: 0.5,
              }}
            >
              {person.role}
            </p>
            <div
              style={{
                width: 80,
                height: 3,
                background: 'linear-gradient(90deg, #A96A00 0%, #F1BA5F 100%)',
                borderRadius: 2,
              }}
            />
          </div>

          <hr style={{ borderColor: 'rgba(42,222,255,0.1)', margin: '0 0 1.5rem' }} />

          <section className="mb-4">
            <SectionLabel>Biography</SectionLabel>
            <p style={{ color: '#a8c0e0', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>
              {person.bio}
            </p>
          </section>

          {person.experience && (
            <section className="mb-4">
              <SectionLabel>Previous Experience</SectionLabel>
              <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                {person.experience.map((e, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#a8c0e0',
                      fontSize: '0.9rem',
                      padding: '6px 0',
                      // borderBottom: '1px solid rgba(42,222,255,0.07)',
                      display: 'flex',
                      gap: 10,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: '#2adeff', marginTop: 2 }}>›</span>
                    {e}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {person.qualifications && (
            <section className="mb-4">
              <SectionLabel>Qualifications</SectionLabel>
              <ul style={{ paddingLeft: 0, listStyle: 'none', margin: 0 }}>
                {person.qualifications.map((q, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#a8c0e0',
                      fontSize: '0.9rem',
                      padding: '6px 0',
                      // borderBottom: '1px solid rgba(42,222,255,0.07)',
                      display: 'flex',
                      gap: 10,
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: '#2adeff', marginTop: 2 }}>›</span>
                    {q}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {person.expertise && (
            <section className="mb-4">
              <SectionLabel>Areas of Expertise</SectionLabel>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {person.expertise.map(ex => (
                  <span
                    key={ex}
                    style={{
                      background: 'rgba(42, 222, 255, 0.07)',
                      border: '1px solid rgba(42, 222, 255, 0.2)',
                      color: '#7ad6e8',
                      fontSize: '0.9rem',
                      padding: '4px 12px',
                      borderRadius: 20,
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </section>
          )}
          {person.tags && person.tags.length > 0 && (
            <section className="mb-4">
              <SectionLabel>Leadership Focus</SectionLabel>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {person.tags.map(ex => (
                  <span
                    key={ex}
                    style={{
                      background: 'rgba(42, 222, 255, 0.07)',
                      border: '1px solid rgba(42, 222, 255, 0.2)',
                      color: '#7ad6e8',
                      fontSize: '0.9rem',
                      padding: '4px 12px',
                      borderRadius: 20,
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {ex}
                  </span>
                ))}
              </div>
            </section>
          )}
          {person.linkedin && (
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(42, 222, 255, 0.07)',
                border: '1px solid rgba(42, 222, 255, 0.25)',
                color: '#2adeff',
                fontSize: '0.8rem',
                padding: '10px 20px',
                borderRadius: 8,
                textDecoration: 'none',
                fontFamily: "'DM Mono', monospace",
                letterSpacing: 0.5,
                transition: 'all .15s',
                marginTop: 8,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(42,222,255,0.15)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(42,222,255,0.07)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              View LinkedIn Profile
            </a>
          )}
        </div>
      </div>
    </>
  );
}
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: '0.7rem',
        fontWeight: 700,
        letterSpacing: 2,
        color: '#388bfd',
        fontFamily: "'DM Mono', monospace",
        textTransform: 'uppercase',
        margin: '0 0 10px',
      }}
    >
      {children}
    </p>
  );
}

// ─── Large Founder Card ───────────────────────────────────────────────────────

function FounderCard({ person, onRead }: { person: Person; onRead: (p: Person) => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(56, 139, 253, 0.06)' : 'rgba(14, 28, 54, 0.6)',
        border: `1px solid ${hovered ? 'rgba(56, 139, 253, 0.35)' : 'rgba(56, 139, 253, 0.12)'}`,
        borderRadius: 16,
        overflow: 'hidden', // ← clips image to card corners
        transition: 'all .2s ease',
        cursor: 'default',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── IMAGE BLOCK (no padding, full bleed) ── */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          background: 'linear-gradient(to bottom, #0a1628 0%, #0a1628 100%)',
          // height: 400,
          paddingTop: '100%', // square-ish portrait
          flexShrink: 0,
        }}
      >
        <img
          src={person.avatar}
          alt={person.name}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
          }}
        />

        {/* bottom gradient fade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 45%, rgba(6,14,34,0.88) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* badge — bottom-left, overlapping gradient */}
        {person.badge && (
          <span
            style={{
              position: 'absolute',
              bottom: 14,
              left: 14,
              zIndex: 2,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: 1.6,
              color: '#2adeff',
              background: 'rgba(6,14,34,0.72)',
              border: '1px solid #2adeff',
              padding: '3px 9px',
              borderRadius: 4,
              fontFamily: "'DM Mono', monospace",
              lineHeight: 1.4,
            }}
          >
            {person.badge}
          </span>
        )}
      </div>

      {/* ── BODY (padded) ── */}
      <div
        style={{
          padding: '1rem 1.1rem 1.1rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        {/* name */}
        <h5
          style={{
            color: '#e8f0ff',
            fontSize: '1.05rem',
            fontWeight: 700,
            margin: '0 0 3px',
            lineHeight: 1.25,
          }}
        >
          {person.name}
        </h5>

        {/* role */}
        <p
          style={{
            color: '#2adeff',
            fontSize: '0.9rem',
            margin: '0 0 10px',
            fontFamily: "'DM Mono', monospace",
          }}
        >
          {person.role}
        </p>

        {/* gold divider */}
        <div
          style={{
            width: 80,
            height: 3,
            background: 'linear-gradient(90deg, #A96A00 0%, #F1BA5F 100%)',
            borderRadius: 2,
            marginBottom: 12,
          }}
        />

        {/* tagline */}
        <p
          style={{
            color: '#7a9cbf',
            fontSize: '0.82rem',
            lineHeight: 1.65,
            margin: '0 0 1rem',
            flexGrow: 1,
          }}
        >
          {person.tagline}
        </p>

        {/* tags */}
        <div className="d-flex flex-wrap gap-1 mb-4">
          {person.tags?.map(t => (
            <span
              key={t}
              style={{
                background: 'rgba(42, 222, 255, 0.07)',
                border: '1px solid rgba(42, 222, 255, 0.2)',
                color: '#7ad6e8',
                fontSize: '0.7rem',
                padding: '3px 10px',
                borderRadius: 20,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* view bio */}
        <button
          onClick={() => onRead(person)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#2adeff',
            fontSize: '1rem',
            padding: 0,
            cursor: 'pointer',
            fontFamily: "'DM Mono', monospace",
            letterSpacing: 0.5,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            transition: 'gap .15s',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.gap = '10px')}
          onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.gap = '6px')}
        >
          Read bio <span style={{ fontSize: 14 }}>→</span>
        </button>
      </div>
    </div>
  );
}

// ─── Medium Leader Card ───────────────────────────────────────────────────────

function LeaderCard({ person, onRead }: { person: Person; onRead: (p: Person) => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? 'rgba(56, 139, 253, 0.06)' : 'rgba(14, 28, 54, 0.6)',
        border: `1px solid ${hovered ? 'rgba(56, 139, 253, 0.35)' : 'rgba(56, 139, 253, 0.12)'}`,
        borderRadius: 16,
        overflow: 'hidden', // ← clips image to card corners
        transition: 'all .2s ease',
        cursor: 'default',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div className="d-flex flex-column align-items-start gap-3 mb-2">
        <div
          style={{
            position: 'relative',
            width: '100%',
            background: 'linear-gradient(to bottom, #0a1628 0%, #0a1628 100%)',
            // height: 400,
            paddingTop: '100%', // square-ish portrait
            flexShrink: 0,
          }}
        >
          <img
            src={person.avatar}
            alt={person.name}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top center',
            }}
          />

          {/* bottom gradient fade */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 45%, rgba(6,14,34,0.88) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
      <div
        style={{
          padding: '1rem 1.1rem 1.1rem',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <div>
          <h6
            style={{
              color: '#e8f0ff',
              fontSize: '1rem',
              fontWeight: 700,
              margin: '0 0 2px',
              lineHeight: 1.2,
            }}
          >
            {person.name}
          </h6>
          <p
            style={{
              color: '#2adeff',
              fontSize: '0.9rem',
              margin: '0 0 6px',
              fontFamily: "'DM Mono', monospace",
            }}
          >
            {person.role}
          </p>
          {/* gold divider */}
          <div
            style={{
              width: 80,
              height: 3,
              background: 'linear-gradient(90deg, #A96A00 0%, #F1BA5F 100%)',
              borderRadius: 2,
              marginBottom: 12,
            }}
          />
        </div>
        <p
          style={{
            color: '#7a9cbf',
            fontSize: '0.78rem',
            lineHeight: 1.6,
            margin: '0.5rem 0 0.75rem',
            flexGrow: 1,
          }}
        >
          {person.tagline}
        </p>
        <div className="d-flex flex-wrap gap-1 mb-3">
          {person.tags?.map(t => (
            <span
              key={t}
              style={{
                background: 'rgba(42, 222, 255, 0.07)',
                border: '1px solid rgba(42, 222, 255, 0.2)',
                color: '#7ad6e8',
                fontSize: '0.7rem',
                padding: '3px 10px',
                borderRadius: 20,
                fontFamily: "'DM Mono', monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <button
          onClick={() => onRead(person)}
          style={{
            background: 'transparent',
            border: 'none',
            color: '#2adeff',
            fontSize: '1rem',
            padding: 0,
            cursor: 'pointer',
            fontFamily: "'DM Mono', monospace",
            letterSpacing: 0.5,
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            transition: 'gap .15s',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.gap = '10px';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.gap = '6px';
          }}
        >
          Read bio <span style={{ fontSize: 14 }}>→</span>
        </button>
      </div>
    </div>
  );
}

// ─── Specialist Team Card ────────────────────────────────────────────────────

function SpecialistTeamCard({
  team,
  onReadMember,
}: {
  team: SpecialistTeam;
  onReadMember: (p: Person) => void;
}) {
  return (
    <div
      style={{
        background: 'rgba(14, 28, 54, 0.6)',
        border: '1px solid rgba(56, 139, 253, 0.12)',
        borderRadius: 14,
        padding: '1.5rem',
        height: '100%',
      }}
    >
      <div className="d-flex align-items-center gap-2 mb-2">
        <span style={{ fontSize: 22 }}>{team.icon}</span>
        <h6 style={{ color: '#e8f0ff', fontSize: '0.95rem', fontWeight: 700, margin: 0 }}>
          {team.name}
        </h6>
      </div>

      <p style={{ color: '#7a9cbf', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 0.75rem' }}>
        {team.description}
      </p>

      <ul style={{ paddingLeft: 0, listStyle: 'none', margin: '0 0 1rem' }}>
        {team.areas.map(a => (
          <li
            key={a}
            style={{
              color: '#7a9cbf',
              fontSize: '0.9rem',
              padding: '2px 0',
              display: 'flex',
              gap: 8,
            }}
          >
            <span style={{ color: '#388bfd' }}>·</span>
            {a}
          </li>
        ))}
      </ul>

      <hr style={{ borderColor: 'rgba(56,139,253,0.1)', margin: '1rem 0' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {team.members.map(m => (
          <div key={m.id} className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <Avatar person={m} size={62} />
              <div>
                <p style={{ color: '#c8daf5', fontSize: '0.9rem', fontWeight: 600, margin: 0 }}>
                  {m.name}
                </p>
                <p
                  style={{
                    color: '#4a7ab0',
                    fontSize: '0.8rem',
                    margin: 0,
                    fontFamily: "'DM Mono', monospace",
                  }}
                >
                  {m.role}
                </p>
              </div>
            </div>
            <button
              onClick={() => onReadMember(m)}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#2adeff',
                fontSize: '0.9rem',
                padding: 0,
                cursor: 'pointer',
                fontFamily: "'DM Mono', monospace",
                letterSpacing: 0.5,
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                transition: 'gap .15s',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.gap = '8px';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.gap = '4px';
              }}
            >
              Bio <span>→</span>
            </button>
          </div>
        ))}
      </div>

      <p
        style={{
          color: '#3a5a80',
          fontSize: '0.9rem',
          lineHeight: 1.55,
          margin: '1rem 0 0',
          fontStyle: 'italic',
        }}
      >
        {team.teamDetail}
      </p>
    </div>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-4">
      <div className="d-flex align-items-center gap-3">
        <span
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '1rem',
            color: '#2adeff',
            letterSpacing: 2,
          }}
        >
          {number}
        </span>
        <div style={{ height: 1, width: 32, background: 'rgba(56, 139, 253, 0.35)' }} />
        <h3
          style={{
            color: '#2adeff',
            fontSize: '1.5rem',
            fontWeight: 700,
            margin: 0,
            letterSpacing: 0.5,
            textTransform: 'uppercase',
          }}
        >
          {title}
        </h3>
      </div>
      {subtitle && (
        <p
          style={{
            color: '#4a7ab0',
            fontSize: '1rem',
            margin: '6px 0 0 68px',
            fontFamily: "'DM Mono', monospace",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Engineering Credibility Band ─────────────────────────────────────────────

function CredibilityBand() {
  return (
    <div
      style={{
        // background: 'rgba(6, 15, 31, 0.95)',
        borderTop: '1px solid rgba(56,139,253,0.12)',
        borderBottom: '1px solid rgba(56,139,253,0.12)',
        padding: '4rem 0',
        margin: '5rem 0 0',
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <p
            style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              letterSpacing: 3,
              color: '#388bfd',
              fontFamily: "'DM Mono', monospace",
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            Engineering Credibility
          </p>
          <h2
            style={{
              color: '#e8f0ff',
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 700,
              margin: 0,
            }}
          >
            Engineering credibility. Real-world impact.
          </h2>
        </div>
        <div className="row g-4">
          {credibilityTiles.map(tile => (
            <div key={tile.id} className="col-12 col-sm-6 col-lg-3">
              <div
                style={{
                  background: 'rgba(14, 28, 54, 0.6)',
                  border: '1px solid rgba(56, 139, 253, 0.12)',
                  borderRadius: 14,
                  padding: '1.5rem',
                  height: '100%',
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 12 }}>{tile.icon}</div>
                <h6
                  style={{
                    color: '#e8f0ff',
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    margin: '0 0 10px',
                    lineHeight: 1.3,
                  }}
                >
                  {tile.title}
                </h6>
                <p style={{ color: '#7a9cbf', fontSize: '0.78rem', lineHeight: 1.65, margin: 0 }}>
                  {tile.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Leadership Statement ─────────────────────────────────────────────────────

function LeadershipStatement({ onRead }: { onRead: (p: Person) => void }) {
  const jane = founders.find(f => f.id === 'jane')!;
  return (
    <div className="container" style={{ padding: '5rem 0' }}>
      <div className="text-center mb-5">
        <p
          style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: 3,
            color: '#388bfd',
            fontFamily: "'DM Mono', monospace",
            textTransform: 'uppercase',
            marginBottom: 12,
          }}
        >
          Leadership Statement
        </p>
        <h2
          style={{
            color: '#e8f0ff',
            fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
            fontWeight: 700,
            margin: 0,
          }}
        >
          Leadership statement
        </h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div
            style={{
              background: 'rgba(14, 28, 54, 0.6)',
              border: '1px solid rgba(56, 139, 253, 0.18)',
              borderRadius: 16,
              padding: '2.5rem 3rem',
            }}
          >
            <div className="row align-items-center g-4">
              <div className="col-auto">
                <Avatar person={jane} size={72} />
              </div>
              <div className="col">
                <blockquote style={{ margin: 0 }}>
                  <p
                    style={{
                      color: '#c8daf5',
                      fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                      lineHeight: 1.7,
                      fontStyle: 'italic',
                      margin: '0 0 1.25rem',
                    }}
                  >
                    "When teams, sites and systems are distributed, network performance becomes a
                    business issue — not just an IT one."
                  </p>
                  <footer>
                    <p
                      style={{
                        color: '#e8f0ff',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        margin: '0 0 2px',
                      }}
                    >
                      {jane.name}
                    </p>
                    <p
                      style={{
                        color: '#388bfd',
                        fontSize: '0.75rem',
                        fontFamily: "'DM Mono', monospace",
                        margin: 0,
                      }}
                    >
                      {jane.role}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Latest Leadership Updates ────────────────────────────────────────────────

function LatestUpdates() {
  return (
    <div
      style={{
        background: 'rgba(6, 15, 31, 0.95)',
        borderTop: '1px solid rgba(56,139,253,0.12)',
        padding: '5rem 0',
      }}
    >
      <div className="container">
        <div className="row align-items-end mb-5">
          <div className="col">
            <p
              style={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: 3,
                color: '#388bfd',
                fontFamily: "'DM Mono', monospace",
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Newsroom
            </p>
            <h2
              style={{
                color: '#e8f0ff',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 700,
                margin: 0,
              }}
            >
              Latest leadership updates
            </h2>
          </div>
          <div className="col-auto d-none d-md-block">
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'transparent',
                border: '1px solid rgba(56, 139, 253, 0.35)',
                color: '#88bbee',
                fontSize: '0.78rem',
                padding: '10px 20px',
                borderRadius: 8,
                textDecoration: 'none',
                fontFamily: "'DM Mono', monospace",
                letterSpacing: 0.5,
              }}
            >
              Visit newsroom →
            </a>
          </div>
        </div>
        <div className="row g-4">
          {newsCards.map(card => (
            <div key={card.id} className="col-12 col-md-4">
              <a
                href={card.href ?? '#'}
                style={{ textDecoration: 'none', display: 'block', height: '100%' }}
              >
                <div
                  style={{
                    background: 'rgba(14, 28, 54, 0.6)',
                    border: '1px solid rgba(56, 139, 253, 0.12)',
                    borderRadius: 14,
                    padding: '1.5rem',
                    height: '100%',
                    transition: 'all .2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(56,139,253,0.35)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(56,139,253,0.04)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(56,139,253,0.12)';
                    (e.currentTarget as HTMLDivElement).style.background = 'rgba(14,28,54,0.6)';
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: 2,
                      color: '#388bfd',
                      fontFamily: "'DM Mono', monospace",
                      textTransform: 'uppercase',
                    }}
                  >
                    {card.category}
                  </span>
                  <p
                    style={{
                      color: '#e8f0ff',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      lineHeight: 1.45,
                      margin: 0,
                      flexGrow: 1,
                    }}
                  >
                    {card.headline}
                  </p>
                  <span
                    style={{
                      color: '#388bfd',
                      fontSize: '0.75rem',
                      fontFamily: "'DM Mono', monospace",
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                  >
                    Read more <span style={{ fontSize: 14 }}>→</span>
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function LeadershipPage() {
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  return (
    <>
      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideIn {
          from { transform: translateX(30px); opacity: 0 }
          to   { transform: translateX(0);    opacity: 1 }
        }
        * { box-sizing: border-box; }
      `}</style>

      <div className="bg-dark">
        <Breadcrumb
          items={[
            { label: 'Company', href: '/company' },
            { label: 'Leadership', href: '/company/leadership' },
          ]}
          style={{ paddingTop: '12rem' }}
        />

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
            <div className="row align-items-end">
              <div className="col-lg-7">
                <h1
                  style={{
                    color: '#e8f0ff',
                    fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    margin: '0 0 1rem',
                  }}
                >
                  The people behind
                  <br />
                  <span style={{ color: '#2adeff' }}>Enigma Net</span>
                </h1>
                <p
                  style={{
                    color: '#e8f0ff',
                    fontSize: '0.95rem',
                    lineHeight: 1.75,
                    maxWidth: 520,
                    margin: '0 0 2rem',
                  }}
                >
                  Enigma Net is led by a team with experience across infrastructure, networking,
                  software development, security, finance, product, commercial growth, marketing and
                  technical delivery.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <PremiumButton
                    label="Contact us →"
                    href="/get-in-touch"
                    variant="blue"
                    className="rounded-4"
                  />
                  <PremiumButton
                    label=" Visit newsroom"
                    href="#"
                    variant="gold"
                    className="rounded-4"
                    outline
                  />
                </div>
              </div>
              <div className="col-lg-5 text-end ">
                <div style={{ maxHeight: '400px', width: '100%' }}>
                  <img
                    src={UsecaseRemoteWork1}
                    alt="Leadership"
                    style={{
                      width: '100%',
                      height: '100%',
                      WebkitMaskImage:
                        'radial-gradient(ellipse 80% 80% at 55% 48%, black 35%, transparent 70%)',
                      maskImage: 'radial-gradient(91% 83% at 54% 61%, black 43%, transparent 75%)',
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
        {/* <CredibilityBand /> */}

        {/* 06 — Leadership Statement */}
        {/* <LeadershipStatement onRead={setSelectedPerson} /> */}

        {/* 07 — Latest Leadership Updates */}
        {/* <LatestUpdates /> */}
      </div>

      <BioModal person={selectedPerson} onClose={() => setSelectedPerson(null)} />
    </>
  );
}
