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
                    style="text-transform: uppercase; margin-left: 3%; color: white; font-weight: bold"
                  >
                    + ADD NEW {{ infoName }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-card>
            </template>
            <ProfileFrom
              type="New"
              :infoName="infoName"
              :infoData="infoData[0]"
              @sentObject="updateObject"
              @closeDialog="closeDialog"
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
                  v-for="(subitem, key) in item"
                  :key="subitem"
                >
                  <span style="font-weight: bold; text-transform: capitalize;">
                    {{ key }}:
                  </span>
                  {{ item[key] }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text class="title">
                  Edit Delete
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
          <v-list-item-title class="headline mb-1">
            <span style="font-size: 20px; font-weight: bold; margin-left: 3%">
              SAVE CANCEL
            </span>
          </v-list-item-title>
        </v-list-item-content>
      </v-card>
    </v-card>
  </div>
</template>

<script>
import ProfileFrom from "../profile/profileFrom";

export default {
  name: "ProfilePop",
  props: ["infoName", "infoData"],
  components: { ProfileFrom },
  methods: {
    updateObject(value) {
      console.log(value)
      this.infoData.push(value);
      console.log(this.infoData)
    },
    closeDialog() {
      this.dialog = false;
    }
  },
  data() {
    return {
      dialog: false
    }
  },
};
</script>

<style></style>
