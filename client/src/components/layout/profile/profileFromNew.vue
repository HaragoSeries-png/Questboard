<template>
  <div id="profileFromNew">
    <v-card max-width="auto" height="auto">
      <v-list class="overflow-y-auto" style="height: 480px; padding: 0px">
        <v-list-item-content>
          <v-list-item-title
            class="headline mb-1"
            style="margin: 3%; font-weight: bold;"
          >
            NEW {{ infoName }}
          </v-list-item-title>
        </v-list-item-content>

        <div id="inputBox"></div>

        <v-list-item-content
          v-for="item in infoKey"
          :key="item.index"
          style="padding: 0; margin-left: 5%; margin-right: 5%"
        >
          <v-col cols="12" md="3">
            <span
              style="font-size: 14px; font-weight: bold; text-transform: capitalize;"
            >
              {{ item }}:
            </span>
          </v-col>
          <v-col>
            <input
              :id="item + infoName"
              type="text"
              value=""
              style="width: 100%"
              autocomplete="off"
            />
          </v-col>
        </v-list-item-content>

        <v-list-item-content
          style="padding: 0; margin-left: 5%; margin-right: 5%"
        >
          <v-col cols="12" md="3"> </v-col>
          <v-col>
            <div style="margin-top: 1%;">
              <v-btn
                :class="{ 'show-btns': hover }"
                @click="sendObject()"
              >
                Add
              </v-btn>
              &nbsp;
              <v-btn
                :class="{ 'show-btns': hover }"
                @click="requestClose()"
                style="margin-left:2%"
              >
                Cancel
              </v-btn>
            </div>
          </v-col>
        </v-list-item-content>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "profileFromNew",
  props: ["infoName", "infoData", "infoKey"],
  methods: {
    sendObject: async function() {
      this.thisObject = {};
      await this.infoKey.forEach((item) => this.pushObject(item));
      await this.$emit("sentObject", this.thisObject);
      this.requestClose();
    },
    pushObject(value) {
      this.thisObject[value] = document.getElementById(
        value + this.infoName
      ).value;
      document.getElementById(value + this.infoName).value = "";
    },
    requestClose() {
      this.$emit("closeDialog");
    },
  },
  data() {
    return {
      thisObject: {},
    };
  },
};
</script>

<style>
input[type="text"],
[type="email"],
input[type="password"] {
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  outline: none;
  font-size: 14px;
}
</style>