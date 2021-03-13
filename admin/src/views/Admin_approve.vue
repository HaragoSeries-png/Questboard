<template>
  <div>
    <v-container>
      <QuestTable :questData="quests" @q_reElement="reElement"   dark   ></QuestTable>
     
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
  name: "Admin_approve",
  data() {
    return {
      quests: [],
      allQuest :[]
    };
  },
  created: async function() {
    await this.getpending();
    await this.getAll();
  },
  methods: {
    getpending: async function() {
      let re = await adminService.getpending().then((res) => {
        return res;
      });
      this.quests = re.quests
      // console.log('open');
      // console.log(this.quests)
    },
   async getAll(){
       let re = await adminService.getAll().then((res) => {
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
