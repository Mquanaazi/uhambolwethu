
<template lang="">
    <div id="section">
    <h1>these are the cars we got</h1>
   <p>on every car there must be a purchase button, incl an alert that the item has been purchased on click, only allow user to purchase once they got the token.</p>
   <section id="assets" >
   <template v-for="car in $store.state.cars" :key="car.car_id">
        <h2>Car ID:{{car.car_id}}</h2>
        <h2>Car make:{{car.car_make}}</h2>
        <h2>car model:{{car.car_model}}</h2>
        <h2>rental price per day:{{car.rental_price_per_day}}</h2>
        <h2>fuel type:{{car.fuel_type}}</h2>
        <h2>transmission:{{car.transmission}}</h2>
        <h2>seats:{{car.seats}}</h2>
        <h2>location:{{car.location}}</h2>
        <h2>availability:{{car.availability}}</h2>
        <h2>contact_number:{{car.contact_number}}</h2>
        <img :src="car.image_url" alt="car " />
       
        <button v-if="$cookies.get('token')" @click="addToCheckOut(car.car_id)">Purchase</button>
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
        getCarsDb(){
        this.loading = true;
        this.$store.dispatch('getCarsDb').then(() => {
            this.loading = false;
        });
    },

        addToCheckOut(car_id){
            this.$store.dispatch('addToCheckOut',car_id)
        }
    },
    mounted(){
    this.$store.dispatch('getCarsDb')
}
}
</script>
<style>

</style>