<template>
  <div id="profileInfo">
    <v-card max-width="auto" max-height="auto" outlined>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <i class="material-icons">{{ infoLogo }}</i>
            &nbsp;
            <span style="font-size: 25px; font-weight: bold">{{
              infoName
            }}</span>
          </v-list-item-title>
          <v-list-item-subtitle style="font-size: 16px">{{
            infoSub
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <slot></slot>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ProfileInfo",
  props: ["infoName", "infoSub", "infoLogo", "infoData"],
};
</script>

<style scoped>
#profileInfo {
  padding-bottom: 5%;
}
</style>
