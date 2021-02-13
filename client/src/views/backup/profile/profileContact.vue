<template>
  <div id="profileContact">
    <center>
      <v-divider></v-divider>
      <div style="margin-top:6%;font-size:22px;margin-bottom:5%;">
        <v-icon style="font-size:40px; color:black;">
          mdi-account-circle</v-icon
        >
        Contact
        <v-dialog v-if="editable" v-model="dialog" persistent width="500">
          <template v-slot:activator="{ on }">
            <i class="material-icons editbtn" v-on="on">border_color</i>
          </template>
          <ProfilePop
            infoName="Contact"
            :infoData="infoData"
            :infoKey="infoKey"
            @closeDialog="closeDialog"
            @Save="sendData"
          />
        </v-dialog>
      </div>

      <v-divider></v-divider>
    </center>

    <center>
      <div id="ct_section1">
        <div
          v-for="item in infoData"
          :key="item.index"
          style="margin-bottom:2%;"
        >
          <tr>
            <v-img
              v-if="item.con === 'facebook'"
              :width="35"
              src="Facebook_img_n2.webp"
              :aspect-ratio="1 / 1"
            ></v-img>
            <v-img
              v-else-if="item.con === 'line'"
              :width="35"
              src="Line_img_n1.webp"
              :aspect-ratio="1 / 1"
            ></v-img>
            <v-img
              v-else-if="item.con === 'tel'"
              :width="30"
              src="call_img_n1.png"
              :aspect-ratio="1 / 1"
            ></v-img>
            <v-img
              v-else-if="item.con === 'mail'"
              :width="30"
              src="Email_img_n2.jpg"
              :aspect-ratio="1 / 1"
            ></v-img>
            <v-img
              v-else
              :width="30"
              src="Email_img_n2.jpg"
              :aspect-ratio="1 / 1"
            ></v-img>
            <td>
              <span style="margin-left:20%;font-size:18px;">{{
                item.val
              }}</span>
            </td>
          </tr>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import profileService from "@/service/profileService";
import ProfilePop from "./profilePop";

export default {
  name: "ProfileContact",
  props: ["infoName", "infoSub", "infoLogo", "infoData", "infoKey", "editable"],
  components: { ProfilePop },
  methods: {
    sendData: async function() {
      if (this.infoData) {
        let formData = {};
        formData.contact = this.infoData;

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
