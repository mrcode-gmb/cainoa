import SEO from "../components/SEO"
import HeroSection from "../components/HeroSection"
import BlueprintSection from "../components/BlueprintSection"
import PartnersSection from "../components/PartnersSection"

export default function Home() {
  return (
    <main>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Cainoa",
          "url": "https://cainoa.com",
          "logo": "https://cainoa.com/favicon.png",
          "description": "Cainoa delivers AI infrastructure, cybersecurity, and fintech platforms engineered for African enterprises.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Abuja",
            "addressCountry": "NG"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "partner@cainoa.com",
            "contactType": "sales"
          },
          "sameAs": [
            "https://linkedin.com/company/cainoa",
            "https://facebook.com/cainoa"
          ]
        })}
      </script>
      <SEO title="Home" description="Cainoa delivers AI infrastructure, cybersecurity, and fintech platforms engineered for African enterprises." path="/" />
      <HeroSection />
      <BlueprintSection />
      <PartnersSection />
      
    </main>
  )
}
