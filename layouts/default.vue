<template>
  <v-app dark>
    <Categories :categories="categories"/>
    <nuxt/>
  </v-app>
</template>

<script>
import Categories from '@/components/layout/Categories/Categories'
import categories from '@/static/categories.json'
export default {
  components: {
    Categories
  },
  data() {
    return {
      categories: categories.categories
    }
  }
}
</script>
<style scoped>
</style>
