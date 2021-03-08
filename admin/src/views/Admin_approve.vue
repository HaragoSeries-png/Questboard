<template>
  <div>
    <v-container>
      <QuestTable :search="search" :questData="quests"></QuestTable>
      <v-row>
        <v-col cols="12" md="6" class="section1">
          <div>
            <ul>
              <questbox
                v-for="quest in quests"
                :key="quest._id"
                :name="quest.questname"
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
import adminService from "../../service/adminService";

import questbox from "../components/questbox.vue";
import QuestTable from "@/components/Table.vue";

export default {
  components: {
    questbox,
    QuestTable,
  },
  name: "Admin_approve",
  data() {
    return {
      reward: "some text here",
      quests: [],
    };
  },
  created: async function() {
    await this.getpending();
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
