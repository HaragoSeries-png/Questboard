import axios from 'axios'

const url = 'http://localhost:5000/api/quest'

class questService{
    static async createquest(text){
        let a = await axios.post(url,text).then(res=>{return res.data})
        console.log("suc "+a.success)
        return {suc:a.success} 
    }
}
export default questService
