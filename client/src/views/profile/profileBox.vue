<template>
  <div id="profileBox">
    <center>
      <div style="padding: 16px;">
        <v-hover v-slot="{ hover }" v-if="editable">
          <v-img
            style="margin-top:3%;"
            full-width
            width="400"
            height="300"
            :src="profilePic"
            @click="uploadimg"
          >
            <div class="align-self-center">
              <v-btn
                class="rounded-circle"
                :class="{ 'show-btns': hover }"
                icon
                style="height:250px"
                color="transparent"
                x-large
                width="250"
              >
                <div id="ggf">
                  {{ texthover }}
                </div>
                <v-icon>
                  mdi-upload
                </v-icon>
              </v-btn>
            </div>
          </v-img>
        </v-hover>
        <v-img
          v-else
          class="rounded-circle"
          :aspect-ratio="1 / 1"
          max-width="250"
          :src="profilePic"
          width:auto
          height:auto
          style="border:1px solid black"
        >
        </v-img>
        <div style="display: none;">
          <v-file-input
            v-model="files"
            @change="onFileChange"
            id="fileUpload"
          ></v-file-input>
        </div>

        <div style="margin-top:5%;" v-if="files">
          <v-btn :class="{ 'show-btns': hover }" @click="sendim">Save</v-btn>
          &nbsp;
          <v-btn :class="{ 'show-btns': hover }" style="margin-left:2%"
            >Cancel</v-btn
          >
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import profileService from "@/service/profileService";

import Swal from "sweetalert2";

export default {
  name: "Profile-Box",
  props: ["profilePic", "editable"],
  methods: {
    uploadimg() {
      document.getElementById("fileUpload").click();
    },
    onFileChange() {
      if (this.files != null) {
        console.log('choose')
        const file = this.files;
        this.profilePic = URL.createObjectURL(file);
        this.picHoverText = "Choose Another";
      }
    },
    sendim: async function() {
      console.log("SENDIMG");
      if (this.files) {
        let formData = new FormData();
        formData.append("image", this.files);

        let suc = await profileService.uploadimg(formData).then((res) => {
          return res;
        });
        if (suc) {
          Swal.fire(
            "<alert-title>Complete!</alert-title>",
            "<alert-subtitle>Data Updated.</alert-subtitle>",
            "success"
          );
          this.$router.go()
        } else {
          Swal.fire(
            "<alert-title>Error!</alert-title>",
            "<alert-subtitle>Something wrong.</alert-subtitle>",
            "error"
          );
        }
      } else {
        Swal.fire(
          "<alert-title>Error!</alert-title>",
          "<alert-subtitle>Data Missing.</alert-subtitle>",
          "error"
        );
      }
    },
  },
  data() {
    return {
      picHoverText: "Upload",
      files: null,
      texthover: "Upload",
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
  color: rgb(0, 0, 0) !important;
  background-color: rgba(177, 177, 177, 0.404);
  size: inherit;
}

#upload_img:hover {
  background: #ececec;
  z-index: 3;
  max-width: 300px;
}
#ggf {
  font-family: "Xanh Mono", monospace;
  font-size: 15px;
}
@import url(https://fonts.googleapis.com/css2?family=Xanh+Mono:ital@1&display=swap);
</style>
