<template>
  <div>
    <img :src="User.avatar_url" alt="" />
    <p>{{ User.name }} aka {{ User.login }}</p>

    <p>{{ User.login }}</p>

    <p>{{ User.location }}</p>
    <p>Followers: {{ User.followers }}</p>

    {{ User }}
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
