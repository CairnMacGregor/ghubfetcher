<template>
  <!--  -->
  <div>
    <div class="users">
      <div v-for="user in allUsers[0].items" :key="user.id" class="user card">
        <img :src="user.avatar_url" alt="" />
        <h2>{{ user.login }}</h2>
        <router-link :to="{ name: 'User', params: { login: user.login } }"
          ><span @click="getUserName(user.login)">
            View Profile of {{ user.login }}
          </span></router-link
        >
      </div>
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
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
}
@media only screen and (max-width: 420px) {
  .users {
    margin: 0;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
}

.card {
  padding: 1rem;
  border: #ccc 1px solid;
  margin: 0.7rem 0;
  text-align: center;
  background: white;
}
h2 {
  margin: 2rem;
}

img {
  width: 100%;
}

a {
  color: #222;
}

a:hover {
  color: #666;
}
</style>
