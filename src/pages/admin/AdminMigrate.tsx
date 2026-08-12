import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "../../components/ui/button"

const SQL_MIGRATION = `create table if not exists public.news (
  id uuid primary key default gen_random_uuid(),
  channel text not null default 'press' check (channel in ('press', 'blog')),
  title text not null,
  excerpt text not null,
  body text,
  category text not null default 'Company News',
  author text not null,
  date text not null,
  read_time text,
  image_url text,
  published boolean not null default false,
  created_at timestamptz not null default now()
);
alter table public.news enable row level security;
drop policy if exists "Public read news" on public.news;
create policy "Public read news" on public.news for select using (true);
drop policy if exists "Authenticated insert news" on public.news;
create policy "Authenticated insert news" on public.news for insert with check (auth.role() = 'authenticated');
drop policy if exists "Authenticated update news" on public.news;
create policy "Authenticated update news" on public.news for update using (auth.role() = 'authenticated');
drop policy if exists "Authenticated delete news" on public.news;
create policy "Authenticated delete news" on public.news for delete using (auth.role() = 'authenticated');`

export default function AdminMigrate() {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)
  

  const handleCopy = () => {
    navigator.clipboard.writeText(SQL_MIGRATION).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    })
  }

  return (
    <main className="min-h-screen bg-secondary-bg/50">
      <header className="bg-white border-b border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="font-heading text-xl font-bold text-primary">
            Cainoa <span className="text-muted-text font-medium text-sm">/ Admin Setup</span>
          </Link>
          <Link to="/admin/dashboard" className="text-sm text-muted-text hover:text-primary transition-colors">
            ← Back to Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 shrink-0 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center">
            <AlertCircle size={24} className="text-red-500" />
          </div>
          <div>
            <h1 className="font-heading text-2xl font-bold text-primary">Database Not Set Up Yet</h1>
            <p className="mt-1 text-muted-text">
              The <code className="bg-secondary-bg px-1.5 py-0.5 rounded text-sm font-mono">public.news</code> table does not exist in your Supabase database.
              You must create it manually via the Supabase SQL Editor. This only needs to be done once.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-white overflow-hidden">
          <div className="px-6 pt-6 pb-4 border-b border-border flex items-center justify-between">
            <div>
              <h2 className="font-heading text-lg font-bold text-primary">Step 1 — Open the SQL Editor</h2>
              <p className="text-sm text-muted-text mt-0.5">Click the button below to open your Supabase project's SQL Editor.</p>
            </div>
          </div>
          <div className="px-6 py-5">
            <a
              href="https://supabase.com/dashboard/project/qugrplwxuvruderkwcdr/sql/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold text-sm rounded-full hover:bg-primary/90 transition-colors"
            >
              Open Supabase SQL Editor →
            </a>
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-border bg-white overflow-hidden">
          <div className="px-6 pt-6 pb-4 border-b border-border flex items-center justify-between">
            <div>
              <h2 className="font-heading text-lg font-bold text-primary">Step 2 — Copy &amp; Run this SQL</h2>
              <p className="text-sm text-muted-text mt-0.5">Paste the SQL below into the editor and click <strong>Run</strong>.</p>
            </div>
            <button
              onClick={handleCopy}
              className="shrink-0 flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              {copied ? <><CheckCircle size={14} className="text-green-500" /> Copied!</> : "📋 Copy SQL"}
            </button>
          </div>
          <div className="p-4">
            <pre className="text-xs text-muted-text bg-secondary-bg/60 rounded-2xl p-5 overflow-x-auto leading-relaxed">
              {SQL_MIGRATION}
            </pre>
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-border bg-white overflow-hidden">
          <div className="px-6 pt-6 pb-4 border-b border-border">
            <h2 className="font-heading text-lg font-bold text-primary">Step 3 — Return here &amp; reload</h2>
            <p className="text-sm text-muted-text mt-0.5">After running the SQL in Supabase, click the button below to go to the dashboard.</p>
          </div>
          <div className="px-6 py-5 flex flex-wrap items-center gap-3">
            <Button size="lg" className="rounded-full gap-2" onClick={() => { navigate("/admin/dashboard") }}>
              ✓ Done — Go to Dashboard
            </Button>
            <button
              onClick={() => window.location.reload()}
              className="text-sm text-muted-text hover:text-primary transition-colors"
            >
              Or reload this page
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
