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
  Mail,
  Newspaper,
  CheckCircle,
  Clock,
  Send,
  Building,
  User as UserIcon,
} from "lucide-react"
import { Button } from "../../components/ui/button"
import { useAuth } from "../../lib/auth"
import { listNews, updateNews, deleteNews, type NewsItem, type NewsChannel } from "../../lib/news"
import {
  listContactMessages,
  updateMessageStatus,
  deleteMessage,
  type ContactMessage,
} from "../../lib/contact"

type MainTab = "news" | "inbox"
type Filter = "all" | NewsChannel

const FILTERS: { key: Filter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "press", label: "Press" },
  { key: "blog", label: "Blog" },
]

export default function AdminDashboard() {
  const { user, signOutAdmin } = useAuth()
  const [mainTab, setMainTab] = useState<MainTab>("news")
  const [items, setItems] = useState<NewsItem[]>([])
  const [messages, setMessages] = useState<ContactMessage[]>([])
  const [filter, setFilter] = useState<Filter>("all")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [deleting, setDeleting] = useState<string | null>(null)
  const [toggling, setToggling] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    setError("")
    try {
      const [newsData, msgsData] = await Promise.all([
        listNews().catch(() => []),
        listContactMessages().catch(() => []),
      ])
      setItems(newsData ?? [])
      setMessages(msgsData ?? [])
    } catch (err: unknown) {
      const msg =
        err && typeof err === "object" && "message" in err
          ? String((err as { message: string }).message)
          : "Failed to load dashboard data."
      setError(msg)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const handleStatusToggle = async (msg: ContactMessage) => {
    const nextStatus = msg.status === "unread" ? "read" : "unread"
    await updateMessageStatus(msg.id, nextStatus)
    setMessages((prev) =>
      prev.map((m) => (m.id === msg.id ? { ...m, status: nextStatus } : m))
    )
  }

  const handleDeleteMessage = async (msg: ContactMessage) => {
    if (!window.confirm(`Delete message from "${msg.name}"?`)) return
    await deleteMessage(msg.id)
    setMessages((prev) => prev.filter((m) => m.id !== msg.id))
  }

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
  const unreadCount = messages.filter((m) => m.status === "unread").length
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
              <span className="w-8 h-8 rounded-full bg-secondary-bg flex items-center justify-center font-bold text-primary text-xs border border-border">
                {initials}
              </span>
              <span className="hidden sm:inline font-semibold">{user?.email}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-full"
              onClick={() => signOutAdmin()}
            >
              <LogOut size={14} /> Sign out
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
        {/* Navigation Tabs Header */}
        <div className="flex items-center justify-between border-b border-border pb-4 mb-8">
          <div className="flex gap-2">
            <button
              onClick={() => setMainTab("news")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                mainTab === "news"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-muted-text hover:text-primary border border-border"
              }`}
            >
              <Newspaper size={16} /> Manage News &amp; Blog ({items.length})
            </button>
            <button
              onClick={() => setMainTab("inbox")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all relative ${
                mainTab === "inbox"
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-muted-text hover:text-primary border border-border"
              }`}
            >
              <Mail size={16} /> Contact Inbox ({messages.length})
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-accent text-white text-xs font-bold ml-1">
                  {unreadCount} new
                </span>
              )}
            </button>
          </div>

          {mainTab === "news" && (
            <Link to="/admin/news/new">
              <Button size="default" className="rounded-full gap-2">
                <Plus size={16} /> New Article
              </Button>
            </Link>
          )}
        </div>

        {/* Tab 1: Manage News */}
        {mainTab === "news" && (
          <>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="font-heading text-2xl font-bold text-primary">News &amp; Publications</h1>
                <p className="mt-1 text-sm text-muted-text">
                  Create, edit, publish, or remove announcements and blog posts.
                </p>
              </div>
              <div className="flex gap-2">
                {FILTERS.map((f) => (
                  <button
                    key={f.key}
                    onClick={() => setFilter(f.key)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                      filter === f.key
                        ? "bg-accent text-white border-accent"
                        : "bg-white text-muted-text border-border hover:text-primary"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="mt-6 rounded-2xl bg-red-50 border border-red-200 p-5">
                <p className="text-red-700 text-sm font-semibold">{error}</p>
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
                    <Link to="/admin/news/new" className="text-accent font-semibold hover:underline">
                      Create your first one →
                    </Link>
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {filtered.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-3xl bg-white border border-border p-5 flex flex-col sm:flex-row sm:items-center gap-4 hover:border-primary/30 transition-all"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="px-2.5 py-0.5 rounded-full bg-secondary-bg text-primary text-xs font-semibold uppercase tracking-wide border border-border">
                            {item.channel}
                          </span>
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                              item.published
                                ? "bg-green-50 text-green-700 border border-green-200"
                                : "bg-secondary-bg text-muted-text border border-border"
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
                          href={item.channel === "press" ? `/press/${item.id}` : `/resources/blog/${item.id}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="View on site"
                          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-text hover:text-primary hover:border-primary/40 transition-colors"
                          title="View Live Article"
                        >
                          <ExternalLink size={16} />
                        </a>
                        <button
                          onClick={() => togglePublish(item)}
                          disabled={toggling === item.id}
                          aria-label={item.published ? "Unpublish" : "Publish"}
                          className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-text hover:text-primary hover:border-primary/40 transition-colors"
                          title={item.published ? "Unpublish Article" : "Publish Article"}
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
          </>
        )}

        {/* Tab 2: Contact Inbox */}
        {mainTab === "inbox" && (
          <>
            <div>
              <h1 className="font-heading text-2xl font-bold text-primary">Contact Messages</h1>
              <p className="mt-1 text-sm text-muted-text">
                Submissions sent via <code className="bg-white px-1.5 py-0.5 rounded font-mono text-xs border border-border">/contact</code> page. Notified to <strong>contact@cainoa.com</strong>.
              </p>
            </div>

            <div className="mt-6">
              {loading ? (
                <div className="py-24 flex items-center justify-center">
                  <Loader2 size={28} className="text-muted-text animate-spin" />
                </div>
              ) : messages.length === 0 ? (
                <div className="py-24 text-center rounded-3xl bg-white border border-border">
                  <Mail size={40} className="mx-auto text-muted-text/30 mb-3" />
                  <p className="font-heading text-lg font-bold text-primary">No Contact Messages Yet</p>
                  <p className="text-sm text-muted-text mt-1 max-w-sm mx-auto">
                    When visitors submit the contact form on your site, their messages will appear here.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`rounded-3xl bg-white border p-6 transition-all ${
                        msg.status === "unread"
                          ? "border-accent/40 shadow-sm bg-accent-tint/10"
                          : "border-border"
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/60">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs shrink-0">
                            {msg.name.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-heading font-bold text-primary text-base">{msg.name}</h3>
                              {msg.status === "unread" && (
                                <span className="px-2 py-0.5 rounded-full bg-accent text-white text-[10px] font-bold uppercase">
                                  New
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-muted-text flex items-center gap-2 mt-0.5">
                              <span>{msg.email}</span>
                              {msg.organization && (
                                <>
                                  <span>•</span>
                                  <span className="flex items-center gap-1">
                                    <Building size={11} /> {msg.organization}
                                  </span>
                                </>
                              )}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-xs text-muted-text shrink-0">
                          <Clock size={12} />
                          {new Date(msg.created_at).toLocaleString()}
                        </div>
                      </div>

                      {msg.service && (
                        <div className="mt-3 inline-block px-3 py-1 rounded-full bg-secondary-bg text-primary text-xs font-semibold border border-border">
                          Service Interest: {msg.service}
                        </div>
                      )}

                      <div className="mt-4 p-4 rounded-2xl bg-secondary-bg/50 border border-border text-sm text-primary leading-relaxed whitespace-pre-wrap">
                        {msg.message}
                      </div>

                      <div className="mt-4 pt-3 flex flex-wrap items-center justify-between gap-3">
                        <a
                          href={`mailto:${msg.email}?subject=${encodeURIComponent(
                            `Re: Your inquiry to Cainoa Technologies`
                          )}`}
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-accent text-white font-semibold text-xs hover:bg-accent-light transition-colors"
                        >
                          <Send size={12} /> Reply to {msg.email}
                        </a>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => handleStatusToggle(msg)}
                            className="px-3 py-1.5 rounded-full border border-border text-xs font-medium text-muted-text hover:text-primary transition-colors"
                          >
                            {msg.status === "unread" ? "Mark as Read" : "Mark as Unread"}
                          </button>
                          <button
                            onClick={() => handleDeleteMessage(msg)}
                            className="px-3 py-1.5 rounded-full border border-red-200 text-xs font-medium text-red-600 hover:bg-red-50 transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  )
}
