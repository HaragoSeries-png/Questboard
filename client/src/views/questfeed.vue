<template>
  <div>    
   
      
    <!-- <div>
      <select
        class="category-drop"
        aria-placeholder="Select category"
        style="margin-left: 5%; margin-right: 5%;"
        @change="changeCatm($event)"
      >
        <option value="">Select category</option>
        <option value="Handicraft">Handicraft</option>
        <option value="Advice">Advice</option>
        <option value="Education">Education</option>
        <option value="Accident">Accident</option>
        <option value="Housework">Housework</option>
        <option value="Find friend">Find friends</option>
        <option value="Food and home">Food and home economics</option>
        <option value="Traffic">Traffic</option>
      </select>
    </div> -->

    <!-- <div class="category">
      <a @click="changeCat('')">All</a>
      <a @click="changeCat('Handicraft')">Handicraft</a>
      <a @click="changeCat('Advice')">Advice</a>
      <a @click="changeCat('Education')">Education</a>
      <a @click="changeCat('Accident')">Accident</a>
      <a @click="changeCat('Housework')">Housework</a>
      <a @click="changeCat('Find friend')">Find friends</a>
      <a @click="changeCat('Food and home')">Food and home economics</a>
      <a @click="changeCat('Traffic')">Traffic</a>
    </div> -->
    <div style="width:420px;margin-left:auto;margin-right:auto;margin-top:3%;">


    
     <v-autocomplete
        v-model="caca"
        :items="items"
        label="Select Category"
        persistent-hint
        prepend-icon="mdi-magnify"
        color="#73c2fb"
        style="margin-bottom:8%;"
      >
    
        <template v-slot:append-outer>
        <div class="s_btn" @click="changeCat(caca)">
          Search
        </div>
        </template>
      </v-autocomplete>
  
</div>
 <center>
   <div v-if="currcat=='Education'">
       <v-carousel
       :show-arrows="false"
       cycle ="3"
       max-width="300"
       >
    <v-carousel-item
      v-for="(item,i) in itemsrcedu"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      
    ></v-carousel-item>
  </v-carousel>
  <center>
<div>


      <h1 style="margin-bottom:5%;margin-top:5%;position:relative;">
      <span style="font-size:40px;">   {{currcat}}  </span> 
      </h1>
      </div>
      </center>
        </div>

     <div v-else-if="currcat=='Handicraft'">
       <v-carousel
       :show-arrows="false"
       cycle ="3"
       max-width="300"
       >
    <v-carousel-item
      v-for="(item,i) in itemsrchandi"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      
    ></v-carousel-item>
  </v-carousel>

      <h1 style="margin-bottom:5%;margin-top:5%;">
        
        {{currcat}}

      </h1>
        </div>

<div v-else-if="currcat=='Advice'">
       <v-carousel
       :show-arrows="false"
       cycle ="3"
       max-width="300"
       >
    <v-carousel-item
      v-for="(item,i) in itemsrcadvi"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      
    ></v-carousel-item>
  </v-carousel>

      <h1 style="margin-bottom:5%;margin-top:5%;">
        
        {{currcat}}

      </h1>
        </div>
<div v-else-if="currcat=='Accident'">
       <v-carousel
       :show-arrows="false"
       cycle ="3"
       max-width="300"
       >
    <v-carousel-item
      v-for="(item,i) in itemsrcacci"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      
    ></v-carousel-item>
  </v-carousel>

      <h1 style="margin-bottom:5%;margin-top:5%;">
        
        {{currcat}}

      </h1>
        </div>
        <div v-else-if="currcat=='Housework'">
       <v-carousel
       :show-arrows="false"
       cycle ="3"
       max-width="300"
       >
    <v-carousel-item
      v-for="(item,i) in itemsrchouse"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      
    ></v-carousel-item>
  </v-carousel>

      <h1 style="margin-bottom:5%;margin-top:5%;">
        
        {{currcat}}

      </h1>
        </div>
        <div v-else-if="currcat=='Find friends'">
       <v-carousel
       :show-arrows="false"
       cycle ="3"
       max-width="300"
       >
    <v-carousel-item
      v-for="(item,i) in itemsrcfind"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      
    ></v-carousel-item>
  </v-carousel>

      <h1 style="margin-bottom:5%;margin-top:5%;">
        
        {{currcat}}

      </h1>
        </div>
        <div v-else-if="currcat=='Food and home'">
       <v-carousel
       :show-arrows="false"
       cycle ="3"
       max-width="300"
       >
    <v-carousel-item
      v-for="(item,i) in itemsrcfood"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      
    ></v-carousel-item>
  </v-carousel>

      <h1 style="margin-bottom:5%;margin-top:5%;">
        
        {{currcat}}

      </h1>
        </div>
         <div v-else-if="currcat=='Traffic'">
       <v-carousel
       :show-arrows="false"
       cycle ="3"
       max-width="300"
       >
    <v-carousel-item
      v-for="(item,i) in itemsrctraf"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      
    ></v-carousel-item>
  </v-carousel>

      <h1 style="margin-bottom:5%;margin-top:5%;">
        
        {{currcat}}

      </h1>
        </div>


    </center>
    <v-row style=" margin-left: 5%; margin-right: 5%;">
      <v-col
        cols="12"
        md="3"
        style="padding-bottom: 2%;"
        v-for="(item, index) in quests"
        :key="index"
        :v-if="masseage"
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
      <v-col >
        <center>
          <div v-if="!masseage">
              <h1>
              There is no result  
              </h1> 
              <v-img
              :aspect-ratio="16/9"
              width="500"
              src="https://image.dek-d.com/27/0780/2231/128808139"
              >

              </v-img>







          </div>
        </center>
      </v-col>
      <div style="display:none"></div>
    </v-row>
    <center>
    <div class="page">
      <div class="bar">
 
        
        <a v-for="i in pagenum" :key="i" @click="changePage(i)" class="ggEz">{{i}}</a>
       
        <!-- <router-link to="/feed/2" class="button">2</router-link>
        <router-link to="/feed/3" class="button">3</router-link>
        <router-link to="/feed/4" class="button">4</router-link> -->
      
      </div>
    </div>
    </center>
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
    }
  },
  methods: {
    getquest: async function() {
      console.log('cat '+this.currcat)
      let a = await QuestService.getquest(this.currpage-1,this.currcat).then((res) => {
        return res;
      });
      if(a.pagenum<1){
        this.quests =[]
        this.pagenum = 0
        this.masseage = false
        return
      }
      else{
        this.masseage = true
        console.log('pagenum ='+a.pagenum);
        this.quests =[]
        this.quests = await a.quest;
        this.pagenum = await a.pagenum
      }
      
    },
    changePage(i){
      this.currpage = i   
      this.getquest()
    },
    changeCat(i){
     
      this.currpage = 1
      this.currcat = i
      this.getquest()
    },
    changeCatm(i){
      i = i.target.value
      this.currcat = i
      this.getquest()
    },
    getc(value){
      console.log(value);
    }
  },
  data() {
    return {
      quests: '',
      pagenum:'',
      currpage:'',
      currcat:'',
      masseage:'',
      items: ['News','Handicraft', 'Advice', 'Education','Accident','Housework','Find friend','Food and home','Traffic'],
      values: ['News','Handicraft', 'Advice', 'Education','Accident','Housework','Find friend','Food and home','Traffic'],
      value: null,
      colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      itemsrcedu: [
          {
            src: "https://cdn.pixabay.com/photo/2014/05/03/00/46/notebook-336634_1280.jpg",
          },
          {
           src: "https://cdn.pixabay.com/photo/2020/05/20/00/45/time-5193038_1280.jpg",
          },
          {
            src: "https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg",
          },
         
        ],
        itemsrchandi: [
        
          {
           src: "https://cdn.pixabay.com/photo/2021/02/13/10/04/biking-6011016_1280.jpg",
          },
            {
            src: "https://cdn.pixabay.com/photo/2015/02/13/16/32/papierschiff-635402_1280.jpg",
          },
          {
            src: "https://cdn.pixabay.com/photo/2018/03/18/12/11/wooden-3236586_1280.jpg",
          },
         
        ],
         itemsrcadvi: [
        
          {
           src: "https://cdn.pixabay.com/photo/2015/12/08/00/52/silhouettes-1082129_1280.jpg",
          },
            {
            src: "https://cdn.pixabay.com/photo/2018/07/25/08/58/business-3560917_1280.jpg",
          },
        ],
        itemsrcacci: [
         {
            src: "https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg",
          },
          {
           src: "https://cdn.pixabay.com/photo/2017/08/02/00/49/people-2569234_1280.jpg",
          },
            {
            src: "https://cdn.pixabay.com/photo/2016/02/18/22/18/picnic-1208229_1280.jpg",
          },
        ],
          itemsrchouse: [
         {
            src: "https://cdn.pixabay.com/photo/2018/07/01/13/29/clamp-3509512_1280.jpg",
          },
          {
           src: "https://cdn.pixabay.com/photo/2014/11/23/15/24/linen-542866_1280.jpg",
          },
            {
            src: "https://cdn.pixabay.com/photo/2013/08/18/04/05/bokeh-173588_1280.jpg",
          },
        ],
           itemsrcfind: [
                {
           src: "https://cdn.pixabay.com/photo/2017/03/19/10/49/friendship-2156174_1280.jpg",
          },
         {
            src: "https://cdn.pixabay.com/photo/2016/11/29/11/45/children-1869265_1280.jpg",
          },
       
            {
            src: "https://cdn.pixabay.com/photo/2016/11/08/05/10/students-1807505_1280.jpg",
          },
        ],
          itemsrcfood: [
                {
           src: "https://cdn.pixabay.com/photo/2017/07/30/23/59/garlic-2556022_1280.jpg",
          },
         {
            src: "https://cdn.pixabay.com/photo/2017/04/16/18/01/coffee-2235370_1280.jpg",
          },
       
            {
            src: "https://cdn.pixabay.com/photo/2016/09/04/18/51/food-1644858_1280.jpg",
          },
        ],
         itemsrctraf: [
                {
           src: "https://cdn.pixabay.com/photo/2018/08/17/10/04/traffic-3612474_1280.jpg",
          },
         {
            src: "https://cdn.pixabay.com/photo/2017/08/25/09/19/highway-2679490_1280.jpg",
          },
       
            
        ],

    };
  },
  created: async function() {
    this.currpage = 1
    this.currcat = undefined
    await this.getquest();
  },
  
};
</script>
<style scoped>

.s_btn{
padding: 6px;
font-size:18px;
background-color:white;
color: #73c2fb;
border-radius:5px ;
font-weight:200;
transition: .5s;
cursor: pointer;
}
.s_btn:hover{
transition: .5s;
background-color:#73c2fb;
color:white;

}
.page{
  width: 300px;
  text-align: center;
}
.bar{
  display:flex;
  justify-content: space-around;
}
</style>