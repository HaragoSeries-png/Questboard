import axios from 'axios'

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
const url = '/api/profile'

class profileService {
    static async editprofile(text) {
        let a = await axios.put(url + "/editPro", text).then(res => { return res.data })
        console.log("suc " + a.success)
        return { suc: a.success }
    }
    static async uploadimg(text) {
        console.log(typeof text.get('image'))
        let a = await axios.put(url + "/editPic", text).then(res => { return res.data })
        console.log("suc " + a.success)
        return { suc: a.success }
    }
    static async getprofile(value) {
        let a = await axios.get(url + "/id/" + value).then(res => { return res.data })
        return { suc: a.success, user: a.user }

    } static async addskill(value, flag, field) {
        let text = { value, flag, field }
        //flag:1 = addskil; else = delskill
        let a = await axios.put(url + '/list', text).then(res => { return res.data })
        console.log("suc " + a.success)
        return { suc: a.success }
    }
    static async myquest(){
        let a = await axios.get(url+'/myquest').then(res=>{return res.data})
    
        if(a.success){
            let inprogress = a.inprogress
            let pending = a.pending
            let waiting = a.waiting  
            return {
                allquest: a.allquest,
                inprogress: inprogress,
                pending: pending,
                waiting: waiting
            }     
        }
        else return false
    }
    static async mywork(){
        let a = await axios.get(url+'/mywork').then(res=>{return res.data})   
        if(a.success){            
            return {
                allquest:a.allquest
            }     
        }
        else return false
    }
    static async getnoti(){
        console.log('noti ser')
        let a = await axios.get('/api/noti').then(res=>{return res.data})
        return a
    }
}
export default profileService