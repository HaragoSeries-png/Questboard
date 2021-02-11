<template>
<div id="box">
    <div>
        name:{{this.name}}
    </div>
    <div>
        status:{{this.status}}
    </div>
    <div id='approve' @click="al(true)">approve</div>
    <div id='reject' @click="al(false)">reject</div>
</div>
    
</template>

<script>
import adminService from '../../service/adminService'
export default {
    props:['name','status','qid'],
    methods:{
        al(status){
            adminService.decide(this.qid,status)            
        }
    }
}
</script>

<style>
#box{
    background-color:#bfddff ;
    margin-top: 10px;
}
#approve{
   background-color:#61fd95 ; 
}
#reject{
   background-color:#fd9f61 ;  
}
</style>