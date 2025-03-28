import ToggleTheme from "./ToggleTheme"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-6"
    >
      <div className="text-[5rem] md:text-[6rem] mb-2 animate-pulse leading-none">
        📝
      </div>

      <h1 className="text-5xl font-extrabold text-white md:text-6xl drop-shadow-md">
        Frases App
      </h1>

      <ToggleTheme />

      <p className="text-gray-300 dark:text-gray-200 text-center mt-1">
        Agregá y buscá tus frases favoritas 
      </p>
    </motion.header>
  )
}

export default Header
