<template>

        <v-card class="card" style="width:300px, height:400px"   >

            <v-img
            :class="rounded"
             :src='ImageUrl'
             full-width
            :aspect-ratio="16/9"
            
             ></v-img>

                <v-list-item>
                  <v-list-item-content >
                    <v-list-item-title><span style="font-size: 20px; font-weight:bold;">{{Name}}</span></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
            <v-list-item three-line  style="margin-top:-3%;">
             <v-list-item-content>     

               <div> 
                 <p  
                 v-if="Detail!=='undefined'" 
                 > 
                 <span>
                 {{Detail}}
                 </span>  
                </p>

                <p 
                v-else 
                > 
                <span> 
                No information
                </span>  
                </p>
              </div>


                <v-list-item-subtitle style="font-size: 13px;">{{date}}</v-list-item-subtitle>
            </v-list-item-content>
            </v-list-item>
            
            <div class="card__info">
                <div>
                    {{Reward}}
                </div>
            
                <div>
                    <a @click="gotodetail()" class="more">View More</a>
                </div>
            </div>
        
        </v-card>
 
</template>
<script>
export default {
    props: {
        Name: String,
        Detail: String,
        Reward: String,
        Image:String,
        Qid:String,
        date:String
    },
    data(){
      return{
        ImageUrl :'',
        qid:''
      }
    },
    methods: {
      collapse(Detail) {

        this.Detail = Detail

      },
      gotodetail(){
        this.$router.push({ path: this.qid });
      }
        
    },
    created(){
        this.collapse(this.Detail)
        if (this.Image != "default.png"){
          this.ImageUrl = this.$store.state.gurl + this.Image;
        }   
        else{
          this.ImageUrl= "default.png"
        }     

        this.qid = '/quest/id/'+this.Qid
    }
    


}

</script>
<style>
body {
  background-attachment: fixed;
  background-size: cover;
}
.category-drop{
  display: none;
  margin: 5px;
  color: #072448;
  background: #f8aa4b;
  padding: 15px;
  text-decoration: none;
  box-shadow: 0 2px 5px #54d2d2;
}

.Questcards {
  margin: 0px auto;
  width: 1000px;
  height: 1000px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 500px;
}
.card {
  box-shadow: 0 0 5px rgb(0, 0, 0);
}
.card__img {
  width: 100%;
  display: block;
}
.card__content {
  line-height: 1.5;
  font-size: 0.9em;
  padding: 15px;
  background: #fafafa;
}
.card__content > h2:first-of-type {
  margin-top: 0;
}
.card__content > p:first-of-type {
  margin-top: 0;


}
.card__content > h2:last-of-type {
  margin-bottom: 0;
}
.card__info {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eeeeee;
  font-size: 0.8em;
  border-bottom: 2px solid #cccccc;
}
.more {
  color: #6a966a;
  text-decoration: none;
}
.more:hover {
  text-decoration: underline;
}
.category {
  font-size: 25px;
  padding: 50px;
  text-align: center;
}
.category a {
  margin: 5px;
  color: #072448;
  background: #f8aa4b;
  padding: 15px;
  text-decoration: none;
  border-radius: 40px;
  font-family: sans-serif;
  box-shadow: 0 2px 5px #54d2d2;
}
.category a:hover {
  color: #ffa822;
  background: #134e6f;
  box-shadow: 5px 0 10px #54d2d2;
  text-decoration: underline;
}
.page {
  font-family: sans-serif;
  font-size: 30px;
  text-align: center;
  padding: 50px;
}
.page .button {
  color: #072448;
  padding: 10px;
  text-decoration: none;
  text-shadow: 0 2px 5px #f8aa4b;
}
.page .button:hover {
  color: #f8aa4b;
  font-size: 50px;
  text-decoration: underline;
}
@media screen and (max-width: 768px) {
  .category{
    display: none;
  }
  .category-drop{
  display: block;
  visibility: visible;
  width: 100%;
  margin: 0px;
  color: #072448;
  background: #f8aa4b;
  padding: 30px;
  text-decoration: none;
  font-family: sans-serif;
  box-shadow: 0 2px 5px #54d2d2;
}
  .category a {
    font-size: 10px;
    padding: 10px;
    white-space: nowrap;
  }
  .Questcards {
    max-width: 300px;
    margin-left: 5%;
    margin-right: 5%;
    width: auto;
    align-content: center;
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 1024px) {
  .Questcards {
    max-width: 450px;
    margin-left: 5%;
    margin-right: 5%;
    width: auto;
    /* max-width: 300px; */
    grid-template-columns: repeat(2, 1fr);
  }
  .category{
    display: none;
  }
  .category-drop{
  display: block;
  visibility: visible;
  width: 80%;
  margin: 50px;
  color: #072448;
  background: #f8aa4b;
  padding: 20px;
  text-decoration: none;
  font-family: sans-serif;
  box-shadow: 0 2px 5px #54d2d2;
}
  .category a {
    font-size: 10px;
    padding: 10px;
    white-space: nowrap;
  }
}
</style>
