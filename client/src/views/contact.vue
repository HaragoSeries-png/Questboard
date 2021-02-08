<template>
  <div id="contact">
    <v-dialog v-model="dialog" width="500" style="height:500; ">
      <template v-slot:activator="{ on }">
        <v-btn :class="{ 'show-btns': hover }" v-on="on">
          SHOW
        </v-btn>
      </template>
      <!-- Work AlertBox Here -->
      <v-card style="height: min-content;overflow:hidden;">
        <div style="padding-top:5%;">

        
       <div style="font-size:30px;display:flex;justify-content:center;text-align:center;">Complete</div>
        <v-divider></v-divider>
        <v-icon
        
        style="font-size:100px;display:flex;justify-content:center;"
        >
          mdi-domain
       </v-icon>
       <v-divider></v-divider>
       <div style="text-align:center;">
         This message show complete something.
       </div>
       <div style="color:gray;display:flex;justify-content:center;margin-top:2%;margin-bottom:5%;">
            something here
       </div>
      

       </div>
      </v-card>
      <!-- End of AlerBox -->
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "Contact",
  created() {
    this.$emit("setTitle", this.$options.name);
  },
  data() {
      return {
          dialog: false
      }
  },
};
</script>

<style>

</style>
