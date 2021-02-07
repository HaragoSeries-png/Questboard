<template>
  <div id="questInfo" style="margin:20px;">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <div class="section1">
            <center>
              <div class="pic">
                <v-img height="400" width="350" :src="questPic"></v-img>
              </div>
            </center>
            <v-divider></v-divider>
            <center>
              <div
                style="font-family: 'Playfair Display', serif;font-size:25px;"
                id="status"
              >
                <span style="background-color:white;margin:auto;">Status</span>
              </div>
              <v-btn
                disable
                color="white"
                text
                style="margin-top:2%;font-size:15px; background-color:#1e88e5 ;"
              >
                In progress
              </v-btn>
            </center>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <div class="section2">
            <h2 style="text-align:center;">
              {{ quest.questname }}
            </h2>
            <v-divider></v-divider>
            <v-card-actions class="pa-4">
              Difficulty
              <v-spacer></v-spacer>
              <span class="grey--text text--lighten-2 caption mr-2">
                ({{ rating }})
              </span>
              <v-rating
                v-model="rating"
                background-color="white"
                color="yellow accent-4"
                dense
                half-increments
                hover
                size="18"
              ></v-rating>
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
              Date
              <v-spacer></v-spacer>
              <span style="font-size:18px;"> {{ quest.date }}</span>
              <v-spacer></v-spacer>
              <span style="font-size:18px;">{{ quest.tstart }} </span>
              <v-spacer></v-spacer>
              <span style="font-size:18px;">{{ quest.tend }} </span>
            </v-card-actions>
            <div class="pa-4" style="margin-top:-1%;">
              <div>
                Details
              </div>

              <v-card width="650" height="100" autogrow style="margin-top:4%;">
                <p style="font-size:18px;text-indent:20px; ">
                  {{ quest.questdetail }}
                </p>
              </v-card>
            </div>
            <div style="display:flex;">
            <v-btn
              color="white "
              text
              style="margin-left:3%;margin-top:2%;font-size:20px; background-color:#ff6e40 ;"
             
            >
              Helper
              
            </v-btn>
            <v-spacer></v-spacer>
              <v-btn
              color="white "
              text
              style="margin-top:2%;font-size:20px; background-color:#388e3c;"
             
            >
              Next
            </v-btn>
            </div>
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

export default {
  name: "questInfo",
  methods: {
    getinfoma: async function() {
      let questid = this.$route.params.id;

      let re = await questService.getquestinfo(questid).then((res) => {
        return res;
      });

      this.quest = re.quest;
      console.log("complete");
      console.log(this.quest);
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
    };
  },
};
</script>

<style scope>
.pic {
  display: flex;
  padding: 20px;
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
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap");
</style>
