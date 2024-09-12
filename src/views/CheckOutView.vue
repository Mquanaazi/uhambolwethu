<template>
  <div>
    <h2>Checkout</h2>
    <form @submit.prevent="submitCheckout">
      <main>
        <div id="cart-icon-container">...</div>
        <table class="table table-bordered border-primary">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>CAT</th>
              <th>IMAGE</th>
              <th>PRICE</th>
              <th>QTY</th>
            </tr>
          </thead>
          <tbody id="table-body">
            <tr v-for="booking in bookings" :key="booking.bookingId">
              <td>{{ booking.bookingId }}</td>
              <td>{{ booking.bookingDetails }}</td>
              <td>{{ booking.bookingType }}</td>
              <td><img :src="booking.image_url" alt="Booking Image" /></td>
              <td>{{ booking.totalCost }}</td>
              <td><button onclick="increment()">+</button>1<button onclick="decrement()">-</button></td>
            </tr>
          </tbody>
        </table>
        
<form id="form"
>

<!-- User Details -->
<h3>User Details</h3>
<div class="form-group">
    <label class="label" for="name">Name:</label>
    <input type="text" id="name" class="input-field" name="name" placeholder="olwethu" required>
</div>
<div class="form-group">
    <label class="label" for="email">Email:</label>
    <input type="email" id="email" class="input-field" name="email" placeholder="olwethumkhwanazi@duck.com" required>
</div>
<div class="form-group">
    <label class="label" for="phone">Phone:</label>
    <input type="tel" id="phone" class="input-field" name="phone" placeholder="071 234 567 890" required>
</div>

<!-- Banking Details -->
<h3>Banking Details</h3>
<div class="form-group">
    <label class="label" for="card-number">Card Number:</label>
    <input type="text" id="card-number" class="input-field" name="card" placeholder="0000 0000 0000 0000" required>
</div>
<div class="form-group">
    <label class="label" for="card-name">Card Name:</label>
    <input type="text" id="card-name" class="input-field" name="name" placeholder="Capitec" required>
</div>
<div class="form-group">
    <label class="label" for="expiration-date">Expiration Date:</label>
    <input type="date" id="expiration-date" class="input-field" name="expiration-date" placeholder="2024" required>
</div>
<div class="form-group">
    <label class="label" for="cvv">CVV:</label>
    <input type="password" id="cvv" class="input-field" name="CVV" placeholder="000" required>
</div>

 
<button type="submit" id="payment"><img src="https://www.freeiconspng.com/uploads/payment-icon-credit-payment-icon-0.png"  id="pay" alt="Payment Icon Credit, payment icon" >CLICK TO PAY</button>
</form>
    </main>
        <div class="form-group">
          <label for="totalCost">Total Cost:</label>
          <input type="number" id="totalCost" v-model="checkout.totalCost" />
        </div>
        <div class="form-group">
          <label for="paymentMethod">Payment Method:</label>
          <select id="paymentMethod" v-model="checkout.paymentMethod">
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
           
          </select>
        </div>
        <div class="form-group">
          <label for="paymentStatus">Payment Status:</label>
          <select id="paymentStatus" v-model="checkout.paymentStatus">
            <option value="pending">Pending</option>
            <option value="paid">Paid</option>
            
          </select>
        </div>
      
      </form>
    </div>
  </template>
  
  <script>
  export default {
   
    data() {
      return {
        checkout: {
          userID: null,
          bookingType: '',
          bookingId: null,
          bookingDetails: '',
          totalCost: null,
          paymentMethod: '',
          paymentStatus: '',
          count: 0,
        },
      };
    },
    mounted() {
  const users = this.$store.state.users;
  if (users?.length > 0) {
    this.checkout.userID = users[0].userID;
  }
  const bookings = this.$store.state.bookings;
  if (bookings?.length > 0) {
    this.checkout.bookingType = bookings[0].bookingType;
    this.checkout.bookingId = bookings[0].bookingId;
    this.checkout.bookingDetails = bookings[0].bookingDetails;
    this.calculateTotalCost();
  }
},
methods: {
    increment() {
      this.count++;
      // Update the input field value using Vue.js
      this.$refs.qtyInput.value = this.count;
    },
    decrement() {
      if (this.count > 0) {
        this.count--;
        this.$refs.qtyInput.value = this.count;
      }
    },
computed: {
      bookings() {
        return this.$store.state.bookings;
      }},
  
    methods: {
      calculateTotalCost() {
        
        this.checkout.totalCost = 100;
      },
      submitCheckout: async function() {
        try {
          await this.$store.dispatch('submitCheckout', this.checkout);
          this.checkout.paymentStatus = 'paid';
        } catch (error) {
          console.error(error);
        }
      },
    },
  }
};
  </script>
  <style>
#pay{
  width: 20px;
  height: 20px;
}

</style>