<template>
  <div id="main">
    <v-container style=" width:60%; border:1px solid black; height:100%;" >
        <!-- <div class="main"> -->

  <div id="questcreate">
    <v-container
      style=" width:60%; border:1px solid black; margin-top:5%; height:100%;"
    >
      <v-row>
        <v-col cols="12" md="12" sm="12" class="section1">
          <center>
            <h2 id="head">WANTED</h2>
            <v-hover class="pictureQuest">
              <img src="@/assets/miku.gif" />
            </v-hover>
          </center>

          <center>
            <div class="text-fill">
              <div>
                <table>
                  <tr>
                    <span id="Deadline"> Deadline </span>
                    <div><i class="material-icons">assessment</i></div>
                    <td></td>
                  </tr>

                  <tr>
                    <span id="Date"> Date : </span>
                    <td>
                      <input type="date" name="" id="I_date" />
                    </td>
                  </tr>

                  <tr>
                    <span id="Start"> Start : </span>
                    <td>
                      <input type="time" name="" id="I_start" />
                    </td>
                  </tr>

                  <tr>
                    <span id="End"> End : </span>
                    <td>
                      <input type="time" name="" id="I_end" />
                    </td>
                  </tr>

                  <tr id="main_Person">
                    <i class="material-icons">person</i>
                    <td>
                      <input
                        type="number"
                        min="0"
                        name=""
                        id="num_per"
                        v-model="numberofcon"
                      />
                    </td>
                  </tr>

                  <tr>
                    <span id="q1"> Quest name : </span>
                    <td>
                      <v-text-field
                        style="margin-bottom:5%;"
                        id="iq"
                        :rules="rules"
                        counter="25"
                        hint="Baby sister,Tutor "
                        label="Quest"
                      ></v-text-field>
                    </td>
                  </tr>

                  <tr>
                    <span id="c1"> Category : </span>
                    <td>
                      <v-select
                        :items="items"
                        id="ic"
                        label="Default"
                        style="margin-bottom:5%;"
                        dense
                      ></v-select>
                    </td>
                  </tr>

                  <tr>
                    <span id="d1">Details :</span>
                    <td>
                      <v-textarea
                        v-model="title"
                        label="More information about quest"
                        counter
                        maxlength="120"
                        filled
                        id="id"
                      ></v-textarea>
                    </td>
                  </tr>
                </table>

                <center>
                  <v-btn id="btn" x-medium color="success">
                    Create
                  </v-btn>
                </center>
              </div>
            </div>
          </center>
        </v-col>


      </v-row>
   
    </v-container>
  </div>
    <center><div id="foot">Quest Board</div></center>
    </v-container>
  </div>
  
</template>

<script>
export default {
  name: "Create Quest",
  created() {
    this.$emit('setTitle', this.$options.name)
  },
  data() {
    return {
      items: ["Crafter", "House worker", "Handicup", "Etc"],
      // Pic1: "https://pbs.twimg.com/media/EBBMoBNU4AA2DXn.jpg",
    };
  },
};
</script>

<style scoped>
.pictureQuest img {
  width: 400px;
  height: 200px;
  margin-top: 2vh;
  justify-content: center;
}
.pictureQuest {
  justify-items: center;
}
.text-fill {
  margin-top: 5%;
}
.text-fill table {
  margin-left: auto;
  margin-right: auto;
}
.text-fill table tr,
td {
  margin-top: 20%;
}
/* .text-fill table td,tr{
    border: 1px solid black;
} */
.v-text-field {
  margin-left: 4%;
  width: 200px;
  height: 50px;
  font: 20px;
}

.section2 {
  margin-top: 10%;
}

.v-textarea {
  width: 400px;
  height: 200px;
}
.v-text-field input {
  font-size: 80px;
}
#main{
  margin-top: -43%;
}
#reward {
  margin-bottom: 20px;
  font-size: 18px;
}
#Deadline {
  font-size: 18px;
  padding-top: 30px;
}

.main {
  width: 100%;
  align-content: center;
  border-left: 1px solid black;
  border-right: 1px solid black;

}
#I_date {
  margin-left: 7px;
  border: 1px solid black;
  margin-bottom: 10px;
}
#Start {
  font-size: 18px;
}
#End {
  font-size: 18px;
}
#foot {
  font-family: "Redressed", cursive;
  font-size: 20px;
  margin-top: 1%;
}
#Date {
  font-size: 18px;
}
#head {
  text-decoration: underline;
  font-family: "Roboto Mono", monospace;
  letter-spacing: 1px;
  font-size: 30px;
}
#I_start {
  margin-left: 7px;
  margin-top: 5px;
  border: 1px solid black;
  border-radius: 8%;
  margin-bottom: 10px;
}
#I_end {
  margin-left: 7px;
  margin-top: 5px;
  border: 1px solid black;
  border-radius: 8%;
  margin-bottom: 10px;
}
/* .text-fill table tr,td{
    border: 1px solid black;
} */
#num_per {
  margin-top: 5px;
  margin-left: 7px;
  border: 1px solid black;
  width: 50px;
  padding-left: 10px;
  margin-bottom: 10px;
}
#q1 {
  font-size: 18px;
}
#c1 {
  font-size: 18px;
}
#d1 {
  font-size: 18px;
}

#btn {
  margin-top: 10%;
}
#iq {
  margin-bottom: 5;
}
</style>
