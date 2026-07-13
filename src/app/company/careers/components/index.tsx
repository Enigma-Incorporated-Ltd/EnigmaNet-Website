import Breadcrumb from '@/components/ui/Breadcrumb';
import HeroSection from '@/components/ui/HeroSection';
import HeaderTitle from '@/components/ui/HeaderTitle';
import { useTheme } from '@/utils/useTheme';
import block1 from '@/assets/svgs/solutions/enterprise/Core capabilities - block 1.svg';
import block2 from '@/assets/svgs/solutions/enterprise/Core capabilities - block 2.svg';
import block3 from '@/assets/svgs/solutions/enterprise/Core capabilities - block 3.svg';
import CardSlider from '@/components/ui/CardSlider';
import CTA from '@/components/ui/CtaBand';
import { Culture } from '@/assets/img/company';
import HeroImage from '@/components/ui/HeroImage';
const Core = [
  {
    id: 1,
    icon: block1,
    title: 'Cross-functional collaboration ',
    description: `Teams work across engineering, design, product, operations, growth and marketing to align   
    technical capability with customer and business requirements.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Delivery with structure    ',
    description: `Project and operations roles help keep teams aligned, support Agile execution, maintain   
    documentation and keep delivery moving.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Technical depth  ',
    description:
      'The company brings together expertise across software development, cloud architecture, deployment, cybersecurity, infrastructure, DevOps and technical operations.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Commercial awareness  ',
    description: `Growth, marketing and product teams help connect Enigma Net’s technical capability to   
    customer needs, market positioning and commercial outcomes.   `,
  },
  {
    id: 5,
    icon: block2,
    title: 'Clear communication  ',
    description: `Design, marketing and product teams help translate complex technical ideas into clear,   
accessible and commercially relevant communication.  `,
  },
  {
    id: 6,
    icon: block3,
    title: 'Continuous improvement    ',
    description:
      'The team works in a way that supports iteration, learning, documentation and steady improvement as the business scales.  ',
  },
];
const Values = [
  {
    id: 1,
    icon: block1,
    title: 'Clarity  ',
    description: `We make complex infrastructure easier to understand, explain and act on.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Ownership  ',
    description: `We take responsibility for outcomes, not just tasks.   `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Momentum  ',
    description: 'We move work forward with focus, pace and accountability.  ',
  },
  {
    id: 4,
    icon: block1,
    title: 'Practical innovation    ',
    description: `We solve real infrastructure problems with technology that is built to work in live environments.   `,
  },
];
const Operational = [
  {
    id: 1,
    icon: block1,
    title: 'Engineering & infrastructure  ',
    description: `Software development, platform engineering, deployment, infrastructure, DevOps,   
cybersecurity and technical operations.   <br/> <br/>Nasim Ahmad brings over two decades of software engineering, digital transformation, cloud   
solutions and technology leadership, while Andy Rodger leads deployment strategy and internal   
IT development across operations, infrastructure and cybersecurity.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Product & delivery   ',
    description: `Product strategy, roadmaps, Agile delivery, project coordination and operational process.  <br /> <br/> Joseph Howard leads product strategy and execution across secure, scalable technology   
solutions, working across engineering, design and commercial teams to translate requirements   
into clear product direction.    `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Growth, marketing & communication  ',
    description: `Commercial growth, partnerships, market positioning, brand, messaging and public relations.  <br/> <br/> Koby Yogaretnam leads growth and ecosystem engagement across startup, AI and technology   
sectors, while Tracey Haynes leads marketing, brand and PR, translating complex infrastructure   
and cloud technology into clear, credible messaging.   `,
  },
  {
    id: 4,
    icon: block1,
    title: 'Design, operations & support  ',
    description: `Visual communication, UI/UX, front-end implementation, project delivery, Jira administration,   
customer support and technical infrastructure.   <br/> <br/>The wider team includes specialists across business development, design, front-end   
development, operations, delivery and technical infrastructure, supporting everything from go-
to-market execution and visual communication to service desk optimisation and resilient   
platform environments.   `,
  },
];
const WhyEnigma = [
  {
    id: 1,
    icon: block1,
    title: 'Meaningful technical challenge   ',
    description: `Work on problems connected to network performance, data movement, resilience and   
infrastructure control.  `,
  },
  {
    id: 2,
    icon: block2,
    title: 'Close to the build  ',
    description: `Be part of a team where product, engineering, deployment, design and commercial strategy   
stay closely connected.  `,
  },
  {
    id: 3,
    icon: block3,
    title: 'Real-world impact  ',
    description: `Help shape infrastructure that supports customers working with data-heavy, distributed and   
performance-sensitive environments.   `,
  },
  {
    id: 4,
    icon: block1,
    title: 'Room to grow  ',
    description: `Contribute to a business that is still scaling, where structure, process and opportunity continue   
to evolve.  `,
  },
];
const CareerPage = () => {
  const { theme } = useTheme();

  return (
    <div>
      <Breadcrumb
        items={[
          { label: 'Company', href: '/company' },
          { label: 'Careers', href: '/company/careers' },
        ]}
        style={{
          paddingTop: '12rem',
        }}
      />

      <HeroSection
        title={
          <>
            Building serious infrastructure takes a team that moves with clarity, ownership and
            momentum
          </>
        }
        description={
          <>
            Enigma Net brings together people across engineering, product, deployment,
            infrastructure, design, operations, growth and marketing to solve complex data movement
            and connectivity challenges.
            <br />
            <br />
            We are a fast-moving technical company with a practical, delivery-focused culture. Our
            team works across disciplines to turn complex infrastructure technology into products,
            services and customer outcomes that are clear, secure and scalable.
          </>
        }
        // image={TrustCenter}
        buttons={[
          {
            label: 'Meet the leadership team ',
            href: '/company/leadership',
            variant: 'blue',
          },
        ]}
        eyebrow="Company  "
      />
      <HeroImage img={Culture} />

      <CardSlider
        sectionTitle="Culture overview  "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>A technical team built around practical problem-solving</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net’s culture is shaped by people who understand technology, delivery, commercial
            growth and customer need.
            <br />
            <br />
            The team includes deep experience across internet infrastructure, network systems,
            software development, deployment, product, operations, business growth and brand
            communication. Glenn Melford-Colegate founded Enigma Net with a focus on creating
            efficient network protocols for the AI and IoT era, while Jane Osborne-Buglear brings
            extensive experience designing and operating large corporate networks and helping
            develop the public Internet.
            <br />
            <br />
            Across the wider team, the shared thread is practical execution: understanding the
            problem, building the right solution, documenting the work and keeping momentum.
          </>
        }
        showButtons
        primaryButton={{
          label: 'Culture',
          href: '/company/careers/culture',
          variant: 'blue',
        }}
      />

      <CardSlider
        sectionTitle="How the team works  "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Cross-functional, hands-on and delivery-focused</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net works across disciplines rather than in silos. Engineering, deployment,
            product, design, operations, growth and marketing collaborate to move work from idea to
            implementation.
            <br />
            <br />
            The team combines strategic thinking with hands-on delivery — from software strategy and
            scalable technology solutions to customer deployment, product roadmaps, visual
            communication, project coordination and technical infrastructure.
          </>
        }
        data={Core}
      />

      <CardSlider
        sectionTitle="Values    "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>The behaviours that shape how we work</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        data={Values}
      />
      <CardSlider
        sectionTitle="The people behind Enigma Net  "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>A multidisciplinary team with specialist depth</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net is built by people with experience across infrastructure, finance, software,
            deployment, product, growth, design, operations and technical delivery.
          </>
        }
        data={Operational}
      />
      <CardSlider
        sectionTitle="Why Enigma    "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>Work on infrastructure problems that matter</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            Enigma Net is focused on one of the most important infrastructure challenges facing
            modern organisations: how to move data faster, more securely and more predictably across
            complex environments.
            <br />
            <br />
            For people who enjoy solving difficult problems, working across disciplines and building
            technology with real-world impact, Enigma Net offers the chance to contribute to a
            growing company at the intersection of secure networking, cloud infrastructure, data
            movement and AI-ready environments.
          </>
        }
        data={WhyEnigma}
        showButtons
        primaryButton={{
          label: 'Why Enigma',
          href: '/company/careers/why-enigma',
          variant: 'blue',
        }}
      />
      <CardSlider
        sectionTitle="Open roles  "
        title={
          <>
            <HeaderTitle
              key={theme}
              title={<>No open roles currently</>}
              variant={theme === 'dark' ? 'gold' : 'blue'}
            />
          </>
        }
        description={
          <>
            We are not currently advertising open roles.
            <br />
            <br />
            As Enigma Net grows, future opportunities will be shared on this page. If you are
            interested in following our work, you can connect with us through our company updates
            and newsroom.
          </>
        }
        showButtons
        primaryButton={{
          label: 'Follow Enigma Net on LinkedIn  ',
          href: 'https://www.linkedin.com/company/enigmanet-ai/',
          variant: 'blue',
          disableSentenceCase: true,
        }}
      />

      <CTA
        theme={theme}
        showButtons
        subHeadline="Get Started"
        headline="Interested in where   "
        headline2="Enigma Net is heading? "
        description="Explore the company, meet the leadership team or follow our latest updates as we continue   
building secure infrastructure for data-intensive environments.  "
        primaryButton={{
          label: 'Visit newsroom',
          href: '/company/newsroom',
          variant: 'gold',
        }}
      />
    </div>
  );
};

export default CareerPage;
