<template>
  <main class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">Welcome to Nuxt-jacket</p>
        <p class="subtitle">The best jacket store online</p>
      </div>
    </section>
    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">Latest Products</h2>
      </div>
      <ProductItem
        v-for="product in latestProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductItem from '@/components/products/ProductItem.vue'

export default {
  name: 'IndexPage',
  components: { ProductItem },
  computed: {
    ...mapGetters(['latestProducts']),
  },
  mounted() {
    document.title = `Home | Nuxt-jango`
  },
}
</script>

<style scoped lang="scss"></style>
