<template>
  <div id="wrapper">
    <TheHeader />
    <LoadingBar />
    <section class="section">
      <nuxt />
    </section>
    <footer class="footer">
      <p class="has-text-centered">Copyright (c) 2022</p>
    </footer>
  </div>
</template>

<script>
import TheHeader from '~/components/navigation/TheHeader.vue'
export default {
  components: { TheHeader },
  created() {
    this.$store.dispatch('initCart')
  },
}
</script>

<style></style>
