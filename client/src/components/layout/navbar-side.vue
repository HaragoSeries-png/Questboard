<template>
  <div id="navbar-side">
    <v-navigation-drawer app style="border-right: 1px solid grey">
      <v-list-item v-if="$store.getters.isLoggedIn == true">
        <v-list-item-content>
          <div class="divTable">
            <div class="divTableRow">
              <div class="divTableCell" style="width: 30% text-align: left">
                <v-img
                  class="rounded-circle mx-auto mt-6"
                  :aspect-ratio="1 / 1"
                  width="60px"
                  height="auto"
                  style="border: 1px solid gray"
                  src="../../assets/miku.gif"
                />
              </div>

              <div class="divTableCell" style="width: auto%;">
                <span style="font-size: 20px">{{ $store.getters.getusername }}</span>
                <br />
                <router-link to="/profile">View your profile</router-link>
              </div>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <div id="commonTab">
          <v-list-item
            v-for="item in commonTab"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title style="font-size: 10px">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider style="margin: 3%"></v-divider>
        </div>
        {{ $store.getters.isLoggedIn }}
        <div id="unLoginTab" v-if="$store.getters.isLoggedIn == false">
          <v-list-item
            v-for="item in unLoginTab"
            :key="item.title"
            link
            :to="item.to"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title style="font-size: 10px">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider style="margin: 3%"></v-divider>
        </div>

        <div id="canLoginTab" v-else>
          <v-list-item link to="/" @click="logout">
            <v-list-item-icon>
              <v-icon style="color: red">mdi-login</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title style="font-size: 10px; color: red"
                >Logout</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-divider style="margin: 3%"></v-divider>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar-Side",
  methods: {
    logout() {
      console.log("logout");
      this.$emit("logout");
    },
  },
  data() {
    return {
      status: 0,
      commonTab: [
        { title: "Quest", icon: "mdi-view-dashboard", to: "/feed" },
        { title: "About Us", icon: "mdi-account-group", to: "/aboutus" },
        { title: "Contact", icon: "mdi-android-messages", to: "/profile" },
      ],
      unLoginTab: [
        { title: "Sign in", icon: "mdi-login", to: "/login" },
        { title: "Sign up", icon: "mdi-book-account", to: "/signup" },
      ],
      canLoginTab: [
        { title: "Logout", icon: "mdi-login", to: "$emit('logout)" },
      ],
    };
  },
};
</script>

<style></style>
