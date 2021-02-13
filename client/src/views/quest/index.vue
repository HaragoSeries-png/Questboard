<template>
  <div id="questDetail">
    <Watchquest>
      <div style="text-decoration:underline;margin-top:5%;">Helper</div>

      <div style="margin-top:5%">
        <v-data-table
          :headers="headers"
          :items="helper_slot"
          class="elevation-1"
        >
          <!-- <template v-slot:item.img>
            <v-icon medium class="mr-2">
              mdi-account-group
            </v-icon>
          </template>
          <template v-slot:item.select="{ item }">
            <v-simple-checkbox v-model="item.select"></v-simple-checkbox>
          </template> -->
        </v-data-table>
      </div>
    </Watchquest>
  </div>
</template>

<script>
import Watchquest from "../components/layout/Q/watchqest";

export default {
  name: "QuestDetail",
  components: { Watchquest },
  watch: {
    "$route.params.id": function() {
      this.$router.go();
    },
  },
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
