import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  Plus,
  Pencil,
  Trash2,
  LogOut,
  Eye,
  EyeOff,
  ExternalLink,
  Loader2,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { useAuth } from "../../lib/auth"
import { listNews, updateNews, deleteNews, type NewsItem, type NewsChannel } from "../../lib/news"

type Filter = "all" | NewsChannel

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "press", label: "Press" },
  { key: "blog", label: "Blog" },
]

export default function AdminDashboard() {
  const { user, signOutAdmin } = useAuth()
  const [items, setItems] = useState<NewsItem[]>([])
  const [filter, setFilter] = useState<Filter>("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [deleting, setDeleting] = useState<string | null>(null)
  const [toggling, setToggling] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    setError("")
    try {
      const data = await listNews()
      setItems(data ?? [])
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "message" in err
          ? String((err as { message: string }).message)
          : "Failed to load news. Check your Supabase connection and RLS policies."
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const togglePublish = async (item: NewsItem) => {
    setToggling(item.id)
    try {
      await updateNews(item.id, { published: !item.published })
      setItems((prev) =>
        prev.map((n) => (n.id === item.id ? { ...n, published: !n.published } : n))
      )
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "message" in err
          ? String((err as { message: string }).message)
          : "Failed to update publish state."
      setError(msg)
    } finally {
      setToggling(null)
    }
  }

  const handleDelete = async (item: NewsItem) => {
    if (!window.confirm(`Delete "${item.title}"? This cannot be undone.`)) return
    setDeleting(item.id)
    try {
      await deleteNews(item.id)
      setItems((prev) => prev.filter((n) => n.id !== item.id))
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "message" in err
          ? String((err as { message: string }).message)
          : "Failed to delete item."
      setError(msg)
    } finally {
      setDeleting(null)
    }
  }

  const filtered = filter === "all" ? items : items.filter((n) => n.channel === filter)
  const initials = (user?.email ?? "A").slice(0, 2).toUpperCase()

  return (
    <main className="min-h-screen bg-secondary-bg/50">
      <header className="bg-white border-b border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="font-heading text-xl font-bold text-primary">
              Cainoa <span className="text-muted-text font-medium text-sm">/ Admin</span>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-text">
              <span className="w-8 h-8 rounded-full bg-secondary-bg flex items-center justify-center font-bold text-primary text-xs">
                {initials}
              </span>
              <span className="hidden sm:inline">{user?.email}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2"
              onClick={() => signOutAdmin()}
            >
              <LogOut size={14} /> Sign out
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="font-heading text-3xl font-bold text-primary">Manage News</h1>
            <p className="mt-1 text-sm text-muted-text">
              Create, publish, and manage press announcements and blog articles.
            </p>
          </div>
          <Link to="/admin/news/new">
            <Button size="lg" className="rounded-full gap-2">
              <Plus size={16} /> New Item
            </Button>
          </Link>
        </div>

        <div className="mt-8 flex gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                filter === f.key
                  ? "bg-primary text-white border-primary"
                  : "bg-white text-muted-text border-border hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {error && (
          <div className="mt-6 rounded-2xl bg-red-50 border border-red-200 p-5">
            <p className="text-red-700 text-sm font-semibold">{error}</p>
            {(error.includes("schema cache") || error.includes("PGRST205") || error.includes("public.news")) && (
              <div className="mt-3 pt-3 border-t border-red-200">
                <p className="text-red-600 text-sm">
                  The <code className="bg-red-100 px-1 rounded font-mono text-xs">public.news</code> database table has not been created yet.
                </p>
                <Link
                  to="/admin/setup"
                  className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-full hover:bg-red-700 transition-colors"
                >
                  → Go to Database Setup Guide
                </Link>
              </div>
            )}
          </div>
        )}

        <div className="mt-6">
          {loading ? (
            <div className="py-24 flex items-center justify-center">
              <Loader2 size={28} className="text-muted-text animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-24 text-center rounded-3xl bg-white border border-border">
              <p className="text-muted-text">
                No {filter !== "all" ? filter : ""} items yet.{" "}
                <Link to="/admin/news/new" className="text-primary hover:underline">
                  Create your first one →
                </Link>
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl bg-white border border-border p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-secondary-bg text-primary text-xs font-semibold uppercase tracking-wide">
                        {item.channel}
                      </span>
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                          item.published
                            ? "bg-accent-tint text-accent"
                            : "bg-secondary-bg text-muted-text"
                        }`}
                      >
                        {item.published ? "Published" : "Draft"}
                      </span>
                      <span className="text-xs text-muted-text">{item.date}</span>
                    </div>
                    <h2 className="mt-2 font-heading text-lg font-bold text-primary truncate">
                      {item.title}
                    </h2>
                    <p className="text-sm text-muted-text truncate mt-0.5">{item.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={item.channel === "press" ? "/press" : "/resources/blog"}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View on site"
                      className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-text hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <button
                      onClick={() => togglePublish(item)}
                      disabled={toggling === item.id}
                      aria-label={item.published ? "Unpublish" : "Publish"}
                      className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-text hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      {item.published ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <Link
                      to={`/admin/news/edit/${item.id}`}
                      aria-label="Edit"
                      className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-text hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      <Pencil size={16} />
                    </Link>
                    <button
                      onClick={() => handleDelete(item)}
                      disabled={deleting === item.id}
                      aria-label="Delete"
                      className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-red-500 hover:border-red-300 hover:bg-red-50 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
