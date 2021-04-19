<template>
  
  <div id="loginitems" v-if="status">
    
     <v-menu offset-y :nudge-width="200"  >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#FF598F"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            mdi-bell
          </v-icon>
        </v-btn>
      </template>
      <v-list>
       <div style="text-align:center;font-weight:bold;font-size:13px;padding-top:2%;">
              Notification
       </div>
       <v-divider></v-divider>
        <v-list-item
          v-for="(item) in noti"
          :key="item._id"
        >
         
          <v-list-item-title>{{ item.message }}   </v-list-item-title>
    
        </v-list-item>
             
      </v-list>
    </v-menu> 
        </div>
</template>

<script>
import notifyService from '@/service/notifyService'
export default {
    data(){
      return{
        status: this.$store.getters.isLoggedIn,
        notiicon : 'alarm-light-outline',
        noti:this.$store.getters.getnoti
      }
    },
    methods:{
        async getnoti(){           
            let a = await notifyService.getnoti()           
            if(a.sucess){ 
              this.$store.dispatch("setnoti", a.notify );
              this.status =this.$store.getters.isLoggedIn            
              this.$forceUpdate()
            }
        },
        loop(){           
            setInterval(function(){
                this.getnoti()
            }.bind(this), 50000)            
        }
    },
    created(){
        this.getnoti()  
        this.loop()   
        this.status =this.$store.getters.isLoggedIn 
        this.noti = this.$store.getters.getnoti
    },
    updated(){
      this.status =this.$store.getters.isLoggedIn
      this.noti = this.$store.getters.getnoti
    }
    
}
</script>

<style>

</style>