<template>
  <div id="section">
    <h2 class="display-2 text-center mb-4">Flights</h2>
    <section id="assets">
      <div class="search-sort-bar mb-4">
        <input type="text" v-model="durationTimeFilter" placeholder="Filter by duration time" class="form-control">
      </div>
      <div v-for="flight in filteredFlights" :key="flight.flight_id">
        <card-comp>
          <template #cardHeader>
            <img :src="flight.image_url" alt="Flight Image" />
          </template>
          <template #cardBody>
            <h2>{{ flight.airline }}</h2>
            <h2>Location: {{ flight.location }}</h2>
            <div class="lead">
              <h2>Ticket Amount: ${{ flight.price }}</h2> 
            </div>
            <button v-if="isLoggedIn" class="btn btn-dark" @click="addToCheckOut(flight.flight_id)">BOOK NOW!</button>
            <button v-else class="btn btn-dark disabled" @click="addToCart(flight)">BOOK NOW!</button>
            <div class="button-wrapper d-flex justify-content-between mt-3">
              <router-link :to="{ name: 'flight', params: { id: flight.flight_id } }">
                <button class="btn btn-success">View</button>
              </router-link>
            </div>
          </template>
        </card-comp>
      </div>
    </section>
  </div>
</template>

<script>
import CardComp from '@/components/CardComp.vue';

export default {
  components: { CardComp },
  data() {
    return {
      durationTimeFilter: '',
    };
  },
  computed: {
    filteredFlights() {
      return this.$store.state.flights.filter(flight => {
        const durationTime = new Date(flight.duration_time).toLocaleTimeString();
        return durationTime.includes(this.durationTimeFilter);
      });
    },
    isLoggedIn() {
      return this.$store.state.isLoggedIn;
    },
  },
  methods: {
    getFlightsData() {
      this.$store.dispatch('fetchFlights');
    },
    addToCheckOut(flight_id) {
      this.$store.dispatch('addToCheckOut', flight_id);
    },
  },
  mounted() {
    this.getFlightsData();
  },
};
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