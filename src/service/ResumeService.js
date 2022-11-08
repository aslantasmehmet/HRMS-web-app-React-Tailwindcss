import axios from "axios";


export default class ResumeService{

    getbyid(id){
        return axios.get("http://localhost:8050/api/resume/getbyid?id="+id)
    }

    getByCandidateId(candidateId) {
        return axios.get(`http://localhost:8050/api/resume/getByCandidateId?candidateId=${candidateId}`);
    }  

}