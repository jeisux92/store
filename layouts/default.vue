<template>
  <v-app light>
    <div class="header">
      <Header></Header>
    </div>
    <v-container fluid>
      <v-layout fill-height>
        <v-flex xs2>
          <v-layout justify-center column fill-height>
            <v-flex xs12>
              <div class="aside">
                <Aside></Aside>
              </div>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs10>
          <section>
            <nuxt/>
          </section>
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
.aside {
  height: 90%;
}

</style>
