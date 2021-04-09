<template>
  <div class="container" style="font-family: Montserrat">
    <h1 style="text-align:center;text-decoration:underline;margin-bottom:5%;">My Work</h1>
    <div class="full-screen-bot">
      <v-card class="mx-auto" width="400" height="230">
        <v-row>
          <v-col sm="4">
            <v-img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/In_progress_icon.svg/1024px-In_progress_icon.svg.png"
              width="300"
              style="margin:20px;margin-top:30%;"
            ></v-img>
          </v-col>
          <v-col sm="8">
            <br />
            <center>
              <v-btn
                color="white "
                text
                style="margin-top:10%;font-size:20px; background-color:#1e88e5 ;"
                @click="senddata('in progress')"
              >
                In progress
              </v-btn>
            </center>

            <p
              style="width:220px;font-size:17px;margin-top:10px;text-indent:42px;text-align:left;"
            >
            
            your quest is on the way to be cleared, so you can relax and enjoy your help.
             
            </p>
          </v-col>
        </v-row>
      </v-card>

      <v-card class="mx-auto" width="400" height="230">
        <v-row>
          <v-col sm="4">
            <v-img
              src="https://kindertales.com/images/crm-waitlisticon_2x.png?crc=4099574293"
              width="300"
              style="margin:20px;margin-top:30%;"
            ></v-img>
          </v-col>

          <v-col sm="8">
            <br />
            <center>
              <v-btn
                color="white"
                text
                style="font-size:20px; background-color:#689f38;margin-top:10%;"
                @click="senddata('waiting')"
              >
                Waiting
              </v-btn>
            </center>
            <v-spacer></v-spacer>

            <p
              style="text-align:left;padding-left:5%; text-indent:15px;width:220px;font-size:17px;margin-top:10px;"
            >
             wating for contributor to assign in
            </p>
          </v-col>
        </v-row>
      </v-card>

      <v-card class="mx-auto" max-width="400" height="230">
        <v-row>
          <v-col sm="4">
            <v-img
              src="https://image.flaticon.com/icons/png/512/1701/1701971.png"
              width="300"
              style="margin:20px;margin-top:30%;"
            ></v-img>
          </v-col>

          <v-col sm="8">
            <br />
            <center>
              <v-btn
                color="white "
                text
                style="font-size:20px; background-color:black;margin-top:10%;"
                @click="senddata('complete')"
              >
                Pending
              </v-btn>
            </center>
            <v-spacer></v-spacer>

            <p
              style="text-align:left;padding-left:0px;width:220px;font-size:17px;margin-top:10px;text-indent:42px;"
            >
              Your quest is waiting to be verified by admin, please be patient.


            </p>
          </v-col>
        </v-row>
      </v-card>
    </div>
 
    <div id="mobi-screen">
      <v-select
        :items="items"
        label="Lastest"
        outlined
        v-model="search"
      ></v-select>
    </div>
    <div id="noob">
      <center>
       
      </center>
    </div>

    <div class="tableInfo">
      Information about your current quest
    </div>

    <QuestTable :search="search" :questdata='questdata'></QuestTable>
  </div>
</template>

<script>
import QuestTable from "../components/layout/Q/Table";
import profileService from "@/service/profileService";
export default {
  name: "My Work",
  props: ["search"],
  components: { QuestTable },
  methods: {
    getinfoma: async function() {
      let re = await profileService.mywork().then((res) => {
        return res;
      });
      this.questdata = re.allquest;
      console.log(this.questdata);
    },
    sentToDetail(value) {
      let path = '/quest/id/' + value
      this.$router.push({ path: path})
    },
    senddata(value) {
      this.search = value;
    },
  },
  created: async function() {
    this.$emit("setTitle", this.$options.name);
    await this.getinfoma();
  },
  data() {
    return {
      items: ["in progress", "pending", "waiting"],
      userquest: "",
      questdata: [],
      selected: [],
    };
  },
};
</script>


<style scoped>
.tableInfo{
  margin-top:40px;
  text-align:center;
  font-size:30px
}
.full-screen-bot {
  margin-top: 2%;
  display: flex;
  justify-content: space-around;
}
.full-screen-bot .v-card {
  margin-left: 100px;
}

.container {
  height: min-content;
}

#mobi-screen {
  display: none;
}

@media screen and (max-width: 1072px) {
  .full-screen-bot {
    display: none;
  }

  #mobi-screen {
    display: inline;
  }
}
</style>
