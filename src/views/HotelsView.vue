<template>
    <div id="section">
      <h2 class="display-2 text-center mb-4">Our Hotels</h2>
      <section id="assets">
        <div v-for="hotel in filteredhotels" :key="hotel.hotel_id">
          <div class="content-container mt-4">
            <div class="d-flex justify-content-between mb-4">
              <h2>{{hotel.hotel_name}}</h2>
              <h2>{{hotel.location}}</h2>     
              <div class="lead">
                <span class="text-success fw-bold">Price per night</span>: ${{ hotel.price_per_night}}

                <div class="button-wrapper d-flex justify-content-between mt-3">
                    <router-link :to="{ name: 'hotel', params: { id: hotel.hotel_id } }">
                    <button class="btn btn-success" @click="view(hotel.hotel_id)" >View</button>
                    </router-link>
                  <button class="btn btn-dark" @click="addToCart(hotel)">Add to Cart</button>
                </div>
              </div>
              <img :src="hotel.image_url" alt="Hotel Image" />
              <button v-if="$cookies.get('token')" @click="addToCheckOut(hotel.hotel_id)">Book Now😊</button>
            </div>
          </div>
        </div>
      </section>
      <!-- <p>fetching the data...</p> -->
    </div>
  </template>
  
  <script>
  import { computed, ref, watch, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';

  export default {
    setup() {
      const store = useStore();
      const router = useRouter();
      const searchQuery = ref('');
      const sortOption = ref('default');
      const hotels = computed(() => store.state.hotels);
      const filteredhotels = ref([]);


  
      onMounted(async () => {
  await store.dispatch('fetchHotels');
  filteredhotels.value = [...hotels.value];
});
  
      // Watch for changes in hotels, searchQuery, and sortOption to update filteredhotels
      watch([hotels, searchQuery, sortOption], () => {
        filterhotels();
        sorthotels();
      }, { deep: true });
  
      // Method to add hotels to the cart
      const addToCart = (hotel) => {
        store.dispatch('addToCart', hotel);
      };
  
      // Method to filter hotels based on search query
      const filterhotels = () => {
        const query = searchQuery.value.toLowerCase();
        filteredhotels.value = hotels.value.filter(hotel =>
          hotel.hotel_name.toLowerCase().includes(query)
        );
      };
  
      // Method to sort hotels based on selected option
      const sorthotels = () => {
        if (filteredhotels.value.length === 0) return;
  
        if (sortOption.value === 'nameAsc') {
          filteredhotels.value.sort((a, b) => a.hotel_name.localeCompare(b.hotel_name));
        } else if (sortOption.value === 'nameDesc') {
          filteredhotels.value.sort((a, b) => b.hotel_name.localeCompare(a.hotel_name));
        } else if (sortOption.value === 'priceAsc') {
          filteredhotels.value.sort((a, b) => a.amount - b.amount);
        } else if (sortOption.value === 'priceDesc') {
          filteredhotels.value.sort((a, b) => b.amount - a.amount);
        }
      };
      const view = (hotel_id) => {
      router.push({ name: 'hotel', params: { id: hotel_id } });
    };
  
    
      return {
        searchQuery,
        sortOption,
        filteredhotels,
        addToCart,
        filterhotels,
        sorthotels,
        view
      };
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