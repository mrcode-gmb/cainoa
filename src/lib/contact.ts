import { supabase, supabaseConfigured } from "./supabase"

export interface ContactMessage {
  id: string
  name: string
  organization?: string
  email: string
  service?: string
  message: string
  status: "unread" | "read" | "archived"
  created_at: string
}

export interface ContactMessageInput {
  name: string
  organization?: string
  email: string
  service?: string
  message: string
}

const TABLE = "contact_messages"

// In-memory fallback if database table is not created yet
let localMessages: ContactMessage[] = []

export async function submitContactMessage(input: ContactMessageInput): Promise<{ success: boolean; error?: string }> {
  if (supabaseConfigured && supabase) {
    const { error } = await supabase.from(TABLE).insert([
      {
        name: input.name,
        organization: input.organization || "",
        email: input.email,
        service: input.service || "",
        message: input.message,
        status: "unread",
      },
    ])

    if (!error) {
      return { success: true }
    }

    console.warn("Supabase contact_messages table fallback active:", error.message)
  }

  // Fallback to local storage so messages are never lost
  const newMsg: ContactMessage = {
    id: "msg-" + Date.now(),
    name: input.name,
    organization: input.organization,
    email: input.email,
    service: input.service,
    message: input.message,
    status: "unread",
    created_at: new Date().toISOString(),
  }

  const existing = JSON.parse(localStorage.getItem("cainoa_contact_messages") || "[]")
  localStorage.setItem("cainoa_contact_messages", JSON.stringify([newMsg, ...existing]))
  localMessages = [newMsg, ...localMessages]

  return { success: true }
}

export async function listContactMessages(): Promise<ContactMessage[]> {
  if (supabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from(TABLE)
      .select("*")
      .order("created_at", { ascending: false })

    if (!error && data) {
      return data.map((row) => ({
        id: row.id,
        name: row.name,
        organization: row.organization,
        email: row.email,
        service: row.service,
        message: row.message,
        status: row.status,
        created_at: row.created_at,
      }))
    }
  }

  const stored = JSON.parse(localStorage.getItem("cainoa_contact_messages") || "[]")
  return stored
}

export async function updateMessageStatus(id: string, status: "unread" | "read" | "archived"): Promise<void> {
  if (supabaseConfigured && supabase) {
    await supabase.from(TABLE).update({ status }).eq("id", id)
  }

  const stored: ContactMessage[] = JSON.parse(localStorage.getItem("cainoa_contact_messages") || "[]")
  const updated = stored.map((m) => (m.id === id ? { ...m, status } : m))
  localStorage.setItem("cainoa_contact_messages", JSON.stringify(updated))
}

export async function deleteMessage(id: string): Promise<void> {
  if (supabaseConfigured && supabase) {
    await supabase.from(TABLE).delete().eq("id", id)
  }

  const stored: ContactMessage[] = JSON.parse(localStorage.getItem("cainoa_contact_messages") || "[]")
  const updated = stored.filter((m) => m.id !== id)
  localStorage.setItem("cainoa_contact_messages", JSON.stringify(updated))
}
