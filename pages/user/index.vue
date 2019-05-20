<template>
  <div>
    <h1>From User index</h1>
    <nuxt-link :to="{name:'user-id',params:{id:2}}">USer</nuxt-link>
    <pre v-if="categories">
    {{categories}}
    </pre>
  </div>
</template>
<script>
import categories from '@/static/categories.json'
export default {
  data() {
    return {
      categories
    }
  }
}
</script>
