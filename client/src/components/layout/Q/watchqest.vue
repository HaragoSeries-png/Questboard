<template>
  <div id="questInfo" style="margin:20px;">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="section1">
            <center>
              <div class="pic">
                <v-img height="400" width="370" :src="questPic"></v-img>
              </div>
            </center>

            <v-card-actions class="Rate">
              <div class="statusQuest">
                <div v-if="quest.status == 'pending'">
                  <span style="background-color:#f57c00;" class="statusBox">{{
                    quest.status
                  }}</span>
                </div>
                <div v-else-if="quest.status == 'inprogress'">
                  <span style="background-color:#1e88e5;" class="statusBox">
                    {{ quest.status }}</span
                  >
                </div>
                <div v-else-if="quest.status == 'complete'">
                  <span style="background-color:#689f38;" class="statusBox">
                    {{ quest.status }}</span
                  >
                </div>
                <div v-else-if="quest.status == 'waiting'">
                  <span style="background-color:#1e88e5;" class="statusBox">
                    {{ quest.status }}</span
                  >
                </div>
              
              </div>


              <v-spacer></v-spacer>
              <span style="color:black;font-size:24px;padding-right:2%;">Rank : </span>
              <span :style="{ color: ratea.Color }" class="rateLabel">
                 {{ ratea.Label }}
              </span>
           
            </v-card-actions>
              <center>
  
                 <v-btn
                color="black"
                text
                style="margin-top:2%;font-size:20px;display:inline;text-align:center;"
                v-if="aldy"
              >
                you apllied this quest already
              </v-btn>

</center>

            
          </div>
        </v-col>

        <v-dialog v-model="dialog3" width="500px" height="300px" overlay>
          <v-card style="background-color:#ececec">
            <div id="helperBox">
              <h3 style="text-align:center;margin-bottom:5%;">
                Evaluate your helper
              </h3>
              <v-divider></v-divider>
              <v-row style="margin-left:0.5%;">
                <v-col cols="8" md="8">
                  <p>
                    Name
                  </p>
                </v-col>

                <v-col cols="4" md="4">
                  Rate
                </v-col>
              </v-row>
              <template v-for="item in conInfor">
                <v-list-item :key="item.index">
                  <v-row style="border-top:1px solid gray">
                    <v-col cols="8" md="8">
                      {{ item.conName }}
                    </v-col>
                    <v-col cols="4" md="4">
                      <v-rating
                        v-model="item.conRate"
                        background-color="green lighten-3"
                        color="green"
                        small
                      ></v-rating>
                    </v-col>
                  </v-row>
                </v-list-item>
              </template>
              <center>
                <v-btn
                  v-if="isowner"
                  color="white"
                  text
                  style="font-size: 13px; background-color:green;text-align:center;"
                  @click="ratecon()"
                >
                  Complete
                </v-btn>
              </center>
            </div>
          </v-card>
        </v-dialog>

        <v-col cols="12" md="6">
          <div class="section2">
            <h2 style="text-align:center;">
              {{ quest.questname }}
            </h2>


            <v-divider></v-divider>
            <v-card-actions class="pa-4">
              Create by
              <v-spacer></v-spacer>
              <router-link :to="'/profile/id/' + ownerID">
                <span style="text-align:center;"> {{ ownername }}</span>
              </router-link>
            </v-card-actions>

            <v-card-actions class="pa-4">
              Category
              <v-spacer></v-spacer>
              <span style="text-align:center;"> {{ quest.category }}</span>
            </v-card-actions>

            <v-card-actions class="pa-4">
              Reward
              <v-spacer></v-spacer>
              <span style="text-align:center;"> {{ quest.reward }}</span>
            </v-card-actions>

            <v-card-actions class="pa-4">
              Number
            
              <v-spacer></v-spacer>
              <span style="text-align:center;"> {{quest.contributor.length}}/{{ quest.numberofcon }}</span>
            </v-card-actions>

            <div class="pa-4" style="margin-top:-1%;">
              <div>
                Details
              </div>

              <v-card
                width="650"
                height="150"
                style="margin-top:5%;overflow-x:auto;padding:16px;"
              >
               

                <p style="font-size:14px;text-indent:20px;" v-if="quest.questdetail == underfined">

                  no information
                </p>
                <p v-else>
                    {{ quest.questdetail }}
                </p>
              </v-card>
            </div>

            <div>
              <v-btn
                color="black"
                text
                style="float:left;margin-top:2%;font-size:15px;margin-left:3.5%;" 
                class="button_black" 
                @click="toFeed()"
              >
                Back
              </v-btn>



            <v-btn
                v-if="quest.status == 'inprogress'"
                color="white"
                text
                class="completeBox"
               @click="dialog3 = true"

              >
                  Quest Complete
              </v-btn>





              <v-btn
                v-if="isowner && !isstart  && quest.status!='pending'"
                color="white"
                text
                style="float: right; margin-top: 2%; font-size: 15px; background-color:#ff6e40; margin-left: 3.5%;"
                @click="dialog2 = true"

              >
                See Helper
              </v-btn>

              <v-btn
                v-if="isowner && !isstart && quest.status!='pending'"
                color="white"
                text
                style="float: right; margin-top: 2%; font-size: 15px; background-color:#10ae10; margin-left: 3.5%;"
                @click="dialog4 = true"

              >
                Start quest
              </v-btn>
              <v-dialog
                v-model="dialog4"
                max-width="450"
                style="text-align:center;"
              >
                <v-card style="height:min-content;">
                  <v-card-title>
                    <span
                      style="text-align:center;font-weight:bold;margin-left:auto;margin-right:auto;font-size:18px;margin-top:2%;"
                      >Are you sure you want to start this quest</span
                    >
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <span style="color:red;font-weight:bold;font-size:15px;">
                      *Please reminded
                    </span>
                    <br />
                    <br />
                    <span style="font-size:13px;color:black;">
                      After your confirm you can't reject this quest except
                      helper don't choose you.
                    </span>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn class="button_black" color="black;" text @click="dialog4 = false">
                      Back
                    </v-btn>

                    <v-btn color="green darken-1" text @click="startquest()">
                      Confirm
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-spacer></v-spacer>
              <v-dialog
                v-model="dialog"
                max-width="450"
                style="text-align:center;"
              >
                <v-card style="height:min-content;">
                  <v-card-title>
                    <span
                      style="text-align:center;font-weight:bold;margin-left:auto;margin-right:auto;font-size:18px;margin-top:2%;"
                      >Are you sure you want to apply this quest</span
                    >
                  </v-card-title>
                  <v-divider></v-divider>
                  <v-card-text>
                    <span style="color:red;font-weight:bold;font-size:15px;">
                      *Please reminded
                    </span>
                    <br />
                    <br />
                    <span style="font-size:13px;color:black;">
                      After your confirm you can't reject this quest except
                      helper don't choose you.
                    </span>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn class="button_black" color="black;" text @click="dialog = false">
                      Back
                    </v-btn>

                    <v-btn color="green darken-1" text @click="completed()">
                      Confirm
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

             
              <v-btn
                color="white "
                text
                style="margin-top:2%;font-size:20px; background-color:#388e3c;float:right"
                @click.stop="dialog = true"
                v-if="!condi"
              >
                Apply
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
  
      <v-dialog v-model="dialog2" width="500px" height="300px" overlay>
        <v-card style="background-color:#ececec">
          <div id="helperBox" v-if="isowner">
            <h3 style="text-align:center;margin-bottom:5%;">
              Select your recruiter
            </h3>
            <v-row style="margin-left:0.5%;">
              <v-col cols="10" md="9">
                <p>
                  Name
                </p>
              </v-col>

              <v-col cols="2" md="3">
                <p>
                  Status
                </p>
              </v-col>
            </v-row>
            <template v-for="(item, index) in quest.wait">
              <v-list-item :key="item.index">
                <v-row style="border-top:1px solid gray;" >
                  <v-col cols="10" md="10"  >
                  <router-link :to="'/profile/id/' + item._id">
                    {{ item.infoma.firstname }}
                  </router-link>
                    
                  </v-col>
                  <v-col cols="2" md="2">
                    <v-checkbox
                      v-model="selectHelperStatus[index]"
                      style="display:inline;"
                    ></v-checkbox>
                    <!-- <v-divider v-if="index != quest.wait.length - 1"></v-divider> -->
                  </v-col>
                </v-row>
              </v-list-item>
            </template>
            <center>
              <v-btn
                v-if="isowner || quest.status!='pending'"
                color="white"
                text
                style="font-size: 13px; background-color:green;text-align:center;"
                @click="sendHelperSelected()"
              >
                Select Helper
              </v-btn>
            </center>
            
          </div>
        </v-card>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import questService from "@/service/questService";
import Swal from "sweetalert2";

export default {
  name: "questInfo",
  methods: {
    async completed() {
      let suc = await questService.acceptquest(this.quest._id).then((res) => {
        return res;
      });
      if (suc) {
        Swal.fire(
          "<alert-title>You request is complete!</alert-title>",
          "<alert-subtitle>Please wait untill helper accepted</alert-subtitle>",
          "success"
        );
        this.dialog = false;
        this.$router.go();
      } else {
        Swal.fire(
          "<alert-title>Something wrong</alert-title>",
          "<alert-subtitle></alert-subtitle>",
          "fail"
        );
        this.dialog = false;
      }
    },

    async completeQuest() {
      let suc = await questService.comquest(this.quest._id).then((res) => {
        return res;
      });
      if (suc) {
        console.log("success");
      }
    },
    async sendHelperSelected() {
      let suc = await questService
        .waitselect(this.quest.wait, this.quest._id, this.selectHelperStatus)
        .then((res) => {
          return res;
        });
      if (suc) {
        Swal.fire(
          "<alert-title>You accept Helper!</alert-title>",
          "<alert-subtitle>Please wait untill helper accepted</alert-subtitle>",
          "success"
        );
      } else {
        Swal.fire(
          "<alert-title>Something wrong</alert-title>",
          "<alert-subtitle></alert-subtitle>",
          "fail"
        );
      }
    },
    async ratecon(){
      alert('nani')
      let re = await questService.ratingcon(this.conInfor).then((res) => {
        return res;
      });
      if (re.suc) {
        Swal.fire(
          "<alert-title>You accept Helper!</alert-title>",
          "<alert-subtitle>Please wait untill helper accepted</alert-subtitle>",
          "success"
        );
      } else {
        Swal.fire(
          "<alert-title>Something wrong</alert-title>",
          "<alert-subtitle></alert-subtitle>",
          "fail"
        );
      }







    },
    getinfoma: async function() {
      let questid = this.$route.params.id;

      let re = await questService.getquestinfo(questid).then((res) => {
        return res;
      });

      this.quest = re.quest;

      this.ownerID = re.owner.ID;
      this.ownername = re.owner.name;
      this.conenfor =re.coninfor
      this.rating = this.quest.rate;

      console.log("complete");
      console.log(this.quest);
    },
    toFeed() {
      this.$router.push("/feed");
    },
    selectedHelperTotal() {
      return this.selectHelperStatus.filter(Boolean).length;
    },
    async startquest(){
      let re = await questService.startquest(this.quest._id)
      if(re){
        this.dialog4 = false
        this.$router.go()
      }
    }
  },
  created: async function() {
    await this.getinfoma();
    this.questPic = this.$store.state.gurl + this.quest.image;

    this.conInfor = this.quest.contributor.map((con) => {
      let de = { conName: con.infoma.firstname, conRate: 0 };
      return de;
    });

    for (var i = 1; i <= this.quest.wait.length; i++) {
      this.selectHelperStatus.push(1 == 0);
    }
  },
  data() {
    return {
      quest: "",
      questPic: "",
      questRate: 3,
      time: 2,
      ownername: "",
      ownerID: "",
      dialog: false,
      dialog1: false,
      uid: this.$store.getters.getuserid,
      conInfor: [],
      dialog2: false,
      dialog3: false,
      dialog4: false,
      selectHelperStatus: [],
      rating:0,
    };
  },
  computed: {
    isowner: function() {
      return this.uid == this.ownerID;
    },
    aldy: function() {
      let n = this.quest.wait.some(w=> w._id==this.uid)||this.quest.contributor.some(c=> c._id==this.uid);
      return n;
    },
    condi: function() {
      return this.aldy || this.isowner;
    },
    ratea: function() {
      let r =  Math.max(this.rating * 2 - 1,0);    
      let Lrat = ["D", "D+", "C", "C+", "B", "B+", "A", "A+", "S", "SS"];
      let Crat = [
        "#584b4b",
        "#584b4b",
        "#69d923",
        "#69d923",
        "#FFCC00",
        "#FFCC00",
        "#33CCFF",
        "#33CCFF",
        "#fd7e14",
        "#FF3366",
      ]; //color
      return  { Label: Lrat[r], Color: Crat[r] };
    },
    isstart:function(){
      let qstatus = this.quest.status
      return qstatus=='inprogress'
    }
  },
};
</script>

<style scope>
.pic {
  display: flex;
  padding: 20px;
}
.button_black{
 

  border:1px solid black;
}
.section2 {
  margin-top: -10%;
}
#helperBox {
  padding: 15px 30px 30px 30px;
}
.expire {
  margin-left: 15%;
  font-size: 13px;
  color: red;
  cursor: pointer;
}
.expire:hover {
  text-decoration: underline;
}
.v-container {
  padding: 0;
  margin: 0;
}
.ratio {
  margin-top: 2%;
  font-size: 20px;
  font-family: "Inconsolata", monospace;
  display: inline-block;
  line-height: 0.85;
}
tbody tr td {
  border: none;
}
#status {
  position: relative;
  margin: 100 auto;
  z-index: 5;
  margin-bottom: 5%;
}
#status:before {
  content: "";
  display: block;
  width: 150px;
  height: 2px;
  background: #000;
  position: absolute;
  left: 0;
  top: 50%;
  z-index: -2;
}
#status:after {
  content: "";
  display: block;
  width: 150px;
  height: 2px;
  background: #000;
  position: absolute;
  right: 0;
  top: 50%;
  z-index: -2;
}
table {
  width: 50%;
}
.statusQuest {
  font-size: 1.5rem;
  margin-left: 2%;
}
.statusQuest div {
  text-transform: uppercase;
}
#text_fill {
  margin-top: 5%;
  text-align: left;
}
.Rate2 {
  display: none;
}
.rateLabel {
  font-size: 50px;
}
.statusBox {
  font-weight: 800;
  border-radius: 12px;
  color: white;
  padding: 13px;
}
.completeBox {
 float: right;
 margin-top: 2%; 
 background-color:green; 
 margin-left: 10%;
 font-size: 20px;
 
}
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Hammersmith+One&family=Lexend+Mega&display=swap");
@media screen and (max-width: 956px) {
  .Rate {
    display: none;
  }
  .Rate2 {
    display: inline;
  }
}
</style>
