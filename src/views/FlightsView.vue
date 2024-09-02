<template>
    <div id="section">
      <h2 class="display-2 text-center mb-4">Our Flights</h2>
      <section id="assets">
        <div v-for="flight in $store.state.flights" :key="flight.flight_id">
          <div class="content-container mt-4">
            <div class="d-flex justify-content-between mb-4">
              <h2>{{ flight.airline }}</h2>
              <h2>Location: {{ flight.location }}</h2>
              <div class="lead">
                <span class="text-success fw-bold">Price:</span> ${{ flight.price }}
              </div>
              <div class="button-wrapper d-flex justify-content-between mt-3">
                <router-link :to="{ name: 'flight', params: { id: flight.flight_id } }">
                  <button class="btn btn-success" @click="view(flight.flight_id)">View</button>
                </router-link>
                <button class="btn btn-dark" @click="addToCart(flight)">Add to Cart</button>
              </div>
              <img :src="flight.image_url" alt="Flight Image" />
              <button v-if="$cookies.get('token')" @click="addToCheckOut(flight.flight_id)">Book Now!</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      getFlightsData() {
        this.$store.dispatch('fetchFlights')
      },
      addToCheckOut(flight_id) {
        this.$store.dispatch('addToCheckOut', flight_id)
      },
      view(flight_id) {
        this.$router.push({ name: 'flight', params: { id: flight_id } })
      },
      addToCart(flight) {
        this.$store.dispatch('addToCart', flight)
      }
    },
    mounted() {
      this.getFlightsData()
    }
  }
  </script>
  
  <style>
  .content-container {
    position: relative;
    max-width: 1200px;
    margin: 40px auto;
    padding: 20px;
    background-color: rgba(44, 62, 80, 0.9);
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .display-2 {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    color: white;
  }
  
  .card-title, .lead {
    font-size: 18px;
    color: white;
  }
  
  .button-wrapper {
    margin-top: 20px;
  }
  
  .btn-success {
    background-color: #1abc9c;
    border-color: #1abc9c;
    color: #fff;
  }
  
  .btn-dark {
    background-color: #2c3e50;
    border-color: #2c3e50;
    color: #fff;
  }
  
  .btn {
    margin: 10px;
  }
  
  .mb-4 {
    margin-bottom: 1.5rem;
  }
  </style>