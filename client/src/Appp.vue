<template>
  <div id="app">
    <v-app>
      <!-- <v-simple-table> -->
      <!-- <Navbar @setNavbarSide="setNavbarSide" @logout="logout" />
      <NavbarSide v-if="showNavBarSide" /> -->

      <div class="component" style="width: auto">
        <router-view @setTitle="setPageTitle"></router-view>
      </div> 
     
        
          <Navbar @setNavbarSide="setNavbarSide" />
        
        <!-- <tr>
          <NavbarSide v-if="showNavBarSide" @logout="logout" />
          <div class="component">
            <router-view @setTitle="setPageTitle"></router-view>
          </div>
        </tr> -->
      <!-- </v-simple-table> -->
    </v-app>
  </div>
</template>

<script src="script.js"></script>
<script>
import authService from "@/service/Authservice";
import Navbar from "@/components/layout/navbar";
import NavbarSide from "@/components/layout/navbar-side";

export default {
  name: "App",
  components: { Navbar, NavbarSide },
  methods: {
    setNavbarSide() {
      this.showNavBarSide = !this.showNavBarSide;
    },

   

    logout() {
      console.log("logout2");

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
  updated() {
    this.showNavbarSide = false;
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
@import './styles/table.css';

table {
  border-collapse: collapse;
  width: 100%;
}

.component {
  margin: 2%;
  margin-top: 4%;
  width: auto;
  border: 1px solid black;
  border-style: dashed;
}

/* .divTable{
	display: table;
	width: 100%;
}

.divTableRow {
	display: table-row;
}

.divTableHeading {
	background-color: #EEE;
	display: table-header-group;
}

.divTableCell, .divTableHead {
	border: 1px solid #999999;
	display: table-cell;
	padding: 3px 10px;
}

.divTableHeading {
	background-color: #EEE;
	display: table-header-group;
	font-weight: bold;
}

.divTableFoot {
	background-color: #EEE;
	display: table-footer-group;
	font-weight: bold;
}

.divTableBody {
	display: table-row-group;
} */
</style>
