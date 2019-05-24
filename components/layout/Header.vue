<template>
  <header>
    <v-toolbar flat dark>
      <v-toolbar-title>E-Commerce</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-badge left>
        <template v-slot:badge>
          <span v-if="quantity.count">!</span>
        </template>
        <v-icon medium @click="activeModal" color="grey lighten-1">shopping_cart</v-icon>
      </v-badge>
    </v-toolbar>
    <div id="cart" v-if="active">
      <Cart/>
    </div>
  </header>
</template>
<script>
import Cart from '@/components/cart/cart'
export default {
  components: {
    Cart
  },
  data: () => ({
    active: false
  }),
  methods: {
    activeModal() {
      this.active = !this.active
    }
  },
  computed: {
    quantity() {
      if (this.$store.state.products.cart.length) {
        const quantityProducts = this.$store.state.products.cart.reduce(
          (a, b) => {
            return { count: a.count + b.count }
          },
          { count: 0 }
        )
        return quantityProducts
      }
      return 0
    }
  }
}
</script>
<style scoped>
#cart {
  position: absolute;
  right: 54px;
  top: 40px;
  z-index: 100;
}
</style>

