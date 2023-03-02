import { reactive } from "vue"
import axios from 'axios'

export const store = reactive({
    apiUrl : 'http://localhost:8000/api',
    dataRaw:[],
    getData(location){
        axios.get(this.apiUrl + location)
             .then((response)=>{
                console.log(response);
             })
             .catch((error)=>{
                console.error(error);
             })
    }
});