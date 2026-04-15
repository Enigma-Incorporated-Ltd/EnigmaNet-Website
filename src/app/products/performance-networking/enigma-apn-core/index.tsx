import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageMeta from "@/components/PageMeta";
import { BASE_URL } from "@/utils";
import ApnCore from "./components";


const EnigmaApnCore = () => {
   const structuredData = {
     '@context': 'https://schema.org',
     '@type': 'WebPage',
     name: 'Coming Soon',
     url: `${BASE_URL}/products/performance-networking/enigma-apn-core`,
     description: 'We are working hard to launch something amazing. Stay tuned!',
   };
   return (
     <>
       <PageMeta
         title="Coming Soon"
         description="We are working hard to launch something amazing. Stay tuned!"
         url={`${BASE_URL}/products/performance-networking/enigma-apn-core`}
         structuredData={structuredData}
       />

       <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
       <ApnCore />

       <Footer />
     </>
   );
}

export default EnigmaApnCore