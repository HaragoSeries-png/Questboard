<template>
  <div>
    <v-form>
        <v-container>
            <v-row>
            <v-col cols="12" md="4">
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
                
            </v-col>
            <v-spacer></v-spacer>

            <v-btn @click="sendim">
                submit
            </v-btn>
            <v-btn @click="getinfoma">profile</v-btn>
            </v-row>
            <v-row>
                
            </v-row>
        </v-container>

     
    </v-form>
    <v-img
        max-height="200"
        max-width="200"
        src="http://localhost:5000/2021-01-06T12-45-36.660Zmiku.gif"
        @click="chooseFiles()"
    >hee</v-img>
    <div id="preview">
        <v-img 
            v-if="url"
            :src="url" 
            max-height="250"
            max-width="250"
        ></v-img>
    </div>
     <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn class="success" v-on="on">Add New Project</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add a New Project</v-card-title>
      </v-card>
    </v-dialog>
     
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import questService from '../service/Queastservice'
// eslint-disable-next-line no-unused-vars
import profileService from '../service/profileservice'
export default {
    data(){
        return {
            count:this.$store.getters.getcount,
            files:null,
            url:null
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
            if (re.suc){
                console.log(re.infoma)
                alert("yeah")       
            }
            else{
                alert("fail")
            }
        },
    }

}
</script>

<style scoped>
    
</style>