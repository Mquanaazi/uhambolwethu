<template>
  <div id="section">
    <!-- <SingleAssetView :asset="asset" :assetType="assetType" :assetIdKey="assetIdKey" /> -->
    <!-- {{ fetchHotel }} -->
    <div>
      <!-- <img :src="fetchHotel.image_url" alt=""> -->
       {{ this.$store.state.hotel }}
       {{ this.$store.state.flight }}
       {{ this.$store.state.car }}
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import SingleAssetView from '../views/SingleAssetView.vue'

export default {
  props: {
    assetType: String,
    assetIdKey: String
  },
  methods:{
    
  },
  mounted() {
    
    this.$store.dispatch('getHotelById',this.$route.params.hotelID)
    this.$store.dispatch('getFlightById',this.$route.params.id)
    this.$store.dispatch('getCarById',this.$route.params.cardID)
    // if (this.assetType === 'hotels') {
    //   this.$store.dispatch('getHotelById', this.$route.params.id)
    // } else if (this.assetType === 'flights') {
    //   this.$store.dispatch('getFlightById', this.$route.params.id)
    // } else if (this.assetType === 'cars') {
    //   this.$store.dispatch('getCarById', this.$route.params.id)
    // }
  },
  computed: {
    asset() {
      if (this.assetType === 'hotels') {
        return this.$store.state.hotel
      } else if (this.assetType === 'flights') {
        return this.$store.state.flight
      } else if (this.assetType === 'cars') {
        return this.$store.state.car
      }
    },
    fetchHotel(){
      let [hotel] = this.$store.state.hotels.filter(hotel => hotel.hotel_id == this.$route.params.id)
      return hotel
    },
    fetchFlight(){
      let [flight] = this.$store.state.flights.filter(flight => flight.flight_id == this.$route.params.id)
      return flight
    },
    fetchCar(){
      let [car] = this.$store.state.cars.filter(car => car.car_id == this.$route.params.id)
      return car
    },
  }
}
</script>