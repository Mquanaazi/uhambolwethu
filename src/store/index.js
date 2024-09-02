/* eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import router from '@/router';

axios.defaults.withCredentials = true

export default createStore({
  state: {
    hotels: [],
    flights: [],
    cars: [],
    users: [],
    hotel: [],
    flight: [],
    car: [],
  },
  getters: {},
  mutations: {
    setHotels(state, payload) {
      state.hotels = payload
    },
    setFlights(state, payload) {
      state.flights = payload
    },
    setCars(state, payload) {
      state.cars = payload
    },
    setHotel(state, payload) {
      state.hotel = payload
    },
    setFlight(state, payload) {
      state.flight = payload
    },
    setCar(state, payload) {
      state.car = payload
    },
  },
  actions: {
    async addUser({ commit }, info) {
      let data = await axios.post("http://localhost:2027/users", info)
      toast("Hello! signed in successfully!", {
        "theme": "auto",
        "type": "default",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
      return data
    },
    async loginUser({ commit }, info) {
      let { data } = await axios.post("http://localhost:2027/users/login", info)
      toast("welcome back!", {
        "theme": "auto",
        "type": "default",
        "position": "top-center",
        "dangerouslyHTMLString": true
      })
      console.log(data);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
      await router.push('/')
      location.reload()
    },
    async fetchHotels({ commit }) {
      let { data } = await axios.get("http://localhost:2027/assets/hotels")
      console.log(data);
      commit("setHotels", data)
      return data
    },
    async getHotelById({ commit }, hotel_id) {
      let { data } = await axios.get(`http://localhost:2027/assets/hotel/${hotel_id}`)
      console.log(data);
      commit("setHotel", data)
    },
      async fetchFlights({ commit }) {
        let { data } = await axios.get("http://localhost:2027/assets/flights")
        console.log(data);
        commit("setFlights", data)
        return data
      },
  
    async getFlightById({ commit }, flight_id) {
      let { data } = await axios.get(`http://localhost:2027/assets/flights/${flight_id}`)
      console.log(data);
      commit("setFlight", data)
      return data
    },
    async getCarsDb({ commit }) {
      let { data } = await axios.get("http://localhost:2027/assets/cars")
      console.log(data);
      commit("setCars", data)
      return data
    },
    async getCarById({ commit }, car_id) {
      let { data } = await axios.get(`http://localhost:2027/assets/cars/${car_id}`)
      console.log(data);
      commit("setCar", data)
      return data
    },
    async addToCheckOut({ commit }, hotel_id) {
      let { data } = await axios.post("http://localhost:2027/assets/hotels/CheckOut", { id: hotel_id })
      console.log(data);
      return data
    }
  },
  modules: {}
})