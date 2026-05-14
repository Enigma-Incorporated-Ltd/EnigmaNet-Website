import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import PageMeta from "@/components/PageMeta";
import { BASE_URL } from "@/utils";
import Command from "./components";


const EnigmaCommand = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Enigma Command',
    url: `${BASE_URL}/products/the-enigma-platform/enigma-command`,
    description: 'Enigma Command gives NOC and platform teams a single operational view of incidents, alerts, LLM-agent actions, automation status and performance events across Enigma Net services.  ',
  };
  return (
    <>
      <PageMeta
        title="Enigma Command"
        description="Enigma Command gives NOC and platform teams a single operational view of incidents, alerts,   
        LLM-agent actions, automation status and performance events across Enigma Net services.  
        "
        url={`${BASE_URL}/products/the-enigma-platform/enigma-command`}
        structuredData={structuredData}
      />

      <Navbar Headerclass="header navbar navbar-expand-lg bg-light fixed-top" />
      <Command />

      <Footer />
    </>
  );
}

export default EnigmaCommand