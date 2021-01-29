<template>

<div>
    <slot></slot>
  <v-card>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="information"
      :search="search"
    ></v-data-table>
  </v-card>





</div>

</template>





<script>
export default {
    name : "comtest1",
    data(){
        return {
            search: '',
        headers: [
          {
            text: 'Quest ID',
            align: 'start',
           
            value: 'quest_id',
          },
          { text: 'Quest Name',
           value: 'quest_name',
           align:'center' },

          { text: 'By',
            value: 'quest_by',
            align:'center'
         },
       
        ],
        information: [
          {
            quest_id: '123456',
            quest_name: 'slime',
            quest_by:'sompong'
          },
          {
            quest_id: '654321',
            quest_name: 'slime',
            quest_by:'สุรชัย'
          },
          {
             quest_id: '33333',
            quest_name: 'slime',
            quest_by:'anthony'
          }]
        }
    }
}
</script>

<style scoped>

</style>
