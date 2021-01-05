import axios from 'axios'

const url = 'http://localhost:5000/api/profile'

class profileService{
    static async editprofile(text){
        let a = await axios.put(url,text).then(res=>{return res.data})
        console.log("suc "+a.success)
        return {suc:a.success}
        
    }
}
export default profileService