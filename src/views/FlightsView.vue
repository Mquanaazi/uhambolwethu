
<template lang="">
    <div id="section">
    <h1>these are the flights we got</h1>
   <p>on every flight there must be a purchase button, incl an alert that the item has been purchased on click, only allow user to purchase once they got the token.</p>
   <section id="assets" >
   <template v-for="flight in $store.state.flights" :key="flight.flight_id">
        <!-- <h2>flight ID:{{flight.flight_id}}</h2> -->
        <img :src="flight.image_url" alt="flight Image" />
        <div class="info">
        <h2>flight Name:{{flight.airline}}</h2>
        <!-- <h2>location:{{flight.location}}</h2>
        <h2>rating:{{flight.rating}}</h2>
        <h2>price_per_night:{{flight.price_per_night}}</h2>
        <h2>rooms_available:{{flight.rooms_available}}</h2>
        <h2>check_in_time:{{flight.check_in_time}}</h2>
        <h2>check_out_time:{{flight.check_out_time}}</h2>
        <h2>amenities:{{flight.amenities}}</h2>
        <h2>contact_number:{{flight.contact_number}}</h2> -->
       
        <button v-if="$cookies.get('token')" @click="addToCheckOut(flight.flight_id)">Purchase</button>
        </div>
</template>
</section>
<p>fetching the data...</p>
</div>
</template>
<script>
export default {
    data() {
        return {
            loading: true
        }
    },
    methods:{
        getFlightsDb(){
        this.loading = true;
        this.$store.dispatch('getFlightsDb').then(() => {
            this.loading = false;
        });
    },

        addToCheckOut(flight_id){
            this.$store.dispatch('addToCheckOut',flight_id)
        }
    },
    mounted(){
    this.$store.dispatch('getFlightsDb')
}
}
</script>
<style>

</style>