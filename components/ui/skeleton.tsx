import { cn } from "@/lib/utils"

export const Root = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn("animate-pulse rounded-md bg-muted", className)} {...props} />
}
