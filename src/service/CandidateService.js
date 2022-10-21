import axios from "axios"


export const fetchRegister =async(input) =>{
    const {data} = await axios.post("http://localhost:8050/api/candidates/add",
    input
    );
    return data;
};

