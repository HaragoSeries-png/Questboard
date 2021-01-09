<template>
<v-app>
<div>
  <div class="w3-col m4  w3-center">

    <div class="container1">
      <v-container>
        

        
         
            <v-img  class="rounded-circle mx-auto mt-6" :aspect-ratio="1/1" max-width= 300 src="http://localhost:5000/2021-01-06T12-45-36.660Zmiku.gif" v-if="!ch" @click="chooseFiles" ></v-img>
            <v-img class="rounded-circle mx-auto mt-6" :aspect-ratio="1/1" max-width= 300   v-if="url" :src="url" @click="chooseFiles" ></v-img>
            <!-- <v-img
          max-height="200"
          max-width="200"
          src="http://localhost:5000/2021-01-06T12-45-36.660Zmiku.gif"
          @click="chooseFiles()"
      >hee</v-img> -->
            <div style="display: none;">
                    <v-file-input
                      truncate-length="15"
                      label="image"
                      width="50%"
                      v-model="files"
                      @change="onFileChange"
                      id="fileUpload"
                      ></v-file-input> 
                  </div>
           
         
        
      </v-container>
      
      <div class="rate">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        <span class="fa fa-star"></span>
      </div>
    </div>

  </div>


  <div class="w3-col m4  w3-center">
    <div class="container2">
        <div class="card2-name">
            
        </div>
        <div class="card2-aboutself">
          <div class="w3-card w3-margin">
            <div class="w3-container w3-padding" style="background-color: #ececec;" >
              <h3 style="margin-right:100%;">Introduce</h3>
            </div>
            <div class="w3-container w3-white" style="width: 100%; padding-top: 2vh;">
              <div style="text-align: left; list-style: none; padding-bottom: 2%;" >
               {{profile.intro}}
            </div> 
            </div>
          </div>
        </div>
    

        <div class="card2-education">
          <div class="w3-card w3-margin">
            <div class="w3-container w3-padding" style="background-color: #ececec;" >
              <h3 style="margin-right:100%;">Education</h3>
            </div>
            <div class="w3-container w3-white" style="width: 100%; padding-top: 2vh;">
              <div style="text-align: left; list-style: none; padding-bottom: 2%;" >
              <h4><b>Oxford-University</b></h4>
              <h5><span class="w3-opacity"> Jan 2000 - Feb 2001</span></h5>
              <li>
                Department of mathematic 
              </li>
              <h4><b>Cambridge-University</b></h4>
              <h5><span class="w3-opacity"> Jan 2002 - Feb 2003</span></h5>
              <li>
                Department of science
              </li>
            </div> 
            </div>
          </div>
        </div>






      </div>
    </div>
  
  <div class="w3-col m4 w3-center">
    <div class="container3">

      <div class="card3-skill">
        <div class="w3-card w3-margin">
          <div class="w3-container w3-padding" style="background-color: #ececec;">
            <h3 style="margin-right:100%;">Skills</h3>
          </div>
          <!-- <div v-for="skill in profile.skill" :key="skill">{{skill}}</div> -->
          <div class="w3-container w3-white" style="width: 100%; padding-top: 2vh;">
            <p style="text-align: left; padding-top: 2%;">

              <on class="w3-button w3-padding-small w3-blue w3-border"  v-for="skill in profile.skills" :key="skill"><b>{{skill}}</b></on> 
              <!-- <on class="w3-button w3-padding-small w3-blue w3-border"><b>Talkative</b></on>  
              <on class="w3-button w3-padding-small w3-blue w3-border"><b>Sex</b></on>
              <on class="w3-button w3-padding-small w3-blue w3-border"><b>Double</b></on>
              <on class="w3-button w3-padding-small w3-blue w3-border"><b>Need to limit for information </b></on>  
              <on class="w3-button w3-padding-small w3-blue w3-border"><b>Talkative</b></on>  
              <on class="w3-button w3-padding-small w3-blue w3-border"><b>Sex</b></on>
              <on class="w3-button w3-padding-small w3-blue w3-border"><b>Double</b></on>
              <on class="w3-button w3-padding-small w3-blue w3-border"><b>Need to limit for information </b></on> 
              <on class="w3-button w3-padding-small w3-blue w3-border"><span style="font-size: 20px;" class="glyphicon">&#xe081;</span> </on>  -->
              <v-dialog max-width="600px">
                <template v-slot:activator="{ on }">
                  <on class="w3-button w3-padding-small w3-blue w3-border" v-on="on"><span style="font-size: 20px;" class="glyphicon">&#xe081;</span></on>
                </template>
                <v-card>
                  <v-card-title class="headline grey lighten-2" primary-title>Add a New Project</v-card-title>
                  <v-card-text>
                   <v-form >
                     <v-row>
                       <v-col>
                          <v-text-field
                            v-model="newd.skill"
                            label="add skill"
                          ></v-text-field>
                       </v-col>
                       <v-col>
                         <v-btn class="mt-4" @click="addskill()">add</v-btn>
                       </v-col>
                      
                    </v-row>
                    
                   </v-form> 
                  </v-card-text>
                  
                </v-card>
              </v-dialog>
              
          </p> 
          </div>
        </div>
      
      </div>

      <div class="card3-experience">
        <div class="w3-card w3-margin">
          <div class="w3-container w3-padding" style="background-color: #ececec;" >
            <h3 style="margin-right:100%;">Experience</h3>
          </div>
          <div class="w3-container w3-white" style="width: 100%; padding-top: 2vh;">
            <div style="text-align: left; list-style: none; padding-bottom: 2%;" >
              Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
              tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla
          </div> 
          </div>
        </div>
      </div>



    </div>
    
  </div>

</div>
</v-app>
</template>

<script>
import questService from '../service/Queastservice'
// eslint-disable-next-line no-unused-vars
import profileService from '../service/profileservice'
export default {
    
    mounted: function mounted () {
      this.getinfoma()
    },
    data(){
        return {
            ch:false,
            count:this.$store.getters.getcount,
            files:null,
            url:null,
            profile:'',
            newd:{
              skill:'',
              contact:{
                con:'',
                val:''
              }
            }
        }
    },
    methods:{
        add (){
            this.$store.dispatch('set')
        },
        sendim:async function(){
            
            if (this.files) {
                alert("inn")
                let formData = new FormData();

                // files
                
                formData.append("image", this.files);
                

                // additional data
                formData.append("questname", "foo bar");

                let suc = await questService.createquest(formData).then((res)=>{return res})
                console.log("logsuc"+suc)
                
                if(suc){
                    this.$router.push({path:'/login'})
                }
                else{
                    alert("fail")
                }
            } else {
                console.log("there are no files.");
            }
        },
        onFileChange() {
            if(this.files!=null){
                const file = this.files
                console.log(file)
                this.ch=true
                this.url = URL.createObjectURL(file);
            }
        },
        chooseFiles() {
            document.getElementById("fileUpload").click()
        },
        getinfoma:async function(){
            console.log("gett")
            let re = await profileService.getprofile().then((res)=>{return res})
            console.log("dadsaaaaaaa"+re)
            this.profile=re.infoma
            console.log(this.profile)    
        },
        addskill:async function(){
          let newskill=this.newd.skill
          console.log('add '+newskill)
          let re = await profileService.addskill(newskill,1).then((res)=>{return res})
          if(re.suc){
            this.profile.skills.push(newskill)
            console.log('add '+this.profile.skills)  
          } 
        }
    }


};
</script>
<style scoped>
@import "../styles/profile.css";
</style>
<style scoped>
.v-btn{
  mt:30px
}
.v-text-field{
  width: 450px;
 
}
.container1 {
  margin: 2%;
  width: 100%;
  height: 100vh;
  background-color: #82b340;
  border: 4px solid white;
}
.container2 {
  margin: 2%;
  width: 100%;
  height: auto;
  background-color: #ececec;
  border: 4px solid white;
}
.container3 {
  margin: 2%;
  width: 100%;
  height: 100vh;
  background-color: #ececec;
  border: 4px solid white;
}
.card1-pic {
  width: 100%;
  justify-items: center;
}
img {
  width: 250px;
  border-radius: 50%;
  margin-top: 30%;
}
.rate {
  margin-top: 10%;
  font-size: 20px;
}
.card2-name {
  width: 100%;
  font-size: 30px;
  font-weight: bold;
  padding-top: 10vh;
  padding-right: 30vh;
}
.card3-skill {
  width: 100%;
  height: 20vh;
  margin-top: 10%;
}
.card2-education {
  margin-top: 10%;
  padding-bottom: 5%;
}
.card3-experience {
  margin-top: 20%;
}
</style>
