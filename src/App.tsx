import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import PublicLayout from "./components/PublicLayout"
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
import { AuthProvider, ProtectedRoute } from "./lib/auth"
import { ThemeProvider } from "./lib/theme"
import AdminLogin from "./pages/admin/AdminLogin"
import AdminDashboard from "./pages/admin/AdminDashboard"
import NewsEditor from "./pages/admin/NewsEditor"
import AdminMigrate from "./pages/admin/AdminMigrate"

import NewsDetail from "./pages/NewsDetail"

export default function App() {
  return (
    <ThemeProvider>
    <HelmetProvider>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/press" element={<Press />} />
          <Route path="/press/:id" element={<NewsDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solutions/ai-platform" element={<AIPlatform />} />
          <Route path="/solutions/fintech" element={<Fintech />} />
          <Route path="/solutions/cybersecurity" element={<Cybersecurity />} />
          <Route path="/solutions/infrastructure" element={<Infrastructure />} />
          <Route path="/resources/documentation" element={<Documentation />} />
          <Route path="/resources/research" element={<Research />} />
          <Route path="/resources/blog" element={<Blog />} />
          <Route path="/resources/blog/:id" element={<NewsDetail />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="/legal/security" element={<Security />} />
          <Route path="/legal/compliance" element={<Compliance />} />
        </Route>
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/setup" element={<ProtectedRoute><AdminMigrate /></ProtectedRoute>} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/news/new"
          element={
            <ProtectedRoute>
              <NewsEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/news/edit/:id"
          element={
            <ProtectedRoute>
              <NewsEditor />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
    </HelmetProvider>
    </ThemeProvider>
  )
}
