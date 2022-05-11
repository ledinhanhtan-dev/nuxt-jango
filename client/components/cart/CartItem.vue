<template>
  <tr>
    <td>
      <nuxt-link :to="item.product.get_absolute_url">
        {{ item.product.name }}
      </nuxt-link>
    </td>
    <td>${{ item.product.price }}</td>
    <td>
      {{ item.quantity }}
      <button @click="decrement">-</button>
      <button @click="increment">+</button>
    </td>
    <td>${{ itemTotal }}</td>
    <td>
      <button class="delete" @click="remove">Remove</button>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'CartItem',
  props: ['initialItem'],
  data() {
    return {
      item: this.initialItem,
    }
  },
  computed: {
    itemTotal() {
      return (this.item.quantity * this.item.product.price).toFixed(2)
    },
  },
  methods: {
    increment() {
      this.$emit('increment', this.item.product.id)
    },
    decrement() {
      this.$emit('decrement', this.item.product.id)
    },
    remove() {
      this.$emit('remove', this.item.product.id)
    },
  },
}
</script>

<style></style>
