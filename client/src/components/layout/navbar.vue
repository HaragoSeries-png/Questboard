<template>
  <div id="navbar">
    <!-- Navbar Side -->
    <v-navigation-drawer
      v-model="drawer"
      app
      style="border-right: 1px solid black;background-color:#2e292a"
    
    >
    <center>
    
      <div>
      
          <div
            style="font-family: 'Maven Pro', sans-serif; font-size: 23px; margin-top: 10%"
          >
            <v-icon    @click="drawer = !drawer" x-large style="color:#ffc76e"  >
        mdi-arrow-left-bold-circle-outline
      </v-icon>


            <span style="text-decoration: underline;padding-left:1%; " class="c_font"
              >Quest Board</span
            >
          </div>
        
      </div>
      </center>
      <v-divider></v-divider>

      <div id="profileTab" v-if="$store.getters.isLoggedIn">
        <div class="profileInfo">
          <span style="color:#ffc76e;">Welcome</span>
          <br />
          <span style="font-size: 14px" class="c_font">{{
            this.$store.getters.getfullname
          }}</span>
          <br />
          <router-link
            :to="'/profile/id/' + this.$store.getters.getuserid"
            style="font-size: 12px; color: orange"
            >View your profile</router-link
          >
        </div>
        <v-divider></v-divider>
      </div>

      <div id="comitems">
        <v-list dense app>
          <v-list-item
            v-for="item in allow"
            :key="item.title"
            link
            :to="item.to"
            color="#FF598F"
            class="on_hover"
          >
            <v-list-item-icon>
              <div class="titlefont"   >
                <v-icon style="color:#ffc76e">{{ item.icon }}</v-icon>
              </div>
            </v-list-item-icon>

            <v-list-item-content>
              <div class="titlefont c_font ">
                {{ item.title }}
              </div>
            </v-list-item-content>
          </v-list-item>

        <div v-if="status">
        <v-list-group
        :value="true"
        color="#FF598F"
        
      >
        <template v-slot:activator >
          <v-list-item-content>
            <div class="titlefont c_font">
              <v-icon style="color:#ffc76e;padding-right:27px;" >mdi-account-circle</v-icon>
            Quest</div>
            </v-list-item-content>
        </template>
          <v-list-item
            v-for="item in quest"
            color="#FF598F"
            :key="item.title"
            link
            :to="item.to"
            style="padding-left:20%;"
            class="on_hover"
          >
          
             <v-list-item-icon >
              <v-icon size=20 style="color:#ffc76e"   >{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content style="font-size:11px;font-weight:bold;" class="c_font"  >
              {{item.title}}
            </v-list-item-content>
          
         
          </v-list-item>
      
        </v-list-group>


        </div>



       <v-list-item
            v-for="item in allow2"
            :key="item.title"
            link
            :to="item.to"
            color="#FF598F"
            class="on_hover"
          >
            <v-list-item-icon>
              <div>
                <v-icon style="color:#ffc76e">{{ item.icon }}</v-icon>
              </div>
            </v-list-item-icon>

            <v-list-item-content>
              <div class="titlefont   c_font "  style="color:#ffc76e;"  >
                {{ item.title }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
      </div>

      <div id="unlogitems" v-if="status">
        <v-list dense app>
          <v-list-item
            v-for="item in logitems"
            :key="item.title"
            link
            :to="item.to"
            color="#FF598F"
            class="on_hover"
          >
            <v-list-item-icon>
              <div class="titlefont">
                <v-icon  style="color:#ffc76e">{{ item.icon }}</v-icon>
              </div>
            </v-list-item-icon>

            <v-list-item-content>
              <div class="titlefont  c_font"   >
                {{ item.title }}
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link :to="getuserLink()" color="#FF598F"   class="on_hover">
            <v-list-item-icon>
              <div class="titlefont">
                <v-icon  style="color:#ffc76e" >mdi-login</v-icon>
              </div>
            </v-list-item-icon>

            <v-list-item-content>
              <div class="titlefont c_font">
                Profile
              </div>
            </v-list-item-content>
          </v-list-item>

          <v-list-item @click="logout"    class="on_hover">                          
            <v-list-item-icon>
              <div class="titlefont">
                <v-icon style="color: red">mdi-login</v-icon>
              </div>
            </v-list-item-icon>

            <v-list-item-content>
              <div class="titlefont" style="color: red">
                Log Out
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
        


        
      <div id="loginitems" v-else>
        <v-list dense app>
          <v-list-item
            v-for="item in unlogitems"
            :key="item.title"
            link
            :to="item.to"
            color="#FF598F"
            class="on_hover"
          >
            <v-list-item-icon>
              <div class="titlefont"  style="color:#ffc76e;">
                <v-icon   style="color:#ffc76e;"  >{{ item.icon }}</v-icon>
              </div>
            </v-list-item-icon>

            <v-list-item-content>
              <div class="titlefont"  style="color:#ffc76e;"  >
                {{ item.title }}
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      
    </v-navigation-drawer>

    <!-- Navbar-Top -->
    <v-app-bar
      app
      dark
      color="white"
      full-width
    >
      <!-- backgroud color -->
  

      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        style="margin-left:0.5%;"
        color="pink"
      ></v-app-bar-nav-icon>

      <v-toolbar-title
        ><span style="font-size: 20px; font-family: 'Merriweather', serif;color:black;"
          >Quest Board</span
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>
      
  <notibut></notibut>
        <!-- <div id="loginitems" v-if="status">
     <v-menu offset-y :nudge-width="200"  >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="#FF598F"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            mdi-bell
          </v-icon>
        </v-btn>
      </template>
      <v-list>
       <div style="text-align:center;font-weight:bold;font-size:13px;padding-top:2%;">
              Notification
       </div>
       <v-divider></v-divider>
        <v-list-item
          v-for="(item, index) in fake_noti"
          :key="index"
        >
      
          <v-list-item-title>{{ item.title }}   </v-list-item-title>
    
        </v-list-item>
             
      </v-list>
    </v-menu> 
        </div> -->
      
     


    
  
    </v-app-bar>

  </div>
</template>

<script>
import notibut from './notibut'
import authService from "@/service/authService";
export default {
  name: "Navbar",
  components:{
    notibut
    
  },
  methods: {
    getuserLink() {
      return '/profile/id/' + this.$store.getters.getuserid
    },
    linkProfile() {
      let profileLink = '/profile/id/' + this.$store.getters.getuserid
      this.$router.push({path: profileLink})
    },
    logout: async function() {
      let re  = await authService.logout().then(res =>{return res});
      if(re){
        let r = this.$store.dispatch("deluser");
        if(r){
          this.$router.push({ path: "/login" });
          this.$router.go()
        }       
      }  
      else{
        alert('something wong')
      }  
    },
  },
  updated() {
    this.status = this.$store.getters.isLoggedIn;
    this.username = this.$store.getters.getfullname;
    
  },
  data() {
    return {
      allow: [
        { title: "Quest Board", icon: "mdi-view-dashboard", to: "/feed" },
      ],
      allow2: [
        { title: "About", icon: "mdi-account-group", to: "/aboutus" },
        { title: "Contact", icon: "mdi-message-draw", to: "/contact" },
      ],
      unlogitems: [
        { title: "Log in", icon: "mdi-login", to: "/login" },
        { title: "Sign up", icon: "mdi-book-account", to: "/signup" },
      ],
      logitems: [],
      sub_myquest: [
        { title: "Inprogress", icon: "mdi-account-clock", to: "/mqinprogress" },
        { title: "Waiting", icon: "mdi-account-search", to: "/mq_waiting" },
        {
          title: "Pending",
          icon: "mdi-account-arrow-right",
          to: "/mq_pending",
        },
        { title: "Create Quest", icon: "mdi-book-plus", to: "/Createquest2" },
        { title: "Complete", icon: "mdi-book-check", to: "/mq_complete" },
      ],
      quest: [
        { title :'My Quest', icon : 'mdi-account-multiple-outline',to:'/myquest'},
        { title :'My Work', icon: 'mdi-cog-outline',to:"/mywork"}
      ],
      fake_noti :[
        {title : 'detail1'},
        {title : 'detail2'},
   
      ],
     
      status: this.$store.getters.isLoggedIn,
      drawer: false,
      username: this.$store.getters.getfullname,
      notiicon : 'alarm-light-outline'
    };
  },
};
</script>

<style scoped>
@import "../../styles/nav.css";
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap");

body {
  font-family: "Maven Pro";
}

.titlefont {
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.profileInfo {
  font-family: "Montserrat", sans-serif;
  margin-left: 10%;
}

.titlefont {
  font-size: 14px;
}
.sub_font {
  font-size: 10px;
}
.c_font{
  color:#ffc76e;
}

.on_hover:hover{
  background-color:rgba(  246,162,209,0.4);
}


</style>
