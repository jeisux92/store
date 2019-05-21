<template>
  <div class="categories">
    <ul>
      <li
        v-for="(categorie) in categories"
        :key="categorie.id"
        @mouseleave.stop="selectCategorie(null)"
        @mouseenter.stop="selectCategorie(categorie.id)"
      >
        <v-btn color>{{categorie.name}}</v-btn>
        <div class="sub-level">
          <Sub-Level
            v-if="categorie.sublevels && categorie.id ==selected"
            :sublevels="categorie.sublevels"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
//
import SubLevel from './SubLevel'
export default {
  components: {
    SubLevel
  },
  props: {
    categories: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      selected: null
    }
  },
  mounted() {
    console.log(this.categories)
  },
  methods: {
    selectCategorie(categorieId) {
      this.selected = categorieId
    }
  }
}
</script>
<style scoped>
.categories {
  width: 160px;
  display: inline-block;
}
ul {
  list-style: none;
  overflow: visible;
  padding: 0;
  display: inline-block;
}
ul li {
  cursor: pointer;
  display: block;
  position: relative;
}

ul li .sub-level {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
}
</style>