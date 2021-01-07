import axios from 'axios';

const url = 'http://localhost:5000/api/auth'
class authService {
    // static async getfuck(){
    //     let data = await axios.get(url).then((res)=>{
    //     console.log(res.data)
    //     return res.data
    //     })
    //     console.log("data in f "+data)
    //     return data   
    // }
    static async login(text) {
        let a = await axios.post(url + '/login', text).then(res => { return res.data })
        console.log("succ")
        if(a.success){
            axios.defaults.headers.common['Authorization'] = a.token;
            console.log('axi '+a.token)
            localStorage.setItem('token', a.token);
            return {suc:a.success,name:a.username,infoma:a.user}
        }
        else{
            alert("wrong")
        }   
      
    }
    static async register(text) {
        let a = await axios.post(url + '/signup', text).then(res => { return res.data })
        console.log('suc reg')
        return a.success
    }
    static async logout() {
        await localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];

    }
    static async profile() {
        console.log("Profile Search :")
        // let data = await axios.get('http://localhost:5000/api/profile').then((res) => {console.log("RES1 : " + res)})
        let data = {name: 'Kittisak', lastname: 'Sangkarak'}
        console.log("data in f " + data)
        return data
    }
}

export default authService
