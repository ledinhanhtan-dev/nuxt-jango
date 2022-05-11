<template>
  <div class="page-cart">
    <div class="columns is-multiline">
      <div class="column is-12">
        <h1 class="title">Cart</h1>
      </div>

      <div class="column is-12 box">
        <table class="table is-fullwidth" v-show="cartTotalItems">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <CartItem
              v-for="item in cart.items"
              :key="item.product.id"
              :initialItem="item"
              @increment="incrementQuantity"
              @decrement="decrementQuantity"
              @remove="removeFromCart"
            />
          </tbody>
        </table>

        <p v-show="!cartTotalItems">
          You don't have any products in your cart...
        </p>
      </div>

      <div class="column is-12 box">
        <h2 class="subtitle">Summary</h2>
        <strong>${{ cartTotalPrice }}</strong> ({{ cartTotalItems }} items)
        <hr />
        <nuxt-link to="/cart/checkout" class="button is-dark">
          Proceed to Checkout
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CartItem from '@/components/cart/CartItem.vue'

export default {
  name: 'CartPage',
  components: { CartItem },
  mounted() {
    document.title = `Cart | Nuxt-jango`
  },
  computed: {
    ...mapGetters(['cart']),
    cartTotalItems() {
      return this.cart.items.reduce((total, item) => total + item.quantity, 0)
    },
    cartTotalPrice() {
      return this.cart.items.reduce(
        (total, item) => total + item.quantity * item.product.price,
        0
      )
    },
  },
  methods: {
    ...mapActions(['incrementQuantity', 'decrementQuantity', 'removeFromCart']),
  },
}
</script>

<style></style>
