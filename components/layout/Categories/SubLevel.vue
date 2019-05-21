<template>
  <ul class="sub-level-container">
    <li
      v-for="(sublevel) in sublevels"
      :key="sublevel.id"
      @mouseenter="selectSubCategory(sublevel.id)"
    >
      <v-btn color v-text="sublevel.name"></v-btn>
      <div class="sub-level">
        <Sub-Level
          v-if="sublevel.sublevels && sublevel.id==selected"
          :sublevels="sublevel.sublevels"
        />
      </div>
    </li>
  </ul>
</template>
<script>
//
export default {
  name: 'Sub-Level',
  props: {
    sublevels: {
      default: []
    }
  },
  data() {
    return {
      selected: null
    }
  },
  methods: {
    selectSubCategory(subCategoryId) {
      console.log(subCategoryId)
      this.selected = subCategoryId
    }
  }
}
</script>
<style scoped>
ul.sub-level-container {
  position: relative;
  padding: 0;
}

.sub-level-container li {
  list-style: none;
}
.sub-level-container .sub-level {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
}
</style>