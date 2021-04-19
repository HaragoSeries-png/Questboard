<template>
  <div id="app">
    <v-app>
      <div class="component">
        <router-view @setTitle="setPageTitle"></router-view>
      </div>
      <Navbar @logout="logout" />
    </v-app>
  </div>
</template>

<script src="script.js"></script>
<script>
import authService from "@/service/authService";

import Navbar from "@/components/layout/navbar";
import NotifyBox from "@/components/layout/notifybox";

export default {
  name: "App",
  components: { Navbar, NotifyBox },
  methods: {
    

    setPageTitle(title) {
      if (title) document.title = title + " | " + this.$store.getters.getTitle;
      else document.title = this.$store.getters.getTitle;
    },
  },
  created() {
    this.setPageTitle();
  },
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css%22");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree&display=swap');

@import "./styles/alert.css";
@import "./styles/table.css";



#app {
  font-family: 'Montserrat', 'Bai Jamjuree';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: bold
}

.component {
  margin-top: 4.4%;
  width: 100%;

}
</style>
