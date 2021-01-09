<template>

  <v-app id="inspire">
     <v-navigation-drawer 
     v-model="drawer" app   >
      <v-list-item>
        <v-list-item-content >
          <v-list-item-title  >
            <span style="font-size:20px;font-weight: bold;">Quest Board</span>
          </v-list-item-title>
          <v-list-item-subtitle>
            <span style="font-size:15px">project</span>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to = "item.to"
        >
          <v-list-item-icon >
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>







    <v-app-bar
      app
      absolute
      src="../../assets/rough-horn-2146181_1920.jpg"
      
    >
    <div class="ic">
     <i class="fa fa-bars" @click="drawer = !drawer" style="font-size:20px;color:white; margin-top:2%;" ></i>
    </div>
      <v-toolbar-title><span style="font-size:20px; position:absolute; margin-left:2%; margin-top:-0.5%; color:white;font-family: 'Hachi Maru Pop', cursive; font-weight: bold;"   >Quest Board</span></v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      
      drawer: null,
       items: [
          { title: 'Quest', icon: 'mdi-view-dashboard',to:'/feed' },
          { title: 'About Us', icon: 'mdi-account-group',to:'/aboutus' },
          { title: 'Contact', icon: 'mdi-android-messages',to:'/contact' },
          { title: 'Sign in', icon: 'mdi-login',to:'/login' },
          { title: 'Sign up', icon: 'mdi-book-account',to:'/signup' },
        ],
        right: null,
       }),}
</script>
<style scoped>
@import '../../styles/nav.css';

.ic{
  margin-top: 1%;
  border: 1px solid white;
  width: auto;
  height: auto;
  padding-left: 0.5% ;
  padding-right:0.5%;
  cursor: pointer;
}
.ic:hover{
  background-color: gray;
}


</style>

