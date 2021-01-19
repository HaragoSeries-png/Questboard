<template>
  <div id="profileFrom">
    <v-card max-width="auto" height="auto">
      <v-list class="overflow-y-auto" style="height: 480px; padding: 0px">
        <v-list-item-content>
          <v-list-item-title
            v-if="type == 'New'"
            class="headline mb-1"
            style="margin: 3%; font-weight: bold;"
          >
            NEW {{ infoName }}
          </v-list-item-title>
          <v-list-item-title
            v-else
            class="headline mb-1"
            style="margin: 3%; font-weight: bold;"
          >
            EDIT {{ infoName }}
          </v-list-item-title>
        </v-list-item-content>

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
              v-if="type == 'New'"
              :id="item"
              type="text"
              value=""
              style="width: 100%"
              autocomplete="off"
            />
            <input
              v-else
              :id="item"
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
              <v-btn v-if="type == 'New'" :class="{ 'show-btns': hover }" @click="sendObject()">
                Add
              </v-btn>
              <v-btn v-else :class="{ 'show-btns': hover }" @click="sendUpdateObject()">
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
  </div>
</template>

<script>
export default {
  name: "profileFrom",
  props: ["type", "infoName", "infoData", "infoKey", "infoIndex"],
  methods: {
    sendObject: async function() {
      this.thisObject = {};

      await this.infoKey.forEach(this.pushObject);
      await this.$emit("sentObject", this.thisObject);
      this.requestClose();
    },
    sendUpdateObject: async function() {
      this.thisObject = {};

      await this.infoKey.forEach(this.pushObject);
      console.log(this.thisObject)
      await this.$emit("sentUpdateObject", this.thisObject, this.infoIndex);
      this.requestClose();
    },
    pushObject(value) {
      this.thisObject[value] = document.getElementById(value).value;
    },
    requestClose() {
      if(this.type == 'New') this.$emit("closeDialog");
      else this.$emit("closeDialog2", this.infoIndex);
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
