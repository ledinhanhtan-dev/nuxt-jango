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
  cart(state) {
    return state.cart
  },
  latestProducts(state) {
    return state.latestProducts
  },
}

const getItemIndex = (cart, productId) => {
  return cart.items.findIndex(item => item.product.id === productId)
}

export const mutations = {
  setLatestProducts(state, products) {
    state.latestProducts = products
  },
  setCart(state, cart) {
    state.cart = cart
  },
  addToCart(state, addedItem) {
    const existingIndex = getItemIndex(state.cart, addedItem.product.id)
    if (existingIndex != -1) {
      state.cart.items[existingIndex].quantity += parseInt(addedItem.quantity)
    } else {
      state.cart.items.push(addedItem)
    }
  },
  setIsLoading(state, value) {
    state.isLoading = value
  },
  incrementQuantity(state, productId) {
    const itemIndex = getItemIndex(state.cart, productId)
    state.cart.items[itemIndex].quantity += 1
  },
  decrementQuantity(state, productId) {
    const itemIndex = getItemIndex(state.cart, productId)
    state.cart.items[itemIndex].quantity -= 1
    if (state.cart.items[itemIndex].quantity === 0) {
      state.cart.items.splice(itemIndex, 1)
    }
  },
  removeFromCart(state, productId) {
    const itemIndex = getItemIndex(state.cart, productId)
    state.cart.items.splice(itemIndex, 1)
  },
  saveCart(state) {
    localStorage.setItem('cart', JSON.stringify(state.cart))
  },
}

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return context.app.$axios
      .get(`api/latest-products?format=json`)
      .then(res => vuexContext.commit('setLatestProducts', res.data))
      .catch(e => console.log(e))
  },
  setIsLoading(context, value) {
    context.commit('setIsLoading', value)
  },
  initCart(context) {
    if (process.server) return
    const cart = localStorage.getItem('cart')
    context.commit('setCart', cart ? JSON.parse(cart) : context.state.cart)
    context.commit('saveCart')
  },
  addToCart(context, item) {
    context.commit('addToCart', item)
    context.commit('saveCart')
  },
  incrementQuantity(context, productId) {
    context.commit('incrementQuantity', productId)
    context.commit('saveCart')
  },
  decrementQuantity(context, productId) {
    context.commit('decrementQuantity', productId)
    context.commit('saveCart')
  },
  removeFromCart(context, productId) {
    context.commit('removeFromCart', productId)
    context.commit('saveCart')
  },
}
