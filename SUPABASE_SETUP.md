# Supabase Admin Setup — Cainoa News Dashboard

The admin dashboard (`/admin`) lets you create, edit, publish/unpublish, and delete
news items. It uses Supabase **Auth** (email/password) and **Postgres** (a `news` table).

Until Supabase is configured, the site keeps showing the built-in fallback news,
and `/admin` shows a "not configured" notice.

## Step 1 — Create the Supabase project

1. Go to <https://supabase.com/> and sign in (GitHub or email).
2. Click **New project** → pick an organization, name it (e.g. `cainoa`),
   set a database password, choose a region, and create it.
3. Wait for the project to provision, then open it.

## Step 2 — Add your keys

1. In the project dashboard, go to **Project Settings** → **API**.
2. Copy the **Project URL** and the **anon / public** key.
3. Copy the template:

   ```bash
   cp .env.example .env.local
   ```

4. Fill in `.env.local`:

   ```
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

   `.env.local` is already git-ignored, so your keys won't be committed.

5. Restart the dev server (`npm run dev`) so Vite picks up the new env vars.

## Step 3 — Create the `news` table

In **SQL Editor**, run this script and hit **Run**:

```sql
create table public.news (
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

-- Anyone can read published news
create policy "Public read news" on public.news
  for select using (true);

-- Only signed-in users can create/edit/delete
create policy "Authenticated write news" on public.news
  for insert with check (auth.role() = 'authenticated');
create policy "Authenticated update news" on public.news
  for update using (auth.role() = 'authenticated');
create policy "Authenticated delete news" on public.news
  for delete using (auth.role() = 'authenticated');
```

> Security note: these policies let ANY signed-in user write. To restrict to a
> single admin email, replace the three write policies with, e.g.:
> ```sql
> create policy "Admin write news" on public.news
>   for all using (auth.email() = 'you@cainoa.com')
>   with check (auth.email() = 'you@cainoa.com');
> ```
> (drop the three policies above first).

## Step 4 — Create your admin account

1. In the project dashboard, go to **Authentication** → **Users** → **Add user**.
2. Enter your email and password. This is what you'll use to sign in at `/admin`.

Email/password auth is enabled by default in Supabase; you don't need to configure
a provider.

## Step 5 — Use it

1. Visit `http://localhost:5173/admin` and sign in.
2. **New Item** → choose channel (**Press** or **Blog**), fill in the fields,
   and toggle **Published** when ready.
3. Items appear automatically on `/press` (press channel) and `/resources/blog`
   (blog channel). No rebuild needed.
4. Use the eye button to publish/unpublish, the pencil to edit, and the trash to delete.

## Deploying

The anon key in `.env.local` is a client-side key — this is how Supabase web apps
work. When building for production, ensure `.env.local` is present on the build
machine (or set the same `VITE_SUPABASE_*` variables in your hosting CI).
