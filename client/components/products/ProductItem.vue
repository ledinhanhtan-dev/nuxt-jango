<template>
  <div class="column is-3">
    <div class="box">
      <figure class="image mb-4" :class="{ expand: expand }">
        <nuxt-link :to="product.get_absolute_url">
          <img :src="product.get_thumbnail" :alt="product.name" />
        </nuxt-link>
      </figure>
      <h3 class="is-size-4">{{ product.name }}</h3>
      <p class="is-size-6 has-text-grey">${{ product.price }}</p>
      <nuxt-link :to="product.get_absolute_url">View Details</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true,
    },
    expand: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.box {
  overflow: hidden;
}

.expand {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}

img {
  max-width: 100%;
}
</style>
