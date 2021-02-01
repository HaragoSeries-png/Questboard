<template>
  <div class="container">
  <h1 style="text-align:center;">My quest</h1>   
 <div class="full-screen-bot">
  <v-card
    class="mx-auto"
    width="400"
    height="230"
  >
  <v-row>
    <v-col  sm="4" >
    <v-img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/In_progress_icon.svg/1024px-In_progress_icon.svg.png"
    width=300
    style="margin:20px;margin-top:30%;"
    
    ></v-img>
    </v-col>
    <v-col sm="8">
  
  <br>
      <center>
      <v-btn
        color="white "
        text
        style="margin-top:10%;font-size:20px; background-color:#1e88e5 ;"
        @click="senddata('in progress')"
         >
        In progress
       </v-btn>
       </center>
      
      <p style="text-align:left; width:220px;font-size:17px;margin-top:10px;">
      <span style="margin-left:50px;">your quest</span> is on the <span style="padding-left:10px;">way</span> to be cleared, so you <span style="padding-left:10px;">can</span> relax and enjoy your <span style="padding-left:10px;">help.</span>
      </p>

     
       
    </v-col>
     </v-row>
  </v-card>


 

<v-card
    class="mx-auto"
    width="400"
    height="230"
  >
  <v-row>
    <v-col sm="4">
    <v-img
      src="https://kindertales.com/images/crm-waitlisticon_2x.png?crc=4099574293"
      width=300
          style="margin:20px;margin-top:30%;"
    ></v-img>
    </v-col>

  <v-col sm="8">
  <br>
      <center>
      <v-btn
        color="white"
        text
        style="font-size:20px; background-color:#689f38;margin-top:10%;"
         @click="senddata('waiting')" 
         >
        Waiting
       </v-btn>
       </center>
      <v-spacer></v-spacer>


    
       <p style="text-align:left; width:220px;font-size:17px;margin-top:10px;">
        <span style="margin-left:50px;">wating for</span> contributor <span style="padding-left:35px;">to</span> assign in
         </p>
      
  </v-col>
  </v-row>
  </v-card>


 <v-card
    class="mx-auto"
    max-width="400"
    height="230"
  >
  <v-row>
      <v-col sm="4">
    <v-img
      src="https://image.flaticon.com/icons/png/512/1701/1701971.png"
    width=300
    style="margin:20px;margin-top:30%;"

    ></v-img>
      </v-col>



<v-col sm="8">
  <br>
      <center>
      <v-btn
        color="white "
        text
        style="font-size:20px; background-color:#f57c00;margin-top:10%;"
        @click="senddata('pending')"
         >
        Pending
       </v-btn>
       </center>
      <v-spacer></v-spacer>


         <p style="text-align:left; width:220px;font-size:17px;margin-top:10px;">
        
      <span style="margin-left:50px;">  Your quest</span> is waiting to be verified by admin, please be patient.
        </p>
</v-col>
  </v-row>
  </v-card>
  
 

 </div>

 
 <div id="mobi-screen">

 <v-select
          :items="items"
          label="Lastest"
          outlined
          v-model="search"
        ></v-select>
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
          search :'',
          items : [
            'in progress','pending','waiting'
          ]
        }
        
    },
    methods :{
      senddata(value){
        console.log(value);
        this.search=value;
      },
    
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


#mobi-screen {
  display: none;
}


@media  screen and (max-width: 1072px){
.full-screen-bot{
  display:none;
}

#mobi-screen {
 display: inline;
}

}




</style>