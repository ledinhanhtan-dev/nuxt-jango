<template>
  <div class="page-product">
    <div class="columns is-multiline">
      <div class="column is-9">
        <figure class="image mb-6">
          <img :src="product.get_image" :alt="product.name" />
        </figure>
        <h1 class="title">{{ product.name }}</h1>
        <p>{{ product.description }}</p>
      </div>
      <div class="column is-3">
        <h2 class="subtitle">Information</h2>
        <p><strong>Price: </strong>${{ product.price }}</p>
        <div class="field has-addons mt-6">
          <div class="control">
            <input
              type="number"
              class="input"
              min="1"
              v-model="quantity"
              @keypress.enter="addItemToCart"
            />
          </div>
          <div class="control">
            <button class="button is-dark" @click="addItemToCart">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { toast } from 'bulma-toast'

export default {
  name: 'ProductPage',
  data() {
    return {
      product: {},
      quantity: 1,
    }
  },
  fetch() {
    this.fetchProduct()
  },
  created() {
    if (Object.keys(this.product).length === 0) this.fetchProduct()
  },
  methods: {
    ...mapActions(['addToCart', 'setIsLoading']),
    async fetchProduct() {
      this.setIsLoading(true)

      const { cid, pid } = this.$route.params
      await this.$axios
        .get(`api/products/${cid}/${pid}?format=json`)
        .then(res => {
          this.product = res.data
          document.title = `${this.product.name} | Nuxt-jango`
        })
        .catch(e => console.log(e))

      this.setIsLoading(false)
    },
    addItemToCart() {
      const item = { product: this.product, quantity: +this.quantity }
      this.addToCart(item)
      this.quantity = 1

      toast({
        message: 'The product was added to the cart',
        type: 'is-success',
        dismissible: true,
        pauseOnHover: true,
        duration: 2000,
        position: 'bottom-right',
      })
    },
  },
  watch: {
    quantity(newValue, oldValue) {
      if (!newValue) {
        this.quantity = 1
        return
      }
      if (isNaN(newValue) || +newValue < 1) {
        this.quantity = oldValue
      }
    },
  },
}
</script>

<style></style>
