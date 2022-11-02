import axios from "axios"


export const fetchRegister =async(input) => {
    const {data} = await axios.post("http://localhost:8050/api/candidates/add",
    input
    );
    return data;
};

export default class CandidateService{
    getByIdentityNumber(id){
        return axios.get("http://localhost:8050/api/candidates/getByIdentityNumber?identityNumber="+id)
    }
}

