<template>
  <div id="navbar">
    <v-app-bar app absolute src="../../assets/rough-horn-2146181_1920.jpg">
      <div class="ic" @click="$emit('setNavbarSide')">
        <i
          class="fa fa-bars"
          style="font-size:20px;color:white; margin-top:2%;"
        ></i>
      </div>
      <v-toolbar-title
        ><span
          style="font-size:20px; position:absolute; margin-left:2%; margin-top:-0.5%; color:white;font-family: 'Hachi Maru Pop', cursive; font-weight: bold;"
          >Quest Board</span
        ></v-toolbar-title
      >
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
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
  margin-top: 1%;
  border: 1px solid white;
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
