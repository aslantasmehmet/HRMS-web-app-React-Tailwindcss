import axios from "axios";


export default class UserService {
 
    getAll(){
        return axios.get("http://localhost:8050/api/users/getall")
    }

    login(user){
        return axios.post("http://localhost:8050/api/users/login",user)
    }
}
