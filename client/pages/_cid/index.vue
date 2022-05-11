<template>
  <div class="page-category">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">{{ category.name }}</h2>
      </div>
      <ProductItem
        v-for="product in category.products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { toast } from 'bulma-toast'
import ProductItem from '@/components/products/ProductItem.vue'

export default {
  components: { ProductItem },
  data() {
    return {
      category: {},
    }
  },
  methods: {
    ...mapActions(['setIsLoading']),
    async fetchCategory() {
      this.setIsLoading(true)

      const { cid } = this.$route.params
      await this.$axios
        .get(`api/categories/${cid}?format=json`)
        .then(res => {
          this.category = res.data
          document.title = `${this.category.name} | Nuxt-jango`
        })
        .catch(e => {
          console.log(e)
          toast({
            message: 'Something went wrong. Please try again.',
            type: 'is-warning',
            dismissible: true,
            pauseOnHover: true,
            duration: 2000,
            position: 'bottom-right',
          })
        })

      this.setIsLoading(false)
    },
  },
  mounted() {
    this.fetchCategory()
  },
}
</script>

<style></style>
