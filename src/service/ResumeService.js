import axios from "axios";


export default class ResumeService{

    getByCandidateId(id){
        return axios.get("http://localhost:8050/api/resume/getbycandidateid?candidateId="+id)
    }

}