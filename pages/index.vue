<template>
  <v-container fluid grid-list-sm>
    <h3>Productos</h3>
    <!-- <nuxt-link to="/user">User</nuxt-link> -->
    <v-layout v-if="productsSelected.length>0" wrap row>
      <v-flex md3 sm5 v-for="product in productsSelected" :key="product.id">
        <Product :product="product"/>
      </v-flex>
    </v-layout>
      <pre>{{productsFilter}}</pre>
  </v-container>
</template>

<script>
import Product from '@/components/products/product'
import products from '@/static/products.json'

export default {
  components: {
    Product
  },
  data() {
    return {
      products: products.products
    }
  },
  computed: {
    productsSelected() {
      return this.products.filter(
        product => product.sublevel_id == this.$store.state.products.subLevel
      )
    },
    productsFilter() {
      return this.$store.state.products.filter
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
