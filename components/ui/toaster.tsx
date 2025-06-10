"use client"

import { useToast } from "@/hooks/use-toast"

import * as ToastPrimitive from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastPrimitive.Provider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <ToastPrimitive.Root key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastPrimitive.Title>{title}</ToastPrimitive.Title>}
              {description && <ToastPrimitive.Description>{description}</ToastPrimitive.Description>}
            </div>
            {action}
            <ToastPrimitive.Close />
          </ToastPrimitive.Root>
        )
      })}
      <ToastPrimitive.Viewport />
    </ToastPrimitive.Provider>
  )
}
