<template>
  <v-layout column class="categories">
    <v-flex>
      <h3>Categories</h3>
    </v-flex>
    <v-flex>
      <ul>
        <li
          v-for="(categorie) in categories"
          :key="categorie.id"
          @mouseleave.stop="selectCategorie(null)"
          @mouseenter.stop="selectCategorie(categorie.id)"
        >
          <span>{{categorie.name}}</span>
          <v-icon small v-if="categorie.sublevels">keyboard_arrow_right</v-icon>
          <div class="sub-level">
            <Sub-Level
              v-if="categorie.sublevels && categorie.id ==selected"
              :sublevels="categorie.sublevels"
            />
          </div>
        </li>
      </ul>
    </v-flex>
  </v-layout>
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
<style lang="scss" scoped>
.categories {
  ul {
    list-style: none;
    overflow: visible;
    padding: 0;
    display: inline-block;
    > li {
      cursor: default;
      display: block;
      padding: 9px 0;
      position: relative;
      color: #424242;
      .sub-level {
        position: absolute;
        top: 0;
        right: 0;
        transform: translateX(100%);
        background-color: #fafafa;
        z-index: 100;
      }
    }
    > li:hover {
      color: orange;
      i {
        color: orange;
      }
    }
  }
}
</style>