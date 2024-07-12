import axios from "axios";

const axiosInstance= axios.create({
    headers:{
        credentials:"include",
        method:"POST",
        "Content-type":"application/json",
    }
});

export default axiosInstance;