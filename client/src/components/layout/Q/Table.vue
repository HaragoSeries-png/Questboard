<template>

<div>
  
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
    props:[
      "search"
    ],
    data(){
        return {
        headers: [
          {
            text: 'Quest ID',
            align: 'start',
            value: 'quest_id',
          },
          { text: 'Quest Name',
           value: 'quest_name',
           align:'start' },
             {
            text : 'Status',
            value : 'status',
            align:'start'
          },
          { text: 'By',
            value: 'quest_by',
            align:'start'
         },
          {
            text : 'Time',
            value : 'time',
            align : 'center'
          },
       
        ],
        information: [
          {
            quest_id: '12345',
            quest_name: 'q_test1',
            quest_by:'sompong',
            time :  '1/2/2012',
            status : 'in progress'
          },
          {
            quest_id: '123654',
            quest_name: 'q_test2',
            quest_by:'สุรชัย',
            time :  '1/2/2012',
            status : 'waiting'
          },
          {
             quest_id: '1212',
            quest_name: 'q_test3',
            quest_by:'anthony',
            time :  '8/2/2012',
            status : 'pending'
          },
        
          
          
          
          
          ]
        }
    }
}
</script>

<style scoped>

</style>
