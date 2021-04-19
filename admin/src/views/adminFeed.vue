<template>
  <div>
    <v-container>
      <QuestTable :questData="allQuest" @q_reElement="reElement"   dark   ></QuestTable>

    </v-container>
  </div>
</template>

<script>
import adminService from "../../service/adminService";

import QuestTable from "@/components/Table.vue";

export default {
  components: {
    QuestTable,
  },
  name: "adminFeed",
  data() {
    return {
      quests: [],
      allQuest :[]
    };
  },
  created: async function() {
    await this.getpending();
    await this.getall();
  },
  methods: {
    getpending: async function() {
      let re = await adminService.getpending().then((res) => {
        return res;
      });
      this.quests = re.quests
   
    },
   async getall(){
       
       let re = await adminService.getall().then((res) => {
        return res;
      });
      this.allQuest = re.quests
    },
    reElement(qid){
      console.log("re-element");
        this.quests =  this.quests.filter(function(q){
          return q._id !== qid
        })
    },
    async allee() {
      await this.getpending();
    },
  },
};
</script>

<style>
table td span {
  justify-content: left;
}
</style>
