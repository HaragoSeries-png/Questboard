<template>
  <div id="home" class="banner">
    <img alt="Banner" style="max-width: 80%; height: auto;" src="@/assets/landing-demo.jpg" />
  </div>
</template>

<script>
export default {
  name: "Home",
  created() {
    this.$emit("setTitle");
  },
};
</script>

<style>
.banner {
  margin: 1%;
  padding: 10px;
  padding-top: 0px;
  text-align: center;
}
</style>
