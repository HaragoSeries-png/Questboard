<template>
  <v-app>
    <div id="app">
      <Navbar @logout="logout" />
      <router-view @setTitle="setPageTitle"></router-view>
    </div>
  </v-app>
</template>

<script src="script.js"></script>
<script>
import authService from "@/service/Authservice";
import Navbar from "@/components/layout/navbar";

export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    navSlide: () => {
      const burger = document.querySelector(".burger");
      const nav = document.querySelector(".nav-links");
      const navLinks = document.querySelectorAll(".nav-links li");
      burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            link.style.animation =
              "navLinkFade 0.5s ease forwards $(index / 7 + 2s )";
          }
        });
        burger.classList.toggle("toggle");
      });
    },

    logout() {
      authService.logout();
      this.$store.dispatch("deluser");
      this.$router.push({ path: "/login" });
    },

    setPageTitle(title) {
      if (title) document.title = title + " | " + this.$store.getters.getTitle;
      else document.title = this.$store.getters.getTitle;
    },
  },
  created() {
    this.setPageTitle();
  },
  data() {
    return {
      islogon: this.$store.getters.isLoggedIn,
    };
  },
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css%22");
</style>
