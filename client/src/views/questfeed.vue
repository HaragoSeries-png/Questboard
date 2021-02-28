<template>
  <div>
    <div>
      <select
        class="category-drop"
        aria-placeholder="Select category"
        style="margin-left: 5%; margin-right: 5%;"
      >
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
      <a href="./Handicup">Handicraft</a>
      <a href="./">Advice</a>
      <a href="./">Education</a>
      <a href="./">Accident</a>
      <a href="./House worker">Housework</a>
      <a href="./">Find friends</a>
      <a href="./">Food and home economics</a>
      <a href="./">Traffic</a>
    </div>

    <v-row style=" margin-left: 5%; margin-right: 5%;">
      <v-col
        cols="12"
        md="3"
        style="padding-bottom: 2%;"
        v-for="(item, index) in quests"
        :key="index"
      >
        <Questcard
          :Name="item.questname"
          :Detail="item.questdetail"
          :Reward="item.reward"
          :Image="item.image"
          :Qid="item._id"
          :date="item.duedate"
        >
        </Questcard>
      </v-col>
      <div style="display:none"></div>
    </v-row>
    <div class="page">
      <div class="bar">
        <a href="#" class="button">«</a>

        <a v-for="i in pagenum" :key="i" to="/feed/1" class="button">{{i}}</a>
        <!-- <router-link to="/feed/2" class="button">2</router-link>
        <router-link to="/feed/3" class="button">3</router-link>
        <router-link to="/feed/4" class="button">4</router-link> -->
        <a href="#" class="button">»</a>
      </div>
    </div>
  </div>
</template>

<script>
import Questcard from "../components/Questcard";
import QuestService from "@/service/questService";
export default {
  name: "QuestFeed",
  components: {
    Questcard,
  },
  watch: {
    "$route.params": async function() {
      await this.getquest();
    },
    

  },
  methods: {
    getquest: async function() {
      let feedpage = 1
      let cate = undefined
      if (this.$route.params.page) {
        feedpage = this.$route.params.page;
      }
      if (this.$route.params.category) {
        cate = this.$route.params.category;
      }

      console.log(feedpage)
      let a = await QuestService.getquest(feedpage-1,cate).then((res) => {
        return res;
      });
      console.log('pagenum ='+a.pagenum);
      this.quests = await a.quest;
      this.pagenum = await a.pagenum
    },
  },
  data() {
    return {
      quests: '',
      pagenum:''
    };
  },
  created: async function() {
    await this.getquest();
  },
};
</script>
