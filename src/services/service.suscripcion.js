import http from "library/http.js";

class serviceSuscripcion extends http{

    url = "http://172.18.60.50:3004/persons";

    constructor() {
        super();
        //this.url = "asdasd";
    }

    getSuscripciones(){  
        return this.get(this.url)        
    }

    getSuscripcion(id){  
        return this.get(this.url + "/"+id)       
    }

    deleteSuscripcion(id){
        return this.delete(this.url + "/"+id)       
    }

}

export default serviceSuscripcion
