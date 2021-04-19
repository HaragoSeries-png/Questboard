import axios from 'axios'

axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
const url = '/api/noti'

class notifyService {   
    static async getnoti(){
        console.log('noti ser')
        let a = await axios.get(url).then(res=>{return res.data})
        return a
    }
}
export default notifyService