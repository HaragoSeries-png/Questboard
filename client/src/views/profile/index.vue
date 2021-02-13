<template>
  <div style="margin:16px;">
    <v-row>
      <v-col cols="12" md="4">
        <!-- Picture -->
        <ProfileBox :profilePic="profilePic" :editable="editable()" />
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
              -- No Introduce Given --
              <br /><a @click="testedit()">Edit</a>
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
              <a style="float: right;">Edit</a>
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
        <div id="profileEducation">
          <ProfileInfo
            infoName="Education"
            :infoData="profileEducation"
            :infoKey="profileEducationKey"
            :editable="editable()"
          >
            <v-list
              v-if="profileEducation.length != 0"
              style="height: 200px; overflow-x: auto;"
            >
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
                    <v-divider
                      v-if="index != profileEducation.length - 1"
                    ></v-divider>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
            <div
              style="color: gray; width: auto; height: 200px; display: block; overflow-x: auto; font-size: 14px;"
              v-else
            >
              -- No Data Given --
            </div>
          </ProfileInfo>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <!-- Experience -->
        <div id="profileExperience">
          <ProfileInfo
            infoName="Experience"
            :infoData="profileExperience"
            :infoKey="profileExperienceKey"
            :editable="editable()"
          >
            <v-list
              v-if="profileExperience.length != 0"
              style="height: 200px; overflow-x: auto;"
            >
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
                    <v-divider
                      v-if="index != profileExperience.length - 1"
                    ></v-divider>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
            <div
              style="color: gray; width: auto; height: 200px; display: block; overflow-x: auto; font-size: 14px;"
              v-else
            >
              -- No Data Given --
            </div>
          </ProfileInfo>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <!-- Skill -->
        <div id="profileSkill">
          <ProfileInfo
            infoName="Skills"
            :infoData="profileSkill"
            :infoKey="profileSkillKey"
            :editable="editable()"
          >
            <span
              style="font-size: 15px; text-transform: uppercase"
              v-for="(item, index) in profileSkill"
              :key="item.index"
            >
              {{ item.skill }}
              <span v-if="index != profileSkill.length - 1"> / </span>
            </span>
            <div
              style="color: gray; width: auto; height: 200px; display: block; overflow-x: auto; font-size: 14px;"
              v-if="profileSkill.length == 0"
            >
              -- No Data Given --
            </div>
          </ProfileInfo>
        </div>
      </v-col>
    </v-row>
    <v-divider></v-divider>
  </div>
</template>

<script>
import profileService from "@/service/profileService";

import ProfileInfo from "./profileInfo";
import ProfileBox from "./profileBox";

export default {
  name: "pf",
  components: {
    ProfileInfo,
    ProfileBox,
  },
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
    testedit() {
      console.log("testing");
    },
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
  },
  created: async function() {
    await this.getinfoma();

    this.profilePic = "miku.gif";
    if (this.profile.infoma.proimage)
      this.profilePic = this.$store.state.gurl + this.profile.infoma.proimage;

    if (this.profile.infoma.skill)
      this.profileSkill = this.profile.infoma.skill;
    if (this.profile.infoma.education)
      this.profileEducation = this.profile.infoma.education;
    if (this.profile.infoma.exp)
      this.profileExperience = this.profile.infoma.exp;
    if (this.profile.infoma.desc) this.profileInfo = this.profile.infoma.desc;
    if (this.profile.infoma.contact)
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
@import "../../styles/profile.css";

a {
  font-size: 14px;
}

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
