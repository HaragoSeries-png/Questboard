<template>
  <div id="Home" class="content-warpper">
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
.content-warpper {
  margin: 1%;
  padding: 10px;
  border-width: 1px;
  border-color: black;
  text-align: center;
}
</style>
