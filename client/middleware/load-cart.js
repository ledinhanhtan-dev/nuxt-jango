export default context => {
  if (process.server) return
  const cart = localStorage.getItem('cart')

  context.store.commit(
    'setCart',
    cart ? JSON.parse(cart) : context.store.state.cart
  )
}
