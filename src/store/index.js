/* eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import router from '@/router';
import { useCookies } from "vue-cookies";
axios.defaults.withCredentials=true
axios.defaults.headers=$cookies.get("token")



export default createStore({
  state: {
    hotels:null,
    flights:null,
    cars:null,

  },
  getters: {
  },
  mutations: {
    setHotels(state,payload){
    state.hotels=payload
    },
    setFlights(state,payload){
    state.flights=payload
    },
    setCars(state,payload){
    state.cars=payload
    },
  },
  actions: {
    async addUser({commit},info){
      let data=await axios.post("http://localhost:2027/users",info)
      toast("Hello! signed in successfully!", {
        "theme": "auto",
        "type": "default",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
    },
   async loginUser({commit},info){
      let {data}= await axios.post("http://localhost:2027/users/login",info)
      toast("welcome back!", {
        "theme": "auto",
        "type": "default",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
      console.log(data);
      
      $cookies.set("token",data.token)
     await router.push('/')
     location.reload()
  },
  async getHotelsDb({commit}){
    let {data}=await axios.get("http://localhost:2027/assets/hotels")
    console.log(data);
    commit("setHotels",data)

  },
  async getFlightsDb({commit}){
    let {data}=await axios.get("http://localhost:2027/assets/flights")
    console.log(data);
    commit("setFlights",data)

  },
  async getCarsDb({commit}){
    let {data}=await axios.get("http://localhost:2027/assets/cars")
    console.log(data);
    commit("setCars",data)

  },
  async addToCheckOut({commit},hotel_id){
    let {data}=await axios.post("http://localhost:2027/assets/hotels/CheckOut",{id:hotel_id})
   console.log(data);
   
  }
},
modules: {
}
})
