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
        <template slot="items" slot-scope="props">
          <tr @click="showAlert(props.item)">
            <td>{{ props.item._id }}</td>
            <td>{{ props.item.questname }}</td>
            <td >{{ props.item.status }}</td>
            <td >{{ props.item.helperID }}</td>
            <td >{{ props.item.tend }}</td>
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
      // if (event.target.classList.contains("btn__content")) return;
      alert("Alert! \n" + a._id);
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
        {
          text: "Quest ID",
          align: "start",
          value: "_id",
        },
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
          align: "center",
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

<style scoped></style>
