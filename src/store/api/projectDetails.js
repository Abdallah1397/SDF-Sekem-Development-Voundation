import axios from "axios";

export const getProjectDetails=(id)=>{
    return axios.get(`http://10.0.30.166:8080/project/${id}`)
} 