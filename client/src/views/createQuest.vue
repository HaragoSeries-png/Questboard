<template>
  <div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="6" class="section1">
          <center><h2 id="head">WANTED</h2></center>
          <center>
            <div class="pictureQuest">
              <img v-bind:src="Pic1" />
            </div>
          </center>

          <div class="fill-text">
            <table>
              <tr>
                Reward :
                <td><input type="text" /></td>
              </tr>
              Deadline
              <div><i class="material-icons">assessment</i></div>
              <tr>
                Date :
                <td>
                  <input type="date" />
                </td>
              </tr>
              <tr>
                Start Quest :
                <td>
                  <input type="time" />
                </td>
              </tr>
              <tr>
                End Quest :
                <td>
                  <input type="time" />
                </td>
              </tr>
              <tr>
                <i class="material-icons">person</i>
                <td>
                  <input type="number" min="0" name="" id="" />
                </td>
              </tr>
            </table>

            <center><div id="foot">Quest Board</div></center>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <div class="section2">
            <div class="fill-text2">
              <table>
                <tr id="main_Quest_name">
                  Quest name :
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr id="main_Category">
                  Category :
                  <td>
                    <select id="category" name="category">
                      <option value="Warin">Warin</option>
                      <option value="Chukiat">Chukiat</option>
                      <option value="Wiwat">Wiwat</option>
                      <option value="Wiboonsak">Wiboonsak</option>
                    </select>
                  </td>
                </tr>
                <tr id="main_Details">
                  Details :
                  <td>
                    <div class="S_card">
                      <textarea>
                      </textarea> 
                    </div>
                  </td>
                </tr>
              </table>
            </div>
           
            <center><div id="foot">Quest Board</div></center>
             <center id="btn">
              <v-btn x-medium class="success">
                Create
              </v-btn>
            </center>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "createQuest",
  data() {
    return {
      Pic1:
        "https://scontent.fbkk9-2.fna.fbcdn.net/v/t1.0-9/133938314_2872986902934842_460214208886165488_o.jpg?_nc_cat=1&ccb=2&_nc_sid=730e14&_nc_eui2=AeE1cE1W5Y5x9Iz4fYutlkE5bs8Lw3bRmyhuzwvDdtGbKNSmrlNumUBHIhtSLLSpz6AxnEaV8ilRriR8eKmpPErx&_nc_ohc=OieJ_lBVLn8AX99otvG&_nc_ht=scontent.fbkk9-2.fna&oh=46edfe6a4c0b32a2c9390e7fe68564d8&oe=601BBF1E",
    };
  },
};
</script>

<style scoped>
* {
  font-family: sans-serif;
}
@import "../styles/profile.css";

.pictureQuest img {
  width: 500px;
  height: 300px;
  margin-top: 2vh;
  justify-content: center;
}
.pictureQuest {
  justify-items: center;
}
.section1 {
  height: 100%;
  overflow-y: hidden;
  border: 1px solid black;

  border-radius: 1%;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 1%;
  padding-bottom: 2%;
}
.section2 {
  height: 100vh;
  border: 1px solid black;
  border-radius: 1%;
  padding-left: 2%;
  padding-right: 2%;
  padding-top: 1%;
  padding-bottom: 2%;
  margin-top: -1.5%;
  margin-left: -1.7%;
  margin-right: -1.7%;
}
.fill-text {
  margin-top: 5%;
}
.fill-text2 {
  padding-top: 10%;
}
.fill-text table {
  margin-left: auto;
  margin-right: auto;
}

table input {
  height: 20px;
  color: black;
  border: 1px solid black;
  margin-left: 2%;
  padding-left: 5%;
}

#head {
  text-decoration: underline;
  font-family: "Roboto Mono", monospace;
  letter-spacing: 2px;
  font-size: 40px;
}
#foot {
  font-family: "Redressed", cursive;
  font-size: 20px;
  margin-top: 2%;
}
#category {
  border: 1px solid black;
  margin-left: 2%;
  font-size: 15px;
  margin-bottom: 10%;
}

#main_Details {
  font-size: 20px;
}
#main_Quest_name {
  font-size: 20px;
}
#main_Category {
  font-size: 20px;
}
.fill-text2 table {
  margin-left: 10%;
}
#btn{
  margin-top: 10%;
  
}
.S_card textarea{
  margin-left: 1%;
  width: 300px;
  height: 250px;
  border: 1px solid black;
}
</style>
