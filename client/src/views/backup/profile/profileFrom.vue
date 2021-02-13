<template>
  <div id="profileFrom" style="text-align: right">
      <v-list-item-action-text class="title">
        <v-dialog v-model="dialog" width="600">
          <template v-slot:activator="{ on }">
            <a v-on="on">Edit</a>
          </template>
          <v-card max-width="auto" height="auto">
            <v-list class="overflow-y-auto" style="height: 480px; padding: 0px">
              <v-list-item-content>
                <v-list-item-title
                  class="headline mb-1"
                  style="margin: 3%; font-weight: bold;"
                >
                  EDIT {{ infoName }}
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
                    :id="item + infoIndex + infoName + 'edit'"
                    type="text"
                    :value="infoData[item]"
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
                      @click="sendUpdateObject()"
                    >
                      Update
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
        </v-dialog>
        &nbsp;
        <a @click="requestDelete()">Delete</a>
      </v-list-item-action-text>
  </div>
</template>

<script>
export default {
  name: "profileFrom",
  props: ["infoName", "infoData", "infoKey", "infoIndex"],
  methods: {
    sendUpdateObject: async function() {
      this.thisObject = {};

      await this.infoKey.forEach((item) => this.pushObject(item));
      await this.$emit("sentUpdateObject", this.thisObject, this.infoIndex);
      this.requestClose();
    },
    pushObject(value) {
      this.thisObject[value] = document.getElementById(
        value + this.infoIndex + this.infoName + "edit"
      ).value;
    },
    requestClose() {
      this.dialog = false;
    },
    requestDelete() {
      this.$emit("requestDelete");
    },
  },
  data() {
    return {
      thisObject: {},
      dialog: false,
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
