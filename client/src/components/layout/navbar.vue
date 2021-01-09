<template>
  <div id="navbar">
    <v-app-bar src="../../assets/rough-horn-2146181_1920.jpg" app>
      <div class="ic" @click="$emit('setNavbarSide')">
        <i class="fa fa-bars" style="font-size:40px; color:white;"></i>
      </div>
      <v-toolbar-title>
        <img src="@/assets/logoBanner.png" style="padding-left: 10px; height: 50px; width: auto"/>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
@import "../../styles/nav.css";

.ic {
  /* margin-top: 1%; */
  border: 3px solid white;
  width: auto;
  height: auto;
  padding-left: 0.5%;
  padding-right: 0.5%;
  cursor: pointer;
}

.ic:hover {
  background-color: gray;
}
</style>
