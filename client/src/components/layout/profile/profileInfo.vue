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

        <v-list-item-action>
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on }">
              <i class="material-icons editbtn" v-on="on">border_color</i>
            </template>
            <ProfilePop :infoName="infoName" :infoData="infoData" />
          </v-dialog>
        </v-list-item-action>
      </v-list-item>

      <v-divider></v-divider>
      <slot></slot>
    </v-card>
  </div>
</template>

<script>
import ProfilePop from "../profile/profilePop";

export default {
  name: "ProfileInfo",
  props: ["infoName", "infoSub", "infoLogo", "infoData", "infoAttribute"],
  components: { ProfilePop },
};
</script>

<style scoped>
@import "../../../styles/profile.css";

#profileInfo {
  padding-bottom: 5%;
}

.editbtn {
  font-size: 18px;
  color: gray;
  cursor: pointer;
}
</style>
