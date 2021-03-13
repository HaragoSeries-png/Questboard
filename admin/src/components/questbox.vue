<template>
<div id="box">
    <div>
        name:{{this.name}}
    </div>
    
   <v-btn
      color="primary"
      dark
      @click.stop="dialog = true"
    >
      Accept
    </v-btn>
    
     <v-btn
      color="primary"
      dark
      id='reject'
      @click="reject()"
    >
      reject
    </v-btn>

    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
   
      <v-card>
        <v-card-title class="headline">
          Use Google's location service?
        </v-card-title>
        <v-card-text><v-rating
          v-model="rating"
          background-color="pink lighten-3"
          color="pink"
          large
          half-increments
        ></v-rating>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="rate()"
          >
            confirm
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            cancle
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
    
</div>
    
</template>

<script>
import adminService from '../../service/adminService'
export default {
    props:['name','qstatus','qid'],
    methods:{

        reject(){
          adminService.decide(this.qid,false,this.rating);
          this.$emit('q_reElement',this.qid)
        },
        rate(){
          this.status = true ;
          this.dialog = false;
          adminService.decide(this.qid,this.status,this.rating)  ;
          this.$emit('q_reElement',this.qid)
        }
    },
    data(){
      return{
        dialog: false,
        rating:0,
        status:false
      }
    }
       
    
}
</script>

<style>
body{
    font-size: 30px;
}
#box{
    background-color:#bfddff ;
    margin-top: 10px;
    padding: 20px;
    border-radius:7px ;
}
#approve{
   border-radius:7px ; 
   background-color:#61fd95 ; 
}
#reject{
    margin-top: 3px;
   border-radius:7px ;
   background-color:#fd9f61 ;  
}
li{
    list-style: none;
    
}
</style>