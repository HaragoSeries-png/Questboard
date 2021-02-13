<template>
  <div style="margin:16px;">
    <v-row>
      <v-col cols="12" md="4">
        <center>
          <div style="padding: 16px;">
            <v-img
              style="margin-top:3%;"
              full-width
              width="400"
              height="300"
              :src="profilePic"
            ></v-img>
          </div>
        </center>
      </v-col>

      <v-col cols="12" md="8">
        <div>
          <h3 style="font-weight: bold">
            {{ profileFullName }}
            <!-- <span style="color: lightgrey; margin-left: 2%">@junearza007</span> -->
          </h3>
          <v-divider></v-divider>

          <!-- Introduce -->
          <div id="profileIntroduce">
            <h4 style="font-weight: bold">
              Introduce
            </h4>
            <div
              style="color: gray; width: auto; height: 60px; display: block; overflow-x: auto; font-size: 14px;"
            >
              -- Under Construction --
            </div>
          </div>

          <!-- Rating -->
          <div id="profileRating" style="padding-top: 1%">
            <h4 style="font-weight: bold">
              Rating
            </h4>
            <v-card-actions>
              <span style="font-size: 16px;"> ({{ profileRate }}) </span>
              <v-rating
                style="margin-left: 16px;"
                v-model="profileRate"
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
          <div id="profileContact" style="padding-top: 1%">
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

          <v-list style="height: 200px; overflow-x: auto;">
            <template v-for="(item, index) in profileEducation">
              <v-list-item :key="item.index">
                <v-list-item-content
                  style="margin-left: -15px; text-align: left;"
                >
                  <v-list-item-subtitle
                    v-html="item.date"
                    style="margin-top: -13px; font-size: 15px; color: #ffab40"
                  ></v-list-item-subtitle>
                  <v-list-item-title
                    v-html="item.branch"
                    style="font-size: 15px; padding-top: 4px;"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.branch"
                    style="font-size: 15px; padding-top: 4px;"
                  ></v-list-item-subtitle>
                  <v-divider v-if="index != profileEducation.length - 1"></v-divider>
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

          <v-list style="height: 200px; overflow-x: auto;">
            <template v-for="(item, index) in profileExperience">
              <v-list-item :key="item.date">
                <v-list-item-content
                  style="margin-left: -15px; text-align: left;"
                >
                  <v-list-item-subtitle
                    v-html="item.date"
                    style="margin-top: -13px; font-size: 15px; color: #ffab40"
                  ></v-list-item-subtitle>
                  <v-list-item-title
                    v-html="item.topic"
                    style="font-size: 15px; padding-top: 4px;"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.desc"
                    style="font-size: 15px; padding-top: 4px;"
                  ></v-list-item-subtitle>
                  <v-divider v-if="index != profileExperience.length - 1"></v-divider>
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

          <span style="font-size: 15px; text-transform: uppercase" v-for="item in profileSkill" :key="item.index">
            {{ item.skill }}
            <span v-if="index != profileSkill.length - 1"> / </span>
          </span>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
import profileService from "@/service/profileService";

export default {
  name: "pf",
  watch: {
    "$route.params.id": function() {
      this.$router.go();
    },
  },
  methods: {
    getinfoma: async function() {
      let userid = "";

      if (this.$route.params.id) {
        userid = this.$route.params.id;
      } else if (this.$store.getters.getuserid != "") {
        userid = this.$store.getters.getuserid;
      } else this.router.push({ path: "/login" });

      let re = await profileService.getprofile(userid).then((res) => {
        return res;
      });

      this.profile = re.user;
    },
    editable() {
      return this.$route.params.id == this.$store.getters.getuserid;
    },
    add() {
      this.$store.dispatch("set");
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
  },
  created: async function() {
    await this.getinfoma();

    this.profilePic = "miku.gif";
    if (this.profile.infoma.proimage != "")
      this.profilePic = this.$store.state.gurl + this.profile.infoma.proimage;

    if (this.profile.infoma.skill != "")
      this.profileSkill = this.profile.infoma.skill;
    if (this.profile.infoma.education != "")
      this.profileEducation = this.profile.infoma.education;
    if (this.profile.infoma.exp != "")
      this.profileExperience = this.profile.infoma.exp;
    if (this.profile.infoma.desc != "")
      this.profileInfo = this.profile.infoma.desc;
    if (this.profile.infoma.contact != "")
      this.profileContact = this.profile.infoma.contact;

    this.profileFullName =
      this.profile.infoma.firstname + " " + this.profile.infoma.lastname;
    this.profileRate = 4.3;

    let usertitle = this.profile.infoma.firstname;
    if (usertitle) this.$emit("setTitle", usertitle + "'s Profile");
    else this.$emit("setTitle", this.$options.name);
  },
  data() {
    return {
      profile: "",
      profileFullName: "",
      profilePic: "",
      profileRate: 0,

      profileInfo: [],
      profileInfoKey: ["topic", "desc"],
      profileSkill: [],
      profileSkillKey: ["skill"],
      profileEducation: [],
      profileEducationKey: ["branch", "date"],
      profileExperience: [],
      profileExperienceKey: ["topic", "desc", "date"],
      profileContact: [],
      profileContactKey: ["con", "val"],

      dialog: false,
    };
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
