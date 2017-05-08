import axios from "axios";

class http {

    axios = axios;

    get(url){        
        return this.axios.get(url)
    }

    delete(url){        
        return this.axios.delete(url)
    }
}

export default http;
