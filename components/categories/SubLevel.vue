<template>
  <ul class="sub-level-container">
    <li
      v-for="(sublevel) in sublevels"
      :key="sublevel.id"
      @mouseenter="selectSubCategory(sublevel.id)"
    >
      <span v-text="sublevel.name"></span>
      <v-icon small v-if="sublevel.sublevels">keyboard_arrow_right</v-icon>
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
      this.selected = subCategoryId
    }
  }
}
</script>
<style  scoped>
ul.sub-level-container {
  padding: 0;
}

.sub-level-container li {
  list-style: none;
  display: block;
  white-space: nowrap;
  position: relative;
}
.sub-level-container .sub-level {
  position: absolute;
  top: 0;
  right: 0;
  transform: translateX(100%);
  padding-left: 15px;
}
</style>