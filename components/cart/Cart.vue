<template lang="">
    <v-card width="250px" height="250px">
      <v-card-title primary-title>
        <span class="headline">Carrito de compras</span>
      </v-card-title>
      <v-card-text v-if="productList.length">
    
              <div v-for="product in productList" :key="product.id">
                  <pre>{{product}}</pre>
              </div>
      </v-card-text> 
    </v-card>
</template>
<script>
export default {
  computed: {
    productList() {
      return this.$store.state.products.cart
    }
  }
}
</script>
