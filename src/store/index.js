 /* eslint-disable */
import { createStore } from 'vuex'
import axios from 'axios'
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import router from '@/router';

axios.defaults.withCredentials = true

export default createStore({
  state: {
    token: null,
    isLoggedIn: false,
    bookings: [],
    hotels: [],
    flights: [],
    cars: [],
    users: [],
    hotel: [],
    flight: [],
    car: [],
    checkouts: [],
    checkoutStatus: '', 
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
    setToken(state, token) {
      state.token = token;
    },
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
    setCheckouts(state, payload) {
      state.checkouts = payload
    },
    addCheckout(state, checkout) {
      state.checkouts.push(checkout)
    },
    updateCheckout(state, checkout) {
      const index = state.checkouts.findIndex(c => c.checkoutID === checkout.checkoutID)
      if (index !== -1) {
        state.checkouts[index] = checkout
      }
    },
    removeCheckout(state, checkoutID) {
      state.checkouts = state.checkouts.filter(c => c.checkoutID !== checkoutID)
    },
    setIsLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
},
updateCheckoutStatus(state, status) {
  state.checkoutStatus = status;
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
    async loginUser({ commit }, { emailAdd, userPass }) {
      console.log(emailAdd,userPass);
      try {
        const response = await axios.post("http://localhost:2027/users/login", { emailAdd, userPass })
        commit('setToken', response.data.token); 
        commit('setIsLoggedIn', true);
        let { data } = await axios.post("http://localhost:2027/users/login", { emailAdd, userPass });
        toast("welcome back!", {
          "theme": "auto",
          "type": "default",
          "position": "top-center",
          "dangerouslyHTMLString": true
        });
        console.log(data);
        axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
        await router.push('/');
      } catch (error) {
        console.error(error);
        toast.error("Error logging in");
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
    async deleteHotel({ commit }, hotel_id) {
      try {
        const response = await axios.delete(`http://localhost:2027/assets/hotel/${hotel_id}`)
        commit("removeHotel", hotel_id)
        toast.success("hotel deleted successfully")
      } catch (error) {
        console.error(error)
        toast.error("Error deleting hotel")
      }
    },
    async deleteFlight({ commit }, flight_id) {
      try {
        const response = await axios.delete(`http://localhost:2027/assets/flight/${flight_id}`)
        commit("removeFlight", flight_id)
        toast.success("flight deleted successfully")
      } catch (error) {
        console.error(error)
        toast.error("Error deleting flight")
      }
    },
    async deleteCar({ commit }, car_id) {
      try {
        const response = await axios.delete(`http://localhost:2027/assets/car/${car_id}`)
        commit("removeCar", car_id)
        toast.success("car deleted successfully")
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
    async updateHotel({ commit }, hotel_id) {
      try {
        const response = await axios.patch(`http://localhost:2027/assets/hotel/${hotel_id}`)
        commit("updateHotel", hotel)
        toast.success("hotel updated successfully")
      } catch (error) {
        console.error(error)
        toast.error("Error updating hotel")
      }
    },
    async updateFlight({ commit }, hotel_id) {
      try {
        const response = await axios.patch(`http://localhost:2027/assets/flight/${flight_id}`)
        commit("updateFlight", flight)
        toast.success("flight updated successfully")
      } catch (error) {
        console.error(error)
        toast.error("Error updating flight")
      }
    },
    async updateCar({ commit }, hotel_id) {
      try {
        const response = await axios.patch(`http://localhost:2027/assets/car/${car_id}`)
        commit("updateCar", car)
        toast.success("car updated successfully")
      } catch (error) {
        console.error(error)
        toast.error("Error updating car")
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
   
    logoutUser({ commit }) {
      commit('setLoggedIn', false)
      axios.defaults.headers.common['Authorization'] = null
  
},
async fetchCheckouts({ commit }) {
  try {
    let { data } = await axios.get("http://localhost:2027/checkouts")
    commit("setCheckouts", data)
    return data
  } catch (error) {
    console.error(error)
  }
},
async fetchCheckout({ commit }, checkoutID) {
  try {
    let { data } = await axios.get(`http://localhost:2027/checkout/checkouts/${checkoutID}`)
    return data
  } catch (error) {
    console.error(error)
  }
},
async createCheckout({ commit }, checkoutData) {
  try {
    let { data } = await axios.post('http://localhost:2027/checkout/checkout', checkoutData);
    commit('addCheckout', data);
    toast("Booking in progress!");
  } catch (error) {
    console.error(error);
    toast.error("YOU'RE TOO BROKE TO BOOK, BYEEE!");
  }
},
async updateCheckout({ commit }, checkoutData) {
  try {
    let { data } = await axios.put(`http://localhost:2027/checkout/checkouts/${checkoutData.checkoutID}`, checkoutData)
    commit("updateCheckout", data)
    toast("Checkout updated successfully!")
  } catch (error) {
    console.error(error)
    toast.error("Error updating checkout")
  }
},
async deleteCheckout({ commit }, checkoutID) {
  try {
    await axios.delete(`http://localhost:2027/checkouts/${checkoutID}`)
    commit("removeCheckout", checkoutID)
    toast("Checkout deleted successfully!")
  } catch (error) {
    console.error(error)
    toast.error("Error deleting checkout")
  }
  },

  // async submitCheckout() {
  //   try {
       
  //     await axios.post('http://localhost:2027/assets/CheckOut ', this.checkout);
  //     // Reset the form
  //     this.checkout = {
  //       userId: null,
  //       bookingType: '',
  //       bookingId: null,
  //       bookingDetails: '',
  //       totalCost: null,
  //       paymentMethod: '',
  //       paymentStatus: '',
  //     };
     
  //     alert('Checkout successful!');
  //   } catch (error) {
  //     console.error(error);
      
  //     alert('Error creating checkout record');
  //   }
  // },
  async submitCheckout({ commit, state }, checkoutData) {
    try {
      await axios.post('http://localhost:2027/assets/CheckOut', checkoutData);
      commit('updateCheckoutStatus', 'paid'); 
      toast("Checkout successful!");
    } catch (error) {
      console.error(error);
      toast.error("Error creating checkout record");
    }
  },
  },
  modules: {}
  
})