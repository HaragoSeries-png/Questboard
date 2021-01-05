<template>
  <div>
    <v-form>
        <v-container>
            <v-row>
            <v-col cols="12" md="4">
                <v-file-input
                truncate-length="15"
                label="image"
                width="50%"
                v-model="files"
                ></v-file-input>
            </v-col>
            <v-spacer></v-spacer>
            
            <v-btn @click="sendim">
                submit
            </v-btn>
            
            </v-row>
            <v-row>
                
            </v-row>
        </v-container>

            
    </v-form>
    <img
        max-height="150"
        max-width="250"
        src="http://localhost:5000/2021-01-05T15-16-14.571Zdeadman_bg.jpg"
    >
     
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
            files:null
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
        }
    }

}
</script>

<style scoped>
    
</style>