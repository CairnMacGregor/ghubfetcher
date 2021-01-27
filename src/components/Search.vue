<template>
  <div id="searchComp">
    <h1>Search</h1>
    <form class="form">
      <input type="text" ref="SearchData" />
      <button @click.prevent="updateInput()" class="btn">
        <i class="fas fa-search"></i> Search for users
      </button>
    </form>
    <!-- <div><p class="searchResults">Search results for {{}}</p></div> -->
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
      console.log(
        this.Search +
          " being passed from the update Input method in Search component"
      );
    },
  },
};
</script>

<style scoped>
#searchComp {
  padding-top: 3rem;
}
h1 {
  color: white;
}

input {
  margin: 1.2rem 0;
}

.form-text {
  display: block;
  margin-top: 0.3rem;
  color: #888;
}

input[type="text"] {
  display: inline-block;
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid #ccc;
}

.btn {
  background: #333;
  color: white;
  padding: 0.4rem 1.3rem;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: opacity 0.2s ease-in;
  outline: none;
  display: block;
  width: 100%;
}
</style>
