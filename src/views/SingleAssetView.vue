<template>
  <div id="section">
    <h1>{{ assetType }} Details</h1>
    <h2>{{ assetType }} ID: {{ asset[assetIdKey] }}</h2>
    <h2>{{ assetType }} Name: {{ asset.name }}</h2>
    <h2>Location: {{ asset.location }}</h2>
    <h2>Rating: {{ asset.rating }}</h2>
    <!-- Conditional statements for asset type specific details -->
    <h2 v-if="assetType === 'hotels' && asset.image_url">{{hotel.image_url}}</h2>
    <h2 v-if="assetType === 'hotels' && asset.hotel_id">hotel ID:{{hotel.hotel_id}}</h2>
    <h2 v-if="assetType === 'hotels' && asset.price_per_night">Price per night: {{ asset.price_per_night }}</h2>
    <h2 v-if="assetType === 'hotels' && asset.rooms_available">Rooms available: {{ asset.rooms_available }}</h2>
    <h2 v-if="assetType === 'hotels' && asset.check_in_time">Check-in time: {{ asset.check_in_time }}</h2>
    <h2 v-if="assetType === 'hotels' && asset.check_out_time">Check-out time: {{ asset.check_out_time }}</h2>
    <h2 v-if="assetType === 'hotels' && asset.amenities">Amenities: {{ asset.amenities }}</h2>
  
    
    <h2 v-if="assetType === 'flights' && asset.image_url">{{ asset.image_url }}</h2>
    <h2 v-if="assetType === 'flights' && asset.flight_id">flight id: {{ asset.flight_id }}</h2>
    <h2 v-if="assetType === 'flights' && asset.airline">Airline: {{ asset.airline }}</h2>
    <h2 v-if="assetType === 'flights' && asset.departure_time">Departure Time: {{ asset.departure_time }}</h2>
    <h2 v-if="assetType === 'flights' && asset.arrival_time">Arrival Time: {{ asset.arrival_time }}</h2>
    <h2 v-if="assetType === 'flights' && asset.flight_number">Flight Number: {{ asset.flight_number }}</h2>
    <h2 v-if="assetType === 'flights' && asset.departure_city">Departure City: {{ asset.departure_city }}</h2>
    <h2 v-if="assetType === 'flights' && asset.arrival_city">Arrival City: {{ asset.arrival_city }}</h2>
    <h2 v-if="assetType === 'flights' && asset.airline">Airline: {{ asset.airline }}</h2>
    <h2 v-if="assetType === 'flights' && asset.duration">Duration: {{ asset.duration }}</h2>
    <h2 v-if="assetType === 'flights' && asset.price">price: {{ asset.price }}</h2>
    <h2 v-if="assetType === 'flights' && asset.seat_class">Seat Class: {{ asset.seat_class }}</h2>


    <h2 v-if="assetType === 'cars' && asset.image_url">{{ asset.image_url }}</h2>
    <h2 v-if="assetType === 'cars' && asset.car_id">Car ID: {{ asset.car_id }}</h2>
    <h2 v-if="assetType === 'cars' && asset.car_make">Car Make: {{ asset.car_make }}</h2>
    <h2 v-if="assetType === 'cars' && asset.car_model">Car Model: {{ asset.car_model }}</h2>
    <h2 v-if="assetType === 'cars' && asset.year">year: {{ asset.year }}</h2>
    <h2 v-if="assetType === 'cars' && asset.rental_price_per_day">rental_price_per_day: {{ asset.rental_price_per_day }}</h2>
    <h2 v-if="assetType === 'cars' && asset.fuel_type">fuel_type: {{ asset.fuel_type }}</h2>
    <h2 v-if="assetType === 'cars' && asset.car_model">Car Model: {{ asset.car_model }}</h2>
    <h2 v-if="assetType === 'cars' && asset.transmission">transmission: {{ asset.transmission }}</h2>
    <h2 v-if="assetType === 'cars' && asset.seats">seats: {{ asset.seats }}</h2>
    <h2 v-if="assetType === 'cars' && asset.location">location: {{ asset.location }}</h2>
    <h2 v-if="assetType === 'cars' && asset.availability">Car Model: {{ asset.availability }}</h2>
   
    <img :src="asset.image_url" :alt="`${assetType} Image`" />
    <button v-if="$cookies.get('token')" @click="addToCheckOut(asset[assetIdKey])">Book now!</button>
  </div>
</template>

<script>
export default {
  props: {
    asset: Object,
    assetType: String,
    assetIdKey: String
  },
  methods: {
    addToCheckOut(assetId) {
      this.$store.dispatch('addToCheckOut', assetId)
    }
  }
}
</script>