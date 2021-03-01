<template>
  <div>
    <div>
      <select
        class="category-drop"
        aria-placeholder="Select category"
        style="margin-left: 5%; margin-right: 5%;"
        @change="changeCatm($event)"
      >
        <option>Select category</option>
        <option value="Handicup">Handicraft</option>
        <option>Advice</option>
        <option>Education</option>
        <option>Accident</option>
        <option value="House worker">Housework</option>
        <option>Find friends</option>
        <option>Food and home economics</option>
        <option>Traffic</option>
      </select>
    </div>
    <div class="category">
      <a @click="changeCat('Handicup')">Handicraft</a>
      <a @click="changeCat('Advice')">Advice</a>
      <a @click="changeCat(i)">Education</a>
      <a @click="changeCat(i)">Accident</a>
      <a @click="changeCat('House worker')">Housework</a>
      <a @click="changeCat(i)">Find friends</a>
      <a @click="changeCat(i)">Food and home economics</a>
      <a @click="changeCat(i)">Traffic</a>
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
 

        <a v-for="i in pagenum" :key="i" @click="changePage(i)" class="button">{{i}}</a>
        <!-- <router-link to="/feed/2" class="button">2</router-link>
        <router-link to="/feed/3" class="button">3</router-link>
        <router-link to="/feed/4" class="button">4</router-link> -->
      
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
    "$route.params.page": async function() {
      await this.getquest();
    },
    "$route.params.category": async function() {
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
      this.currpage = feedpage
      console.log('page '+this.currpage)
      let a = await QuestService.getquest(feedpage-1,cate).then((res) => {
        return res;
      });
      console.log('pagenum ='+a.pagenum);
      this.quests = await a.quest;
      this.pagenum = await a.pagenum
    },
    changePage(i){
      this.$router.push({ name: "feed",params:{page:i} });
    },
    changeCat(i){
      this.currcat = i
      let pathh = '/feed/'+this.currpage+'/category/'+this.currcat
      this.$router.push({ path:pathh});
    },
    changeCatm(i){
      i = i.target.value
      this.currcat = i
      let pathh = '/feed/'+this.currpage+'/category/'+this.currcat
      this.$router.push({ path:pathh});
    }
  },
  data() {
    return {
      quests: '',
      pagenum:'',
      currpage:'',
      currcat:''
    };
  },
  created: async function() {
    await this.getquest();
  },
};
</script>
