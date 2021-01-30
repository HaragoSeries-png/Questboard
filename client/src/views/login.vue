<template>
  <v-app>
    <div id="login" class="loginfrom" style="font-family: Montserrat;">
      <img class="avatar" :src="profilePic" />
      <h1>Login</h1>

      <v-text-field label="Email" v-model="email" required dark></v-text-field>

      <v-text-field
        label="Password"
        v-model="password"
        type="password"
        required
        dark
      ></v-text-field>

      <br />
      <button v-on:click="login()">Login</button>

      <br /><br />
      <p class="p-1">
        Not have account yet? <router-link to="/signup"> Sign up</router-link>
      </p>
    </div>
  </v-app>
</template>

<script>
import authService from "../service/Authservice";

export default {
  name: "Login",
  methods: {
    login: async function() {
      let data = {
        email: this.email,
        password: this.password,
      };

      let re = await authService.login(data).then((res) => {
        return res;
      });

      if (re.suc) {
        this.$store.dispatch("authen", re);
        this.$router.push({ path: "/feed" });
      } else alert("Fail");
    },
  },
  created() {
    this.$emit("setTitle", this.$options.name);
  },
  data() {
    return {
      profilePic:
        "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257_1280.png",
      email: "",
      password: "",
    };
  },
};
</script>

<style scoped>
#app {
  background: url("https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    no-repeat center center fixed !important;
  background-size: cover;
}
.loginfrom {
  margin-top: -4%;
  width: 320px;
  height: 420px;
  background: #000;
  color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  box-shadow: 8px 8px 50px rgb(36, 35, 34);
  padding: 70px 30px;
  border-radius: 10px;
  opacity: 0.8;
}
.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
}
button {
  border: none;
  outline: none;
  height: 40px;
  background: linear-gradient(120deg, #4caf50, rgb(69, 160, 212));
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  width: 250px;
  /* position: absolute; */
}
button:hover {
  background: linear-gradient(120deg, rgb(69, 160, 212), #4caf50);
  color: #fff;
}
h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 30px;
}
.loginfrom p {
  margin: 0;
  padding: 0;
  font-weight: bold;
}
.loginfrom input {
  width: 100%;
  margin-bottom: 20px;
}
.loginfrom input[type="email"],
input[type="text"],
input[type="password"] {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}
.loginfrom a {
  text-decoration: none;
  font-size: 12px;
  line-height: 20px;
  color: darkgray;
}
.loginfrom a:hover {
  color: darkorange;
}
.p-1 {
  color: darkgray;
  font-size: 12px;
}
</style>
