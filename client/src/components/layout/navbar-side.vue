<template>
  <div id="navbar-side">
    <v-navigation-drawer app >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            <span style="font-size:20px;font-weight: bold;">Quest Board</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span style="font-size:15px">project</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>   
      <router-link to="/profile">Profile</router-link>
      <router-link to="/feed">Feed</router-link>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar-Side",
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
    };
  },
};
</script>

<style></style>
