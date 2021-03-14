<template>
<div>
  <v-app id="inspire">
    <v-app-bar
      app
      color="white"
      flat
    >
      <v-tabs
        centered
        class="ml-n9"
        color="grey darken-1"
        
      >
        <v-tab
          v-for="link in links"
          :key="link"
          link
          :to="link.to"
         
        >
          {{ link.title }}
        </v-tab>
      </v-tabs>

  
    </v-app-bar>
    
  </v-app>
</div>

</template>

<script>
  export default {
    name : "navAdmin",
    data: () => ({
      links: [
        {title: "Feed", to: "/adminfeed"},
        {title: "Wating Approve", to: "/adminapprove"},
        {title: "Report", to: "/adminreport"},
        {title: "Dashboard", to: "/admindashboard"},
      ],
    }),
  }
</script>