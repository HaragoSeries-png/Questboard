<template>
  <div id="questInfo" style="margin:20px;">
    <v-container class="ma-0 pa-0">
      <v-row>
        <v-col cols="12" md="6" class="section1">
          <div class="section1">
            <center>
              <div
                style="font-family: 'Playfair Display', serif;margin-top:5%;"
              >
                Quest Information
              </div>
            </center>
            <div class="pic">
              <v-img height="250" width="350" :src="questPic"></v-img>
            </div>
            <center>
              <div style="font-family: 'Playfair Display', serif;">
                Diffuculty
              </div>

              <div class="ratio">
                <v-rating
                  v-model="questRate"
                  background-color="green lighten-3"
                  color="green"
                  style="margin-top:1%;"
                ></v-rating>
              </div>
              <v-divider></v-divider>
            </center>

            <div id="text_fill">
              <v-simple-table style="margin-left:15%;">
                <tr height="50">
                  <td>
                    <span style="font-size:18px;">Name: </span>
                  </td>
                  <td>
                    <span style="font-size:15px;margin-left:5%;">
                      {{ quest.questname }}
                    </span>
                  </td>
                </tr>
                <tr height="50">
                  <td>
                    <span style="font-size:18px;">Reward: </span>
                  </td>
                  <td>
                    <span style="font-size:15px;margin-left:5%;">
                      {{ quest.reward }}
                    </span>
                  </td>
                </tr>
              </v-simple-table>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="6" class="section2">
          <div class="section2">
            <v-simple-table style="margin-left:15%;">
              <tr height="70">
                <td style="padding-right:20px;">
                  <span style="font-size:18px;">Category: </span>
                </td>
                <td>
                  <span style="font-size:15px;">{{ quest.category }}</span>
                </td>
              </tr>
              <tr height="100">
                <td>
                  <span style="font-size:18px;">Detail: </span>
                </td>
                <td style="margin-left:20%;">
                  <span style="font-size:15px;">{{ quest.questdetail }}</span>
                </td>
              </tr>
            </v-simple-table>

            <div class="expire" style="text-align:end;">
              Cancle quest(expire in {{ time }}) day
            </div>
            <div style="margin-left:15%;">
              <slot></slot>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import questService from "@/service/QuestService";

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
    };
  },
};
</script>

<style scope>
.section1 {
  margin-bottom: 1%;
}
.section2 {
  margin-top: 1%;
}
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
#text_fill {
  margin-top: 5%;
  text-align: left;
}
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital@1&display=swap");
</style>
