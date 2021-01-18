<template>
  <div id="profilePop">
    <v-card max-width="auto" height="auto" outlined>
      <v-card max-width="auto" max-height="auto" style="margin: 2%;" outlined>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span style="font-size: 20px; font-weight: bold; margin-left: 3%">
              Edit {{ infoName }}
            </span>
          </v-list-item-title>
        </v-list-item-content>
      </v-card>

      <v-card max-width="auto" max-height="auto" style="margin: 2%;">
        <v-list class="overflow-y-auto" style="height: 480px; padding: 0px">
          <v-dialog v-model="dialog" width="600">
            <template v-slot:activator="{ on }">
              <v-card
                max-width="auto"
                max-height="auto"
                v-on="on"
                style="margin: 2%; background-color: cadetblue"
                outlined
              >
                <v-list-item-content>
                  <v-list-item-subtitle
                    class="title"
                    style="margin-left: 3%; color: white; font-weight: bold"
                  >
                    + ADD NEW ELEMENT
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-card>
            </template>
            <ProfileFrom
              type="New"
              :infoName="infoName"
              :infoData="[]"
              :infoKey="infoKey"
              @sentObject="newObject"
              @closeDialog="closeDialog()"
            />
          </v-dialog>

          <div v-if="infoData != []">
            <v-card
              max-width="auto"
              max-height="auto"
              v-for="(item, index) in infoData"
              :key="index"
              style="margin: 2%;"
              outlined
            >
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-subtitle
                    class="title"
                    v-for="subitem in infoKey"
                    :key="subitem.index"
                  >
                    <span
                      style="font-weight: bold; text-transform: capitalize;"
                    >
                      {{ subitem }}:
                    </span>
                    {{ item[subitem] }}
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text class="title">
                    <v-dialog v-model="item.turn" width="600">
                      <template v-slot:activator="{ on }">
                        <a v-on="on">Edit</a>
                      </template>
                      <ProfileFrom
                        :infoName="infoName"
                        :infoData="item"
                        :infoKey="infoKey"
                        :infoIndex="index"
                        @sentUpdateObject="updateObject"
                        @closeDialog="closeDialog()"
                      />
                    </v-dialog>
                    &nbsp;
                    <a @click="deleteObject(index)">Delete</a>
                  </v-list-item-action-text>
                </v-list-item-action>
              </v-list-item>
            </v-card>
          </div>
        </v-list>
      </v-card>

      <v-card
        max-width="auto"
        max-height="auto"
        style="margin: 2%; border: 1px bold black"
        outlined
      >
        <v-list-item-content>
          <div style="text-align: center">
            <v-btn :class="{ 'show-btns': hover }" @click="requestSave()">
              SAVE
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
        </v-list-item-content>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import ProfileFrom from "../profile/profileFrom";

export default {
  name: "ProfilePop",
  props: ["infoName", "infoData", "infoKey"],
  components: { ProfileFrom },
  methods: {
    requestSave() {
      this.$emit("Save");
    },
    requestClose() {
      this.$emit("closeDialog");
    },
    newObject(value) {
      this.infoData.push(value);
    },
    updateObject(value, index) {
      this.infoData[index] = value;
    },
    deleteObject(value) {
      this.infoData = this.infoData.splice(value, 1);
    },
    closeDialog() {
      this.dialog = false;
      for (var v in this.infoData) {
        this.infoData[v].turn = false;
      }
    },
  },
  created() {
    for (var v in this.infoData) {
      this.infoData[v].turn = false;
    }
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style></style>
