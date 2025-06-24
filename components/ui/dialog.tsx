"use client"

import * as DialogPrimitive from "@radix-ui/react-dialog"
import { XIcon } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"

export const Root = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

export const Trigger = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

export const Portal = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

export const Close = ({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) => {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

export const Overlay = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>) => {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50",
        "bg-gradient-to-br from-black/40 via-black/30 to-black/50 backdrop-blur-md",
        "data-[state=closed]:duration-200 data-[state=open]:duration-300",
        className,
      )}
      {...props}
    />
  )
}

export const Content = ({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) => {
  return (
    <Portal data-slot="dialog-portal">
      <Overlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          // Enhanced animations with better easing
          "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          "fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-6",
          // Modern glass morphism design
          "bg-background/95 backdrop-blur-lg",
          // Sophisticated border and shadow effects
          "border border-white/10 shadow-xl shadow-black/25",
          // Enhanced rounded corners and padding
          "rounded-2xl p-8",
          // Smooth transition timing
          "duration-300 ease-out",
          // Responsive sizing
          "sm:max-w-lg md:max-w-xl",
          // Gradient overlay for depth
          "before:pointer-events-none before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br before:from-white/5 before:to-transparent",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className={cn(
              // Enhanced positioning and sizing
              "absolute top-6 right-6 rounded-xl p-2",
              // Glass morphism button design
              "border border-white/10 bg-white/5 backdrop-blur-sm",
              // Sophisticated hover and focus states
              "hover:scale-110 hover:border-white/20 hover:bg-white/10",
              "focus:ring-primary/20 focus:ring-offset-background/50 focus:border-white/20 focus:bg-white/10 focus:ring-2 focus:ring-offset-2 focus:outline-hidden",
              // Smooth transitions
              "transition-all duration-200 ease-out",
              // Enhanced icon styling
              "text-muted-foreground hover:text-foreground",
              "disabled:pointer-events-none disabled:opacity-50",
              "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
            )}
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </Portal>
  )
}

export const Header = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-header"
      className={cn(
        "flex flex-col gap-3 text-center sm:text-left",
        // Enhanced spacing and typography
        "border-b border-white/5 pb-2",
        className,
      )}
      {...props}
    />
  )
}

export const Footer = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-3 sm:flex-row sm:justify-end",
        // Enhanced spacing and border
        "border-t border-white/5 pt-4",
        className,
      )}
      {...props}
    />
  )
}

export const Title = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        // Enhanced typography with gradient text
        "text-xl leading-tight font-bold",
        "from-foreground via-foreground to-foreground/80 bg-gradient-to-r bg-clip-text text-transparent",
        className,
      )}
      {...props}
    />
  )
}

export const Description = ({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>) => {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        // Enhanced description styling
        "text-muted-foreground text-sm leading-relaxed",
        "opacity-90",
        className,
      )}
      {...props}
    />
  )
}
