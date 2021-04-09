<template>
 <div>
     <v-container>
         <v-row>
             <v-col cols="12" md="6">
                <div class="section1">
                    <div class="pic">
                        <v-img height="400" width="370" src="https://scontent.fbkk13-2.fna.fbcdn.net/v/t1.6435-9/40914262_1303280716477563_5673712610457944064_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=e3f864&_nc_ohc=MbRlMNhpWO4AX-u-6cm&_nc_ht=scontent.fbkk13-2.fna&oh=2a8ab22d05b0c76ee0c81ee56ab31be7&oe=609638F1"></v-img>
                    </div>
                    
                </div>
             </v-col>
              <v-col cols="12" md="6">
          <div class="section2">
            <h2 style="text-align:center;">
            questname 
            </h2>
           
            <v-card-actions style="text-align:center;" class="Rate2">
              <span class="grey--text text--lighten-2 caption mr-2"> </span>
              
              <v-rating
                v-model="rating"
                background-color="white"
                color="yellow accent-4"
                dense
                half-increments
                readonly
                hover
                size="20"
              ></v-rating>
            </v-card-actions>
            <v-divider></v-divider>
            <v-card-actions class="pa-4">
              Create by
              <v-spacer></v-spacer>
               <!-- <router-link :to="'/profile/id/' + ownerID"> 
                <span style="text-align:center;"> dummy name</span>
              </router-link> -->
            </v-card-actions>

            <v-card-actions class="pa-4">
              Category
              <v-spacer></v-spacer>
              <span style="text-align:center;"></span>
            </v-card-actions>

            <v-card-actions class="pa-4">
              Reward
              <v-spacer></v-spacer>
              <span style="text-align:center;"> reward </span>
            </v-card-actions>

             <v-card-actions class="pa-4">
              Number
              <v-spacer></v-spacer>
              <span style="text-align:center;"> 0/5</span>
            </v-card-actions>
            
            <div class="pa-4" style="margin-top:-1%;">
              <div>
                Details
              </div>

              <v-card
                width="650"
                height="150"
                style="margin-top:5%;overflow-x:auto;padding:16px;"
              >
                <p style="font-size:14px;text-indent:20px; ">
                questdetail 
                </p>
              </v-card>
            </div>
           



       
          </div>
        </v-col>
         </v-row>
     </v-container>
 </div>
</template>
<script>
export default {
    name:'rateUser'
}
</script>

<style>

</style>