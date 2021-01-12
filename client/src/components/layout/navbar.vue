<template>
  <div id="navbar">
    <v-app>
      <v-navigation-drawer v-model="drawer" app style="background:#f9efe5">
        <v-list-item style="margin-left:17%;">
          <center>
            <div
              style="font-family: 'Pacifico', cursive; font-size:23px;margin-top:10%"
            >
              <span style="right:50%;text-decoration: overline ;"
                >Quest Board</span
              >
            </div>
          </center>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense app>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.to"
            v-model="selectedItem"
            color="#FF598F"
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

      <v-app-bar
        app
        color="#fcb69f"
        dark
        src="../../assets/rough-horn-2146181_1920.jpg"
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
          ><span style="font-size:20px;font-family: 'Merriweather', serif;"
            >Quest Board</span
          ></v-toolbar-title
        >

        <v-spacer></v-spacer>
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
        { title: "Contact", icon: "mdi-android-messages", to: "/contact" },
        { title: "Sign in", icon: "mdi-login", to: "/login" },
        { title: "Sign up", icon: "mdi-book-account", to: "/signup" },
        { title: "Swtich to mobile ", icon: "mdi-cellphone", to: "/#" },
      ],
      right: null,
      drawer: null,
    };
  },
};
</script>

<style scoped>
@import "../../styles/nav.css";
</style>
