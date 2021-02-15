<template>
  <div id="questTable">
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="questdata" :search="search">
        <template v-slot:item="{ item }">
          <tr @click="sentToDetail(item._id)">
            <td class="item">{{ item.questname }}</td>
            <td class="item" style="text-transform: uppercase;">
              <v-chip :color="getColor(item.status)" dark>
                {{ item.status }}
              </v-chip>
            </td>
            <td class="item">{{ item.helperID }}</td>
            <td class="item">{{ item.tend }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import profileService from "@/service/profileService";

export default {
  name: "QuestTable",
  props: ["search"],
  methods: {
    getinfoma: async function() {
      let re = await profileService.myquest().then((res) => {
        return res;
      });

      this.questdata = re.allquest;
      console.log(this.questdata);
    },
    showAlert(a) {
      alert("Alert! \n" + a._id);
    },
    sentToDetail(value) {
      let path = '/quest/id/' + value
      this.$router.push({ path: path})
    },
    getColor(value) {
      if (value == "waiting") return "green";
      else if (value == "in progress") return "blue";
      else if (value == "pending") return "orange";
      else return "grey";
    },
  },
  created: async function() {
    await this.getinfoma();
  },
  data() {
    return {
      questdata: [],
      selected: [],
      headers: [
        { text: "Quest Name", value: "questname", align: "start" },
        {
          text: "Status",
          value: "status",
          align: "start",
        },
        { text: "By", value: "helperID", align: "start" },
        {
          text: "Time",
          value: "tend",
          align: "start",
        },
      ],
      information: [
        {
          _id: "12345",
          questname: "q_test1",
          status: "sompong",
          helperID: "1/2/2012",
          tend: "in progress",
        },
      ],
    };
  },
};
</script>

<style scoped>
.item {
  font-size: 20px;
  font-weight: bold;
}
</style>
