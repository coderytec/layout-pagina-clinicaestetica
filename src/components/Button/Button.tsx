import "./button.css"
import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps = {
  children: ReactNode
  variant?: "primary" | "secondary"
  fullWidth?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  variant = "primary",
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        btn
        btn-${variant}
        ${fullWidth ? "btn-full" : ""}
      `}
      {...props}
    >
      {children}
    </button>
  )
}
