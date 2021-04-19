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
      <v-data-table
        :headers="headers"
        :items="questData"
        :search="search"
      >
        <template #item="{ item }">
          <tr @click="sentToDetail(item._id)">
            <td class="item" style="font-size:15px;">{{ item.questname }}</td>
            <td class="item" style="text-transform: uppercase;font-size:15px;">
              <v-chip :color="getColor(item.status)" dark>
                {{ item.status }}
              </v-chip>
            </td>
            <td class="item" style="font-size:15px;">{{ item.category }}</td>
            <td class="item" style="font-size:15px;">{{ item.date }}</td>
           <v-icon
           color="success" dark @click.stop="show_Rate(item._id)" medium>
              mdi-emoticon-happy-outline          
            >
           </v-icon>
            <v-icon color="red" dark id="reject" @click="reject(item._id)" medium >
              mdi-emoticon-sad-outline
            </v-icon>
          </tr>

          <v-dialog v-model="dialog" persistent max-width="290">
            <v-card>
              <v-card-title class="headline">
               Please be sure that before rate you are awereness what you did
              </v-card-title>
              <v-card-text
                ><v-rating
                  v-model="rating"
                  background-color="pink lighten-3"
                  color="pink"
                  large
                  half-increments
                ></v-rating>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" text @click="rate()">
                  confirm
                </v-btn>
                <v-btn color="green darken-1" text @click="dialog = false">
                  cancle
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </template>
      </v-data-table>
    </v-card>
   
  </div>
</template>

<script>
// import profileService from "@/service/profileService";
import adminService from "../../service/adminService";
export default {
  name: "QuestTable",
  props: ["questData", "qstatus", "qid"],
  methods: {
    getinfoma: async function() {
      // let re = await profileService.myquest().then((res) => {
      //   return res;
      // });
      // this.questdata = this.data;
      // console.log('table')
      // console.log("A" + this.questdata);
    },
    showAlert(a) {
      alert("Alert! \n" + a._id);
    },
    sentToDetail(value) {
      let path = "/quest/id/" + value;
      this.$router.push({ path: path });
    },
    getColor(value) {
      if (value == "waiting") return "green";
      else if (value == "in progress") return "blue";
      else if (value == "pending") return "orange";
      else return "grey";
    },
    async reject(value) {

      console.log('click reject');

      let re = await adminService.decide(value, false, this.rating).then((res) => {
        return res;
      });
      if(re){
        this.$emit('q_reElement',value)
      }
      
    },
    async rate() {
      console.log("click rate");
      this.status = true;
      this.dialog = false;
      let re = await adminService.decide(this.id_selected, this.status, this.rating).then((res) => {
        return res;
      });
      if(re){
        this.$emit('q_reElement',this.id_selected);
      }
      
    },
    show_Rate(value){
      this.id_selected = value;
      this.dialog = true;
    }
  },
  created: async function() {
    // await this.getinfoma();
    console.log(this.questData);
  },
  data() {
    return {
      id_selected : '',
      dialog: false,
      rating:0,
      status:false,
      quest: [],
      search : " ",
      headers: [
        {
          text: "Quest Name",
          value: "questname",
          align: "center",
          size: "30px",
        },
        {
          text: "Status",
          value: "status",
          align: "center",
        },
        { text: "Category", value: "category", align: "center" },
        {
          text: "Date",
          value: "date",
          align: "center",
        },
        { text: "Check", value: "category", align: "center" },
      ],
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 600px) {
  .onDesk {
    display: none;
  }
  .onMobile {
    display: block;
  }
  #itemspecial {
    display: none;
  }
}
</style>
