<template>
  <v-app light>
    <div class="header">
      <Header></Header>
    </div>
    <v-container fluid>
      <v-layout wrap>
        <v-flex md2 sm12>
          <v-layout justify-center column fill-height>
            <v-flex xs12>
              <Aside></Aside>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 md10 pl-4>
          <nuxt/>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Header from '@/components/layout/Header'
import Aside from '@/components/layout/Aside'
export default {
  components: {
    Aside,
    Header
  }
}
</script>
<style scoped>
</style>
