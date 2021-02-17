<template>
    <div >
    <div>
    <select class="category-drop" aria-placeholder="Select category" style="margin-left: 5%; margin-right: 5%;">
    <option disabled selected>Select category</option>
    <option>Handicraft</option>
    <option>Advice</option>
    <option>Education</option>
    <option>Accident</option>
    <option>Housework</option>
    <option>Find friends</option>
    <option>Food and home economics</option>
    <option>Traffic</option>
  </select>
    </div>
    
    <div class="category">
      <a href="./">Handicraft</a>
      <a href="./">Advice</a>
      <a href="./">Education</a>
      <a href="./">Accident</a>
      <a href="./">Housework</a>
      <a href="./">Find friends</a>
      <a href="./">Food and home economics</a>
      <a href="./">Traffic</a>
    </div>
    
    <v-row style="border:1px solid black; margin-left: 5%; margin-right: 5%;">
      <v-col cols = '12' md = '3' style="border:1px solid red" v-for="(item, index) in quests" :key="index">
        <Questcard
          :Name="item.questname"
          :Detail="item.questdetail"
          :Reward="item.questreward"
          :Image="item.image"
          :Qid='item._id'
        >
        </Questcard>
      </v-col>
      <div style="display:none">
      </div>
    </v-row>
    <div class="page">
      <div class="bar">
        <a href="#" class="button">«</a>
        <a href="#" class="button">1</a>
        <a href="#" class="button">2</a>
        <a href="#" class="button">3</a>
        <a href="#" class="button">4</a>
        <a href="#" class="button">»</a>
      </div>
    </div>
  </div>
</template>

<script>
import Questcard from "../components/Questcard";
import QuestService from "@/service/questService";
export default {
  components: {
    Questcard,
  },
  name: "questsfeed",
  methods: {
    getquest: async function() {
      let a = await QuestService.getquest().then((res) => {
        return res;
      });
      console.log(a.quest);
      this.quests = await a.quest;
    },
  },
  data() {
    return {
      quests: ''
    };
  },
  created: async function() {
    await this.getquest();
  },
};
</script>

