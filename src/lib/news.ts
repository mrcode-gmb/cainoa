import { supabase, supabaseConfigured } from "./supabase"

export type NewsChannel = "press" | "blog"

export interface NewsItem {
  id: string
  channel: NewsChannel
  title: string
  excerpt: string
  body?: string
  category: string
  author: string
  date: string
  readTime?: string
  imageUrl?: string
  published: boolean
  createdAt?: string
}

export interface NewsInput {
  channel: NewsChannel
  title: string
  excerpt: string
  body?: string
  category: string
  author: string
  date: string
  readTime?: string
  imageUrl?: string
  published: boolean
}

const TABLE = "news"

export function isSupabaseReady() {
  return supabaseConfigured
}

export async function listNews(channel?: NewsChannel, onlyPublished = false) {
  if (!supabaseConfigured || !supabase) return null

  let query = supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false })

  if (channel) query = query.eq("channel", channel)
  if (onlyPublished) query = query.eq("published", true)

  const { data, error } = await query
  if (error) {
    console.error("Supabase listNews error:", error.message)
    throw error
  }

  return (data ?? []).map(rowToNewsItem)
}

export async function getNews(id: string) {
  if (!supabaseConfigured || !supabase) return null

  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .maybeSingle()

  if (error || !data) return null
  return rowToNewsItem(data)
}

export async function createNews(input: NewsInput) {
  if (!supabaseConfigured || !supabase) return null

  const { data, error } = await supabase
    .from(TABLE)
    .insert([inputToRow(input)])
    .select("id")
    .single()

  if (error) throw error
  return data.id as string
}

export async function updateNews(id: string, input: Partial<NewsInput>) {
  if (!supabaseConfigured || !supabase) return false

  const { error } = await supabase.from(TABLE).update(inputToRow(input)).eq("id", id)
  if (error) throw error
  return true
}

export async function deleteNews(id: string) {
  if (!supabaseConfigured || !supabase) return false

  const { error } = await supabase.from(TABLE).delete().eq("id", id)
  if (error) throw error
  return true
}

function rowToNewsItem(row: Record<string, unknown>): NewsItem {
  return {
    id: String(row.id),
    channel: row.channel as NewsChannel,
    title: String(row.title ?? ""),
    excerpt: String(row.excerpt ?? ""),
    body: row.body ? String(row.body) : undefined,
    category: String(row.category ?? ""),
    author: String(row.author ?? ""),
    date: String(row.date ?? ""),
    readTime: row.read_time ? String(row.read_time) : undefined,
    imageUrl: row.image_url ? String(row.image_url) : undefined,
    published: Boolean(row.published),
    createdAt: row.created_at ? String(row.created_at) : undefined,
  }
}

function inputToRow(input: Partial<NewsInput>) {
  const row: Record<string, unknown> = {}
  if (input.channel !== undefined) row.channel = input.channel
  if (input.title !== undefined) row.title = input.title
  if (input.excerpt !== undefined) row.excerpt = input.excerpt
  if (input.body !== undefined) row.body = input.body
  if (input.category !== undefined) row.category = input.category
  if (input.author !== undefined) row.author = input.author
  if (input.date !== undefined) row.date = input.date
  if (input.readTime !== undefined) row.read_time = input.readTime
  if (input.imageUrl !== undefined) row.image_url = input.imageUrl
  if (input.published !== undefined) row.published = input.published
  return row
}
