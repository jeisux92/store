<template>
  <aside>
    <Categories :categories="categories"/>
  </aside>
</template>
<script>
import Categories from '../categories/Categories'
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
aside {
  width: 100%;
  height: 100%;
  border-right: 1px solid #d8d8d8;
}
</style>


