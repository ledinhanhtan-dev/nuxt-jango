<template>
  <nav class="navbar is-dark">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item">
        <strong>Nuxt-Jango</strong>
      </nuxt-link>
    </div>

    <a
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbar-menu"
      @click="toggleMobileMenu"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>

    <div
      class="navbar-menu"
      id="navbar-menu"
      :class="{ 'is-active': showMobileMenu }"
    >
      <div class="navbar-start">
        <div class="navbar-item">
          <form @submit.prevent="toSearch">
            <div class="field has-addons">
              <div class="control">
                <input
                  type="text"
                  class="input"
                  placeholder="What are you looking for?"
                  name="query"
                  v-model="query"
                  @keypress.enter="toSearch"
                />
              </div>
              <div class="control">
                <button class="button is-success">
                  <font-awesome-icon icon="search" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="navbar-end">
        <nuxt-link to="/summer" class="navbar-item">Summer</nuxt-link>
        <nuxt-link to="/winter" class="navbar-item">Winter</nuxt-link>
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/login" class="button is-light">
              Login
            </router-link>
            <router-link to="/cart" class="button is-success">
              <font-awesome-icon
                icon="shopping-cart"
                style="margin-right: 6px"
              />
              <span>Cart ({{ cartTotalItems }})</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMobileMenu: false,
      query: '',
    }
  },
  methods: {
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
    toSearch() {
      this.$router.push(`/search?query=${this.query}`)
    },
  },
  computed: {
    cartTotalItems() {
      const quantities = this.$store.state.cart.items.map(item => item.quantity)
      return (
        quantities.length &&
        quantities.reduce((total, quantity) => total + quantity)
      )
    },
  },
}
</script>

<style></style>
