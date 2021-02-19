<template>
  <div id="contactBox" class="contactBox">
    <div>
      <img
        :src="getIconLink()"
        class="iconDetails"
      />
    </div>
    <div style="margin-left: 60px;">
      <h4 style="fint-weight: bold">{{ Title }}</h4>
      <div style="font-size: 13px;">
        {{ Detail }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactBox",
  props: ["Title", "Detail"],
  methods: {
    getIconLink() {
      if (this.Title == "Facebook")
        return "http://ecx.images-amazon.com/images/I/21-leKb-zsL._SL500_AA300_.png";
      else if (this.Title == "LINE")
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/600px-LINE_logo.svg.png";
      else if (this.Title == "Call")
        return "https://smallroomstudio.com/wp-content/uploads/2019/10/call-icon.png";
      else if (this.Title == "E-mail")
        return "https://i.pinimg.com/originals/8f/c3/7b/8fc37b74b608a622588fbaa361485f32.png";
    },
  },
};
</script>

<style scoped>
.iconDetails {
  margin-left: 2%;
  float: left;
  height: 40px;
  width: 40px;
}

.contactBox {
  width: 50%;
  height: 85px;
  padding: 1%;
  padding: 16px;
  background-color: #ececec;
  border: 5px solid white;
  border-radius: 13px;
}

@media screen and (max-width: 956px) {
  .contactBox {
    background-color: white;
  }
}
</style>
