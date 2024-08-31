
<template lang="">
    <div id="section">
    <h1>these are the hotels we got</h1>
   <p>on every hotel there must be a purchase button, incl an alert that the item has been purchased on click, only allow user to purchase once they got the token.</p>
    <section id="assets" >
   <template v-for="hotel in $store.state.hotels" :key="hotel.hotel_id">
        <!-- <h2>hotel ID:{{hotel.hotel_id}}</h2> -->
        <h2>Hotel Name:{{hotel.hotel_name}}</h2>
        <h2>location:{{hotel.location}}</h2>
        <h2>rating:{{hotel.rating}}</h2>
        <h2>price_per_night:{{hotel.price_per_night}}</h2>
        <!-- <h2>rooms_available:{{hotel.rooms_available}}</h2>
        <h2>check_in_time:{{hotel.check_in_time}}</h2>
        <h2>check_out_time:{{hotel.check_out_time}}</h2>
        <h2>amenities:{{hotel.amenities}}</h2>
        <h2>contact_number:{{hotel.contact_number}}</h2> -->
        <img :src="hotel.image_url" alt="Hotel Image" />
       
        <button v-if="$cookies.get('token')" @click="addToCheckOut(hotel.hotel_id)">Purchase</button>
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
        getHotelsDb(){
        this.loading = true;
        this.$store.dispatch('getHotelsDb').then(() => {
            this.loading = false;
        });
    },

        addToCheckOut(hotel_id){
            this.$store.dispatch('addToCheckOut',hotel_id)
        }
    },
    mounted(){
    this.$store.dispatch('getHotelsDb')
}
}
</script>
<style>

</style>