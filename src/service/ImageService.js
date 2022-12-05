import axios from "axios";

export default class ImageService {
  getById(id) {
    return axios.get("http://localhost:8050/api/images/getById?id=" + id);
  }
}
