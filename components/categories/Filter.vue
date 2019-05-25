<template>
  <div>
    <v-layout row justify-space-around>
      <v-flex xs12>
        <h3>Filtrar por</h3>
        <v-layout row wrap>
          <v-flex xs6 md10>
            <v-text-field
              v-model="quantity"
              label="Cantidad en stock"
              required
              min="0"
              xs4
              type="number"
              color="primary"
            ></v-text-field>
          </v-flex>
          <v-flex xs12>
            <v-layout justify-space-between row>
              <v-flex xs11 md10>
                <v-range-slider color="primary" v-model="price" :max="20000" :min="0" :step="100"></v-range-slider>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex md10 xs5>
                <v-text-field
                  color="primary"
                  v-model="price[0]"
                  class="mt-0"
                  prefix="$"
                  hide-details
                  single-line
                  type="number"
                ></v-text-field>
              </v-flex>
              <v-spacer></v-spacer>
              <v-flex md10 xs5>
                <v-text-field
                  color="primary"
                  v-model="price[1]"
                  class="mt-0"
                  prefix="$"
                  hide-details
                  single-line
                  type="number"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex>
            <v-checkbox label="Disponible" color="primary" row v-model="available"></v-checkbox>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row wrap justify-space-around>
      <v-flex sm6 md12 lg8 d-flex>
        <v-btn @click="deleteFilter()" small dark>Eliminar Filtro</v-btn>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
export default {
  methods: {
    deleteFilter() {
      const filter = {
        price: [0, 100000],
        quantity: 0,
        available: true
      }
      this.$store.commit('products/setFilter', filter)
      this.$store.commit('products/setCriteriaFilter', {})
    }
  },

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
    available: {
      get() {
        return this.$store.state.products.filter.available
      },
      set(value) {
        this.$store.commit('products/setFilter', { available: value })
      }
    }
  }
}
</script>
