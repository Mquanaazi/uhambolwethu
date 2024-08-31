<template>
    <div id="section">
      <h1>{{ assetType }} Details</h1>
      <h2>{{ assetType }} ID: {{ asset[assetIdKey] }}</h2>
      <h2>{{ assetType }} Name: {{ asset.name }}</h2>
      <h2>Location: {{ asset.location }}</h2>
      <h2>Rating: {{ asset.rating }}</h2>
      <h2 v-if="asset.price_per_night">Price per night: {{ asset.price_per_night }}</h2>
      <h2 v-if="asset.rooms_available">Rooms available: {{ asset.rooms_available }}</h2>
      <h2 v-if="asset.check_in_time">Check-in time: {{ asset.check_in_time }}</h2>
      <h2 v-if="asset.check_out_time">Check-out time: {{ asset.check_out_time }}</h2>
      <h2 v-if="asset.amenities">Amenities: {{ asset.amenities }}</h2>
      <h2 v-if="asset.contact_number">Contact number: {{ asset.contact_number }}</h2>
      <img :src="asset.image_url" :alt="`${assetType} Image`" />
      <button v-if="$cookies.get('token')" @click="addToCheckOut(asset[assetIdKey])">Purchase</button>
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