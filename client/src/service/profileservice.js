import axios from 'axios'

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
const url = 'api/profile'

class profileService {
    static async editprofile(text) {
        let a = await axios.put(url, text).then(res => { return res.data })
        console.log("suc " + a.success)
        return { suc: a.success }
    }
    static async uploadimg(text) {
        console.log(typeof text.get('image'))
        let a = await axios.put(url + "/editPic", text).then(res => { return res.data })
        console.log("suc " + a.success)
        return { suc: a.success }
    }
    static async getprofile() {
        let a = await axios.get(url).then(res => { return res.data })
        console.log("suc ")
        console.log(a.user)
        return { suc: a.success, user: a.user }

    } static async addskill(value, flag, field) {
        let text = { value, flag, field }
        //flag:1 = addskil; else = delskill
        let a = await axios.put(url + '/list', text).then(res => { return res.data })
        console.log("suc " + a.success)
        return { suc: a.success }
    }
}
export default profileService