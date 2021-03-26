<template>
  <div id="questfeed">
    noti here {{noti}}
    <v-form>
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <div style="display: none;">
              <v-file-input
                truncate-length="15"
                label="image"
                width="50%"
                v-model="files"
                @change="onFileChange"
                id="fileUpload"
              ></v-file-input>
            </div>
          </v-col>
          <v-spacer></v-spacer>
          <v-img
          
          ></v-img>
          <v-img
          src=miku.gif
          >{{gurl}}</v-img>
          <v-btn @click="sendim">
            submit
          </v-btn>
          <v-btn @click="getinfoma">profile</v-btn>
        </v-row>
        <v-row> </v-row>
      </v-container>
    </v-form>

    <v-img
      max-height="200"
      max-width="200"
     
      @click="chooseFiles()"
      >hee</v-img
    >

    <div id="preview">
      <v-img v-if="url" :src="url" max-height="250" max-width="250"></v-img>
    </div>
    <v-dialog width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" v-on="on">botton</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title
          >Add a New Project</v-card-title
        >
      </v-card>
    </v-dialog>
    <button v-on:keyup.enter="loo" id="sss">butt </button>
  </div>
</template>

<script>
import QuestService from "@/service/questService";
import profileService from "@/service/profileService";

export default {
  name: "Quest Feed",
  methods: {
    async getnoti(){
      let noti = await profileService.getnoti().then((res) => {
        return res;
      });
      this.noti = noti
    },
    add() {
      this.$store.dispatch("set");
    },
    sendim: async function() {
      if (this.files) {
        alert("inn");
        let formData = new FormData();

        // files
        formData.append("image", this.files);

        // additional data
        formData.append("questname", "foo bar");

        let suc = await QuestService.createquest(formData).then((res) => {
          return res;
        });
        console.log("logsuc" + suc);

        if (suc) this.$router.push({ path: "/login" });
        else alert("fail");
      } else console.log("there are no files.");
    },
    onFileChange() {
      if (this.files != null) {
        const file = this.files;
        console.log(file);
        this.url = URL.createObjectURL(file);
      }
    },
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    getinfoma: async function() {
      console.log("gett");
      let re = await profileService.getprofile().then((res) => {
        return res;
      });
      console.log("dadsaaaaaaa" + re);
      if (re.suc) {
        console.log(re.infoma);
        alert("yeah");
      } else alert("fail");
    },
    loo(){
      alert('hh')
    },
    nextPlease: function () {
      alert('ee')
      document.getElementById('sss').focus();
    }
  },
  created() {
    this.$emit("setTitle", this.$options.name);
    this.nextPlease()
  },
  data() {
    return {
      count: this.$store.getters.getcount,
      files: null,
      url: null,
      noti:''
    };
  },
};
</script>

<style scoped></style>
