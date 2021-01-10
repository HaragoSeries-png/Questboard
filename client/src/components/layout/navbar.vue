<template>
  <div id="navbar">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app
    
      
      >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Quest Board
          </v-list-item-title>
          <v-list-item-subtitle>
            The serie
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
        app

      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app  
      src="../../assets/rough-horn-2146181_1920.jpg">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Some icon</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
        items: [
        { title: "Quest", icon: "mdi-view-dashboard", to: "/feed" },
        { title: "About Us", icon: "mdi-account-group", to: "/aboutus" },
        { title: "Contact", icon: "mdi-android-messages", to: "/profile" },
        { title: "Sign in", icon: "mdi-login", to: "/login" },
        { title: "Sign up", icon: "mdi-book-account", to: "/signup" },
      ],
      right:null,
      drawer :null
    }
  },
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

  font-size: 30px;
  color: white;
}

.ic:hover {
  background-color: gray;
}

.logo-banner {
  padding-left: 10px;
  height: 50px;
  width: auto;
}
</style>
