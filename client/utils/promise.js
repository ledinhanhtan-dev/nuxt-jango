export const timer = duration =>
  new Promise(resolve => setTimeout(() => resolve(), duration))
