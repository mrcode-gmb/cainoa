import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import ScrollToTop from "./components/ScrollToTop"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Careers from "./pages/Careers"
import Leadership from "./pages/Leadership"
import Press from "./pages/Press"
import AIPlatform from "./pages/solutions/AIPlatform"
import Fintech from "./pages/solutions/Fintech"
import Cybersecurity from "./pages/solutions/Cybersecurity"
import Infrastructure from "./pages/solutions/Infrastructure"
import Documentation from "./pages/resources/Documentation"
import Research from "./pages/resources/Research"
import Blog from "./pages/resources/Blog"
import CaseStudies from "./pages/resources/CaseStudies"
import Contact from "./pages/Contact"
import Privacy from "./pages/legal/Privacy"
import Terms from "./pages/legal/Terms"
import Security from "./pages/legal/Security"
import Compliance from "./pages/legal/Compliance"

export default function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions/ai-platform" element={<AIPlatform />} />
        <Route path="/solutions/fintech" element={<Fintech />} />
        <Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
        <Route path="/solutions/infrastructure" element={<Infrastructure />} />
        <Route path="/resources/documentation" element={<Documentation />} />
        <Route path="/resources/research" element={<Research />} />
        <Route path="/resources/blog" element={<Blog />} />
        <Route path="/resources/case-studies" element={<CaseStudies />} />
        <Route path="/legal/privacy" element={<Privacy />} />
        <Route path="/legal/terms" element={<Terms />} />
        <Route path="/legal/security" element={<Security />} />
        <Route path="/legal/compliance" element={<Compliance />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </HelmetProvider>
  )
}
