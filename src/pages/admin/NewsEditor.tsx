import { useEffect, useState, type FormEvent } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { ArrowLeft, Save, Loader2 } from "lucide-react"
import { Button } from "../../components/ui/button"
import {
  createNews,
  updateNews,
  getNews,
  type NewsInput,
  type NewsChannel,
} from "../../lib/news"

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-border bg-card-bg text-primary placeholder:text-muted-text/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all duration-300"

const labelClass = "block text-sm font-semibold text-primary mb-1.5"

const CATEGORIES = [
  "Artificial Intelligence",
  "Cybersecurity",
  "Fintech",
  "Enterprise Software",
  "Cloud",
  "Product Engineering",
  "Company News",
  "Case Studies",
]

export default function NewsEditor() {
  const { id } = useParams()
  const isEdit = Boolean(id)
  const navigate = useNavigate()

  const [form, setForm] = useState<NewsInput>({
    channel: "press",
    title: "",
    excerpt: "",
    body: "",
    category: "Company News",
    author: "",
    date: "",
    readTime: "3 min read",
    imageUrl: "",
    published: false,
  })
  const [loading, setLoading] = useState(isEdit)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!id) return
    getNews(id).then((item) => {
      if (item) {
        setForm({
          channel: item.channel,
          title: item.title,
          excerpt: item.excerpt,
          body: item.body ?? "",
          category: item.category,
          author: item.author,
          date: item.date,
          readTime: item.readTime ?? "3 min read",
          imageUrl: item.imageUrl ?? "",
          published: item.published,
        })
      }
      setLoading(false)
    })
  }, [id])

  const set = <K extends keyof NewsInput>(key: K, value: NewsInput[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError("")
    setSaving(true)
    try {
      if (isEdit && id) {
        await updateNews(id, form)
      } else {
        await createNews(form)
      }
      navigate("/admin/dashboard")
    } catch (err: unknown) {
      const message =
        err && typeof err === "object" && "message" in err
          ? String((err as { message: string }).message)
          : "Failed to save. Check your Supabase connection and RLS policies."
      setError(message)
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-secondary-bg/50 flex items-center justify-center">
        <Loader2 size={28} className="text-muted-text animate-spin" />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-secondary-bg/50">
      <header className="bg-card-bg border-b border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-heading text-xl font-bold text-primary">
            Cainoa <span className="text-muted-text font-medium text-sm">/ Admin</span>
          </Link>
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center gap-2 text-sm text-muted-text hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} /> Back to dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-10">
        <h1 className="font-heading text-3xl font-bold text-primary">
          {isEdit ? "Edit Item" : "Create New Item"}
        </h1>
        <p className="mt-1 text-sm text-muted-text">
          Choose a channel, fill in the details, and publish when ready.
        </p>

        {error && (
          <div className="mt-6 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <span className={labelClass}>Channel</span>
            <div className="grid grid-cols-2 gap-3">
              {(["press", "blog"] as NewsChannel[]).map((channel) => (
                <button
                  key={channel}
                  type="button"
                  onClick={() => set("channel", channel)}
                  className={`px-4 py-3 rounded-2xl border text-left transition-all duration-300 ${
                    form.channel === channel
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-card-bg text-muted-text hover:text-primary"
                  }`}
                >
                  <span className="font-heading font-bold capitalize">{channel}</span>
                  <span className="block text-xs mt-0.5 opacity-70">
                    {channel === "press"
                      ? "Shows on the Press page"
                      : "Shows on the Blog page"}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="title" className={labelClass}>Title</label>
            <input
              id="title"
              required
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="e.g. Cainoa launches enterprise AI platform"
              className={inputClass}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="category" className={labelClass}>Category</label>
              <select
                id="category"
                value={form.category}
                onChange={(e) => set("category", e.target.value)}
                className={inputClass}
              >
                {CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="author" className={labelClass}>Author</label>
              <input
                id="author"
                required
                value={form.author}
                onChange={(e) => set("author", e.target.value)}
                placeholder="Full name"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className={labelClass}>Date</label>
              <input
                id="date"
                required
                value={form.date}
                onChange={(e) => set("date", e.target.value)}
                placeholder="e.g. July 8, 2026"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="readTime" className={labelClass}>Read time</label>
              <input
                id="readTime"
                value={form.readTime}
                onChange={(e) => set("readTime", e.target.value)}
                placeholder="e.g. 5 min read"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="imageUrl" className={labelClass}>
              Cover Image URL <span className="text-muted-text font-normal">(optional)</span>
            </label>
            <input
              id="imageUrl"
              type="url"
              value={form.imageUrl}
              onChange={(e) => set("imageUrl", e.target.value)}
              placeholder="e.g. https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe or https://example.com/cover.jpg"
              className={inputClass}
            />
            {form.imageUrl && (
              <div className="mt-3 rounded-2xl overflow-hidden border border-border aspect-[16/9] max-h-48 bg-secondary-bg relative group">
                <img
                  src={form.imageUrl}
                  alt="Cover Preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none"
                  }}
                />
                <span className="absolute bottom-2 left-2 px-2.5 py-1 bg-black/60 backdrop-blur text-white text-xs font-semibold rounded-lg">
                  Preview
                </span>
              </div>
            )}
          </div>

          <div>
            <label htmlFor="excerpt" className={labelClass}>Excerpt</label>
            <textarea
              id="excerpt"
              required
              rows={3}
              value={form.excerpt}
              onChange={(e) => set("excerpt", e.target.value)}
              placeholder="A short summary shown on the card."
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="body" className={labelClass}>
              Body <span className="text-muted-text font-normal">(optional)</span>
            </label>
            <textarea
              id="body"
              rows={8}
              value={form.body}
              onChange={(e) => set("body", e.target.value)}
              placeholder="Full article content. Paragraphs separated by blank lines."
              className={inputClass}
            />
          </div>

          <div className="flex items-center justify-between gap-4 flex-wrap">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => set("published", e.target.checked)}
                className="w-5 h-5 rounded border-border accent-primary"
              />
              <span className="text-sm font-medium text-primary">
                {form.published ? "Published — visible to the public" : "Draft — saved privately"}
              </span>
            </label>
            <Button type="submit" size="lg" className="rounded-full gap-2" disabled={saving}>
              <Save size={16} />
              {saving ? "Saving…" : isEdit ? "Save Changes" : "Create Item"}
            </Button>
          </div>
        </form>
      </div>
    </main>
  )
}
