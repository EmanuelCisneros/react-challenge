import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const ToggleTheme = () => {
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "dark"
    setTheme(stored)
    document.documentElement.classList.toggle("dark", stored === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="mx-auto mt-4 text-3xl focus:outline-none hover:scale-110 transition-transform bg-transparent border-none"
      aria-label="Toggle dark/light mode"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </motion.button>
  )
}

export default ToggleTheme