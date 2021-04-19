<template>
  <v-app>
    <div id="signUp" class="register_from">
      <h1>Sign Up</h1>

      <div class="divTable">
        <div class="divTableCell" style="padding-right: 5%">
          <v-text-field
            label="First name"
            v-model="firstname"
            required
            dark
            autocomplete="off"
          ></v-text-field>
        </div>
        <div class="divTableCell" style="padding-left: 5%">
          <v-text-field
            label="Last name"
            v-model="lastname"
            required
            dark
            autocomplete="off"
          ></v-text-field>
        </div>
      </div>

      <v-text-field
        label="E-mail"
        v-model="email"
        required
        dark
        autocomplete="off"
      ></v-text-field>

      <v-text-field
        label="Password"
        v-model="password"
        type="password"
        required
        dark
        autocomplete="off"
      ></v-text-field>

      <v-text-field
        label="Confirm password"
        v-model="conpassword"
        type="password"
        required
        dark
        autocomplete="off"
      ></v-text-field>

      <br />
      <button v-on:click="register_check()" class="button">Register</button>

      <br /><br />
      <div class="alertbox">
        <ul id="alertField" class="p" style="color: red; font-size: 16px"></ul>
      </div>
    </div>
  </v-app>
</template>

<script>
import authService from "@/service/authService";
import Swal from "sweetalert2";

export default {
  name: "Sign Up",
  methods: {
    register_check() {
      let compass= this.password.trim()
      let alertField = document.getElementById("alertField");
      alertField.innerHTML = "";

      if (!this.firstname)
        alertField.innerHTML += "<li>Require Firstname.</li>";
      if (!this.lastname) alertField.innerHTML += "<li>Require Lastname.</li>";
      if (!this.email){         
        alertField.innerHTML += "<li>Require Email.</li>";
      }
      else if (!this.validEmail(this.email)) {
       alertField.innerHTML += "<li>Valid email required.</li>"
      }
      if (!this.password){
         alertField.innerHTML += "<li>Require Password.</li>";
      }
      else if (compass.length < 8)
        alertField.innerHTML +=
          "<li>Password required more length than 8.</li>";
      else if (!this.conpassword)
        alertField.innerHTML += "<li>Please confirm your password.</li>";
      else if (this.password != this.conpassword)
        alertField.innerHTML += "<li>Password don't match.</li>";

      if (alertField.innerHTML == "") this.register();
    },
    register: async function() {
      let registerData = {
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        password: this.password,
      };

      let suc = await authService.register(registerData).then((res) => {
        return res;
      });

      if (suc) {
        Swal.fire(
          "<alert-title>Register Complete!</alert-title>",
          "<alert-subtitle>Go back for Sign in Questboard</alert-subtitle>",
          "success",
        );

        this.$router.push({ path: "/login" });
      } else {
        Swal.fire(
          "<alert-title>Error!</alert-title>",
          "<alert-subtitle>Something wrong</alert-subtitle>",
          "error",
        );
      }
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
  },
  created() {
    this.$emit("setTitle", this.$options.name);
  },
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      conpassword: "",
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

body {
  margin: 0;
  padding: 0;

  background-position: center;
  background-size: cover;
}

.register_from {
  margin-top: 0%;
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
  opacity: 0.8;
}

h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
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

p {
  margin: 0;
  padding: 0;
  /* font-weight: bold; */
}
</style>
