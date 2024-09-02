<template>
  <div id="section">
    <!-- <SingleAssetView :asset="asset" :assetType="assetType" :assetIdKey="assetIdKey" /> -->
    <!-- {{ fetchHotel }} -->
    <div>
      <!-- <img :src="fetchHotel.image_url" alt=""> -->
       {{ this.$store.state.hotel }}
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
    this.$store.dispatch('getHotelById',this.$route.params.id)
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
    }
  }
}
</script>