<template>
  <div id="questInfo" style="margin:20px;">
    {{quest._id}}
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="section1">
            <center>
              <div class="pic">
                <v-img height="400" width="370" :src="questPic"></v-img>
              </div>
            </center>

            <center>
              <v-card-actions style="float:center;" class="Rate">
                <span style="color:#43a047;font-weight:800">COMPLETE</span>

                <span class="grey--text text--lighten-2 caption mr-2"> </span>
                <v-spacer></v-spacer>
                <v-rating
                  v-model="rating"
                  background-color="red"
                  color="yellow accent-4"
                  dense
                  half-increments
                  readonly
                  hover
                  size="25"
                ></v-rating>
              </v-card-actions>
            </center>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <div class="section2">
            <h2 style="text-align:center;">
              {{ quest.questname }}
            </h2>

            <v-card-actions style="text-align:center;" class="Rate2">
              <span class="grey--text text--lighten-2 caption mr-2"> </span>

              <v-rating
                v-model="rating"
                background-color="white"
                color="yellow accent-4"
                dense
                half-increments
                readonly
                hover
                size="20"
              ></v-rating>
            </v-card-actions>
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

            <div class="pa-4" style="margin-top:-1%;">
              <div>
                Details
              </div>

              <v-card
                width="650"
                height="150"
                style="margin-top:5%;overflow-x:auto;padding:16px;"
              >
                <p style="font-size:14px;text-indent:20px; ">
                  {{ quest.questdetail }}
                </p>
              </v-card>
            </div>
            <div style="display:flex;">
              <v-btn
                color="white "
                text
                style="margin-left:3%;margin-top:2%;font-size:20px; background-color:#ff6e40 ;"
                @click="toFeed()"
              >
                Back
              </v-btn>
              <v-dialog v-model="dialog" max-width="450"  style="text-align:center;">
                <v-card style="height:min-content;">
                  <v-card-title >
                      <span style="text-align:center;font-weight:bold;margin-left:auto;margin-right:auto;font-size:18px;margin-top:2%;">Are you sure you want to apply this quest</span>
                  </v-card-title>
                   <v-divider></v-divider>
                  <v-card-text>
                   <span style="color:red;font-weight:bold;font-size:15px;">
                     *Please reminded
                   </span>
                  <br>
                  <br>
                 <span style="font-size:13px;color:black;"> After your confirm you can't reject this quest except helper don't choose you. </span>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn color="red darken-1" text @click="dialog = false">
                      Back
                    </v-btn>

                    <v-btn color="green darken-1" text @click="completed()" >
                      Confirm
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>

              <v-spacer></v-spacer>
              <v-btn
                color="white "
                text
                style="margin-top:2%;font-size:20px; background-color:#388e3c;"
                @click.stop="dialog = true"
              >
                Apply
              </v-btn>
            </div>
            {{quest.wait}}
            <!-- <div style="margin-left:15%;">
              <slot></slot>
            </div> -->
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import questService from "@/service/questService";
import Swal from "sweetalert2";
export default {
  name: "questInfo",
  methods: {
    async completed(){
      let suc = await questService.acceptquest(this.quest._id).then((res) => {
        return res;
      });
      if(suc){
        Swal.fire(
            "<alert-title>You request is complete!</alert-title>",
            "<alert-subtitle>Please wait untill helper accepted</alert-subtitle>",
            "success"
          );
        this.dialog=false;
      }
      else{
        Swal.fire(
            "<alert-title>Somethinf wrong</alert-title>",
            "<alert-subtitle></alert-subtitle>",
            "fail"
        );
        this.dialog=false;
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

      this.rating = this.quest.rate;

      console.log("complete");
      console.log(this.quest);
    },
    toFeed() {
      this.$router.push("/feed");
    },
  },
  created: async function() {
    await this.getinfoma();

    this.questPic = this.$store.state.gurl + this.quest.image;
  },
  data() {
    return {
      quest: "",
      questPic: "",
      questRate: 3,
      time: 2,
      rating: 4.3,
      testdetail: "sssssssssssssssssssssssssssssssssss",
      ownername: "",
      ownerID: "",
      dialog: false,
    };
  }
};
</script>

<style scope>
.pic {
  display: flex;
  padding: 20px;
}
.section2 {
  margin-top: -10%;
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

#text_fill {
  margin-top: 5%;
  text-align: left;
}
.Rate2 {
  display: none;
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
