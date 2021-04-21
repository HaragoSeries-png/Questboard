import axios from 'axios';
import Swal from "sweetalert2";

const url = '/api/auth'
class authService {
    static async login(text) {
        let a = await axios.post(url + '/login', text).then(res => { return res.data })
        if (a.success) {
            localStorage.setItem('token', a.token);
            axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            return { suc: a.success, name: a.username, id: a.id, fullname: a.infoma.firstname + " " + a.infoma.lastname, infoma: a.infoma, token: a.token }
        }
        else {
            Swal.fire(
                "<alert-title>Error!</alert-title>",
                "<alert-subtitle>Please enter your Email and Password.</alert-subtitle>",
                "error",
            );
        }
    }
    static async register(text) {
        let a = await axios.post(url + '/signup', text).then(res => { return res.data })
        console.log('suc reg')
        return a.success
    }
    static async logout() {
        let text = await localStorage.getItem('token');
        console.log(text)
        let a = await axios.post('https://questboard-server.herokuapp.com/api/auth/logout', {token:text}).then(res => { return res.data })
        if(a){
            await localStorage.removeItem('token');
            await localStorage.removeItem('islogin');
            delete axios.defaults.headers.common['Authorization']; 
            return a
        }
        
    }
    static async profile() {
        console.log("Profile Search :")
        // let data = await axios.get('http://localhost:5000/api/profile').then((res) => {console.log("RES1 : " + res)})
        let data = { name: 'Kittisak', lastname: 'Sangkarak' }
        console.log("data in f " + data)
        return data
    }
}

export default authService
