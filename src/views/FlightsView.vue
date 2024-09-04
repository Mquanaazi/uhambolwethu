<template>
  <div id="section">
    <h2 class="display-2 text-center mb-4">PLEASE LOGIN TO ENABLE THE BOOK NOW BUTTON</h2>
    <section id="assets">
      <div v-for="flight in $store.state.flights" :key="flight.flight_id">
        <card-comp>
          <template #cardHeader>
            <img :src="flight.image_url" alt="Flight Image" />
          </template>
          <template #cardBody>
            <h2>{{ flight.airline }}</h2>
            <h2>Location: {{ flight.location }}</h2>
            <div class="lead">
              <span class="text-success fw-bold">Price:</span> ${{ flight.price }}
            </div>
            <div class="button-wrapper d-flex justify-content-between mt-3">
              <router-link :to="{ name: 'flight', params: { id: flight.flight_id } }">
                <button class="btn btn-success">View</button>
              </router-link>
              <button class="btn btn-dark disabled" @click="addToCart(flight)">BOOK NOW!</button>
            </div>
            <button v-if="$cookies.get('token')" @click="addToCheckOut(flight.flight_id)">Book Now!</button>
          </template>
        </card-comp>
      </div>
    </section>
  </div>
</template>

<script>
/* eslint-disable */
import CardComp from '@/components/CardComp.vue'; 

export default {
  components: { CardComp },
    methods: {
      getFlightsData() {
        this.$store.dispatch('fetchFlights')
      },
      addToCheckOut(flight_id) {
        this.$store.dispatch('addToCheckOut', flight_id)
      },
      // viewFlight(flight_id) {
      //   this.$router.push({ name: 'flight', params: { id: flight_id } })
      // },
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