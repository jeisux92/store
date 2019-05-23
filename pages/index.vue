<template>
  <v-container fluid grid-list-sm>
    <h3>Productos</h3>
    <!-- <nuxt-link to="/user">User</nuxt-link> -->
    <v-layout v-if="productsChoosed.length>0" wrap row>
      <v-flex md3 sm5 v-for="product in productsChoosed" :key="product.id">
        <Product :product="product"/>
      </v-flex>
    </v-layout>
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
      products: products.products,
      filter: {}
    }
  },
  methods: {
    applyFilter: function(products, filter) {
      return products
        .filter(product => product.available === filter.available)
        .filter(product =>
          filter.quantity ? product.quantity === filter.quantity : true
        )
        .filter(
          product =>
            this.parsePrice(product.price) >= filter.price[0] &&
            this.parsePrice(product.price) <= filter.price[1]
        )
    },
    parsePrice(price) {
      return +price.replace('$', '').replace(',', '')
    }
  },
  computed: {
    productsSelected: {
      get: function() {
        return this.$store.state.products.subLevel
      }
    },
    productsFilter: {
      get: function() {
        return this.$store.state.products.filter
      }
    },
    productsChoosed: function() {
      let productsBySubLevel = this.products.filter(
        product => product.sublevel_id == this.productsSelected
      )
      return this.applyFilter(productsBySubLevel, this.productsFilter)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
