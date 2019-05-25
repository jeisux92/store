<template>
  <div justify-space-between wrap>
    <h3>Productos</h3>
    <v-layout>
      <v-flex sm2>
        <v-select :items="items" label="Ordenar por" v-model="order"></v-select>
      </v-flex>
    </v-layout>
    <v-layout v-if="productsChoosed.length>0" wrap row>
      <v-flex xs5 md3 lg2 mr-4 mt-4 mb-2 v-for="product in productsChoosed" :key="product.id">
        <Product :product="product"/>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Product from '@/components/products/product'
import products from '@/static/products.json'

export default {
  components: {
    Product
  },
  data: () => ({
    products: products.products,
    filter: {},
    items: ['Ninguno', 'Precio', 'Cantidad'],
    order: ''
  }),
  methods: {
    applyFilter: function(products, filter) {
      return products
        .filter(product => product.available === filter.available)
        .filter(product =>
          filter.quantity ? product.quantity >= filter.quantity : true
        )
        .filter(
          product =>
            this.parsePrice(product.price) >= filter.price[0] &&
            this.parsePrice(product.price) <= filter.price[1]
        )
        .sort((a, b) => {
          if (this.order == 'Precio') {
            return this.parsePrice(a.price) - this.parsePrice(b.price)
          } else if (this.order == 'Cantidad') {
            return a.quantity - b.quantity
          }
        })
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
      const filteredValues = this.applyFilter(
        productsBySubLevel,
        this.productsFilter
      )

      return filteredValues
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
