<template>
  <div class="main">
    <div>
      <div class="a" style="margin-bottom:5%;">
        unyong
      </div>
    
      <div class="container">
        <form id="Form1">
          <center>
            <div class="section1">
              <div style="font-size:20px;font-weight:bold;margin-bottom:%;">
                Choose Quest image
              </div>
              <v-hover v-slot="{ hover }">
                <v-img
                  v-if="!url"
                  contain
                  style="margin-top:-5%;"
                  fill-width
                  height="350"
                  src="https://cdn.pixabay.com/.../14/16/57/scroll-34606_1280.png"
                  id="quest_img"
                  @click="chooseFiles()"
                >
                  <v-card :class="{ 'on-hover': hover }">
                    <div
                      style="margin-top:50%;margin-left:25%;cursor:pointer;"
                      contain
                    >
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
                    width="500"
                    height="350"
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
                          </v-row>
                        </v-card-title>
                      </div>
                    </v-card>
                  </v-img>
                </v-hover>
              </div>
              <div>
                <v-file-input
                  v-model="files"
                  @change="onFileChange"
                  id="fileUpload"
                  style="margin-top:5%;"
                ></v-file-input>
              </div>
            </div>
          
          </center>

          <div class="btn-box" style="margin-top:1.5%;">
            <button type="button" id="Next1" @click="nClick1()">Next</button>
          </div>
        </form>

        <form id="Form2">
          <h3 style="margin-bottom:15%;color:black;font-weight:bold;">
            Information
          </h3>
          <v-text-field
            style="margin-bottom:7%; "
            id="iq"
            :rules="rules"
            counter="25"
            placeholder="Quest Name"
            hint="Baby sister,Tutor"
            v-model="questname"
          ></v-text-field>
          <v-select
            :items="items"
            id="ic"
            placeholder="default"
            style="margin-bottom:7%;"
            dense
            v-model="category"
          ></v-select>
          <v-text-field
            style="margin-bottom:7%;"
            id="iq"
            :rules="rules"
            counter="55"
            v-model="reward"
            placeholder="Reward"
          ></v-text-field>
         <center> 
        <i class="material-icons"  style="margin-bottom:2%;font-size:25px;">person</i>
        </center>
        <div style="text-align:center;font-size:18px;color:gray">
          Number of Contributor
        </div>
            <span>
          <input
            type="number"
            min="1"
            id="num_per"
            v-model="numberofcon"
            
            style=" border-top:1px solid white; border-left:1px solid white; border-right:1px solid white;margin-bottom:18%;outline:none;"
          /> 
            </span>
          
          <div class="btn-box">
            <button type="button" id="Back1" @click="bClick1()">Back</button>
            <button type="button" id="Next2" @click="nClick2()">Next</button>
          </div>
        </form>

        <form id="Form3">
        <h3 style="margin-bottom:15%;color:black;font-weight:bold;">
            Information
          </h3>
          <div>
            Deadline
          </div>
         <input
                        type="date"
                        name=""
                        id="I_date"
                        v-model="duedate"
                        style="margin-bottom:20%;"
                        :min="this.current_date"
                      />
        <div>
          More Detail
        </div>
        <v-textarea
                          v-model="detail"
                          color="teal"
                          dense
                          contain
                          textarea
                          style="margin-bottom:45%;font-size:12px;margin-top:5%;"
                        ></v-textarea>


          <div class="btn-box">
            <button type="button" id="Back2" @click="bClick2()">Back</button>
            <button type="button"  @click="checkAll()">Submit</button>
          </div>
        </form>
        <div id="alertField"></div>
        <div class="step-row">
          <div id="progress"></div>
          <div class="step-col"><small>Step1</small></div>
          <div class="step-col"><small>Step2</small></div>
          <div class="step-col"><small>Step3</small></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuestService from "@/service/questService";

export default {
  name: "Create Quest",
  created() {
    this.$emit("setTitle", this.$options.name);
    var today = new Date();
    const now =
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2);
    this.current_date = now;
  },
  data() {
    return {
      icon: "mdi-upload",
      items: [
        "Handicraft",
        "Advice",
        "Education",
        "Accident",
        "Housework",
        "Find friend",
        "Food and home",
        "Traffic",
      ],
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
      current_date: "",
    };
  },
  methods: {
    nClick1() {
      var Form1 = document.getElementById("Form1");
      var Form2 = document.getElementById("Form2");
      var progress = document.getElementById("progress");
      Form1.style.left = "-450px";
      Form2.style.left = "40px";
      progress.style.width = "240px";
    },
    bClick1() {
      var Form1 = document.getElementById("Form1");
      var Form2 = document.getElementById("Form2");
      var progress = document.getElementById("progress");
      Form1.style.left = "40px";
      Form2.style.left = "450px";
      progress.style.width = "120px";
    },
    nClick2() {
      var Form2 = document.getElementById("Form2");
      var Form3 = document.getElementById("Form3");
      var progress = document.getElementById("progress");
      Form2.style.left = "-450px";
      Form3.style.left = "40px";
      progress.style.width = "360px";
    },
    bClick2() {
      var Form2 = document.getElementById("Form2");
      var Form3 = document.getElementById("Form3");
      var progress = document.getElementById("progress");
      Form2.style.left = "40px";
      Form3.style.left = "-450px";
      progress.style.width = "240px";
    },
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

    checkAll() {
      console.log('check all in progress')
      let alertField = document.getElementById("alertField");
      alertField.innerHTML = "";
      console.log('quest not working1');
      if (this.duedate == "") {
        alertField.innerHTML += "<li>*Please full fill</li>";
      }
      console.log('quest not working2');
      if (alertField.innerHTML == "") this.sendquest();
      console.log('quest has been send');
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
      formData.append("numberofcon", this.numberofcon);
      formData.append("duedate", this.duedate);

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
* {
  margin: 0%;
  padding: 0%;
}
.main {
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/40914262_1303280716477563_5673712610457944064_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=e3f864&_nc_eui2=AeE2co9Lp4bzuDRnrZmwyo-gOd9Irq-D2iA530iur4PaIPOJkTzEaoChBsI0C1qGDM9Rt9mS7jyPuvnhojpRa2-G&_nc_ohc=p-uJ7CJ8K58AX_j6M5m&_nc_ht=scontent.fbkk13-2.fna&oh=2451a543a3da7645ed32fe15926cc67b&oe=60A60AF1);
  background-position: center;
  background-size: cover;
  margin-top: -2%;
  height: 95vh;
}

.container {
  width: 360px;
  height: 600px;
  margin-top: 2%;
  background: #fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  margin-bottom: 0%;
}
h3 {
  text-align: center;
  margin-bottom: 20px;
  color: #777;
  margin-top: -2%;
}
.container form {
  margin-top: 0%;
  width: 280px;
  position: absolute;
  top: 80px;
  left: 40px;
  transition: 0.5s;
}
form input {
  width: 100%;
  padding: 10px 5px;
  margin: 5px 0;
  border-bottom: 1px solid #999;

  background: transparent;
}
.btn-box {
  width: 100%;
  text-align: center;
  margin: 30px auto;
}
form button {
  width: 110px;
  height: 35px;
  margin: 0 10px;
  background: linear-gradient(to right, #495aff, #0acffe);
  border-radius: 30px;
  border: 0;
  color: white;
  outline: none;
  cursor: pointer;
}
.step-row {
  width: 360px;
  height: 40px;
  display: flex;
  align-items: center;
  box-shadow: 0 -1px 5px -1px #000;
  position: relative;
  margin-left: -5%;
  margin-top: -1%;
}
#Form2 {
  left: 450px;
}
#Form3 {
  left: 450px;
}
.step-col {
  width: 120px;
  text-align: center;
  color: white;
  position: relative;
}
#progress {
  position: absolute;
  height: 100%;
  width: 120px;
  background: linear-gradient(to right, #495aff, #0acffe);
  transition: 1s;
}
#progress::after {
  content: "";
  height: 0;
  width: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  position: absolute;
  right: -20px;
  top: 0;
  border-left: 20px solid #0acffe;
}
@media only screen and (max-width: 320px) {
  .a {
    margin-top:4%;
  }
}
@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap);
@import url(https://fonts.googleapis.com/icon?family=Material+Icons);
</style>
