<template>
  <div id="profileList">
    <v-list-item>
      <template v-slot:default>
        <v-list-item-content>
          <v-list-item-title class="title" v-text="title"></v-list-item-title>

          <v-list-item-subtitle
            class="title"
            v-text="subtitle"
          ></v-list-item-subtitle>

          <v-list-item-subtitle
            class="title"
            v-text="value"
          ></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-list-item-action-text
            class="title"
            v-text="action"
          ></v-list-item-action-text>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider v-if="isDivider"></v-divider>
  </div>
</template>

<script>
export default {
  name: "ProfileList",
  props: ["title", "subtitle", "value", "action", "isDivider"],
};
</script>

<style>
body {
  font-size: 20px;
  font-weight: bold;
}
</style>
