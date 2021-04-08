<template>
    <div class="register_from">
        <h1>Register</h1>
        <form>
            <p>Name</p>
            <input type="text" v-model="firstname" placeholder="Name">
            <p>Lastname</p>
            <input type="text" v-model="lastname" placeholder="Lastname">
            <p>E-mail</p>
            <input type="email" v-model="email" placeholder="E-mail">
            <p>Password</p>
            <input type="password" v-model="password" placeholder="Password">
            <p>Confirm Password</p>
            <input type="password" v-model="conpassword" placeholder="Confirm Password">
            <br><br>
            <button v-on:click="register()" class="button1" href="#">Register</button>
  
        </form>
    </div>
</template>

<script>
import authService from '../service/authService'
export default {
    name:'register',
    data(){
        return {
            firstname:"",
            lastname:"",
            email:"",
            password:"",
            conpassword:""
        }
    },
    methods: {
        register:async function(){
            
            let data = {
                firstname:this.firstname,
                lastname:this.lastname,
                email: this.email,
                password:this.password,
            }     
            let suc = await authService.register(data).then((res)=>{return res})
            console.log("suc"+suc)
            
            if(suc){
                this.$router.push({path:'/login'})
            }
            else{
                alert("fail")
            }
            
        }
    }
}
</script>

<style>
    body{
margin : 0;
padding : 0;

background-position: center;
background-size: cover;
font-family: sans-serif;
}
.register_from{
    width: 420px;
    height: min-content;
    background:#000;
    color: #fff;
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%,-50%);
    box-sizing: border-box;
    box-shadow: 8px 8px 50px rgb(36, 35, 34);
    padding: 70px 30px;
    border-radius: 10px;
}
h1{
    margin: 0;
    padding: 0 0 20px;
    text-align: center;
    font-size: 30px;
}
button{
  border: none;
  outline: none;
  height: 40px;
  background: linear-gradient(120deg,#4CAF50,rgb(69, 160, 212));
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  width: 350px;
  position: absolute;
}
button:hover {
  background: linear-gradient(120deg,rgb(69, 160, 212),#4CAF50);
  color: #fff;
}
input{
    width: 100%;
    margin-bottom: 20px;
}
input[type="text"],[type = "email"], input[type = "password"]{
    border: none;
    border-bottom: 1px solid #fff;
    background: transparent;
    outline: none;
    height: 40px;
    color: #fff;
    font-size: 16px;
}
p{
    margin: 0;
    padding: 0;
    font-weight: bold;
}
</style>