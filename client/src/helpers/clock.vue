<template>
  <div id="clock" class="clock">
    <slot name="header"></slot>
    <slot></slot>{{ time }}
    <slot name="footer"></slot>
    <!-- Default -->
    <!-- <slot><span style="font-size: 20px">Default Time : </span></slot>{{ time }} -->
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Clock",
  mounted() {
    setInterval(() => {
      this.time = moment(Date()).format("hh:mm:ss dddd DD-MM-YY  A");
    }, 1000);
  },
  data() {
    return {
      time: "",
    };
  },
};
</script>

<style scoped>
.clock {
  font-size: 14px;
}
</style>
