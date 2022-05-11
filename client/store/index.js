export const state = () => ({
  latestProducts: [],
  cart: {
    items: [],
  },
  isAuthenticated: false,
  isLoading: false,
  token: '',
})

export const getters = {
  latestProducts(state) {
    return state.latestProducts
  },
}

export const mutations = {
  setLatestProducts(state, products) {
    state.latestProducts = products
  },
  setCart(state, cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
    state.cart = cart
  },
  addToCart(state, addedItem) {
    const existingIndex = state.cart.items.findIndex(
      item => item.id === addedItem.id
    )

    if (existingIndex != -1) {
      state.cart.items[existingIndex].quantity += parseInt(addedItem.quantity)
    } else {
      state.cart.items.push(addedItem)
    }

    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
  setIsLoading(state, value) {
    state.isLoading = value
  },
}

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return context.app.$axios
      .get(`api/latest-products?format=json`)
      .then(res => vuexContext.commit('setLatestProducts', res.data))
      .catch(e => console.log(e))
  },
  initCart(context) {
    if (process.server) return
    const cart = localStorage.getItem('cart')
    context.commit(
      'setCart',
      cart ? JSON.parse(cart) : context.store.state.cart
    )
  },
  addToCart(context, item) {
    context.commit('addToCart', item)
  },
  setIsLoading(context, value) {
    context.commit('setIsLoading', value)
  },
}
