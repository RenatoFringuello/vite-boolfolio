import { reactive } from "vue"
import axios from 'axios'

export const store = reactive({
   //page - loader
   isPageAvailable : false,
   getDataAfter(n){
      setTimeout(()=>{
        this.isPageAvailable = true;
      },n);
      return this.isPageAvailable;
    },


   //axios
   apiUrl : 'http://localhost:8000/api',
   dataRaw:[],
   data:[],
   prevPageLink :'',
   isPrevAvailable: false,
   nextPageLink :'',
   isNextAvailable: true,
   isLoaded: false,
   getData(location){
      this.isLoaded = false;
      axios.get(this.apiUrl + location)
            .then((response)=>{
               // console.log(response.data.result);
               this.dataRaw = response;
            })
            .catch((error)=>{
               console.error(error);
            })
            .then(()=>{
               this.data = this.dataRaw.data.result.data;
               // console.log(this.dataRaw.data.result);
               this.prevPageLink = this.dataRaw.data.result.next_page_url;
               this.nextPageLink = this.dataRaw.data.result.next_page_url;
               this.isLoaded = true;
            });
   },
   getNextPage(){
      this.isLoaded = false;
      axios.get(this.dataRaw.data.result.next_page_url)
            .then((response)=>{
               console.log(response.data.result);
               this.dataRaw = response;
            })
            .catch((error)=>{
               // console.error(error);
            })
            .then(()=>{
               //set the next and prev page at every call
               this.isNextAvailable = this.dataRaw.data.result.next_page_url != null;
               this.isPrevAvailable = this.dataRaw.data.result.prev_page_url != null;
               //get the data
               this.data = this.dataRaw.data.result.data;
               //set true when all the data is loaded
               this.isLoaded = true;
            });
   },
   getPrevPage(){
      this.isLoaded = false;
      axios.get(this.dataRaw.data.result.prev_page_url)
            .then((response)=>{
               this.dataRaw = response;
            })
            .catch((error)=>{
               // console.error(error);
            })
            .then(()=>{
               //set the next and prev page at every call
               this.isPrevAvailable = this.dataRaw.data.result.prev_page_url != null;
               this.isNextAvailable = this.dataRaw.data.result.next_page_url != null;
               //get the data
               this.data = this.dataRaw.data.result.data;
               //set true when all the data is loaded
               this.isLoaded = true;
            });
   }
});