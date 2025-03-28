import { tv } from "tailwind-variants"

export const formStyles = tv({
  slots: {
    input: "flex-1 px-4 py-2 text-black rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400",
    button:
      "ml-1 font-semibold text-white px-5 py-2 rounded-xl transition-all shadow-md hover:shadow-xl hover:scale-105",
  },
  variants: {
    theme: {
      default: {
        input: "",
        button: "bg-gradient-to-r from-purple-500 to-pink-500",
      },
    },
  },
  defaultVariants: {
    theme: "default",
  },
})