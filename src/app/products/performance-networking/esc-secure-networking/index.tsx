import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageMeta from "@/components/PageMeta";
import { BASE_URL } from "@/utils";
import SecureNetworking from "./components";

const EscSecureNetworking = () => {
   const structuredData = {
     '@context': 'https://schema.org',
     '@type': 'WebPage',
     name: 'Esc Secure Networking',
     url: `${BASE_URL}/products/performance-networking/esc-secure-networking`,
     description: 'ESC – Secure Networking delivers Enigma’s APN Core as a multi-tenant software and SaaS platform, enabling private overlay networking, SD-WAN-style control, traffic acceleration, bonding, RAIN resilience and secure connectivity across any IP network.  ',
   };
   return (
     <>
       <PageMeta
         title="Esc Secure Networking | Performance Networking -Products"
         description="ESC – Secure Networking delivers Enigma’s APN Core as a multi-tenant software and SaaS   
         platform, enabling private overlay networking, SD-WAN-style control, traffic acceleration,   
         bonding, RAIN resilience and secure connectivity across any IP network.  "
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