<template>
  <div class="main_section">
    <section id="hero">
      <div class="hero container">
        <h1>Quest board<span></span></h1>
        <a href="#" type="button" class="cta" style="text-decoration:none;"
          >Join Us</a
        >
        
      </div>
    </section>
    <section>
      <div class="welcome">
        <div class="header-welcome">
          <center>"Welcome to Questboard project"</center>
        </div>
        <div class="detail-welcome">
    
        </div>
      </div>
    </section>

    <section>
      <center>
        <div id="about">
          <div class="about-top">
            "Who We Are"
          </div>

          <div class="about-detail">
            <div class="row" style="margin-top:2%">
              <div class="col-sm-12 col-md-6 ">
                <img
                  src="https://cdn.pixabay.com/photo/2016/02/19/11/19/office-1209640_1280.jpg"
                  alt=""
                  width="70%;"
                />
              </div>
              <div class="col-sm-12 col-md-6 ">
                <div id="about-detail">
                  This is website for people who seek for help and the one who
                  seek the mission to help others. This platform will let you,
                  as a helper: the one who seek for help, express your worries
                  and problem to other and the other, known as contributor, will
                  lend you hand to solve or ease your problem.
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </section>

    <section>
      <div class="how">
        <div class="how-top">
          "How It Works"
        </div>
        <div class="how-detail">
          <v-row>
            <v-col cols="12" sm="12" md="4" style="text-align:center;">
              <div class="m_card">
                <div style="width:100%; padding-left-6%;" >

               
                  <img
                    src="https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg"
                    style="
                          width: 100%; height:35vh;
                           min-height: 100%;border-radius:15px 15px 0  0;margin-right:1%;"
                  />
                </div>
                <div class="detail">
                  1. create your own account to be part of our community.
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="4" style="text-align:center;">
              <div class="m_card">
                <div class="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2019/06/29/04/00/fisherman-4305368__340.jpg"
                    alt=""
                    width="300px;"   style="
                          width: 100%;height:35vh;
                           min-height: 100%;border-radius:15px 15px 0  0;margin-right:1%;"
                  />
                </div>
                <div class="detail">
                  2. create your own quest about your problem or worries.
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="4" style="text-align:center;">
              <div class="m_card">
                <div class="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg"
                    alt=""
                    width="300px;"   style="
                          width: 100%;height:35vh;
                           min-height: 100%;border-radius:15px 15px 0  0;margin-right:1%;"
                  />
                </div>
                <div class="detail">
                  3. be patience! Let our admin approve and rate your quest and
                  your quest will show on our feed.
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row style="margin-top:2%;">
            <v-col cols="12" sm="12" md="4" style="text-align:center;">
              <div class="m_card">
                <div class="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636__340.jpg"
                    alt=""
                    width="300px;"   style="
                          width: 100%;height:35vh;
                           min-height: 100%;border-radius:15px 15px 0  0;margin-right:1%;"
                  />
                </div>
                <div class="detail">
                  4. stay tune and select your contributor and contact them!
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="4" style="text-align:center;">
              <div class="m_card">
                <div class="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__340.jpg"
                    alt=""
                    width="300px;"   style="
                          width: 100%;height:35vh;
                           min-height: 100%;border-radius:15px 15px 0  0;margin-right:1%;"
                  />
                </div>
                <div class="detail">
                  5.After you choose a contributer,Just appointment and Let your problem solved!
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="4" style="text-align:center;">
              <div class="m_card">
                <div class="img">
                  <img
                    src="https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445__340.jpg"
                    alt=""
                    width="300px;"   style="
                          width: 100%;
                           min-height: 100%;border-radius:15px 15px 0  0;margin-right:1%;"
                  />
                </div>
                <div class="detail">
                  6. Rate your contributor and show how awesome he/she is!
                </div>
              </div>
            </v-col>
          </v-row>
        </div>
      </div>
    </section>

    <section class="contact">
      <div class="contact-header">
        "Contact Us"
      </div>
      <center>
        <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    style="width:60%;margin-top:5%;"
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

   

      <v-text-field
      v-model="message"
      :rules="messageRules"
      label="Message"
      required
    ></v-text-field>

   
    

    <v-btn
    style="margin-top:5%;"
      color="warning"
      @click="send()"
    >
     Send message
    </v-btn>
  </v-form>
      </center>
    </section>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  name: "Contact",
  methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      send(){
         Swal.fire(
            "<alert-title>You message has been send</alert-title>",
            "<alert-subtitle></alert-subtitle>",
            "success"
          );
      }
    },
  data: () => ({
        valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      message:'',
      messageRules:[
        v => !!v || 'Message is required',
      ]
    
  }),
};
</script>

<style scoped>
.main_section{
  scroll-behavior: smooth;
}
.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#hero {
  background-image: url("https://cdn.pixabay.com/photo/2021/02/18/12/03/people-6027028_1280.jpg");
  background-size: cover;
  background-position: top center;
  position: relative;
  z-index: 1;
}
#hero h1 span {
  top: 0;
  left: 0;
  position: absolute;
  width: 0;
  height: 100%;
  background-color: crimson;
  animation: text_reveal_box 1s ease;
  animation-delay: 1s;
}
#hero::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  z-index: -1;
}
#hero h1 {
  display: block;
  width: fit-content;
  font-size: 4rem;
  position: relative;
  color: white;
}
#hero .cta {
  margin-top: 2%;
  display: inline-block;
  padding: 10px 10px;
  color: white;
  background-color: crimson;
  border: 2px solid crimson;
  position: relative;
  justify-content: start;
}

.about-top {
  margin-top: 5%;
  font-size: 4rem;
  width: 100%;
}
#about-detail {
  padding: 15px 25px 25px 25px;
  text-align: left;
  font-size: 25px;
  color: gray;
  text-indent: 80px;
}
.how {
  min-height: 100vh;
  width: 100%;
}
.how-top {
  margin-top: 5%;
  display: flex;
  justify-content: center;
  font-size: 4rem;
  width: 100%;
}
.how-detail {
  margin-top: 2%;
  margin-left: auto;
  margin-right: auto;
}
.m_card {
  margin: auto;
  width: 80%;
  min-height: 40vh;
  border:1px solid black;
  border-radius: 15px;

}
.m_card .detail {
  padding: 16px;
  width:100%;
}
.contact {
  margin-top: 5%;
  background-color: #ececec;
  min-height: 100vh;
}
.contact-header {
  padding-top: 5%;
  display: flex;
  justify-content: center;
  font-size: 4rem;
  width: 100%;
}

.welcome {
  width: 100%;
  min-height: 50vh;
}
.header-welcome {
  margin-top: 5%;
  display: flex;
  justify-content: center;
  font-size: 4rem;
  width: 100%;
}
.detail-welcome {
  padding: 15px 25px 25px 25px;
  text-align: center;
  justify-items: center;
  color: gray;
}
.a_detail {
  padding: 16px 30px 0 0;
  font-size: 25px;
  text-align: left;
  color: black;
  text-indent: 50px;
}

@keyframes text_reveal_box {
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 100%;
  }
}
</style>
