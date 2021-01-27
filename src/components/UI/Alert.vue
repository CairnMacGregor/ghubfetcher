<template>
  <div
    id="alert_container"
    @click="close()"
    title="Double click to close alert"
  >
    <p>
      TODO - THE VUEX STORE DOES NOT STORE DATA BETWEEN REFRESHES, ATTEMPTING TO
      FIX THIS WITH VUEX-PERSISTEDSTATE AND JS COOKIES. SO FAR THIS HASNT WORKED
      BUT I WILL RETURN TO FIX THIS WHEN I LEARN HOW.
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      const alert = document.getElementById("alert_container");

      alert.addEventListener("click", function() {
        alert.style.display = "none";
      });
    },
  },
};
</script>
<style scoped>
#alert_container {
  width: 100%;
  display: flex;
  cursor: pointer;
}

p {
  width: 100%;
  background: rgb(105, 15, 15);
  color: white;
  font-weight: 200;
  font-size: 14px;
  line-height: 2rem;
}
span {
  background: rgb(105, 15, 15);
}
span:hover {
  cursor: pointer;
}
</style>
