<template>
  <div id="contact">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn :class="{ 'show-btns': hover }" v-on="on">
          SHOW
        </v-btn>
      </template>
      <!-- Work AlertBox Here -->
      <v-card>
        Complete
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
