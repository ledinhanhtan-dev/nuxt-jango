<template>
  <div class="page-signup"></div>
</template>

<script>
import { toast } from 'bulma-toast'

export default {
  name: 'SignupPage',
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      errors: [],
    }
  },
}
</script>

<style></style>
