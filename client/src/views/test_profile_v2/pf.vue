<template>
  <div style="margin:16px;">
    <v-row>
      <v-col cols="12" md="4">
        <center>
          <div style="padding:16px;">
            <v-img
              style="margin-top:3%;"
              full-width
              width="400"
              height="300"
              src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/146948856_2181343888671237_7644784523041324727_n.jpg?_nc_cat=105&ccb=3&_nc_sid=8bfeb9&_nc_eui2=AeEFnx2Bp8bco0hSuz7rK0rmXjlWcXP0oi5eOVZxc_SiLsEXvGT5XmkCSe5wTswB3cTYZFaR1TjIYiXfs1kRweR2&_nc_ohc=WexSe42sSioAX_MmvEh&_nc_ht=scontent.fbkk13-1.fna&oh=23889b7019e69bb9a7bdd1098de0ddf8&oe=6049E801"
            ></v-img>
          </div>
        </center>
      </v-col>
      <v-col cols="12" md="8">
        <div>
          <h3 style="margin-top:2.5%;">
            Junior Jiraphat
          </h3>
        
          <h4 style="margin-top:10px;">
            Introduce
          </h4>
          <div
            style="color:gray;width:auto;margin-top:5px;height:60px;display:block;overflow-x:auto;font-size:13.28px;"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit debitis ex asperiores! Sed quod ad, officiis
            consectetur tempora commodi autem tenetur ducimus unde distinctio
            iste nostrum tempore, nesciunt itaque neque.
          </div>
          <h4>
            Ranking
          </h4>
          <v-card-actions>
            <span style="font-size:15px;">
              {{ rating }}
            </span>
            <v-rating
              style="margin-left:16px;"
              v-model="rating"
              background-color="#40c4ff "
              color="#40c4ff "
              dense
              half-increments
              hover
              size="18"
            ></v-rating>
          </v-card-actions>
          <h4>
            Contact
          </h4>
          <div id="contact">
            <div class="container2">
              <div>
                <img
                  src="http://ecx.images-amazon.com/images/I/21-leKb-zsL._SL500_AA300_.png"
                  class="iconDetails"
                />
              </div>
              <div style="margin-left:60px;">
                <h4>Facebook</h4>
                <div style="font-size:.6em">
                  Junior Jiraphat
                </div>
              </div>
            </div>

            <div class="container2">
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/600px-LINE_logo.svg.png"
                  class="iconDetails"
                />
              </div>
              <div style="margin-left:60px;">
                <h4>Line</h4>
                <div style="font-size:.6em">
                  junearza1143
                </div>
              </div>
            </div>

            <div class="container2">
              <div>
                <img
                  src="https://smallroomstudio.com/wp-content/uploads/2019/10/call-icon.png"
                  class="iconDetails"
                />
              </div>
              <div style="margin-left:60px;">
                <h4>Call</h4>
                <div style="font-size:.6em">
                094-727-4455
                </div>
              </div>
            </div>
            <div class="container2">
              <div>
                <img
                  src="https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png"
                  class="iconDetails"
                />
              </div>
              <div style="margin-left:60px;">
                <h4>Email</h4>
                <div style="font-size:.6em">
                    Jiraphat-saeheng@hotmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12" md="4">
        <h4>
          Education
        </h4>
        <v-divider></v-divider>
        <v-list style="height:200px;overflow-x:auto;">
          <template v-for="item in items">
            <v-list-item :key="item.title">
              <v-list-item-content style="margin-left:-15px;text-align:left;">
                <v-list-item-subtitle
                  v-html="item.Year"
                  style="margin-top:-13px;font-size:15px;color:#ffab40"
                ></v-list-item-subtitle>
                <v-list-item-title
                  v-html="item.University"
                  style="font-size:15px;padding-top:4px;"
                ></v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.Branch"
                  style="font-size:15px;padding-top:4px;"
                ></v-list-item-subtitle>

                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
      <v-col cols="12" md="4">
        <h4>Experience <span style="float:right;"> icon here </span></h4>
        <v-spacer></v-spacer>

        <v-divider></v-divider>
        <v-list style="height:200px;overflow-x:auto;">
          <template v-for="item in Exp">
            <v-list-item :key="item.date">
              <v-list-item-content style="margin-left:-15px;text-align:left;">
                <v-list-item-title
                  v-html="item.date"
                  style="font-size:15px;color:#ffab40"
                ></v-list-item-title>
                <v-list-item-subtitle
                  v-html="item.header"
                  style="font-size:15px;margin-top:0%;"
                ></v-list-item-subtitle>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-col>
      <v-col cols="12" md="4">
        <h4>
          Skills
        </h4>
        <v-divider></v-divider>
        <v-combobox
          color="primary"
          style="overflow-x:auto;height:200px;"
          v-model="chips"
          :items="something"
          clearable
          multiple
          solo
        >
          <template v-slot:selection="{ attrs, item, select, selected }">
            <v-chip
              color="#ff80ab"
              v-bind="attrs"
              :input-value="selected"
              close
              @click="select"
              @click:close="remove(item)"
            >
              <strong>{{ item }}</strong
              >&nbsp;
            </v-chip>
          </template>
        </v-combobox>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "pf",
  data() {
    return {
      rating: 4.3,
      items: [
        {
          University: "King monkhut university of technology thonburi",
          Branch: `Computer Science`,
          Year: "2000-2004",
        },
        {
          University: "Kmutt",
          Branch: `Computer Science`,
          Year: "2000-2004",
        },
        {
          University: "Brunch this weekend?",
          Branch: `Computer Science`,
          Year: "2000-2004",
        },
        {
          University: "Brunch this weekend?",
          Branch: `Computer Science`,
          Year: "2000-2004",
        },
      ],
      Exp: [
        { date: "10/10/10 - 12/10/10", header: "Project Manager" },
        { date: "10/10/10 - 12/10/10", header: "Project Manager" },
        { date: "10/10/10 - 12/10/10", header: "Project Manager" },
        { date: "10/10/10 - 12/10/10", header: "Project Manager" },
        { date: "10/10/10 - 12/10/10", header: "Project Manager" },
        { date: "10/10/10 - 12/10/10", header: "Project Manager" },
        { date: "10/10/10 - 12/10/10", header: "Project Manager" },
      ],
      chips: [],
      something: ["Handicraft", "Programmer"],
    };
  },
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
  },
};
</script>

<style scoped>
#contact {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  margin-left:-1.5%;
}

@media screen and (max-width: 956px) {
  #contact {
    flex-direction: column;
    margin-left: 0%;
  }
  #contact i {
    margin-top: 2%;
  }
}

.iconDetails {
  margin-left: 2%;
  float: left;
  height: 40px;
  width: 40px;
}

.container2 {
  width: 100%;
  height: auto;
  padding: 1%;
}

h4 {
  margin: 0px;
}

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>
