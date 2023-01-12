import axios from "axios";

export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    "http://localhost:8050/api/candidates/add",
    input
  );
  return data;
};

export default class CandidateService {
  getByIdentityNumber(identityNumber) {
    return axios.get(
      "http://localhost:8050/api/candidates/getByIdentityNumber?identityNumber=" +
        identityNumber
    );
  }

  getByEmail(email) {
    return axios.get(
      "http://localhost:8050/api/candidates/getById?email=" + email
    );
  }

  login(candidate) {
    return axios.post("http://localhost:8050/api/employers/login", candidate);
  }
}
