import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageMeta from "@/components/PageMeta";
import { BASE_URL } from "@/utils";
import SecureNetworking from "./components";

const EscSecureNetworking = () => {
   const structuredData = {
     '@context': 'https://schema.org',
     '@type': 'WebPage',
     name: 'Coming Soon',
     url: `${BASE_URL}/products/performance-networking/esc-secure-networking`,
     description: 'We are working hard to launch something amazing. Stay tuned!',
   };
   return (
     <>
       <PageMeta
         title="Coming Soon"
         description="We are working hard to launch something amazing. Stay tuned!"
         url={`${BASE_URL}/products/performance-networking/esc-secure-networking`}
         structuredData={structuredData}
       />

       <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
       <SecureNetworking />

       <Footer />
     </>
   );
}

export default EscSecureNetworking