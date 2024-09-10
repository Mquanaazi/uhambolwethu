<template>
    <div>
      <h2>Checkout</h2>
      <form @submit.prevent="submitCheckout">
        <main>
        <div id="cart-icon-container">  <svg xmlns="http://www.w3.org/2000/svg" width="25%" height="15%" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
          </svg></div>

          <table class="table table-bordered border-primary">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>CATEGORY</th>
                <th>IMAGE</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
              </tr>
            </thead>
            <tbody id="table-body">
              
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

 
<button type="submit" id="payment"><img src="https://www.freeiconspng.com/uploads/payment-icon-credit-payment-icon-0.png" alt="Payment Icon Credit, payment icon" >CLICK TO PAY</button>
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
  // import axios from 'axios';
  export default {
    data() {
      return {
        checkout: {
          userId: null, 
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
      
      const users = this.$store.state.users;
      if (users.length > 0) {
        this.checkout.userId = users[0].userID; 
      }
    },
    methods: {
      submitCheckout: async function() {
      try {
        await this.$store.dispatch('submitButton', this.checkout.paymentMethod);
      } catch (error) {
        console.error(error);
      }
      },
    }
}
  </script>