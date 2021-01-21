<template>
  <div id="index">
    <Search />
    <MultiUser />
  </div>
</template>

<script>
import Search from "../components/Search";
import MultiUser from "../components/Users/MutlipleUsers";
export default {
  components: { Search, MultiUser },
};
</script>
