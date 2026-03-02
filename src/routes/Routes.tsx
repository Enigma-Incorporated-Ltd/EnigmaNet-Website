import { lazy } from "react";
import { Navigate } from "react-router";

// Landings
const Index = lazy(() => import("@/app/(landings)/index"))
const ShowCase1 = lazy(() => import("@/app/(landings)/app-showcase-v1"))
const ShowCase2 = lazy(() => import('@/app/(landings)/app-showcase-v2'))
const ShowCase3 = lazy(() => import('@/app/(landings)/app-showcase-v3'))
const Blog = lazy(() => import('@/app/(landings)/blog'))
const Conference = lazy(() => import('@/app/(landings)/conference'))
const DigitalAgency = lazy(() => import('@/app/(landings)/digital-agency'))
const Finacial = lazy(() => import('@/app/(landings)/financial'))
const Medical = lazy(() => import('@/app/(landings)/medical'))
const OnlineCourse = lazy(() => import('@/app/(landings)/online-courses'))
const Product = lazy(() => import('@/app/(landings)/product'))
const SaasV1 = lazy(() => import('@/app/(landings)/saas-v1'))
const SaasV2 = lazy(() => import('@/app/(landings)/saas-v2'))
const SaasV3 = lazy(() => import('@/app/(landings)/saas-v3'))
const SaasV4 = lazy(() => import('@/app/(landings)/saas-v4'))
const SaasV5 = lazy(() => import('@/app/(landings)/saas-v5'))
const Agency1 = lazy(() => import('@/app/(landings)/software-dev-agency-v1'))
const Agency2 = lazy(() => import('@/app/(landings)/software-dev-agency-v2'))
const Agency3 = lazy(() => import('@/app/(landings)/software-dev-agency-v3'))
const Startup = lazy(() => import('@/app/(landings)/startup'))

//pages

const Error1 = lazy(() => import("@/app/(pages)/404-v1"))
const Error2 = lazy(() => import("@/app/(pages)/404-v2"))
const AboutV1 = lazy(() => import("@/app/(pages)/about-v1"))
const AboutV2 = lazy(() => import("@/app/(pages)/about-v2"))
const AboutV3 = lazy(() => import("@/app/(pages)/about-v3"))
const GridNoSidebar = lazy(() => import("@/app/(pages)/blog-grid-no-sidebar"))
const GridWithSidebar = lazy(() => import("@/app/(pages)/blog-grid-with-sidebar"))
const ListNoSidebar = lazy(() => import("@/app/(pages)/blog-list-no-sidebar"))
const ListWithSidebar = lazy(() => import("@/app/(pages)/blog-list-with-sidebar"))
const Podcast = lazy(() => import("@/app/(pages)/blog-podcast"))
const SimpleFeed = lazy(() => import("@/app/(pages)/blog-simple-feed"))
const BlogSingle = lazy(() => import("@/app/(pages)/blog-single"))
const ContactV1 = lazy(() => import("@/app/(pages)/contacts-v1"))
const ContactV2 = lazy(() => import("@/app/(pages)/contacts-v2"))
const ContactV3 = lazy(() => import("@/app/(pages)/contacts-v3"))
const PortfolioCourses = lazy(() => import("@/app/(pages)/portfolio-courses"))
const PortfolioGrid = lazy(() => import("@/app/(pages)/portfolio-grid"))
const PortfolioList = lazy(() => import("@/app/(pages)/portfolio-list"))
const PortfolioSingleCourse = lazy(() => import("@/app/(pages)/portfolio-single-course"))
const PortfolioSingleProject = lazy(() => import("@/app/(pages)/portfolio-single-project"))
const PortfolioSlider = lazy(() => import("@/app/(pages)/portfolio-slider"))
const Pricing = lazy(() => import("@/app/(pages)/pricing"))
const ServiceSingle1 = lazy(() => import("@/app/(pages)/services-single-v1"))
const ServiceSingle2 = lazy(() => import("@/app/(pages)/services-single-v2"))
const ServiceV1 = lazy(() => import("@/app/(pages)/services-v1"))
const ServiceV2 = lazy(() => import("@/app/(pages)/services-v2"))

//account

const Collections = lazy(() => import("@/app/(account)/account-collections"))
const Details = lazy(() => import("@/app/(account)/account-details"))
const Messages = lazy(() => import("@/app/(account)/account-messages"))
const Notification = lazy(() => import("@/app/(account)/account-notifications"))
const Payement = lazy(() => import("@/app/(account)/account-payment"))
const SaveItem = lazy(() => import("@/app/(account)/account-saved-items"))
const Security = lazy(() => import("@/app/(account)/account-security"))
const SignIn = lazy(() => import("@/app/(account)/account-signin"))
const SignUp = lazy(() => import("@/app/(account)/account-signup"))



export const AllRoutes = [

  { path: "/", name: "index", element: <Navigate to="/index" replace /> },
  { path: "/index", name: "index1", element: <Index /> },
  { path: "/app-showcase-v1", name: "case1", element: <ShowCase1 /> },
  { path: "/app-showcase-v2", name: "case2", element: <ShowCase2 /> },
  { path: "/app-showcase-v3", name: "case3", element: <ShowCase3 /> },
  { path: "/blog", name: "blog", element: <Blog /> },
  { path: "/conference", name: "conercence", element: <Conference /> },
  { path: "/digital-agency", name: "DigitalAgency", element: <DigitalAgency /> },
  { path: "/financial", name: "finacial", element: < Finacial /> },
  { path: "/medical", name: "medical", element: <Medical /> },
  { path: "/online-courses", name: "OnlineCourse", element: <OnlineCourse /> },
  { path: "/product", name: "Product", element: <Product /> },
  { path: "/saas-v1", name: "saasV1", element: <SaasV1 /> },
  { path: "/saas-v2", name: "saasV2", element: <SaasV2 /> },
  { path: "/saas-v3", name: "saasV3", element: <SaasV3 /> },
  { path: "/saas-v4", name: "saasV4", element: <SaasV4 /> },
  { path: "/saas-v5", name: "saasV5", element: <SaasV5 /> },
  { path: "/software-dev-agency-v1", name: "agency1", element: <Agency1 /> },
  { path: "/software-dev-agency-v2", name: "agency2", element: <Agency2 /> },
  { path: "/software-dev-agency-v3", name: "agency3", element: <Agency3 /> },
  { path: "/startup", name: "startup", element: <Startup /> },


  { path: "/404-v1", name: "Error1", element: <Error1 /> },
  { path: "/404-v2", name: "Error2", element: <Error2 /> },
  { path: "/about-v1", name: "AboutV1", element: <AboutV1 /> },
  { path: "/about-v2", name: "AboutV2", element: <AboutV2 /> },
  { path: "/about-v3", name: "AboutV3", element: <AboutV3 /> },
  { path: "/blog-grid-no-sidebar", name: "blog-grid-no-sidebar", element: <GridNoSidebar /> },
  { path: "/blog-grid-with-sidebar", name: "blog-grid-with-sidebar", element: <GridWithSidebar /> },
  { path: "/blog-list-no-sidebar", name: "blog-list-no-sidebar", element: <ListNoSidebar /> },
  { path: "/blog-list-with-sidebar", name: "blog-list-with-sidebar", element: <ListWithSidebar /> },
  { path: "/blog-podcast", name: "blog-podcast", element: <Podcast /> },
  { path: "/blog-simple-feed", name: "blog-simple-feed", element: <SimpleFeed /> },
  { path: "/blog-single", name: "blog-single", element: <BlogSingle /> },
  { path: "/contacts-v1", name: "contacts-v1", element: <ContactV1 /> },
  { path: "/contacts-v2", name: "contacts-v2", element: <ContactV2 /> },
  { path: "/contacts-v3", name: "contacts-v3", element: <ContactV3 /> },
  { path: "/portfolio-courses", name: "portfolio-courses", element: <PortfolioCourses /> },
  { path: "/portfolio-grid", name: "portfolio-grid", element: <PortfolioGrid /> },
  { path: "/portfolio-list", name: "portfolio-list", element: <PortfolioList /> },
  { path: "/portfolio-single-course", name: "portfolio-single-course", element: <PortfolioSingleCourse /> },
  { path: "/portfolio-single-project", name: "portfolio-single-project", element: <PortfolioSingleProject /> },
  { path: "/portfolio-slider", name: "portfolio-slider", element: <PortfolioSlider /> },
  { path: "/pricing", name: "pricing", element: <Pricing /> },
  { path: "/services-single-v1", name: "services-single-v1", element: <ServiceSingle1 /> },
  { path: "/services-single-v2", name: "services-single-v2", element: <ServiceSingle2 /> },
  { path: "/services-v1", name: "services-v1", element: <ServiceV1 /> },
  { path: "/services-v2", name: "services-v2", element: <ServiceV2 /> },



  { path: "/account-collections", name: "account-collections", element: <Collections /> },
  { path: "/account-details", name: "account-details", element: <Details /> },
  { path: "/account-messages", name: "account-messages", element: <Messages /> },
  { path: "/account-notifications", name: "account-notification", element: <Notification /> },
  { path: "/account-payment", name: "account-payment", element: <Payement /> },
  { path: "/account-saved-items", name: "account-saveItem", element: <SaveItem /> },
  { path: "/account-security", name: "account-security", element: <Security /> },
  { path: "/account-signin", name: "account-signin", element: <SignIn /> },
  { path: "/account-signup", name: "account-signup", element: <SignUp /> },




















































];

