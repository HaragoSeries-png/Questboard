import axios from 'axios'

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
const url = 'http://localhost:5000/api/profile'

class profileService{
    static async editprofile(text,field){
        let data = {value:text,field:field}
        let a = await axios.put(url,data).then(res=>{return res.data})
        console.log("suc "+a.success)
        return {suc:a.success}       
    }
    static async uploadimg(text){
        text.append("field",text)      
        let a = await axios.put(url,text).then(res=>{return res.data})
        console.log("suc "+a.success)
        return {suc:a.success}     
    }
    static async getprofile(){
        let a = await axios.get(url).then(res=>{return res.data})
        console.log("suc "+a.user)
        return {suc:a.success,infoma:a.user}
    
    }static async addskill(value,flag,field){
        let text = {value,flag,field}
        //flag:1 = addskil; else = delskill
        let a = await axios.put(url+'/list',text).then(res=>{return res.data})
        console.log("suc "+a.success)
        return {suc:a.success}
    }
}
export default profileService