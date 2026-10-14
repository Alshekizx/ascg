export function safeLink(value: string | undefined) {
  return value && /^(https?:\/\/|\/[^/])/.test(value) ? value : undefined
}
