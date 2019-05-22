<template>
  <aside>
    <Categories :categories="categories"/>
    <hr>
    <FilterCategories/>
  </aside>
</template>
<script>
import Categories from '@/components/categories/Categories'
import Filter from '@/components/categories/Filter'
import categories from '@/static/categories.json'
export default {
  components: {
    Categories,
    FilterCategories: Filter
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
hr {
  margin: 15px 2px;
}
</style>


