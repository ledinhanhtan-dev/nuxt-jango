<template>
  <div class="column is-3">
    <div class="box">
      <figure class="image mb-4">
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
  props: ['product'],
}
</script>

<style>
.box {
  overflow: hidden;
}

.image {
  margin-top: -1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
</style>
