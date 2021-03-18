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
        console.log("suc "+a.quest)
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
    static async waitselect(cid,qid,ap){
        let data = {cid:cid , quest_id:qid , approve:ap}
        let a = await axios.put(url+'/select', data).then(res => { return res.data })
        console.log("suc " + a.success)
        return { suc: a.success }
    }
}

export default questService