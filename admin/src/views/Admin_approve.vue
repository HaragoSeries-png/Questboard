<template>
  <div>
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="section1">
            <div>
                  
          <ul>
            
              <questbox v-for='quest in quests' :key="quest._id" 
                :name='quest.questname' 
                :qid="quest._id"
                @reload="allee"
                >       
                
              </questbox>
             
          </ul>
             
             
            </div>
          </v-col>
      
         
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
    async allee(){
      await this.getpending();
    }
  }
  
};
</script>

<style>
table td span {
  justify-content: left;
}

</style>
