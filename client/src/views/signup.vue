<template>
  <div class="register_from">
    <h1>Register</h1>

    <div class="divTable">
      <div class="divTableCell" style="padding-right: 5%">
        <div v-if="firstname"><p>Firstname</p></div>
        <input type="text" v-model="firstname" placeholder="First Name"  required />
      </div>
      <div class="divTableCell" style="padding-left: 5%">
        <div v-if="lastname"><p>Lastname</p></div>
        <input type="text" v-model="lastname" placeholder="Last Name" />
      </div>
    </div>

    <div v-if="username"><p>Username</p></div>
    <input type="text" v-model="username" placeholder="Username" />

    <div v-if="email"><p>E-mail</p></div>
    <input type="email" v-model="email" placeholder="E-mail" />

    <div v-if="password"><p>Password</p></div>
    <input type="password" v-model="password" placeholder="Password" rules="" />

    <div v-if="conpassword"><p>Confirm Password</p></div>
    <input
      type="password"
      v-model="conpassword"
      placeholder="Confirm Password"
    />

    <br /><br />
    <button v-on:click="register_check()" class="button1">Register</button>

    <br /><br />
    <div class="alertbox">
      <ul id="alertField" class="p-1" style="color: red; padding-top: 3px">
      </ul>
    </div>
  </div>
</template>

<script>
import authService from "../service/Authservice";

export default {
  name: "Register",
  methods: {
    register_check() {
      let alertField = document.getElementById('alertField')
      alertField.innerHTML = "";

      if (!this.firstname) alertField.innerHTML += "<li>Require Firstname.</li>"
      if (!this.lastname) alertField.innerHTML += "<li>Require Lastname.</li>"
      if (!this.username) alertField.innerHTML += "<li>Require Username.</li>"
      if (!this.email) alertField.innerHTML += "<li>Require Email.</li>"
      if (!this.password) alertField.innerHTML += "<li>Require Password.</li>"
      if(this.password.length<8) alertField.innerHTML += "<li>required 8 length</li>"
      else if (!this.conpassword) alertField.innerHTML += "<li>Please confirm your password.</li>"
      else if (this.password != this.conpassword) alertField.innerHTML += "<li>Password don't match.</li>"
     
      if (alertField.innerHTML == '') this.register()
    },
    register: async function() {
      let data = {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.username,
        email: this.email,
        password: this.password,
      };

      let suc = await authService.register(data).then((res) => {
        return res;
      });
      console.log("logsuc" + suc);

      if (suc) {
        this.$router.push({ path: "/login" });
      } else {
        alert("fail");
      }
    },
  },
  created() {
    this.$emit("setTitle", this.$options.name);
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      conpassword: ""
    };
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;

  background-position: center;
  background-size: cover;
  font-family: sans-serif;
}
.register_from {
  margin-top: 8%;
  justify-items: center;
  width: 400px;
  height: min-content;
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
}
h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 30px;
}
button {
  border: none;
  outline: none;
  height: 40px;
  background: linear-gradient(120deg, #4caf50, rgb(69, 160, 212));
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  width: 350px;
  /* position: absolute; */
}
button:hover {
  background: linear-gradient(120deg, rgb(69, 160, 212), #4caf50);
  color: #fff;
}
input {
  width: 100%;
  margin-bottom: 20px;
}
input[type="text"],
[type="email"],
input[type="password"] {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}
p {
  margin: 0;
  padding: 0;
  font-weight: bold;
}
</style>
