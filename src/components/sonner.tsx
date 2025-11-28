"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="top-right"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-900 group-[.toaster]:border-2 group-[.toaster]:border-primary/20 group-[.toaster]:shadow-xl group-[.toaster]:shadow-primary/10 group-[.toaster]:rounded-lg",
          description: "group-[.toast]:text-slate-600 group-[.toast]:font-medium",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground group-[.toast]:hover:bg-primary-600 group-[.toast]:font-semibold group-[.toast]:shadow-md group-[.toast]:shadow-primary/20 group-[.toast]:rounded-md",
          cancelButton:
            "group-[.toast]:bg-primary/10 group-[.toast]:text-primary group-[.toast]:hover:bg-primary/20 group-[.toast]:font-semibold group-[.toast]:border group-[.toast]:border-primary/20 group-[.toast]:rounded-md",
          success:
            "group-[.toaster]:border-green-500/40 group-[.toaster]:bg-green-50 group-[.toaster]:text-green-800",
          error:
            "group-[.toaster]:border-red-500/40 group-[.toaster]:bg-red-50 group-[.toaster]:text-red-800",
          warning:
            "group-[.toaster]:border-yellow-500/40 group-[.toaster]:bg-yellow-50 group-[.toaster]:text-yellow-800",
          info:
            "group-[.toaster]:border-primary/40 group-[.toaster]:bg-primary/5 group-[.toaster]:text-primary",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
