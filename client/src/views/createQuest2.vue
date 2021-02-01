<template>
  <v-app>
    <div id="main" style="margin:20px;">
      <v-container>
        <!-- <div class="main"> -->

        <div id="questcreate">
          <v-container style="height:100%;">
            <v-row>
              <v-col cols="12" md="6" class="section1">
                <center>
                  <h2 id="head">WANTED</h2>

                  <div
                    class="d-flex flex-column justify-space-between align-center"
                  >
                    <v-hover v-slot="{ hover }">
                  
                        <v-img
                          v-if="!url"
                          height="250"
                          width="350"
                          src="bg_create_text.jpg"
                          id="quest_img"
                          @click="chooseFiles()"
                        >
                          <v-card :class="{ 'on-hover': hover }">
                          <div style="margin-top:35%;margin-left:35%;">
                            <v-row
                              class="fill-height flex-column"
                              justify="space-between"
                            >
                              <div style="position:absolute; opacity:0.6; border-radius: 10px;" >
                                <span
                                  :class="{ 'show-btns': hover }"
                                  :color="transparent"
                                  style="font-size:20px;"
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
                        height="250"
                        width="250"
                        @click="chooseFiles()"
                      >
                     
                      <v-card :class="{ 'on-hover': hover }">
                      <v-card-title style="margin-top:83%; background-color:#ececec"  >
                            <v-row
                              class="fill-height flex-column"
                              justify="space-between"
                            >
                              <div   >
                                <span
                                  :class="{ 'show-btns': hover }"
                                  :color="transparent"
                                  style="font-size:20px;"
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
                                      :color="transparent"
                                    >
                                      {{ icon }}
                                    </v-icon>
                                  </v-btn>
                                </div>
                              </div>
                            </v-row>
                          </v-card-title>
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
                </center>

                <center>
                  <v-divider></v-divider>
                  <div class="text-fill">
                    <div>
                      <table>
                        <tr>
                          <span id="Deadline"> Deadline </span>
                          <td></td>
                        </tr>

                        <tr>
                          <span id="Date"> Date : </span>
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
                      </table>
                    </div>
                  </div>
                </center>
              </v-col>

              <v-col cols="12" md="6">
                <div class="section2">
                  <center>
                    <div>
                      <tr>
                        <span id="q1"> Quest</span>
                        <td>
                          <v-text-field
                            style="margin-bottom:10%;margin-left:-40%; "
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
                            style="margin-bottom:10%;margin-left:-40%"
                            dense
                            v-model="category"
                          ></v-select>
                        </td>
                      </tr>
                      <tr>
                        <span id="q1"> Reward</span>
                        <td>
                          <v-text-field
                            style="margin-bottom:10%;margin-left:-40%;"
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
                            label="More information about quest"
                            counter
                            maxlength="120"
                            filled
                            id="id"
                          ></v-textarea>
                        </td>
                      </tr>
                    </div>
                  </center>
                </div>
                <center>
                  <v-btn id="btn" x-medium color="success" @click="sendquest">
                    Create
                  </v-btn>
                </center>
                <center><div id="foot">Quest Board</div></center>
              </v-col>
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
      sometext1:"Change file",
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
  margin-top: 5%;
}
.text-fill table {
  margin-left: auto;
  margin-right: auto;
}
.section2 {
  justify-content: center;
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

.section2 {
  margin-top: 15%;
}
.section2 iq {
  display: inline;
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
  color: red;
  margin-bottom: 10%;
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
#quest_img{
  cursor: pointer;
}
.show-btns {
  color: rgb(0, 0, 0) !important;
}

@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
</style>
