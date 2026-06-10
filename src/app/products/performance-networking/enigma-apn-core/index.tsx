import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageMeta from "@/components/PageMeta";
import { BASE_URL } from "@/utils";
import ApnCore from "./components";


const EnigmaApnCore = () => {
   const structuredData = {
     '@context': 'https://schema.org',
     '@type': 'WebPage',
     name: 'Enigma APN Core',
     url: `${BASE_URL}/products/performance-networking/enigma-apn-core`,
     description: `APN Core is Enigma Net’s software-defined performance overlay, combining byte-level routing,   
     TCP acceleration, multi-link bonding, RAIN redundancy, telemetry and encryption across fibre,   
     broadband, 5G, LTE, satellite and mixed networks.  `,
   }; 
   return (
     <>
       <PageMeta
         title="Enigma APN Core | Performance Networking - Products"
         description="APN Core is Enigma Net’s software-defined performance overlay, combining byte-level routing,   
         TCP acceleration, multi-link bonding, RAIN redundancy, telemetry and encryption across fibre,   
         broadband, 5G, LTE, satellite and mixed networks.  "
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