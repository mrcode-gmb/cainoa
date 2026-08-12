import { useState, type FormEvent } from "react"
import { Navigate, Link } from "react-router-dom"
import { Lock, AlertCircle, ArrowLeft } from "lucide-react"
import { Button } from "../../components/ui/button"
import { useAuth } from "../../lib/auth"
import { isSupabaseReady } from "../../lib/news"

export default function AdminLogin() {
  const { user, signIn } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  if (user) return <Navigate to="/admin/dashboard" replace />

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    try {
      await signIn(email, password)
    } catch (err) {
      setError(
        err instanceof Error && err.message.includes("invalid-credential")
          ? "Incorrect email or password."
          : "Unable to sign in. Please try again."
      )
    } finally {
      setLoading(false)
    }
  }

  if (!isSupabaseReady()) {
    return (
      <main className="min-h-screen bg-secondary-bg/50 flex items-center justify-center px-6">
        <div className="w-full max-w-md p-8 lg:p-10 rounded-3xl bg-card-bg border border-border">
          <div className="flex items-center gap-2 text-amber-600">
            <AlertCircle size={20} />
            <h2 className="font-heading text-xl font-bold">Supabase not configured</h2>
          </div>
          <p className="mt-3 text-sm text-muted-text leading-relaxed">
            The admin dashboard needs Supabase credentials. Copy <code className="font-mono text-primary">.env.example</code>{" "}
            to <code className="font-mono text-primary">.env.local</code> and fill in your Supabase project values,
            then restart the dev server. See <code className="font-mono text-primary">SUPABASE_SETUP.md</code>.
          </p>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 text-sm text-primary hover:underline">
            <ArrowLeft size={16} /> Back to site
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-secondary-bg/50 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-text hover:text-primary transition-colors mb-6">
          <ArrowLeft size={16} /> Back to site
        </Link>
        <div className="p-8 lg:p-10 rounded-3xl bg-card-bg border border-border">
          <div className="w-12 h-12 rounded-2xl bg-secondary-bg flex items-center justify-center mb-6">
            <Lock size={22} className="text-primary" />
          </div>
          <h1 className="font-heading text-2xl font-bold text-primary">Admin Sign In</h1>
          <p className="mt-2 text-sm text-muted-text">
            Sign in to manage news and announcements.
          </p>

          {error && (
            <div className="mt-5 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label htmlFor="admin-email" className="block text-sm font-semibold text-primary mb-1.5">
                Email
              </label>
              <input
                id="admin-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@cainoa.com"
                className="w-full h-12 px-4 rounded-xl border border-border bg-card-bg text-primary placeholder:text-muted-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
              />
            </div>
            <div>
              <label htmlFor="admin-password" className="block text-sm font-semibold text-primary mb-1.5">
                Password
              </label>
              <input
                id="admin-password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full h-12 px-4 rounded-xl border border-border bg-card-bg text-primary placeholder:text-muted-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full" disabled={loading}>
              {loading ? "Signing in…" : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </main>
  )
}
