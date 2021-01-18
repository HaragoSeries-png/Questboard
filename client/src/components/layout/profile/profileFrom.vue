<template>
  <div id="profileFrom">
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

        <v-list-item-content
          v-for="(item, key) in infoData"
          :key="item"
          style="padding: 0; margin-left: 5%; margin-right: 5%"
        >
          <v-col cols="12" md="3">
            <span
              style="font-size: 14px; font-weight: bold; text-transform: capitalize;"
            >
              {{ key }}:
            </span>
          </v-col>
          <v-col>
            <input v-if="type == 'New'" :id="key" type="text" value="" style="width: 100%" />
            <input v-else :id="key" type="text" :value="item" style="width: 100%" />
          </v-col>
        </v-list-item-content>
      </v-list>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "profileFrom",
  props: ["type", "infoName", "infoData"],
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
