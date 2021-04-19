import axios from 'axios';
const url = 'http://localhost:5000/api/admin'

class adminService{

    static async getpending() {
        let a = await axios.get(url+'/quest').then(res=>{return res.data})
        console.log("suc "+a.quest)
        return {suc:a.success,quests:a.quests} 
    }
    static async getquestinfo(value) {
        let a = await axios.get(url + "/questid/" + value).then(res => { return res.data })
        return { suc: a.success, quest: a.quest }
    }
    static async decide(qid,status,r){
        let a = await axios.put(url+'/decide',{quest_id:qid,approve:status,rate:r}).then(res=>{return res.data})
        return a.success
    }
    static async getall(){

        
        let a = await axios.get(url+'/getall').then(res=>{return res.data})
        return {quests:a} 
    }



}
export default adminService