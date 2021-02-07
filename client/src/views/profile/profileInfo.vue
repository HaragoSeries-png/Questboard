<template>
  <div id="profileInfo">
    <v-card min-height="300px" max-width="auto" max-height="auto" outlined>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <i class="material-icons">{{ infoLogo }}</i>
            &nbsp;
            <span style="font-size: 25px; font-weight: bold; font-family: Montserrat">
              {{ infoName }}
            </span>
          </v-list-item-title>
          <v-list-item-subtitle style="font-size: 16px">
            {{ infoSub }}
          </v-list-item-subtitle>
        </v-list-item-content>
        
        <v-list-item-action v-if="editable">
          <v-dialog v-model="dialog" persistent width="500">
            <template v-slot:activator="{ on }">
              <i class="material-icons editbtn" v-on="on">border_color</i>
            </template>
            <ProfilePop
              :infoName="infoName"
              :infoData="infoData"
              :infoKey="infoKey"
              @closeDialog="closeDialog"
              @Save="sendData"
            />
          </v-dialog>
        </v-list-item-action>
      </v-list-item>

      <v-divider></v-divider>
      <slot></slot>
    </v-card>
  </div>
</template>

<script>
import profileService from "@/service/profileService";
import ProfilePop from "./profilePop";

export default {
  name: "ProfileInfo",
  props: ["infoName", "infoSub", "infoLogo", "infoData", "infoKey", "editable"],
  components: { ProfilePop },
  methods: {
    sendData: async function() {
      if (this.infoData) {
        let formData = {};
        console.log(JSON.stringify(this.infoData) + "pre data");
        if (this.infoName == "Skill") formData.skill = this.infoData;
        if (this.infoName == "Experience") formData.exp = this.infoData;
        if (this.infoName == "Introduce") formData.desc = this.infoData;
        if (this.infoName == "Education") formData.education = this.infoData;

        let suc = await profileService.editprofile(formData).then((res) => {
          return res;
        });
        
        if (suc) this.$router.go();
        else alert("Edit Failed");
      } else alert("Data Missing.");
    },
    closeDialog() {
      this.dialog = false;
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style>
@import "../../styles/profile.css";

#profileInfo {
  padding-bottom: 5%;
}

.editbtn {
  font-size: 18px;
  color: gray;
  cursor: pointer;
}
</style>
