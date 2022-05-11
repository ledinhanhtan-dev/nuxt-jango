<template>
  <div class="page-search">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">Search</h1>
        <h2 class="is-size-5 has-text-gray">Search term: "{{ query }}"</h2>
      </div>
      <ProductItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/products/ProductItem.vue'
import { mapActions } from 'vuex'

export default {
  name: 'search',
  components: { ProductItem },
  data() {
    return {
      products: [],
      query: '',
    }
  },
  mounted() {
    document.title = 'Search | Nuxt-jango'
    this.query = this.$route.query.query
    this.searchProduct()
  },
  methods: {
    ...mapActions(['setIsLoading']),
    searchProduct() {
      this.setIsLoading(true)
      this.$axios
        .post('api/products/search', { query: this.query })
        .then(res => (this.products = res.data))
        .catch(e => console.log(e))
        .finally(() => this.setIsLoading(false))
    },
  },
}
</script>

<style></style>
