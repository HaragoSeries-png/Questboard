<template>
  <div id="profilePop">
    <v-card max-width="auto" height="auto" outlined>
      <v-card max-width="auto" max-height="auto" style="margin: 2%;" outlined>
        <v-list-item-content>
          <v-list-item-title class="headline mb-1">
            <span
              style="font-size: 20px; font-weight: bold; margin-left: 3%; text-transform: uppercase;"
            >
              EDIT {{ infoName }}
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
            <ProfileFromNew
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
                      style="font-weight: bold;"
                    >
                      {{ transformText(subitem) }}:
                    </span>
                    {{ item[subitem] }}
                  </v-list-item-subtitle>
                </v-list-item-content>
                <ProfileFrom
                  :infoName="infoName"
                  :infoData="item"
                  :infoKey="infoKey"
                  :infoIndex="index"
                  @sentUpdateObject="updateObject"
                  @requestDelete="deleteObject(index)"
                />
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
import ProfileFrom from "./profileFrom";
import ProfileFromNew from "./profileFromNew";

export default {
  name: "ProfilePop",
  props: ["infoName", "infoData", "infoKey"],
  components: { ProfileFrom, ProfileFromNew },
  methods: {
    requestSave() {
      this.$emit("Save");
    },
    requestClose() {
      this.$emit("closeDialog");
    },
    canceled() {
      this.$router.go();
    },
    newObject(value) {
      console.log('obj '+ JSON.stringify(value) )
      this.infoData.push(value);
    },
    async updateObject(value, index) {
      console.log('i'+index)
      console.log('obj UU '+ JSON.stringify(value) )
      this.infoData[index]=value
      console.log(this.infoData[index])
      this.$forceUpdate()
      // this.infoKey.forEach((indx)=> {
      //   console.log(value[indx]+' in '+indx)
      //   console.log(this.infoData[index][indx])
      //   this.infoData[index][indx] = value[indx];
      // });
      // for (var v in this.infoKey) {
      //   console('ddd ')
      //   this.infoData[index][this.infoKey[v]] = value[this.infoKey[v]];
      // }
    },
    deleteObject(value) {
      this.infoData = this.infoData.splice(value, 1);
    },
    closeDialog() {
      this.dialog = false;
    },
    transformText(value) {
      if (value == "topic") return "Title";
      else if (value == "desc") return "Detail";
      else if (value == "skill") return "Skill";
      else if (value == "branch") return "Branch";
      else if (value == "date") return "Year";
      else return value;
    },
  },
  data() {
    return {
      dialog: false,
    };
  },
};
</script>

<style scoped>
v-btn {
  font-weight: bold;
}
</style>
