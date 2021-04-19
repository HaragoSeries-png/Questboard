<template>
  <div id="profileInfo">
    <h4 style="font-weight: bold">
      {{ infoName }}
      <v-dialog v-model="dialog" v-if="editable" persistent width="500">
        <template v-slot:activator="{ on }">
          <a v-on="on" style="float: right;">Edit</a>
        </template>
        <ProfilePop
          :infoName="infoName"
          :infoData="infoData"
          :infoKey="infoKey"
          @closeDialog="closeDialog"
          @Save="sendData"
          @reindex='reindex'
        />
      </v-dialog>
    </h4>
    <v-divider></v-divider>
    <slot></slot>
  </div>
</template>

<script>
import profileService from "@/service/profileService";
import ProfilePop from "./profilePop";

import Swal from "sweetalert2";

export default {
  name: "ProfileInfo",
  props: ["infoName", "infoData", "infoKey", "editable"],
  components: { ProfilePop },
  methods: {
    sendData: async function() {
      if (this.infoData) {
        let formData = {};
        console.log(JSON.stringify(this.infoData) + "pre data");
        
        if (this.infoName == "Skills") formData.skill = this.infoData;
        if (this.infoName == "Experience") formData.exp = this.infoData;
        // if (this.infoName == "Introduce") formData.desc = this.infoData;
        if (this.infoName == "Education") formData.education = this.infoData;
        console.log(this.infoData)
        console.log(formData.skill)
        let suc = await profileService.editprofile(formData).then((res) => {
          return res;
        });

        if (suc) {
          Swal.fire(
            "<alert-title>Complete!</alert-title>",
            "<alert-subtitle>Data Updated.</alert-subtitle>",
            "success"
          );
          this.$router.go();
        } else {
          Swal.fire(
            "<alert-title>Error!</alert-title>",
            "<alert-subtitle>Something wrong.</alert-subtitle>",
            "error"
          );
          this.$router.go();
        }
      } else {
        Swal.fire(
          "<alert-title>Error!</alert-title>",
          "<alert-subtitle>Data Missing.</alert-subtitle>",
          "error"
        );
        this.$router.go();
      }
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
