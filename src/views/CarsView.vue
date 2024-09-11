<template>
  <div id="section">
    <h2 class="display-2 text-center mb-4">PLEASE LOGIN TO ENABLE THE BOOK NOW BUTTON</h2>
    <div class="sort-options">
      <button @click="sortByPrice">Sort by Price (High to Low)</button>
      <button @click="sortByYear">Sort by Year</button>
    </div>
    <section id="assets">
      <div v-for="car in sortedCars" :key="car.car_id">
        <card-comp>
          <template #cardHeader>
            <img :src="car.image_url" alt="Car Image" />
          </template>
          <template #cardBody>
            <h2>{{ car.car_make }}</h2>
            <h2>{{ car.car_model }}</h2>
            <h2>Rental Price per Day: ${{ car.rental_price_per_day }}</h2>
            <div class="lead">
              <span class="text-success fw-bold">Price:</span> ${{ car.rental_price_per_day }}
            </div>
            <div class="button-wrapper d-flex justify-content-between mt-3">
              <router-link :to="{ name: 'car', params: { cardID: car.car_id } }">
                <button class="btn btn-success">View</button>
              </router-link>
              <button class="btn btn-dark disabled" @click="addToCart(car)">BOOK NOW!</button>
            </div>
            <button v-if="$cookies.get('token')" @click="addToCheckOut(car.car_id)">BOOK NOW!</button>
          </template>
        </card-comp>
      </div>
    </section>
  </div>
</template>

<script>
import CardComp from "@/components/CardComp.vue"
export default {
  components: { CardComp },
  data() {
    return {
      sortOrder: 'price', // Initial sort order
      isDescending: true, // Sorting order: true for descending
    };
  },
  computed: {
    sortedCars() {
      let cars = this.$store.state.cars.slice(); // Get a copy of the cars array
      // Sort based on current sort criteria
      if (this.sortOrder === 'price') {
        return cars.sort((a, b) => (this.isDescending ? b.rental_price_per_day - a.rental_price_per_day : a.rental_price_per_day - b.rental_price_per_day));
      } else if (this.sortOrder === 'year') { // Example of sorting by year if available
        return cars.sort((a, b) => (this.isDescending ? b.year - a.year : a.year - b.year)); // You need to have 'year' property in your car objects
      }
      return cars; // Return sorted cars
    },
  },
  methods: {
    getCarsData() {
      this.$store.dispatch('getCarsDb');
    },
    addToCheckOut(car_id) {
      this.$store.dispatch('addToCheckOut', car_id);
    },
    viewCar(car_id) {
      this.$router.push({ name: 'car', params: { id: car_id } });
    },
    addToCart(car) {
      this.$store.dispatch('addToCart', car);
    },
    sortByPrice() {
      this.sortOrder = 'price'; // Set sort order to price
      this.isDescending = true; // Set to descending order
    },
    sortByYear() {
      this.sortOrder = 'year'; // Set sort order to year
      this.isDescending = true; // Set to descending order
    },
  },
  mounted() {
    this.getCarsData();
  },
}
</script>

<style>
.content-container {
  position: relative;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #87CEEB;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.display-2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2F4F7F;
}

.card-title, .lead {
  font-size: 18px;
  color: #2F4F7F;
}

.button-wrapper {
  margin-top: 20px;
}

.btn-success {
  background-color: #014674;
  border-color: #014573;
  color: #fff;
}

.btn-dark {
  background-color: #389ef8;
  border-color: #298df0;
  color: #fff;
}

.btn {
  margin: 10px;
}

.mb-4 {
  margin-bottom: 1.5rem;
}

.sort-options {
  margin-bottom: 20px;
}
</style>
