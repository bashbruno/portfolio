export function assert(val: unknown, message: string): asserts val {
  if (!val) throw new Error(message)
}
