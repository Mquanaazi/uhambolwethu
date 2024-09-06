<template>
  <div class="container-fluid" id="section">
    <h2 class="display-2 text-center mb-4">PLEASE LOGIN TO ENABLE THE BOOK NOW BUTTON</h2>
    <section  class="container-fluid">
      <div v-for="hotel in filteredhotels" :key="hotel.hotel_id">
        <card-comp>
          <template #cardHeader>
            <img :src="hotel.image_url" alt="Hotel Image"  class="img-fluid" />
          </template>
          <template #cardBody>
            <h2>{{ hotel.hotel_name }}</h2>
            <h2>{{ hotel.location }}</h2>
            <div class="lead">
              <span class="text-success fw-bold">Price per night</span>: ${{ hotel.price_per_night }}
            </div>
            <div class="button-wrapper d-flex justify-content-between mt-3">
              <router-link :to="{ name: 'hotel', params: { hotelID: hotel.hotel_id } }">
                <button class="btn btn-success" @click="view(hotel.hotel_id)">VIEW MORE</button>
              </router-link>
              <button class="btn btn-dark" @click="addToCheckOut(hotel.hotel_id)">BOOK NOW! 😊</button>
              <!-- <button class="btn btn-dark" :disabled="!isLoggedIn" @click="addToCheckOut(hotel.hotel_id)">BOOK NOW! 😊</button> -->
            </div>
          </template>
        </card-comp>
      </div>
    </section>
  </div>
</template>
  
  <script>
  import { computed, ref, watch, onMounted } from 'vue';
  import { useStore } from 'vuex';
  import { useRouter } from 'vue-router';
  import CardComp from '@/components/CardComp.vue';
  export default {
    components: { CardComp },
    setup() {
      const isLoggedIn = computed(() => store.state.isLoggedIn)
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
      const addToCheckOut= (hotel) => {
        store.dispatch('addToCheckOut', hotel);
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
      router.push({ name: 'hotel', params: { hotelID: hotel_id } });
    };
  
    
      return {
        searchQuery,
        sortOption,
        filteredhotels,
        addToCheckOut,
        filterhotels,
        sorthotels,
        view,
        isLoggedIn,
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