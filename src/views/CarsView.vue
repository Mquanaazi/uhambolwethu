<template>
  <div id="section">
    <h2 class="display-2 text-center mb-4">Our Cars</h2>
    <section id="assets">
      <div v-for="car in $store.state.cars" :key="car.car_id">
        <div class="content-container mt-4">
          <div class="d-flex justify-content-between mb-4">
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
              <button class="btn btn-dark" @click="addToCart(car)">Add to Cart</button>
            </div>
            <img :src="car.image_url" alt="Car Image" />
            <button v-if="$cookies.get('token')" @click="addToCheckOut(car.car_id)">BOOK NOW!</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
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