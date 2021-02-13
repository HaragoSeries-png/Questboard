<template>
  <div>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="section1">
            <div>
              <div style="margin-top:5%;">
                <v-img
                  height="300"
                  width="400"
                  src="https://cdn.pixabay.com/photo/2020/07/08/10/17/car-5383371_1280.jpg"
                ></v-img>
              </div>

              <table style="width:350px;margin-top:7%;">
                <tr>
                  Create quest by :
                  <td>
                    <span>Jiraphat junior</span>
                  </td>
                </tr>
              </table>

              <table style="margin-top:5%;width:200px;">
                <tr>
                  Number of helper :
                  <td>
                    <span>2</span>
                  </td>
                </tr>
              </table>

             
            </div>
          </v-col>
          <ul>
            
              <questbox v-for='quest in quests' :key="quest._id" 
                :name='quest.questname' 
                :status="quest.status"
                :qid="quest._id"
                @allee="allee"
                >                
              </questbox>
         
          </ul>
         
          <v-col cols="12" md="6" class="section2">
            <div style="display:block;">
              section2 remaining
            </div>
          </v-col>
        </v-row>
      </v-container>
 
  </div>
</template>

<script>
import adminService from '../../service/adminService'

import questbox from '../components/questbox.vue';
export default {
  components:{
    questbox

  },
  name: "Admin_approve",
  data(){
    return{
      reward:"some text here",
      quests:['tad','kuy']
    }
  },
  created: async function() {
    await this.getpending();
    
  },
  methods:{
    getpending:async function(){
      
      let re = await adminService.getpending().then(res=>{
        return res
      })
      console.log(re.quests)
      this.quests = re.quests
    },
    allee(t){
      alert("workk "+t)
    }
  }
  
};
</script>

<style>
table td span {
  justify-content: left;
}

</style>
