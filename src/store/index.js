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
    setUsers(state, payload) {
      state.users = payload
    },
    removeUser(state, userID) {
      state.users = state.users.filter(user => user.userID !== userID)
    },
    updateUser(state, user) {
      const index = state.users.findIndex(u => u.userID === user.userID)
      if (index !== -1) {
        state.users[index] = user
      }
    },
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
      try {
        let {data} = await axios.post("http://localhost:2027/users", info)
        toast("Hello! You have successfully registered!", {
          "theme": "auto",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        })
        commit('setUsers', data)
      } catch (error) {
        console.error(error)
        toast.error("Error signing up")
      }
    },
    async loginUser({ commit }, info) {
      console.log(info);
      
      try {
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
        // location.reload()
      } catch (error) {
        console.error(error)
        toast.error("Error logging in")
      }
    },
    async getUsers({ commit }) {
      try {
        let { data } = await axios.get("http://localhost:2027/users")
        commit("setUsers", data)
        return data
      } catch (error) {
        console.error(error)
      }
    },
    async deleteUser({ commit }, userID) {
      try {
        const response = await axios.delete(`http://localhost:2027/users/${userID}`)
        commit("removeUser", userID)
        toast.success("User deleted successfully")
      } catch (error) {
        console.error(error)
        toast.error("Error deleting user")
      }
    },
    async updateUser({ commit }, user) {
      try {
        const response = await axios.patch(`http://localhost:2027/users/${user.userID}`, user)
        commit("updateUser", user)
        toast.success("User updated successfully")
      } catch (error) {
        console.error(error)
        toast.error("Error updating user")
      }
    },
    async fetchHotels({ commit }) {
      try {
        let { data } = await axios.get("http://localhost:2027/assets/hotels")
        console.log(data);
        commit("setHotels", data)
        return data
      } catch (error) {
        console.error(error)
      }
    },
    async getHotelById({ commit }, hotel_id) {
      try {
        let { data } = await axios.get(`http://localhost:2027/assets/hotel/${hotel_id}`)
        console.log(data);
        commit("setHotel", data)
      } catch (error) {
        console.error(error)
      }
    },
    async fetchFlights({ commit }) {
      try {
        let { data } = await axios.get("http://localhost:2027/assets/flights")
        console.log(data);
        commit("setFlights", data)
        return data
      } catch (error) {
        console.error(error)
      }
    },
    async getFlightById({ commit }, flight_id) {
      try {
        let { data } = await axios.get(`http://localhost:2027/assets/flight/${flight_id}`)
        console.log(data);
        commit("setFlight", data)
      } catch (error) {
        console.error(error)
      }
    },
    async getCarsDb({ commit }) {
      try {
        let { data } = await axios.get("http://localhost:2027/assets/cars")
        console.log(data);
        commit("setCars", data)
        return data
      } catch (error) {
        console.error(error)
      }
    },
    async getCarById({ commit }, car_id) {
      try {
        let { data } = await axios.get(`http://localhost:2027/assets/car/${car_id}`)
        console.log(data);
        commit("setCar", data)
        return data
      } catch (error) {
        console.error(error)
      }
    },
    async addToCheckOut({ commit }, hotel_id) {
      try {
        let { data } = await axios.post("http://localhost:2027/assets/hotels/CheckOut", { id: hotel_id })
        console.log(data);
        return data
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {}
})