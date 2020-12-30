import axios from 'axios';

const url = 'http://localhost:5000/api/auth'
class authService{
    // static async getfuck(){
    //     let data = await axios.get(url).then((res)=>{
    //     console.log(res.data)
    //     return res.data
    //     })
    //     console.log("data in f "+data)
    //     return data   
    // }
    static async login(text){        
        let a = await axios.post(url+'/login',text).then(function(res){alert(res.data)})
        if(a.success){ 
            axios.defaults.headers.common['Authorization'] = a.token;
            console.log('axi '+a.token)
            localStorage.setItem('token', a.token);
            return {name:a.username,suc:a.success};
        }
        else{
            alert(a.success)
        }
    }
    static async register(text){
        let a = await axios.post(url+'/signup',text).then(res=> {return res.data})
       
        return a.success
    }
    static async logout(){
        await localStorage.removeItem('token');
        delete axios.defaults.headers.common['Authorization'];
        
    }
}

export default authService
