import { reactive } from "vue"
import axios from 'axios'

export const store = reactive({
   apiUrl : 'http://localhost:8000/api',
   dataRaw:[],
   data:[],
   isLoaded: false,
   getData(location){
      this.isLoaded = false;
      axios.get(this.apiUrl + location)
            .then((response)=>{
               // console.log(response.data.result.data);
               this.dataRaw = response.data.result.data;
            })
            .catch((error)=>{
               console.error(error);
            })
            .then(()=>{
               // console.warn(this.dataRaw);
               this.data = this.dataRaw;
               this.isLoaded = true;
            });
   }
});