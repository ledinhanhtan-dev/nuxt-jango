export const state = () => ({
  latestProducts: [],
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
}

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return context.app.$axios
      .get(`api/latest-products?format=json`)
      .then(res => vuexContext.commit('setLatestProducts', res.data))
      .catch(e => console.log(e))
    // .finally(() => console.warn(vuexContext.state.latestProducts))
  },
}
