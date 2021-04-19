import axios from 'axios'

const url = '/api/quest'

class questService {
    static async createquest(text) {
        let a = await axios.post(url, text).then(res => { return res.data })
        console.log("suc " + a.success)
        return { suc: a.success }
    }
    static async getquest(page,cate) {
        let a = await axios.get(url+'/feed',{ params: { page: page,cat:cate }}).then(res=>{return res.data})

        return {suc:a.success,quest:a.quest,pagenum : a.pagenum} 
    }
    static async getquestinfo(value) {
        let a = await axios.get(url + "/questid/" + value).then(res => { return res.data })
        return { suc: a.success, quest: a.quest, owner: a.owner }
    }
    static async acceptquest(quest_id){
        let a = await axios.put(url+'/accept', {quest_id:quest_id}).then(res => { return res.data })
        console.log("suc " + a.success)
        return { suc: a.success }
    }
    static async waitselect(cid, qid, ap){ 
        // select คนทำเควส cid:คนที่เลือก , qid:questID(array) ,ap:true=approve false=reject (array)
        let data = {quest_id:qid  ,cid:cid, approve:ap}
        let a = await axios.put(url+'/select', data).then(res => { return res.data })
        console.log("suc " + a.success)
        return { suc: a.success }
    }
    static async ratingcon(conInfor){ 
        let data = {detail:conInfor}
        let a = await axios.put(url+'/rate', data).then(res => { return res.data })
        console.log("suc " + a.success)
        return { suc: a.success }
    }
    static async startquest(quest_id){

        let a = await axios.put(url+'/start',{quest_id:quest_id}).then(res => { return res.data })
        return a.success
    }
}

export default questService