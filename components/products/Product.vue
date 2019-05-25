<template>
  <v-card tile elevation=3>
    <v-card-title primary-title column>
      <h3 class="headline mb-0" v-text="product.name"></h3>
    </v-card-title>
    <v-card-text>
      <v-layout column align-center>
        <span>
          <strong>Precio</strong>
          {{product.price}}
        </span>
        <span>{{product.available?"Disponible":"No disponible"}}</span>
        <span>
          <strong>Cantidad</strong>
          {{product.quantity}}
        </span>
      </v-layout>
    </v-card-text>

    <v-card-actions v-if="product.available">
      <v-layout row justify-center>
        <v-btn color="success" @click="buy(product)">Comprar</v-btn>
      </v-layout>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    product: {
      required: true
    }
  },
  methods: {
    buy: function(product) {
      const productTransformed = {
        product: product.price,
        name: product.name,
        id: product.id
      }
      this.$store.commit('products/addProduct', productTransformed)
    }
  }
}
</script>
<style lang="scss" scoped>
h3 {
  margin: 0 auto;
}
</style>
