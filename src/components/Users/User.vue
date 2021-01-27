<template>
  <div class="profile">
    <div v-if="User.id">
      <router-link class="back" :to="{ name: 'Index' }"> Back </router-link>
      <div class="user_container">
        <img :src="User.avatar_url" alt="" />
        <div class="user_info_container">
          <ul>
            <li v-if="User.name || User.login">
              <h2>
                <i class="fas fa-user"></i> {{ User.name }} aka {{ User.login }}
              </h2>
            </li>
            <li v-if="User.bio">{{ User.bio }}</li>
            <li v-if="User.location">
              <i class="fas fa-map-marker-alt"></i> {{ User.location }}
            </li>
            <li v-if="User.blog">
              <a :href="User.blog"> <i class="fas fa-wifi"></i> Website</a>
            </li>
            <li v-if="User.html_url">
              <a :href="User.html_url">
                <i class="fab fa-github"></i> View User on Github</a
              >
            </li>
            <li>
              Available to hire:
              <i v-if="User.hireable" class="fas fa-check-circle"></i>
              <i v-else class="fas fa-times-circle"></i>
            </li>
          </ul>
          <div class="follow">
            <p><i class="fas fa-users"></i> Followers: {{ User.followers }}</p>
            <p>
              <i class="fas fa-user-friends"></i> Following:
              {{ User.following }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="Whoops" v-else>
      <p id="error">Whoops, looks like something went wrong</p>
      <router-link class="back" :to="{ name: 'Index' }"> Back </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["fetchUser"]),
  },
  computed: mapGetters(["User"]),

  created() {
    this.fetchUser();
    // console.log(this.$route.params.login);
  },
};
</script>

<style scoped>
.user_container {
  display: flex;
}

.user_info_container {
  width: 100%;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  flex-direction: column;
  border: 1px solid #999;
}

@media only screen and (max-width: 800px) {
  .user_container {
    flex-direction: column;
  }
}
.back {
  margin: 2rem 0;
  display: block;
  font-size: 2rem;
  outline: 1px solid black;
  color: white;
  background: #333;
  width: 100%;
}

.back:hover {
  background: #666;
  color: grey;
}

.Whoops {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#error {
  font-size: 2rem;
}

.profile {
  min-height: 100vh;
}

.follow {
  display: flex;
  justify-content: center;
}

.follow p {
  margin: 1rem;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: grey;
}
li {
  margin: 0.5rem;
  font-size: 1.3rem;
}
</style>
