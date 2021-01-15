<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
         <center>
            <div class="section1" >
              <div>
                <v-img
                  class="rounded-circle"
                  :aspect-ratio="1 / 1"
                  max-width="250"
                  src="../assets/bg01.jpg"
                  width:auto
                  height:auto
                  
                >
                </v-img>
              </div>

              <h3 id="ratio">Mr. Prayut Junocha</h3>
              <v-rating
                v-model="rating"
                background-color="red lighten-3"
                color="red"
                size="30"
                style="margin-top:7%;"
              ></v-rating>
            </div>
        </center>
        </v-col>

        <v-col cols="12" md="4">
          <div class="section2">
            <v-card max-width="auto" max-height="auto" outlined>
              <v-list-item>
                <v-list-item-content>
                
                  <v-list-item-title class="headline mb-1">
                    <span style="font-size:25px">Skills</span>    <i class="material-icons" 
                      >local_fire_department</i >
                  </v-list-item-title>
                  <v-list-item-subtitle>personal ability</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
  <v-divider></v-divider>
              <v-card-actions style="overflow-y: auto;">
                <v-btn outlined rounded text>
                  Skill1
                </v-btn>
                <v-btn outlined rounded text>
                  Skill2
                </v-btn>
                <v-btn outlined rounded text>
                  Skill3
                </v-btn>
                <v-btn outlined rounded text>
                  Skill4
                </v-btn>
                <v-btn outlined rounded text>
                  Add
                </v-btn>
              </v-card-actions>
            </v-card>

            <v-card
             max-width="auto"
             max-height="auto"
            
              outlined
              style="margin-top:10%;"
            >
              <v-list-item>
                <v-list-item-content>
                  <div class="overline mb-4">
                  </div>
                
                  <v-list-item-title class="headline mb-1">
                  <span style="font-size:25px">   Education</span>  <i class="material-icons">school</i>
                  </v-list-item-title>
                  <v-list-item-subtitle
                    >degreee and department</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
  <v-divider></v-divider>
               <v-list two-line  style="max-height: 300px"
       class="overflow-y-auto">
        <v-card-action >
        <template v-for="(item, index) in items"      >
          <v-list-item :key="item.title">
            <template v-slot:default>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>

                <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          ></v-divider>
        </template>
        </v-card-action>
    </v-list>
            </v-card>
          </div>
        </v-col>

        <v-col cols="12" md="4">
         <div class="seection3">
             <v-card max-width="auto" max-height="auto" outlined>
              <v-list-item>
                <v-list-item-content>
                
                  <v-list-item-title class="headline mb-1">
                     <span style="font-size:25px">Experience</span>   <i class="material-icons">done_outline</i>
                  </v-list-item-title>
              
                </v-list-item-content>
              </v-list-item>
  <v-divider></v-divider>
              <v-list two-line  style="max-height: 200px"
       class="overflow-y-auto">
        <v-card-action >
        <template v-for="(item, index) in ever" >
          <v-list-item :key="item.story">
            <template v-slot:default>
              <v-list-item-content>
                <v-list-item-title v-text="item.story"></v-list-item-title>

                <v-list-item-subtitle
                  class="text--primary"
                  v-text="item.headline"
                ></v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-list-item-action-text v-text="item.action"></v-list-item-action-text>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider
            v-if="index < items.length - 1"
            :key="index"
          ></v-divider>
        </template>
        </v-card-action>
    </v-list>
            </v-card>
     <v-card max-width="auto" max-height="auto" outlined style="margin-top:10%;" >
              <v-list-item>
                <v-list-item-content>
                
                  <v-list-item-title class="headline mb-1">
                     <span style="font-size:25px">Introduce & Contact</span>   <i class="material-icons">perm_contact_cal</i>
                  </v-list-item-title>
                  <v-list-item-subtitle>personal ability</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
  
     <v-textarea
      readonly
      :value="value"
      style="margin-left:5%;"
    ></v-textarea>
            </v-card>









         </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "profile2",
  data() {
    return {
      rating: 4,
      items: [
        {
          action: '11/11/2000',
          subtitle: `Department of mathematic`,
          title: 'Oxford university',
        },
        {
         action: '12/11/2000',
         subtitle: `Department of Media art`,
          title: 'Kmutt',
        },
        {
         action: '13/11/2000',
          subtitle: `Department of Electrical Enginering`,
          title: 'Cambridge University',
        }, {
         action: '12/11/2000',
         subtitle: `Department of Media art`,
          title: 'Kmutt',
        },
        {
         action: '13/11/2000',
          subtitle: `Department of Electrical Enginering`,
          title: 'Cambridge University',
        }],
         value: 'Putainamo',
        ever:[
            {
                 action: '11/11/2000',
                 story: 'Hotel Manager',
              },
                 {
                 action: '11/11/2000',
                 story: 'Hotel Manager',
              },
                 {
                 action: '11/11/2000',
                 story: 'Hotel Manager',
              },
                 {
                 action: '11/11/2000',
                 story: 'Hotel Manager',
              },
                 {
                 action: '11/11/2000',
                 story: 'Hotel Manager',
              },
                 {
                 action: '11/11/2000',
                 story: 'Hotel Manager',
              },
             
        ]
      
        
        
        
        
        
        
        
        
    };
  },
};
</script>

<style scoped>
@import "../styles/profile.css";
</style>

<style scoped>
.section1 {
  height: 100vh;

}
.section2 {
  height: 100vh;
}
.section3 {
  height: 100vh;
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
</style>
