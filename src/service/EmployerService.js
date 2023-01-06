import axios from 'axios';

export const fetchRegister =async(input) => {
    const {data} = await axios.post("http://localhost:8050/api/employers/add",
    input
    );
    return data;
};


export default class EmployerService{
login(employer){
    return axios.post("http://localhost:8050/api/employers/login",employer)
}

}