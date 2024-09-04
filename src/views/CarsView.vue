<template>
  <div id="section">
    <h2 class="display-2 text-center mb-4">PLEASE LOGIN TO ENABLE THE BOOK NOW BUTTON</h2>
    <section id="assets">
      <div v-for="car in $store.state.cars" :key="car.car_id">
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
  methods: {
    getCarsData() {
      this.$store.dispatch('getCarsDb')
    },
    addToCheckOut(car_id) {
      this.$store.dispatch('addToCheckOut', car_id)
    },
    viewCar(car_id) {
      this.$router.push({ name: 'car', params: { id: car_id } })
    },
    addToCart(car) {
      this.$store.dispatch('addToCart', car)
    }
  },
  mounted() {
    this.getCarsData()
  }
}
</script>

<style>
.content-container {
  position: relative;
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #87CEEB; /* Match the background color of the body */
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.display-2 {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #2F4F7F; /* Match the text color of the body */
}

.card-title, .lead {
  font-size: 18px;
  color: #2F4F7F; /* Match the text color of the body */
}

.button-wrapper {
  margin-top: 20px;
}

.btn-success {
  background-color: #014674; /* Match the color scheme of the nav links */
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

</style>