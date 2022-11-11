import axios from "axios"


export class EducationService{

    
getAllByResumeIdSortedByGraduationDate(resumeId){
    return axios.get("http://localhost:8050/api/educations/getAllByResumeIdSortedByGraduationDate?resumeId="+resumeId)
}

}