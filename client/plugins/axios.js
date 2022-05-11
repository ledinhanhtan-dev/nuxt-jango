export default function ({ $axios, store }) {
  $axios.onRequest(() => {
    // store.dispatch('setIsLoading', true)
  })
  $axios.onResponse(() => {
    // store.dispatch('setIsLoading', false)
  })
}
