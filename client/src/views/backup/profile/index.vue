<template>
  <div id="profile" style="margin: 20px;">
    <v-row>
      <v-col cols="12" md="4">
        <div class="section">
          <ProfileBox
            :profileName="profileFullName"
            :profilePic="profilePic"
            :profileRate="profileRate"
            :editable="editable()"
            @uploadimg="chooseFiles"
          />

          <!-- Contact -->
          <div id="contactBox" style="margin-left: 7%; margin-right: 7%;">
            <ProfileContact
              infoName="Contact"
              infoLogo="mdi-account-circle"
              :infoData="profileContact"
              :infoKey="profileContactKey"
              :editable="editable()"
            />
          </div>
        </div>
        <v-divider></v-divider>
      </v-col>

      <v-col cols="12" md="4">
        <div class="section">
          <!-- Introduce -->
          <ProfileInfo
            infoName="Introduce"
            infoSub="Data Myself"
            infoLogo="perm_contact_cal"
            :infoData="profileInfo"
            :infoKey="profileInfoKey"
            :editable="editable()"
          >
            <v-list two-line style="max-height: 200px" class="overflow-y-auto">
              <v-card-action>
                <div v-for="items in profileInfo" :key="items.index">
                  <profileList
                    :title="items.topic"
                    :subtitle="items.desc"
                    :isDivider="false"
                  />
                </div>
              </v-card-action>
            </v-list>
          </ProfileInfo>

          <!-- Education -->
          <ProfileInfo
            infoName="Education"
            infoSub="Degreee and Department"
            infoLogo="school"
            :infoData="profileEducation"
            :infoKey="profileEducationKey"
            :editable="editable()"
          >
            <v-list two-line style="max-height: 300px" class="overflow-y-auto">
              <v-card-action>
                <div
                  v-for="(items, index) in profileEducation"
                  :key="items.index"
                >
                  <profileList
                    :title="items.branch"
                    :action="items.date"
                    :isDivider="index < profileEducation.length - 1"
                  />
                </div>
              </v-card-action>
            </v-list>
          </ProfileInfo>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <div class="section">
          <!-- Skill -->
          <ProfileInfo
            infoName="Skill"
            infoSub="Personal Ability"
            infoLogo="local_fire_department"
            :infoData="profileSkill"
            :infoKey="profileSkillKey"
            :editable="editable()"
          >
            <v-card-actions style="overflow-y: auto;">
              <v-btn
                outlined
                rounded
                text
                v-for="items in profileSkill"
                :key="items.skill"
              >
                {{ items.skill }}
              </v-btn>
            </v-card-actions>
          </ProfileInfo>

          <!-- Experience -->
          <ProfileInfo
            infoName="Experience"
            infoSub="My Work Experience"
            infoLogo="done_outline"
            :infoData="profileExperience"
            :infoKey="profileExperienceKey"
            :editable="editable()"
          >
            <v-list two-line style="max-height: 200px" class="overflow-y-auto">
              <v-card-action>
                <div
                  v-for="(items, index) in profileExperience"
                  :key="items.index"
                >
                  <profileList
                    :title="items.topic"
                    :subtitle="items.desc"
                    :action="items.date"
                    :isDivider="index < profileExperience.length - 1"
                  />
                </div>
              </v-card-action>
            </v-list>
          </ProfileInfo>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import profileService from "@/service/profileService";
import ProfileBox from "./profileBox";
import ProfileContact from "./profileContact";
import ProfileInfo from "./profileInfo";
import profileList from "./profileList";

export default {
  name: "Profile",
  components: {
    ProfileBox,
    ProfileContact,
    ProfileInfo,
    profileList,
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
      }
      else if (this.$store.getters.getuserid != "") {
        userid = this.$store.getters.getuserid;
      }
      else this.router.push({ path: "/login" });

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
  },
  created: async function() {
    await this.getinfoma();
    
    this.profilePic = "miku.gif"
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
    this.profileRate = 3;

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

<style scoped>
@import "../../styles/profile.css";

.section {
  height: auto;
}

.v-btn-add {
  font-weight: bold;
  color: white;
  background-color: cadetblue;
  border: 1px bold white;
}

#ratio {
  margin-top: 10%;
  font-size: 30px;
  font-family: "Inconsolata", monospace;
  border-bottom: 2px solid currentColor;
  display: inline-block;
  line-height: 0.85;
  text-shadow: 2px 2px white, 2px -2px white, -2px 2px white, -2px -2px white;
}
#ct_section1 td {
  width: 100%;
  text-align: left;
}
#ct_section1 tr {
  margin-left: 20%;
  position: relative;
  text-align: center;
}

@import url("https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css");
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
</style>
