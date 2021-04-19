<template>
  <div id="profile" style="margin: 16px;">
    <v-row>
      <v-col cols="12" md="4">
        <!-- Picture -->
        <ProfileBox :profilePic="profilePic" :editable="editable()" />
      </v-col>

      <v-col cols="12" md="8">
        <div>
          <h3 style="font-weight: bold;text-transform:upperCase;">
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
              style="color: gray; width: auto; min-height: 60px; display: block; font-size: 14px;"
            >
              <div id="informationField" v-if="!introBox">
                {{ introNullCheck(profileInfo) }}
              </div>

              <v-text-field
                v-if="introBox"
                v-model="profileInfoEdit"
                autocomplete="off"
                counter
                maxlength="120"
              ></v-text-field>
              <div v-if="introBox" style="float: right;">
                <a @click="sendInformation()">Save</a>
                &nbsp;
                <a @click="introEdit(false)">Cancel</a>
              </div>

              <br /><a v-if="!introBox && editable()" @click="introEdit(true)"
                >Edit</a
              >
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
          <div id="profileContact" style="padding-top: 1%;">
            <h4 style="font-weight: bold">
              Contact
              <v-dialog v-model="contactEditBox" v-if="editable()" width="500">
                <template v-slot:activator="{ on }">
                  <a v-on="on" style="float: right;">Edit</a>
                </template>
                <ProfileFromContact
                  infoName="Contact"
                  :infoData="profileContact"
                  :infoKey="profileContactKey"
                  infoIndex="0"
                  @sentUpdateObject="sendContact"
                  @requestClose="contactEditBox = !contactEditBox"
                />
              </v-dialog>
            </h4>

            <div id="contactList">
              <ContactBox
                Title="Facebook"
               
                :Detail="profileContact.facebook"
              />
              <ContactBox
                Title="LINE"
            
                :Detail="profileContact.line"
              />
              <ContactBox
                Title="Call"
              
                :Detail="profileContact.call"
              />
              <ContactBox
                Title="E-mail"
            
                :Detail="profile.email"
              />
            </div>
            <div
              id="contactField"
              style="color: gray; width: auto; display: block; font-size: 14px;"
             
            >
             
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

import Swal from "sweetalert2";

import ProfileInfo from "./profileInfo";
import ProfileBox from "./profileBox";
import ProfileFromContact from "./profileFromContact";
import ContactBox from "@/components/layout/profile/contactBox";

export default {
  name: "Profile",
  components: {
    ProfileInfo,
    ProfileBox,
    ProfileFromContact,
    ContactBox,
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
    sendInformation: async function() {
      if (this.profileInfoEdit) {
        let formData = {};

        formData.intro = this.profileInfoEdit;

        let suc = await profileService.editprofile(formData).then((res) => {
          return res;
        });

        if (suc) {
          this.profileInfo = this.profileInfoEdit;
          this.introEdit(false);
        }
      }
    },
    sendContact: async function(value) {
      if (this.profileContact) {
        let formData = {};

        formData.contact = value;

        let suc = await profileService.editprofile(formData).then((res) => {
          return res;
        });

        if (suc) {
          this.profileContact = value;
          Swal.fire(
            "<alert-title>Complete!</alert-title>",
            "<alert-subtitle>Data Updated.</alert-subtitle>",
            "success"
          );
        } else {
          Swal.fire(
            "<alert-title>Error!</alert-title>",
            "<alert-subtitle>Something wrong.</alert-subtitle>",
            "error"
          );
          this.$router.go();
        }
      }
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
    introEdit(value) {
      this.profileInfoEdit = this.profileInfo;
      this.introBox = value;
    },
    introNullCheck(value) {
      if (value == "") return "-- No Introduce Given --";
      else return value;
    },
    contactNullCheck() {
      if (Object.keys(this.profileContact).length === 0) return true;
      else return false;
    },
  },
  created: async function() {
    await this.getinfoma();

    this.profilePic = "miku.gif";
    if (this.profile.infoma.proimage)
      this.profilePic = this.$store.state.gurl + this.profile.infoma.proimage;

    console.log("Pic " + this.profilePic);

    if (this.profile.infoma.skill)
      this.profileSkill = this.profile.infoma.skill;
    if (this.profile.infoma.education)
      this.profileEducation = this.profile.infoma.education;
    if (this.profile.infoma.exp)
      this.profileExperience = this.profile.infoma.exp;
    if (this.profile.infoma.contact)
      this.profileContact = this.profile.infoma.contact;
    if (this.profile.infoma.introduce)
      this.profileInfo = this.profile.infoma.introduce;

    this.profileFullName =
      this.profile.infoma.firstname + " " + this.profile.infoma.lastname;
    this.profileRate =this.profile.rating.rate;

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

      profileInfo: "",
      profileInfoEdit: "",
      profileSkill: [],
      profileSkillKey: ["skill"],
      profileEducation: [],
      profileEducationKey: ["branch", "date"],
      profileExperience: [],
      profileExperienceKey: ["topic", "desc", "date"],
      profileContact: {},
      profileContactKey: ["facebook", "line", "call", "email"],

      dialog: false,

      introBox: false,
      contactEditBox: false,
    };
  },
};
</script>

<style>
@import "../../styles/profile.css";

a {
  font-size: 14px;
  font-weight: bold;
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
  margin-left: -1.5%;
}
.iconDetails {
  margin-left: 2%;
  float: left;
  height: 40px;
  width: 40px;
}

.container2 {
  width: 50%;
  height: 85px;
  padding: 1%;
  padding: 16px;
  background-color: #ececec;
  border: 5px solid white;
  border-radius: 13px;
}

h4 {
  margin: 0px;
}

@media screen and (max-width: 956px) {
  #contactList {
    flex-direction: column;
    margin-left: -3.5%;
  }
  #contactList i {
    margin-top: 2%;
  }
  .container2 {
    background-color: white;
  }
}

@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>

<style scoped>
h4 {
  font-weight: bold;
}
</style>
