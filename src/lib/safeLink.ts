export function safeLink(value: string | undefined) {
  return value && (value === "/" || /^(https?:\/\/|\/[^/])/.test(value))
    ? value
    : undefined;
}
