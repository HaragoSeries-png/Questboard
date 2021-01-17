<template>
  <div id="profile">
    <div class="w3-col m4  w3-center">
      <div class="container1">
        <v-container>
          <div id="wtf">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                :class="{ 'on-hover': hover }"
                class="rounded-circle mx-auto mt-6"
                max-width="300"
              >
                <v-img
                  class="rounded-circle mx-auto mt-6"
                  :aspect-ratio="1 / 1"
                  max-width="300"
                  :src="profilePic"
                  v-if="!url"
                  @click="chooseFiles"
                  id="upload_img"
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
                      <span id="text_upload">{{ text }}</span>
                    </v-btn>
                  </div>
                </v-img>
                <div class="preview">
                  <v-img
                    class="rounded-circle mx-auto mt-6"
                    :aspect-ratio="1 / 1"
                    max-width="300"
                    v-if="url"
                    :src="url"
                    @click="chooseFiles"
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
                        <span id="text_upload">Choose other image</span>
                      </v-btn>
                    </div>
                  </v-img>
                </div>

                <div style="display: none;">
                  <v-file-input
                    v-model="files"
                    @change="onFileChange"
                    id="fileUpload"
                  ></v-file-input>
                </div>
              </v-card>
            </v-hover>
            <div style="profileimg" v-if="url">
              <v-btn :class="{ 'show-btns': hover }" @click="sendim"
                >Save</v-btn
              >
              <v-btn :class="{ 'show-btns': hover }">Cancel</v-btn>
            </div>
          </div>
        </v-container>

        <div class="rate" id="star">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span>
        </div>
      </div>
    </div>

    <div class="w3-col m4  w3-center">
      <div class="container2">
        <div class="card2-name">{{ temp }}</div>

        <div class="card2-aboutself">
          <div class="w3-card w3-margin">
            <div
              class="w3-container w3-padding"
              style="background-color: #ececec;"
            >
              <h3 style="margin-right:100%;">Introduce</h3>
            </div>

            <div
              class="w3-container w3-white"
              style="width: 100%; padding-top: 2vh;"
            >
              <div
                style="text-align: left; list-style: none; padding-bottom: 2%;"
              >
                Mauris neque quam, fermentum ut nisl vitae, convallis maximus
                nisl. Sed mattis nunc id lorem euismod placerat. Vivamus
                porttitor magna enim, ac accumsan tortor cursus at. Phasellus
                sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                tellus ut rutrum. Sed vitae justo condimentum, porta lectus
                vitae, ultricies congue gravida diam non fringilla
              </div>
            </div>
          </div>
        </div>

        <div class="card2-education">
          <div class="w3-card w3-margin">
            <div
              class="w3-container w3-padding"
              style="background-color: #ececec;"
            >
              <h3 style="margin-right:100%;">Education</h3>
            </div>

            <div
              class="w3-container w3-white"
              style="width: 100%; padding-top: 2vh;"
            >
              <div
                style="text-align: left; list-style: none; padding-bottom: 2%;"
              >
                <h4><b>Oxford-University</b></h4>
                <h5><span class="w3-opacity"> Jan 2000 - Feb 2001</span></h5>
                <li>Department of mathematic</li>

                <h4><b>Cambridge-University</b></h4>
                <h5><span class="w3-opacity"> Jan 2002 - Feb 2003</span></h5>
                <li>Department of science</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w3-col m4 w3-center">
      <div class="container3">
        <div class="card3-skill">
          <div class="w3-card w3-margin">
            <div
              class="w3-container w3-padding"
              style="background-color: #ececec;"
            >
              <h3 style="margin-right:100%;">Skills</h3>
            </div>

            <div
              class="w3-container w3-white"
              style="width: 100%; padding-top: 2vh;"
            >
              <p style="text-align: left; padding-top: 2%;">
                <on class="w3-button w3-padding-small w3-blue w3-border">
                  <span style="font-size: 20px;" class="glyphicon"
                    >&#xe081;</span
                  ></on
                >
              </p>
            </div>
          </div>
        </div>

        <div class="card3-experience">
          <div class="w3-card w3-margin">
            <div
              class="w3-container w3-padding"
              style="background-color: #ececec;"
            >
              <h3 style="margin-right:100%;">Experience</h3>
            </div>

            <div
              class="w3-container w3-white"
              style="width: 100%; padding-top: 2vh;"
            >
              <div>
                A:
                {{ profile.infoma.proimage }}
              </div>
              <div>
                B:
                {{ profile }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profileService from "../service/profileservice";

export default {
  name: "Profile",
  methods: {
    add() {
      this.$store.dispatch("set");
    },
    getinfoma: async function() {
      console.log("gett");
      let re = await profileService.getprofile().then((res) => {
        return res;
      });
      console.log("dadsaaaaaaa" + re);
      this.profile = re.user;
      console.log(re.user);
    },
  },
  created: async function() {
    await this.getinfoma();
    this.profilePic = "http://localhost:5000/" + this.profile.infoma.proimage;

    let usertitle = this.profile.infoma.firstname;
    if (usertitle) this.$emit("setTitle", usertitle + "'s Profile");
    else this.$emit("setTitle", this.$options.name);
  },
  data() {
    return {
      transparent: "rgba(255, 255, 255, 0)",
      files: null,
      profilePic: "",
      url: "",
      profile: "",
      text: "Upload",
    };
  },
};
</script>

<style scoped>
@import "../styles/profile.css";
</style>
<style scoped>
.v-text-field {
  width: 450px;
}
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card:hover {
  opacity: 0.6;
}
.show-btns {
  color: black !important;
}
#upload_img:hover {
  background: #ececec;
  z-index: 3;
  max-width: 300px;
}
.container1 {
  margin: 2%;
  width: 100%;
  height: 100vh;
  background-color: #82b340;
  border: 4px solid white;
}
.container2 {
  margin: 2%;
  width: 100%;
  height: auto;
  background-color: #ececec;
  border: 4px solid white;
}
.container3 {
  margin: 2%;
  width: 100%;
  height: 100vh;
  background-color: #ececec;
  border: 4px solid white;
}
.card1-pic {
  width: 100%;
  justify-items: center;
}
img {
  width: 250px;
  border-radius: 50%;
  margin-top: 30%;
}
.rate {
  margin-top: 10%;
  font-size: 20px;
}
.card2-name {
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  padding-top: 10vh;
  padding-right: 30vh;
}
.card3-skill {
  width: 100%;
  height: 20vh;
  margin-top: 10%;
}
#text_upload {
  font-size: 20px;
}
.card2-education {
  margin-top: 10%;
  padding-bottom: 5%;
}
.card3-experience {
  margin-top: 20%;
}

@media screen and (max-width: 2560px) {
  #wtf {
    margin-left: -30%;
  }
  #star {
    margin-left: 1%;
  }
}

@media screen and (max-width: 1440px) {
  #wtf {
    margin-left: -65%;
  }
  #star {
    margin-left: -3%;
  }
}
@media screen and (max-width: 1024px) {
  #wtf {
    margin-left: -67%;
  }
}

@media screen and (max-width: 768px) {
  #wtf .v-card {
    width: 200px;
  }
  #wtf {
    margin-left: -70%;
  }
}

@media screen and (max-width: 320px) {
  #wtf {
    margin-left: 0%;
  }
  #wtf .v-card {
    width: 200px;
  }
}
</style>
