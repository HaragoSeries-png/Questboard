<template>
  <div style="margin:20px;">
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
              <v-img
                height="250"
                width="350"
                src="https://cdn.pixabay.com/photo/2020/12/21/19/05/window-5850628_1280.png"
              ></v-img>
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
                    <span style="font-size:18px;">{{ name }}</span>
                  </td>
                  <td>
                    <span style="font-size:15px;margin-left:5%;">{{
                      value_name
                    }}</span>
                  </td>
                </tr>
                <tr height="50">
                  <td>
                    <span style="font-size:18px;">{{ reward }}</span>
                  </td>
                  <td>
                    <span style="font-size:15px;margin-left:5%;">{{
                      value_reward
                    }}</span>
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
                  <span style="font-size:18px;">{{ cata }}</span>
                </td>
                <td>
                  <span style="font-size:15px;">{{ value_cata }}</span>
                </td>
              </tr>
              <tr height="100">
                <td>
                  <span style="font-size:18px;">{{ detail }}</span>
                </td>
                <td style="margin-left:20%;">
                  <span style="font-size:15px;">{{ value_detail }}</span>
                </td>
              </tr>
            </v-simple-table>

            <div class="expire" style="text-align:end;">Cancle quest(expire in {{ time }}) day</div>
            <div style="margin-left:15%;">
          
            <div style="text-decoration:underline;margin-top:5%;">Helper</div>
              
            <div style="margin-top:5%">
              <v-data-table
                :headers="headers"
                :items="helper_slot"
                class="elevation-1"
                
              >
               <template v-slot:item.img>
      <v-icon
        medium
        class="mr-2"
      >
       mdi-account-group
      </v-icon>
    </template>
                <template v-slot:item.select="{ item }">
            
                  <v-simple-checkbox v-model="item.select"></v-simple-checkbox>
                </template>
              </v-data-table>
            </div>
            
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "seeQuest",
  data() {
    return {
      name: "Quest name",
      value_name: "Unlimited sword breaker",
      reward: "Reward",
      value_reward: "Armlet of mordigan",
      cata: "Catagories",
      value_cata: "Demon upper moon 4",
      detail: "Details",
      value_detail:
        "Defeat wall maria and wall rose then go to the malay to destroy the wall hammer titan",
      time: "2",

      helper_slot: [
        {
          img: "",
          name_helper: "Somchai Eiei",
          select: "false",
        },
        {
          name_helper: "Somrak Khamsing",
          select: "false",
        },
        {
          img: "",
          name_helper: "Somchai Eiei",
          select: "false",
        },
        {
          name_helper: "Somrak Khamsing",
          select: "false",
        },
        {
          img: "",
          name_helper: "Somchai Eiei",
          select: "false",
        },
        {
          name_helper: "Somrak Khamsing",
          select: "false",
        },{
          img: "",
          name_helper: "Somchai Eiei",
          select: "false",
        },
        {
          name_helper: "Somrak Khamsing",
          select: "false",
        },{
          img: "",
          name_helper: "Somchai Eiei",
          select: "false",
        },
        {
          name_helper: "Somrak Khamsing",
          select: "false",
        },
      ],
      headers: [
        {
          text: "List",
          align: "start",
          sortable: false,
          value: "img",
        },
        { text: "Name", value: "name_helper", align: "center" },
        { text: "Selected", value: "select", align: "end" },
      ],
    };
  },
};
</script>

<style scope>
.section1 {
  margin-bottom: 1%;
}
.section2 {
  margin-top: 4%;
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
