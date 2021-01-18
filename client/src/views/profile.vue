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
            <div style="margin-top:2%;font-size:22px;margin-bottom:5%;">
              <v-icon style="font-size:40px; color:black;"> mdi-account-circle</v-icon>
              Contact
            </div>
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
      </v-col>

      <v-col cols="12" md="4">
        <div class="section">
          <!-- Skill -->
          <profileInfo
            infoName="Skill"
            infoSub="Personal Ability"
            infoLogo="local_fire_department"
            :infoData="profileSkill"
            :infoAttribute="profileSkillAttribute"
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
              <v-btn outlined rounded text class="v-btn-add">
                + ADD
              </v-btn>
            </v-card-actions>
          </profileInfo>

          <!-- Education -->
          <profileInfo
            infoName="Education"
            infoSub="Degreee and Department"
            infoLogo="school"
            :infoData="profileEducation"
          >
            <v-list two-line style="max-height: 300px" class="overflow-y-auto">
              <v-card-action>
                <div
                  v-for="(items, index) in profileEducation"
                  :key="items.index"
                >
                  <profileList
                    :title="items.branch"
                    subtitle="subtitle"
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
          <!-- Experience -->
          <profileInfo
            infoName="Experience"
            infoLogo="done_outline"
            :infoData="profileExperience"
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

          <!-- Introduce -->
          <profileInfo
            infoName="Introduce & Contact"
            infoSub="Personal Ability"
            infoLogo="perm_contact_cal"
          >
            <v-textarea
              readonly
              :value="value"
              style="margin: 1%;"
            ></v-textarea>
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

    if (this.profile.infoma.proimage == "") {
      this.profilePic = "miku.gif";
    } else {
      this.profilePic = "http://localhost:5000/" + this.profile.infoma.proimage;
    }

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

      profileSkill: [
        { skill: "Eat" },
        { skill: "Poop" },
        { skill: "Yed" },
        { skill: "Sleep" },
      ],
      profileSkillAttribute: ["skill"],
      profileEducation: [
        { branch: "Department of Mathematic", date: "11/11/2000" },
        { branch: "Department of Media art", date: "12/11/2000" },
        { branch: "Department of Electrical Enginering", date: "13/11/2000" },
        { branch: "Department of Media art", date: "12/11/2000" },
        { branch: "Department of Electrical Enginering", date: "13/11/2000" },
        { branch: "Department of Applied Comedy Science", date: "13/11/2000" },
      ],
      profileExperience: [
        { topic: "Diving", desc: "Diving", date: "01/01/2021" },
        { topic: "Seaplant", desc: "Sea plant", date: "01/01/2021" },
        { topic: "Election", desc: "Election", date: "01/01/2021" },
        { topic: "Podium Attck", desc: "Critical Hit", date: "01/01/2021" },
        { topic: "Podium Attck II", desc: "Normal Hit", date: "02/01/2021" },
      ],
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
