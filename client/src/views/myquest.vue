<template>
  <div class="container">
  <h1 style="text-align:center;">My quest</h1>   
 <div class="full-screen-bot">
  <v-card
    class="mx-auto"
    max-width="340"
  >
    <v-img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/In_progress_icon.svg/1024px-In_progress_icon.svg.png"
    width=50
    style="margin:20px"
    ></v-img>

    <div style="text-align:center">Status</div>



  <br>
      <center>
      <v-btn
        color="white "
        text
        style="font-size:20px; background-color:#1e88e5 ;"
        @click="senddata('in progress')"
         >
        In progress
       </v-btn>
       </center>
      <v-spacer></v-spacer>


      <v-divider></v-divider>
        <v-card-text style="font-size:15px;">
     your quest is on the way to be cleared, so 
 you can relax and enjoy your help.
        </v-card-text>
    
  </v-card>


 

<v-card
    class="mx-auto"
    max-width="340"
  >
    <v-img
      src="https://kindertales.com/images/crm-waitlisticon_2x.png?crc=4099574293"
      width=50
      style="margin:20px"
       
    ></v-img>

    <div style="text-align:center">Status</div>



  <br>
      <center>
      <v-btn
        color="white"
        text
        style="font-size:20px; background-color:#689f38 ;"
         @click="senddata('waiting')" 
         >
        Waiting
       </v-btn>
       </center>
      <v-spacer></v-spacer>


      <v-divider></v-divider>
        <v-card-text style="font-size:15px;">
        Your quest needs to wait for contributor to assign in. If it's really emergency, you can have some emergency call in the field of problem.

        </v-card-text>
    
  </v-card>
 <v-card
    class="mx-auto"
    max-width="340"
  >
    <v-img
      src="https://image.flaticon.com/icons/png/512/1701/1701971.png"
    width=50
    style="margin:20px;justify-content:end;"

    ></v-img>

    <div style="text-align:center">Status</div>



  <br>
      <center>
      <v-btn
        color="white "
        text
        style="font-size:20px; background-color:#ff9100;display:inline;"
        @click="senddata('pending')"
         >
        Pending
       </v-btn>
       </center>
      <v-spacer></v-spacer>


      <v-divider></v-divider>
        <v-card-text style="font-size:15px;">
        Your quest is waiting to be verified by admin, please be patient.
        </v-card-text>
    
  </v-card>

 </div>
<div style="margin-top:40px;text-align:center;font-size:30px ">
  Information about your current quest
</div>
 <comtest1 
 :search = search
  ></comtest1>
  
        </div>
     
</template>

<script>
import comtest1 from '../components/layout/Q/Table'
export default {
  
    name:"my quest",
    components : {comtest1},
    data(){
        
        return{
          search :''
        }
    },
    methods :{
      senddata(value){
        console.log(value);
        this.search=value
      }

    }

}
</script>

<style>
.full-screen-bot{
   margin-top:2%;
   display: flex;
   justify-content: space-around;    
}
.full-screen-bot .v-card{
   margin-left: 100px;
}

.container{
    height: min-content;
}
</style>