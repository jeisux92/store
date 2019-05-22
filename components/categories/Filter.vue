<template>
  <v-layout row>
    <v-flex sm10>
      <h3>Filtrar por</h3>
      <v-layout column>
        <v-flex>
          <v-text-field label="Cantidad en stock" required min="0" type="number" color="orange"></v-text-field>
        </v-flex>
        <v-flex>
          <v-layout>
            <v-flex>
              <v-range-slider color=orange v-model="price" :max="6000" :min="0" :step="100"></v-range-slider>
            </v-flex>
          </v-layout>
          <v-layout justify-space-between row>
            <v-flex sm4>
              <v-text-field color=orange v-model="price[0]" class="mt-0" hide-details single-line type="number"></v-text-field>
            </v-flex>
            <v-flex sm4>
              <v-text-field color=orange v-model="price[1]" class="mt-0" hide-details single-line type="number"></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex>
          <v-checkbox label="Disponible" color="orange" row></v-checkbox>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      price: [1000, 6000]
    }
  }
}
</script>
