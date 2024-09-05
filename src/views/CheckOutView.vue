<template>
    <div>
      <h2>Checkout</h2>
      <form @submit.prevent="submitCheckout">
        <div class="form-group">
          <label for="bookingType">Booking Type:</label>
          <input type="text" id="bookingType" v-model="checkout.bookingType" />
        </div>
        <div class="form-group">
          <label for="bookingId">Booking ID:</label>
          <input type="number" id="bookingId" v-model="checkout.bookingId" />
        </div>
        <div class="form-group">
          <label for="bookingDetails">Booking Details:</label>
          <textarea id="bookingDetails" v-model="checkout.bookingDetails"></textarea>
        </div>
        <div class="form-group">
          <label for="totalCost">Total Cost:</label>
          <input type="number" id="totalCost" v-model="checkout.totalCost" />
        </div>
        <div class="form-group">
          <label for="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" v-model="checkout.paymentMethod">
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <!-- Add more payment methods as needed -->
          </select>
        </div>
        <div class="form-group">
          <label for="paymentStatus">Payment Status:</label>
          <select id="paymentStatus" v-model="checkout.paymentStatus">
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            <!-- Add more payment statuses as needed -->
          </select>
        </div>
        <button type="submit" class="btn btn-dark">Checkout</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        checkout: {
          userId: null, // initialize userId to null
          bookingType: '',
          bookingId: null,
          bookingDetails: '',
          totalCost: null,
          paymentMethod: '',
          paymentStatus: '',
        },
      };
    },
    mounted() {
      // retrieve the current user's ID from the Vuex store
      const users = this.$store.state.users;
      if (users.length > 0) {
        this.checkout.userId = users[0].userID; // assume the first user in the array is the current user
      }
    },
    methods: {
      async submitCheckout() {
    try {
      // Make a POST request to the /api/checkout endpoint
      await axios.post('http://localhost:2027/assets/CheckOut ', this.checkout);
      // Reset the form
      this.checkout = {
        userId: null,
        bookingType: '',
        bookingId: null,
        bookingDetails: '',
        totalCost: null,
        paymentMethod: '',
        paymentStatus: '',
      };
      // Show success message
      alert('Checkout successful!');
    } catch (error) {
      console.error(error);
      // Show error message
      alert('Error creating checkout record');
    }
  },
}
  }
  </script>