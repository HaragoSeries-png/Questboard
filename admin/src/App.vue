<template>
  <div id="app">
    <v-app>
     
      <div class="component">
        <router-view @setTitle="setPageTitle"></router-view>
      </div>
       <navAdmin/>
    </v-app>
  </div>
</template>




<script>

import navAdmin from "@/components/navAdmin";
export default {

  name : "App",
  components : {navAdmin},
  methods:{
       setPageTitle(title) {
      if (title) document.title = title + " | " + this.$store.getters.getTitle;
      else document.title = this.$store.getters.getTitle;
    },
  }
 

}
</script>

<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.component {
  margin: 2%;
  margin-top: 5%;
  width: auto;
  /* border: 1px solid black;
  border-style: solid; */
}
</style>
