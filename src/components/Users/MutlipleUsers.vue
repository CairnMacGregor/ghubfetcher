<template>
  <!--  -->

  <div class="users">
    <div v-for="user in allUsers[0].items" :key="user.id" class="user card">
      <img :src="user.avatar_url" alt="" />
      <h2>{{ user.login }}</h2>
      <!-- <button @click="getUserName(user.login)">More</button> -->
      <router-link :to="{ name: 'User', params: { login: user.login } }"
        ><span @click="getUserName(user.login)"> More </span></router-link
      >
    </div>
  </div>

  <!--  -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions(["fetchUsers", "fetchUserLogin", "fetchUser"]),
    getUserName(login) {
      this.$store.commit("updateUserName", login);
    },
  },
  computed: mapGetters(["allUsers", "newInput"]),

  mounted() {},
  watch: {
    newInput: {
      deep: true,
      handler() {
        this.fetchUsers();
      },
    },
  },
};
</script>

<style scoped>
.users {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.card {
  padding: 1rem;
  border: #ccc 1px solid;
  margin: 0.7rem 0;
  text-align: center;
}

img {
  width: 100%;
}
</style>
