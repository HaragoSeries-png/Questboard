<template>
    <div >
    <div>
    <select class="category-drop" aria-placeholder="Select category">
    
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
import QuestService from "../service/questService";
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

<style>
body {
  background-attachment: fixed;
  background-size: cover;
}
.category-drop{
  display: none;
  margin: 5px;
  color: #072448;
  background: #f8aa4b;
  padding: 15px;
  text-decoration: none;
  font-family: sans-serif;
  box-shadow: 0 2px 5px #54d2d2;
}

.Questcards {
  margin: 0px auto;
  max-width: 1300px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  font-family: sans-serif;
}
.card {
  box-shadow: 0 0 5px rgb(0, 0, 0);
}
.card__img {
  width: 100%;
  display: block;
}
.card__content {
  line-height: 1.5;
  font-size: 0.9em;
  padding: 15px;
  background: #fafafa;
}
.card__content > h2:first-of-type {
  margin-top: 0;
}
.card__content > p:first-of-type {
  margin-top: 0;
}
.card__content > h2:last-of-type {
  margin-bottom: 0;
}
.card__info {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eeeeee;
  font-size: 0.8em;
  border-bottom: 2px solid #cccccc;
}
.more {
  color: #6a966a;
  text-decoration: none;
}
.more:hover {
  text-decoration: underline;
}
.category {
  font-size: 25px;
  padding: 50px;
  text-align: center;
}
.category a {
  margin: 5px;
  color: #072448;
  background: #f8aa4b;
  padding: 15px;
  text-decoration: none;
  border-radius: 40px;
  font-family: sans-serif;
  box-shadow: 0 2px 5px #54d2d2;
}
.category a:hover {
  color: #ffa822;
  background: #134e6f;
  box-shadow: 5px 0 10px #54d2d2;
  text-decoration: underline;
}
.page {
  font-family: sans-serif;
  font-size: 30px;
  text-align: center;
  padding: 50px;
}
.page .button {
  color: #072448;
  padding: 10px;
  text-decoration: none;
  text-shadow: 0 2px 5px #f8aa4b;
}
.page .button:hover {
  color: #f8aa4b;
  font-size: 50px;
  text-decoration: underline;
}
@media screen and (max-width: 768px) {
  .category{
    display: none;
  }
  .category-drop{
  display: block;
  visibility: visible;
  width: 80%;
  margin: 50px;
  color: #072448;
  background: #f8aa4b;
  padding: 20px;
  text-decoration: none;
  font-family: sans-serif;
  box-shadow: 0 2px 5px #54d2d2;
}
  .category a {
    font-size: 10px;
    padding: 10px;
    white-space: nowrap;
  }
  .Questcards {
    margin-left: 5%;
    margin-right: 5%;
    width: auto;
    align-content: center;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 1024px) {
  .Questcards {
    margin-left: 5%;
    margin-right: 5%;
    width: auto;
    /* max-width: 300px; */
    grid-template-columns: repeat(2, 1fr);
  }
  .category{
    display: none;
  }
  .category-drop{
  display: block;
  visibility: visible;
  width: 80%;
  margin: 50px;
  color: #072448;
  background: #f8aa4b;
  padding: 20px;
  text-decoration: none;
  font-family: sans-serif;
  box-shadow: 0 2px 5px #54d2d2;
}
  .category a {
    font-size: 10px;
    padding: 10px;
    white-space: nowrap;
  }
}
</style>
