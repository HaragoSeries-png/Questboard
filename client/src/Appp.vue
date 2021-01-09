<template>
  <div id="app">
    <table>
      <tr>
        <Navbar @setNavbarSide="setNavbarSide" @logout="logout" />
      </tr>
      <tr>
        <th v-if="showNavBarSide">
          <NavbarSide />
        </th>
        <th style="width: auto">
          <router-view @setTitle="setPageTitle"></router-view>
        </th>
      </tr>
    </table>
  </div>
</template>

<script src="script.js"></script>
<script>
import authService from "@/service/Authservice";
import Navbar from "@/components/layout/navbar";
import NavbarSide from "@/components/layout/navbar-side";

export default {
  name: "App",
  components: {
    Navbar,
    NavbarSide,
  },
  methods: {
    setNavbarSide() {
      console.log("AAA");
      this.showNavBarSide = !this.showNavBarSide;
    },

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
      showNavBarSide: false,
      islogon: this.$store.getters.isLoggedIn,
    };
  },
};
</script>

<style>
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css%22");

table {
  border-collapse: collapse;
  width: 100%;
}
</style>
