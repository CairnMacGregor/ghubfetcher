<template>
  <div>
    <h2>Search</h2>
    <form>
      <input type="text" ref="SearchData" />
      <button @click.prevent="updateInput()">Get values</button>
    </form>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      Search: "",
    };
  },
  computed: {
    ...mapState({
      input: (state) => state.SearchInput,
    }),
  },
  methods: {
    updateInput() {
      this.Search = this.$refs.SearchData.value;
      this.$store.commit("updateInput", this.Search);
    },
  },
};
</script>
