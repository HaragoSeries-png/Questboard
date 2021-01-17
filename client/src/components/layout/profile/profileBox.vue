<template>
  <div id="profileBox">
    <center>
      <div>
        <v-img
          class="rounded-circle"
          :aspect-ratio="1 / 1"
          max-width="250"
          :src="profilePic"
          width:auto
          height:auto
          @click="uploadimg"
        >
          <div class="align-self-center">
            <v-btn
              :class="{ 'show-btns': hover }"
              icon
              style="position : absolute; margin-top:45%;z-index:5;margin-left:-5%"
            >
              <v-icon :class="{ 'show-btns': hover }">
                mdi-upload
              </v-icon>
              <span id="text_upload">{{ picHoverText }}</span>
            </v-btn>
          </div>
        </v-img>

        <div style="display: none;">
          <v-file-input
            v-model="files"
            @change="onFileChange"
            id="fileUpload"
          ></v-file-input>
        </div>

        <div style="profileimg" v-if="files">
          <v-btn :class="{ 'show-btns': hover }" @click="sendim">Save</v-btn>
          &nbsp;
          <v-btn :class="{ 'show-btns': hover }">Cancel</v-btn>
        </div>
      </div>

      <h3 id="ratio">{{ profileName }}</h3>
      <v-rating
        v-model="profileRate"
        background-color="red lighten-3"
        color="red"
        size="30"
        style="margin-top:7%;"
      ></v-rating>
    </center>
  </div>
</template>

<script>
import profileService from "@/service/profileservice"

export default {
  name: "Profile-Box",
  props: ["profileName", "profilePic", "profileRate"],
  methods: {
    uploadimg() {
      document.getElementById("fileUpload").click();
    },
    onFileChange() {
      if (this.files != null) {
        const file = this.files;
        this.profilePic = URL.createObjectURL(file);
        this.picHoverText = "Choose Another";
      }
    },
    sendim: async function() {
      if (this.files) {
        let formData = new FormData();
        formData.append("image", this.files);

        let suc = await profileService.uploadimg(formData).then((res) => {
          return res;
        });
        if (suc) this.$router.push({ path: "/feed" });
        else alert("Upload Failed");
      } else alert("File Missing.");
    },
  },
  data() {
    return {
      picHoverText: "Upload",
      files: null,
    };
  },
};
</script>

<style scoped>
body {
  height: 100vh;
}

#ratio {
  margin-top: 10%;
  font-size: 30px;
  font-family: "Inconsolata", monospace;
  border-bottom: 2px solid currentColor;
  display: inline-block;
  line-height: 0.85;
  text-shadow: 2px 2px white, 2px -2px white, -2px 2px white, -2px -2px white;
}

#text_upload {
  font-size: 20px;
}

.show-btns {
  color: black !important;
}

#upload_img:hover {
  background: #ececec;
  z-index: 3;
  max-width: 300px;
}
</style>
