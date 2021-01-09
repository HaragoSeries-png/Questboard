<template>
  <div id="Navbar">
    <nav>
      <div class="hamburger">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div
        class="Cata"
        style="position: absolute; top:3%; margin-left: 26.9%; z-index: 2;"
      >
        <select name="cars" id="cars" style="font-size:16px; height: 30px;;">
          <option value="test1">All</option>
          <option value="test2">craft</option>
          <option value="test3">home</option>
          <option value="test4">...</option>
        </select>
      </div>
      <div class="logo_search">
        <img style="width: 50px; height: 50px" src="@/assets/logo2.png" />
        <span id="header_Logo">Quest board</span>
        <input
          type="text"
          placeholder="Search.."
          name="search"
          size="40px"
          style="font: size 30px;height:30px"
        />
      </div>
      <div style="color: white"><Clock /></div>
      <div class="search">
        <i class="fa fa-search"></i>
      </div>

      <ul class="nav-links">
        <li><a href="#">Quest</a></li>
        <li><a href="#">About Us</a></li>
        <li class="Switch_M"><a href="#">Switch to Mobile</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Clock from "@/helpers/clock";

export default {
  name: "Navbar",
  components: {
    Clock,
  },
  data() {
    return {
      Pic1: "/src/assets/logo2.png",
    };
  },
};
</script>

<style scoped>
@import "../../styles/nav.css";

#header_Logo {
  color: white;
  font-weight: bold;
  font-size: 30px;
  font-family: "Redressed", cursive;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

template {
  font-family: "Poppins", sans-serif;
  background-attachment: fixed;
  background-size: cover;
}

nav {
  height: 10vh;
  background-color: #fd9047;
}

.nav-links {
  display: flex;
  list-style: none;
  width: 50%;
  background-color: #fd9047;
  height: 100%;
  justify-content: space-around;
  margin-left: auto;
  align-items: center;
  cursor: pointer;
  letter-spacing: 1px;
}

.logo_search {
  position: absolute;
  display: flex;
  list-style: none;
  width: 40%;
  background-color: #fd9047;
  height: 10vh;
  justify-content: space-around;
  margin-right: auto;
  align-items: center;
}

.nav-links li a {
  font-size: 20px;
  position: relative;

  color: white;
  -webkit-text-stroke: 1px white;
  font-weight: 900;
  text-decoration: none;
  line-height: 1.2em;
}

.nav-links li a:hover {
  color: white;
  -webkit-text-stroke: 1px #000;
  transition: 0.5s;
  animation: a 1s ease;
  animation-iteration-count: 1;
}

@keyframes a {
  15% {
    transform: translateX(5px);
  }
  30% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(3px);
  }
  65% {
    transform: translateX(-3px);
  }
  80% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}

.search {
  color: black;
  cursor: pointer;
  font: size 30px;
  position: absolute;
  margin-left: 39.7%;
  top: 3.14%;
  width: 2%;
  align-items: center;
  padding: 5px 2px 2px;
  height: 30px;
  background: rgb(7, 143, 223);
}

.search:hover {
  background: cornflowerblue;
  color: cornsilk;
}

.Cata {
  left: 128px;
  position: relative;
  border: none;
  outline: none;
  background: rgb(255, 255, 255);
  font-size: 18px;
  padding: 1px 2px 2.9px;
  margin: -4px;
  border-radius: 15px solid #fff;
}

input[type="text"] {
  background: #fff;
  width: 200px;
  height: 0px;
  border: none;
  outline: none;
  padding: 2px 5px;
}

@media screen and (max-width: 768px) {
  .logo_search {
    display: none;
  }
  .hamburger div {
    width: 20px;
    border: 1px solid white;
    margin: 5px;
  }
  nav {
    position: relative;
  }
  .hamburger {
    position: absolute;
    cursor: pointer;
    border: 1px solid white;
    width: auto;
    height: auto;
    right: 5%;
    top: 20%;
    transform: translate(-5%, -50%);
    z-index: 2;
    margin-top: 2%;
  }
  .nav-links {
    position: fixed;
    background-color: #52ce56;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    transform: translateY(-100%);
    transition: transform 0.5s ease-in;
  }
  .nav-links.active {
    transform: translateY(0%);
  }
  .Cata {
    display: none;
  }
  .search {
    display: none;
    cursor: pointer;
  }
}
</style>
