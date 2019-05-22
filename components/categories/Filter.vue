<template>
  <v-layout row>
    <v-flex sm10>
      <h3>Filtrar por</h3>
      <v-layout column>
        <v-flex>
          <v-text-field label="Cantidad en stock" required min="0" type="number" color="orange"></v-text-field>
        </v-flex>
        <v-flex>
          <v-slider label="Max characters" color="orange"></v-slider>
        </v-flex>
        <v-flex>
          <v-checkbox label="Disponible" color="orange" row></v-checkbox>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>
