import axios from "axios";

export default class ResumeService {
  getById(id) {
    return axios.get("http://localhost:8050/api/resumes/getById?id=" + id);
  }

  getResumeDetailsByCandidateId(candidateId) {
    return axios.get("http://localhost:8050/api/resumes/getResumeDetailsByCandidateId?candidateId="+candidateId);
  }

  
    getAllResumesDetailsByActivatedCandidate() {
        return axios.get("http://localhost:8050/api/resumes/getAllResumesDetailsByActivatedCandidate");
    }

     
        getAllByCandidateId(id) {
        return axios.get("http://localhost:8050/api/coverLetters/getAllByCandidateId?candidateId="+id);
    }

 
}
