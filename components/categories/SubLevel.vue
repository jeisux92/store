<template>
  <ul class="sub-level-container">
    <li
      v-for="(sublevel) in sublevels"
      :key="sublevel.id"
      @click.stop="setSubLevel(sublevel.id)"
      @mouseenter="selectSubLevel(sublevel.id)"
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
    <v-layout>
      <v-flex sm8>
        <v-text-field
          label="Buscar"
          v-model="filterText"
          @click.stop="stop()"
          class="input-filter"
          v-if="sublevels.every(x=>!x.sublevels)"
        ></v-text-field>
      </v-flex>
    </v-layout>
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
    stop() {},

    selectSubLevel(subLevelId) {
      this.selected = subLevelId
    },
    setSubLevel(subLevelId) {
      this.$store.commit('products/setSubLevel', subLevelId)
    }
  },
  computed: {
    filterText: {
      get() {
        return this.$store.state.products.criteria.text
      },
      set(value) {
        this.$store.commit('products/setCriteriaFilter', {
          text: value,
          subLevels: this.sublevels.map(subLevel => ({
            id: subLevel.id
          }))
        })
      }
    }
  }
}
</script>
<style lang="scss"  scoped>
ul.sub-level-container {
  padding: 0;
  li {
    list-style: none;
    display: block;
    white-space: nowrap;
    position: relative;
    color: #424242;
    padding: 9px;
    cursor: pointer;
    > i {
      color: #424242;
    }
  }
  > li:hover {
    color: orange;
    > i {
      color: orange;
    }
  }
  .sub-level {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateX(100%);
    padding-left: 15px;
    background-color: #fafafa;
    z-index: 1000;
    overflow: visible;
  }

  .input-filter {
    padding-top: 0;
    margin: 0;
    margin-left: 7px;
    width: 106px;
    > div {
      width: 80%;
    }
  }
}
</style>