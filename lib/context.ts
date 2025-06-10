export const parseElementContext = <T>(ctx: T): T => {
  if (!ctx) {
    throw new Error(`Context must be used within it's provider`)
  }

  return ctx
}
