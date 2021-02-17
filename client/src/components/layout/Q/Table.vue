<template>
  <div id="questTable">
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="questdata" :search="search" class="onDesk">
        <template #item="{ item }">
         
          <tr @click="sentToDetail(item._id)" >
            <td class="item" style="font-size:15px;">{{ item.questname }}</td>
            <td class="item" style="text-transform: uppercase;font-size:15px;">
              <v-chip :color="getColor(item.status)" dark>
                {{ item.status }}
              </v-chip>
            </td>
            <td class="item" style="font-size:15px;">{{ item.category }}</td>
            <td class="item" style="font-size:15px;">{{ item.tend }}</td>
          </tr>
        </template>
      </v-data-table>

        <v-data-table :headers="headers" :items="questdata" :search="search" class="onMobile">
        <template #item="{ item }">
      
          <tr @click="sentToDetail(item._id)" style="padding:20px;" >
            <td class="item" style="font-size:20px;" >{{ item.questname }}</td>
            <td class="item" style="text-transform: uppercase;">
              <v-chip :color="getColor(item.status)" dark>
                {{ item.status }}
              </v-chip>
            </td>
           
            <td id="itemspecial" style="text-align:end;font-size:20px;">{{ item.category }}</td>
            <td id="itemspecial" style="text-align:center;">{{ item.tend }}</td>
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
        { text: "Quest Name", value: "questname", align: "start" ,size:"30px" },
        {
          text: "Status",
          value: "status",
          align: "start",
        },
        { text: "Category", value: "category", align: "start" },
        {
          text: "Time",
          value: "tend",
          align: "start",
        },
      ],
      
    };
  },
};
</script>

<style scoped>

.onDesk{
  
}
.onMobile{
  display: none;
 
}
@media screen and (max-width:600px) {
  .onDesk{
    display:none;
  }
  .onMobile{
    display: block;
  }
  #itemspecial{
    display: none;
  }
  
}
</style>
