<template lang="">
    <v-card width="250px" height="285px" class="container-cart">
      <v-card-title primary-title>
        <span class="headline">Carrito de compras</span>
      </v-card-title>
      
      <v-card-text v-if="productList.length" class="cart-body">    
        <v-card v-for="product in productList" :key="product.id" >
          <v-card-text class="increment-product">
            <span v-text=product.name></span>
            <div>
            <v-btn small icon color="primary"  @click="decrement(product.id)">-</v-btn>
            <span v-text=product.count></span>
             <v-btn small icon color="success" @click="increment(product.id)">+</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-card-text> 
      <v-card-text  v-else class="cart-empty">
        <h4>
          El carrito de compras está vacío
        </h4>
        </v-card-text>
       <v-card-actions v-if="productList.length" d-flex>
          <v-btn small color="primary" block @click="buy">Comprar</v-btn>          
        </v-card-actions>
    </v-card>
</template>
<script>
export default {
  computed: {
    productList() {
      if (process.client) {
        window.localStorage.setItem(
          'products',
          JSON.stringify(this.$store.state.products.cart)
        )
      }
      return this.$store.state.products.cart
    }
  },
  methods: {
    buy() {
      this.$store.commit('products/clearCart')
      this.$emit('carEmpty')
    },
    decrement(id) {
      this.$store.commit('products/decrementProduct', id)
      if (this.$store.state.products.cart.length == 0) {
        this.$emit('carEmpty')
      }
    },
    increment(id) {
      this.$store.commit('products/incrementProduct', id)
    }
  }
}
</script>
<style lang="scss" scoped>
.container-cart {
  max-height: 285px;
  .cart-body {
    overflow: auto;
    height: 170px;

    .increment-product {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .cart-empty {
    height: 176px;
    text-align: center;
    display: flex;
    align-items: center;
    h4 {
      margin: 0 auto;
    }
  }
}
</style>

