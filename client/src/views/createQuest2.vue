<template>
  <div id="main" style="margin:20px;">
    <v-container>
      <!-- <div class="main"> -->

      <div id="questcreate">
        <v-container
          style="height:100%;"
        >
          <v-row>
            <v-col cols="12" md="6"  class="section1">
              
              <center>
                <h2 id="head">Create your quest</h2>
                <div
                  class="d-flex flex-column justify-space-between align-center"
                >
                  <v-img
                    :aspect-ratio="16 / 14"
                    :width="width"
                    src="../assets/miku.gif"
                    style="margin-top : 3%;"
                  
                    
                  ></v-img>
                    <v-slider
                    v-model="width"
                    class="align-self-stretch"
                    min="300"
                    max="500"
                    step="1"
                    style="margin-top:5%;"
                    color="#e3b069"
                    
                  ></v-slider>
                </div>
              </center>

              <center>
                <div class="text-fill">
                  <div>
                    <table>
                     
                      <tr>
                        <span id="Deadline"> Deadline </span>
                        <div><i class="matemrial-icons">assessment</i></div>
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
                    </table>
                  </div>
                </div>
              </center>
                  </v-col>

                  <v-col cols="12" md="6" >
                    
                    <div class="section2">
                      <tr>
                        <span id="q1"> Quest name : </span>
                        <td>
                          <v-text-field
                            style="margin-bottom:5%;margin-left:0.5%"
                            id="iq"
                            :rules="rules"
                            counter="25"
                            hint="Baby sister,Tutor "
                            placeholder="Quest"
                          
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
                            style="margin-bottom:0%;margin-left:0.5%"
                            dense
                          ></v-select>
                        </td>
                      </tr>
                         <tr>
                        <span id="q1"> Reward : </span>
                        <td>
                          <v-text-field
                            style="margin-bottom:5%;margin-left:0.5%"
                            id="iq"
                            :rules="rules"
                            counter="50"
                            placeholder="Prize for helper"
                          
                          ></v-text-field>
                        </td>
                      </tr>
                      <tr>
                        <span id="d1">Details :</span>
                        <td>
                          <v-textarea
                           style="margin-bottom:5%;margin-left:0.5%"
                            v-model="title"
                            
                             placeholder="More information about quest"
                            counter
                            maxlength="120"
                            filled
                            id="id"
                          ></v-textarea>
                        </td>
                      </tr>
                  
                  </div>
                    <center>
                      <v-btn id="btn" x-medium color="success">
                        Create
                      </v-btn>
                    </center>
                   <center><div id="foot">Quest Board</div></center>
              </v-col>
            
          </v-row>
        </v-container>
      </div>
     
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Create Quest",
  created() {
    this.$emit("setTitle", this.$options.name);
  },
  data() {
    return {
      items: ["Crafter", "House worker", "Handicup", "Etc"],
      Pic1: "https://pbs.twimg.com/media/EBBMoBNU4AA2DXn.jpg",
      width: 300
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
  margin-top: 15%;
}

.v-textarea {
  width: 400px;
  height: 200px;
}
.v-text-field input {
  font-size: 80px;
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
  margin-top: 15%;
}
#Date {
  font-size: 18px;
}
#head {
  text-decoration: underline;
 font-family: 'Source Sans Pro', sans-serif;
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
#iq {
  margin-bottom: 5;
}
@media only screen and (max-width: 600px) {
  #main{
    width: auto;
    height: auto;
  }
  .v-textarea{
    width: 150px;
    height: 150px;
  }
}


@import url(https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital@1&display=swap);



</style>
