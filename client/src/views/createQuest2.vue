<template>
  <v-app>
    <div id="main" style="margin:20px;">
      <v-container>
        <!-- <div class="main"> -->

        <div id="questcreate">
          <h1 style="text-align:center;">
            Create you own quest
          </h1>
          <v-divider></v-divider>
          <v-container fluid>
            <v-row>
              <v-col cols="12" md="12" class="section1">
                <center>
                  <div>
                    <v-hover v-slot="{ hover }">
                      <v-img
                        v-if="!url"
                        contain
                        full-width
                        height="400"
                        src="https://cdn.pixabay.com/photo/2012/04/14/16/57/scroll-34606_1280.png"
                        id="quest_img"
                        @click="chooseFiles()"
                      >
                        <v-card :class="{ 'on-hover': hover }">
                          <div style="margin-top:18%;margin-left:42%;" contain>
                            <v-row
                              class="fill-height flex-column"
                              justify="space-between"
                            >
                              <div
                                style="position:absolute; opacity:0.6; border-radius: 10px;"
                              >
                                <span
                                  :class="{ 'show-btns': hover }"
                                  :color="transparent"
                                  style="font-size:30px;"
                                >
                                  {{ sometext }}
                                </span>

                                <div
                                  class="align-self-center"
                                  style="display:inline;"
                                >
                                  <v-btn
                                    :class="{ 'show-btns': hover }"
                                    :color="transparent"
                                    icon
                                    large
                                  >
                                    <v-icon
                                      :class="{ 'show-btns': hover }"
                                      :color="transparent"
                                    >
                                      {{ icon }}
                                    </v-icon>
                                  </v-btn>
                                </div>
                              </div>
                            </v-row>
                          </div>
                        </v-card>
                      </v-img>
                    </v-hover>

                    <div id="preview">
                      <v-hover v-slot="{ hover }" style="cursor:pointer;">
                        <v-img
                          v-if="url"
                          :src="url"
                          contain
                          width="1680"
                          height="300"
                          size="300"
                          @click="chooseFiles()"
                        >
                          <v-card :class="{ 'on-hover': hover }">
                            <div style="margin-top:12%;margin-left:45%;">
                              <v-card-title
                                style="position:absolute; opacity:0.6; border-radius: 10px;"
                              >
                                <v-row
                                  class="fill-height flex-column"
                                  justify="space-between"
                                >
                                  <div>
                                    <span
                                      :class="{ 'show-btns': hover }"
                                      :color="transparent"
                                      style="font-size:20px; background-color:#ececec;"
                                    >
                                      {{ sometext1 }}
                                    </span>

                                    <div
                                      class="align-self-center"
                                      style="display:inline;"
                                    >
                                      <v-btn
                                        :class="{ 'show-btns': hover }"
                                        :color="transparent"
                                        icon
                                      >
                                        <v-icon
                                          :class="{ 'show-btns': hover }"
                                          color="white;"
                                          style="border-redius:2px;backgrond-color:#ececec"
                                        >
                                          {{ icon }}
                                        </v-icon>
                                      </v-btn>
                                    </div>
                                  </div>
                                </v-row>
                              </v-card-title>
                            </div>
                          </v-card>
                        </v-img>
                      </v-hover>
                    </div>
                    <div style="display: none;">
                      <v-file-input
                        v-model="files"
                        @change="onFileChange"
                        id="fileUpload"
                      ></v-file-input>
                    </div>
                  </div>
                  <v-divider></v-divider>
                </center>
              </v-col>

              <v-col cols="12" md="6" lg="6">
                <div class="text-fill">
                  <div>
                   <div class="head123">
                     Info.
                   </div>
                    <tr>
                      <span id="q1"> Quest</span>
                      <td>
                        <v-text-field
                          style="margin-bottom:10%; "
                          id="iq"
                          :rules="rules"
                          counter="25"
                          hint="Baby sister,Tutor "
                          label="Quest name"
                          v-model="questname"
                        ></v-text-field>
                      </td>
                    </tr>

                    <tr>
                      <span id="c1">Category</span>
                      <td>
                        <v-select
                          :items="items"
                          id="ic"
                          label="Default"
                          style="margin-bottom:3%;"
                          dense
                          v-model="category"
                        ></v-select>
                      </td>
                    </tr>
                    <tr>
                      <span id="q1"> Reward</span>
                      <td>
                        <v-text-field
                          style="margin-bottom:10%;"
                          id="iq"
                          :rules="rules"
                          counter="55"
                          label="Prize for your helper"
                          v-model="reward"
                        ></v-text-field>
                      </td>
                    </tr>

                    <tr id="noob">
                      <span id="d1">Details</span>
                      <td>
                        <v-textarea
                          v-model="detail"
                          color="teal"
                          dense
                          contain
                          textarea
                        >
                          <template v-slot:label>
                            <div>
                              More information <small>(optional)</small>
                            </div>
                          </template>
                        </v-textarea>
                      </td>
                    </tr>
                  </div>
                </div>
              </v-col>

              <div class="text-fill1">
                <v-col cols="12" md="6" lg="6">
                  <tr>
                    <span id="Deadline"> Deadline </span>
                    <td></td>
                  </tr>

                  <tr>
                    <span id="Date" style="margin-top:10%;"> Date : </span>
                    <td>
                      <input
                        type="date"
                        name=""
                        id="I_date"
                        v-model="duedate"
                        style="margin-bottom:10%;"
                      />
                    </td>
                  </tr>

                  <tr>
                    <span id="Start"> Start : </span>
                    <td>
                      <input
                        type="time"
                        name=""
                        id="I_start"
                        v-model="tstart"
                        style="margin-bottom:10%; border-top:1px solid white; border-left:1px solid white; border-right:1px solid white;  "
                      />
                    </td>
                  </tr>

                  <tr>
                    <span id="End"> End : </span>
                    <td>
                      <input
                        type="time"
                        name=""
                        id="I_end"
                        v-model="tend"
                        style="margin-bottom:10%;    border-top:1px solid white; border-left:1px solid white; border-right:1px solid white;"
                      />
                    </td>
                  </tr>

                  <tr id="main_Person">
                    <i class="material-icons">person</i>
                    <td>
                      <input
                        type="number"
                        min="0"
                        name=""
                        id="num_per"
                        v-model="numberofcon"
                        style=" border-top:1px solid white; border-left:1px solid white; border-right:1px solid white;"
                      />
                      <span style="margin-left:10%;">Person</span>
                    </td>
                  </tr>
                  <center>
                  <v-btn
                    color="white "
                    text
                    style="font-size:20px; background-color:#558b2f;margin-top:20%;"
                    @click="sendquest"
                  >
                    Create your quest
                  </v-btn>
                  </center>
                </v-col>
              </div>
            </v-row>
          </v-container>
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import QuestService from "@/service/questService";
export default {
  name: "Create Quest",
  created() {
    this.$emit("setTitle", this.$options.name);
  },
  data() {
    return {
      icon: "mdi-upload",
      items: ["Crafter", "House worker", "Handicup", "Etc"],
      Pic1: "https://pbs.twimg.com/media/EBBMoBNU4AA2DXn.jpg",
      files: null,
      url: "",
      questname: "",
      category: "",
      datail: "",
      reward: "",
      tstart: "",
      tend: "",
      numberofcon: 1,
      duedate: "",
      sometext: "Upload file",
      sometext1: "Change file",
      transparent: "rgba(255, 255, 255, 0)",
    };
  },
  methods: {
    onFileChange() {
      if (this.files != null) {
        const file = this.files;
        console.log(file);
        this.url = URL.createObjectURL(file);
      }
    },
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    sendquest: async function() {
      let formData = new FormData();

      // files
      formData.append("image", this.files);

      // additional data
      formData.append("questname", this.questname);
      formData.append("category", this.category);
      formData.append("questdetail", this.detail);
      formData.append("reward", this.reward);
      formData.append("tstart", this.tstart);
      formData.append("tend", this.tend);
      formData.append("duedate", this.duedate);
      console.log(formData.get("questdatail"));
      let suc = await QuestService.createquest(formData).then((res) => {
        return res.suc;
      });
      console.log("logsuc" + suc);

      if (suc) this.$router.push({ path: "/feed" });
      else alert("fail");
    },
  },
};
</script>

<style scoped>
.pictureQuest img {
  width: 400px;
  height: 200px;
  margin-top: 2vh;
  justify-content: center;
}
.pictureQuest {
  justify-items: center;
}
.text-fill {
  margin-top: 1%;
  margin-left: 5%;
}
.text-fill1 {
  margin-left: 5%;
}
#noob .v-textarea {
  width: 300px;
}

td {
  margin-top: 20%;
}
/* .text-fill table td,tr{
    border: 1px solid black;
} */
.v-text-field {
  margin-left: 4%;
  width: 200px;
  height: 50px;
  font: 20px;
}

.v-textarea {
  width: 400px;
  height: 200px;
}
.v-text-field input {
  font-size: 80px;
}

#reward {
  margin-bottom: 20px;
  font-size: 18px;
}
#Deadline {
  font-size: 25px;
  padding-top: 30px;
  color: black;
  text-decoration: underline;
  margin-bottom: 10%;
}
.head123{
font-size: 25px;
color: black;
text-decoration: underline;
}
.main {
  width: 100%;
  align-content: center;
}
#I_date {
  margin-left: 7px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
}
#Start {
  font-size: 18px;
}
#End {
  font-size: 18px;
}
#foot {
  font-family: "Redressed", cursive;
  font-size: 20px;
  margin-top: 5%;
}
#Date {
  font-size: 18px;
}
#head {
  text-decoration: underline;
  font-family: "Source Sans Pro", sans-serif;
  letter-spacing: 1px;
  font-size: 30px;
}
#I_start {
  margin-left: 7px;
  margin-top: 5px;
  border: 1px solid black;
  border-radius: 8%;
  margin-bottom: 10px;
}
#I_end {
  margin-left: 7px;
  margin-top: 5px;
  border: 1px solid black;
  border-radius: 8%;
  margin-bottom: 10px;
}
/* .text-fill table tr,td{
    border: 1px solid black;
} */
#num_per {
  margin-top: 5px;
  margin-left: 7px;
  border: 1px solid black;
  width: 50px;
  padding-left: 10px;
  margin-bottom: 10px;
}
#q1 {
  font-size: 18px;
  text-align: left;
}

#c1 {
  font-size: 18px;
  text-align: left;
}
#d1 {
  font-size: 18px;
  text-align: left;
}
#iq {
  margin-bottom: 5;
}

.v-card {
  transition: opacity 0.4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0;
}
#quest_img {
  cursor: pointer;
}
.show-btns {
  color: rgb(0, 0, 0) !important;
}

@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
</style>
