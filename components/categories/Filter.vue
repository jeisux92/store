<template>
  <div>
    <v-layout row>
      <v-flex sm10>
        <h3>Filtrar por</h3>
        <v-layout column>
          <v-flex>
            <v-text-field
              v-model="quantity"
              label="Cantidad en stock"
              required
              min="0"
              type="number"
              color="primary"
            ></v-text-field>
          </v-flex>
          <v-flex>
            <v-layout>
              <v-flex>
                <v-range-slider color="primary" v-model="price" :max="6000" :min="0" :step="100"></v-range-slider>
              </v-flex>
            </v-layout>
            <v-layout justify-space-between row wrap>
              <v-flex md5 xs12>
                <v-text-field
                  color="primary"
                  v-model="price[0]"
                  class="mt-0"
                  hide-details
                  single-line
                  type="number"
                ></v-text-field>
              </v-flex>
              <v-flex md5 xs12>
                <span>{{price[1]}}</span>
                <v-text-field
                  color="primary"
                  v-model="price[1]"
                  class="mt-0"
                  hide-details
                  single-line
                  type="number"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-checkbox label="Disponible" color="primary" row v-model="availible"></v-checkbox>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around>
      <v-flex sm12 md12 lg8 d-flex>
        <v-btn dark>Eliminar Filtro</v-btn>
      </v-flex>
      <v-flex sm12 md8 d-flex>
        <v-btn color="primary">Filtrar</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  data: () => ({
  }),
  computed: {
    price: {
      get() {
        return this.$store.state.products.filter.price
      },
      set(value) {
        this.$store.commit('products/setFilter', { price: value })
      }
    },
    quantity: {
      get() {
        return this.$store.state.products.filter.quantity
      },
      set(value) {
        this.$store.commit('products/setFilter', { quantity: +value })
      }
    },
    availible: {
      get() {
        return this.$store.state.products.filter.availible
      },
      set(value) {
        this.$store.commit('products/setFilter', { availible: value })
      }
    }
  }
}
</script>
