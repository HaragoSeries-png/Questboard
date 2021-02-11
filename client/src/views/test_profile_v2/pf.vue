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
          <h3 style="font-weight: bold">
            Junior Jiraphat
            <span style="color: lightgrey; margin-left: 2%">@junearza007</span>
          </h3>

          <v-divider></v-divider>
          <!-- Introduce -->
          <div id="introduce">
            <h4 style="font-weight: bold">
              Introduce
            </h4>
            <div
              style="color: gray; width: auto; height: 60px; display: block; overflow-x: auto; font-size: 14px;"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit debitis ex asperiores! Sed quod ad, officiis
              consectetur tempora commodi autem tenetur ducimus unde distinctio
              iste nostrum tempore, nesciunt itaque neque.
            </div>
          </div>

          <!-- Rating -->
          <div id="rating">
            <h4 style="font-weight: bold">
              Rating
            </h4>
            <v-card-actions>
              <span style="font-size: 16px;"> ({{ rating }}) </span>
              <v-rating
                style="margin-left: 16px;"
                v-model="rating"
                background-color="#40c4ff "
                color="#40c4ff "
                dense
                readonly
                half-increments
                hover
                size="18"
              ></v-rating>
            </v-card-actions>
          </div>

          <!-- Contact -->
          <div id="contact">
            <h4 style="font-weight: bold">
              Contact
            </h4>

            <div id="contactList">
              <i
                class="fa fa-facebook-official"
                style="font-size: 30px; color: #01579b;"
              >
                <span class="contactTitle">
                  Junior Jiraphat
                </span>
              </i>

              <i class="fab fa-line" style="font-size: 30px; color: #00B900">
                <span class="contactTitle">
                  Juniorza11143
                </span>
              </i>

              <i
                class="fa fa-phone-square"
                style="font-size: 30px; color: #00e5ff "
              >
                <span class="contactTitle">
                  097-727-4455
                </span>
              </i>

              <i
                class="fas fa-envelope"
                style="font-size: 30px; color: #ef6c00"
              >
                <span class="contactTitle">
                  Jiraphat-saeheng@hotmail.com
                </span>
              </i>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>

    <v-row>
      <v-col cols="12" md="4">
        <!-- Education -->
        <div id="education">
          <h4 style="font-weight: bold">
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
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <!-- Experience -->
        <div id="experience">
          <h4 style="font-weight: bold">
            Experience
            <span style="float: right;">icon here</span>
          </h4>
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
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <!-- Skill -->
        <div id="skill">
          <h4 style="font-weight: bold">
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
        </div>
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

<style scope>
.contactTitle {
  color: black;
  margin-left: 16px;
  font-size: 15px;
  font-weight: bold;
  font-family: "Montserrat";
}

#contactList {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  margin-left: -3.5%;
}

@media screen and (max-width: 956px) {
  #contactList {
    flex-direction: column;
    margin-left: 0%;
  }
  #contactList i {
    margin-top: 2%;
  }
}
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://kit.fontawesome.com/a076d05399.js");
</style>
