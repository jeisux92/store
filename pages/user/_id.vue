<template>
  <div>
    <span>
      {{todos}}
      <button @click="increment">Push me!</button>
    </span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    increment() {
      this.$store.commit('products/increment')
    }
  },
  computed: {
    todos() {
      return this.$store.state.products.counter
    }
  }
}
</script>

