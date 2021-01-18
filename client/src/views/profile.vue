<template>
  <div id="profile" style="margin: 20px">
    <v-row>
      <v-col cols="12" md="4">
        <div class="section">
          <profileBox
            :profileName="profileFullName"
            :profilePic="profilePic"
            :profileRate="profileRate"
            @uploadimg="chooseFiles"
          />

          <!-- Contact section -->
          <center>
           <v-divider></v-divider>
            <div style="margin-top:6%;font-size:22px;margin-bottom:5%;">
              <v-icon style="font-size:40px; color:black;"> mdi-account-circle</v-icon>
              Contact
            </div>
             <v-divider></v-divider>
          </center>
          <center>
          <div id="ct_section1" >
          <div style="margin-bottom:2%;">
          <tr>
            <v-img :width="35" src="Facebook_img_n2.webp" :aspect-ratio="1/1" ></v-img>
            <td > <span style="margin-left:20%;font-size:18px;">Junior Jiraphat</span>    </td>
          </tr>
          </div>


          <div style="margin-bottom:2%;"  >
          <tr   >
            <v-img :width="35" src="Line_img_n1.webp" :aspect-ratio="1/1"  ></v-img>
            <td><span style="margin-left:20%;font-size:18px;">Junior1143</span></td>
          </tr>
           </div>
           <div style="margin-bottom:2%;"   >
          <tr><v-img :width="30" src="call_img_n1.png" :aspect-ratio="1/1"   ></v-img>
            <td>
              <span style="margin-left:21%; font-size:18px;">094-727-0000</span>
            </td>
          </tr>
          </div>
          <div style="margin-bottom:2%;"   >
          <tr><v-img :width="35" src="Email_img_n2.jpg" :aspect-ratio="1/1"></v-img>
            <td>
                <span style="margin-left:20%;font-size:18px;">Jiraphat-saeheng@hotmail.com</span>
            </td>
          </tr>
         </div>
         </div>
          </center>
        </div>
         <v-divider></v-divider>
      </v-col>

      <v-col cols="12" md="4">
        <div class="section">
          <!-- Introduce -->
          <profileInfo
            infoName="Introduce"
            infoSub="Data Myself"
            infoLogo="perm_contact_cal"
            :infoData="profileInfo"
            :infoKey="profileInfoKey"
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
          </profileInfo>

          <!-- Education -->
          <profileInfo
            infoName="Education"
            infoSub="Degreee and Department"
            infoLogo="school"
            :infoData="profileEducation"
            :infoKey="profileEducationKey"
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
          </profileInfo>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <div class="section">
          <!-- Skill -->
          <profileInfo
            infoName="Skill"
            infoSub="Personal Ability"
            infoLogo="local_fire_department"
            :infoData="profileSkill"
            :infoKey="profileSkillKey"
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
          </profileInfo>

          <!-- Experience -->
          <profileInfo
            infoName="Experience"
            infoSub="My Work Experience"
            infoLogo="done_outline"
            :infoData="profileExperience"
            :infoKey="profileExperienceKey"
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
          </profileInfo>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import profileService from "../service/profileservice";
import profileBox from "@/components/layout/profile/profileBox";
import profileInfo from "@/components/layout/profile/profileInfo";
import profileList from "@/components/layout/profile/profileList";

export default {
  name: "Profile",
  components: {
    profileBox,
    profileInfo,
    profileList,
  },
  methods: {
    getinfoma: async function() {
      let re = await profileService.getprofile().then((res) => {
        return res;
      });
      this.profile = re.user;
    },
    add() {
      this.$store.dispatch("set");
    },
  },
  created: async function() {
    await this.getinfoma();

    if (this.profile.infoma.proimage != "")
      this.profilePic = "http://localhost:5000/" + this.profile.infoma.proimage;
    else this.profilePic = "miku.gif";

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
    };
  },
};
</script>

<style scope>
@import "../styles/profile.css";

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
#ct_section1 tr{
  margin-left: 20%;
  position: relative;
  text-align: center;
}
@import url("https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css");
@import url("https://use.fontawesome.com/releases/v5.0.13/css/all.css");
</style>
