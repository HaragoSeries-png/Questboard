<template>
  <div id="navbar">
    <!-- Navbar Side -->
    <v-navigation-drawer
      v-model="drawer"
      app
      style="border-right: 1px solid black;"
      src="Nav_bgb.jpg"
    >
      <v-list-item style="margin-left: 17%;">
        <center>
          <div
            style="font-family: 'Maven Pro', sans-serif; font-size: 23px; margin-top: 10%"
          >
            <span style="right: 50%; text-decoration: underline;"
              >Quest Board</span
            >
          </div>
        </center>
      </v-list-item>
      <v-divider></v-divider>

      <div id="profileTab" v-if="$store.getters.isLoggedIn">
        <div class="profileInfo">
          Welcome
          <br />
          <span style="font-size: 14px">{{ this.$store.getters.getfullname }}</span>
          <br />
          <router-link to="/profile" style="font-size: 12px; color: orange"
            >View your profile</router-link
          >
        </div>
        <v-divider></v-divider>
      </div>

      <div id="comitems">
        <v-list dense app>
          <v-list-item
            v-for="item in comitems"
            :key="item.title"
            link
            :to="item.to"
            
            color="#FF598F"
          >
            <v-list-item-icon>
              <div class="titlefont">
                <v-icon>{{ item.icon }}</v-icon>
              </div>
            </v-list-item-icon>

            <v-list-item-content>
              <div class="titlefont">
                {{ item.title }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </div>

      <div id="unlogitems" v-if="status">
        <v-list dense app>
          <v-list-item
            v-for="item in logitems"
            :key="item.title"
            link
            :to="item.to"
           
            color="#FF598F"
          >
            <v-list-item-icon>
              <div class="titlefont">
                <v-icon>{{ item.icon }}</v-icon>
              </div>
            </v-list-item-icon>

            <v-list-item-content>
              <div class="titlefont">
                {{ item.title }}
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link to="/" @click="logout">
            <v-list-item-icon>
              <div class="titlefont">
                <v-icon style="color: red">mdi-login</v-icon>
              </div>
            </v-list-item-icon>

            <v-list-item-content>
              <div class="titlefont" style="color: red">
                Log Out
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
      </div>

      <div id="loginitems" v-else>
        <v-list dense app>
          <v-list-item
            v-for="item in unlogitems"
            :key="item.title"
            link
            :to="item.to"
           
            color="#FF598F"
          >
            <v-list-item-icon>
              <div class="titlefont">
                <v-icon>{{ item.icon }}</v-icon>
              </div>
            </v-list-item-icon>

            <v-list-item-content>
              <div class="titlefont">
                {{ item.title }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
      </div>
    </v-navigation-drawer>

    <!-- Navbar-Top -->
    <v-app-bar
      app
      dark
      src="../../assets/pexels-stephan-seeber-1054289.jpg"
      full-width
    >
      <!-- backgroud color -->
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        style="margin-left:0.5%;"
      ></v-app-bar-nav-icon>

      <v-toolbar-title
        ><span style="font-size: 20px; font-family: 'Merriweather', serif;"
          >Quest Board</span
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  methods: {
    logout() {
      this.$emit("logout");
    },
  },
  updated() {
    this.status = this.$store.getters.isLoggedIn;
    this.username = this.$store.getters.getfullname;
  },
  data() {
    return {
      comitems: [
        { title: "Quest", icon: "mdi-view-dashboard", to: "/feed" },
        { title: "Create Quest", icon: "mdi-book-arrow-up", to: "/createQuest2" },
        { title: "About Us", icon: "mdi-account-group", to: "/aboutus" },
        { title: "Contact", icon: "mdi-android-messages", to: "/contact" },
      ],
      unlogitems: [
        { title: "Log in", icon: "mdi-login", to: "/login" },
        { title: "Sign up", icon: "mdi-book-account", to: "/signup" },
      ],
      logitems: [{ title: "Profile", icon: "mdi-login", to: "/profile" }],
      status: this.$store.getters.isLoggedIn,
      drawer: false,
      username: this.$store.getters.getfullname,
    };
  },
};
</script>

<style scoped>
@import "../../styles/nav.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap");

body {
  font-family: "Maven Pro";
}

.titlefont {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.profileInfo {
  font-family: "Montserrat", sans-serif;
  margin-left: 10%;
}

.titlefont {
  font-weight: bold;
  font-size: 14px;
}
</style>
