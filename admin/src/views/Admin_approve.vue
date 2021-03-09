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
      
         
        
        </v-row>
        
      </v-container>
 
<h1>----------------------------------------------------------------------------------------</h1>
<div id="questTable">
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="questdata" :search="search" class="onDesk">
        <template #item="{ item }">
         
          <tr @click="sentToDetail(item._id)" >
            <td class="item" style="font-size:15px;">{{ item.questname }}</td>
            <td class="item" style="text-transform: uppercase;font-size:15px;">
              <v-chip :color="getColor(item.status)" dark>
                {{ item.status }}
              </v-chip>
            </td>
            <td class="item" style="font-size:15px;">{{ item.category }}</td>
            <td class="item" style="font-size:15px;">{{ item.tend }}</td>
          </tr>
        </template>
      </v-data-table>

        <v-data-table :headers="headers" :items="questdata" :search="search" class="onMobile">
        <template #item="{ item }">
      
          <tr @click="sentToDetail(item._id)" style="padding:20px;" >
            <td class="item" style="font-size:20px;" >{{ item.questname }}</td>
            <td class="item" style="text-transform: uppercase;">
              <v-chip :color="getColor(item.status)" dark>
                {{ item.status }}
              </v-chip>
            </td>
           
            <td id="itemspecial" style="text-align:end;font-size:20px;">{{ item.category }}</td>
            <td id="itemspecial" style="text-align:center;">{{ item.tend }}</td>
          </tr>
         
        </template>
      </v-data-table>

 








    </v-card>
    
  </div>

















  </div>
</template>

<script>
import adminService from '../../service/adminService';

import questbox from '../components/questbox.vue';
export default {
  components:{
    questbox

  },
  name: "Admin_approve",
  props: ["search"],
  data(){
    return{
      reward:"some text here",
      quests:['tad','kuy'],
       questdata: [],
      selected: [],
      headers: [
        { text: "Quest Name", value: "questname", align: "start" ,size:"30px" },
        {
          text: "Status",
          value: "status",
          align: "start",
        },
        { text: "Category", value: "category", align: "start" },
        {
          text: "Time",
          value: "tend",
          align: "start",
        },
      ],
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
    },
    sentToDetail(value) {
      let path = '/quest/id/' + value
      this.$router.push({ path: path})
    },
  

  }
  
};
</script>

<style>
table td span {
  justify-content: left;
}

</style>
