import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

export type ThemeMode = "light" | "dark" | "system"

interface ThemeContextType {
  theme: ThemeMode
  setTheme: (theme: ThemeMode) => void
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("cainoa_theme") as ThemeMode | null
    return saved || "system"
  })

  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    const root = document.documentElement
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

    const applyTheme = () => {
      let activeDark = false
      if (theme === "dark") {
        activeDark = true
      } else if (theme === "light") {
        activeDark = false
      } else {
        activeDark = mediaQuery.matches
      }

      if (activeDark) {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
      setIsDark(activeDark)
    }

    applyTheme()

    const listener = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        if (e.matches) {
          root.classList.add("dark")
          setIsDark(true)
        } else {
          root.classList.remove("dark")
          setIsDark(false)
        }
      }
    }

    mediaQuery.addEventListener("change", listener)
    return () => mediaQuery.removeEventListener("change", listener)
  }, [theme])

  const setTheme = (newTheme: ThemeMode) => {
    localStorage.setItem("cainoa_theme", newTheme)
    setThemeState(newTheme)
  }

  const toggleTheme = () => {
    if (isDark) {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
