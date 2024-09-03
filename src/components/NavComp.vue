<template>
  <header>
    <img src="https://mquanaazi.github.io/huluImages/uhambolwethuLogo.png" class="gif" alt="logo">
    <div v-if="!$cookies.get('token')" class="signup">
      <button id="signuplogin" @click="$router.push('/auth')">Sign Up/Login</button>
      <h6>!BROWSING AS GUEST!</h6>
    </div>
    <div v-else>
      <button @click="logOut()">Logout</button>
    </div>
    <h1>UHAMBOLWETHU</h1>
  </header>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/checkout">Checkout</router-link>
    <router-link to="/reviews">Reviews</router-link> 
    <router-link to="/admin">Admin</router-link> 
    <router-link to="/contact">Customer Help Service</router-link>
   
  </nav>
</template>

<script>
export default {
  
  methods: {
    logOut() {
      this.$cookies.remove('token')
      this.$router.push('/') 
    }
  }
}
</script>
<style>
.signup{
  position: absolute;
  justify-content: flex-end;
  background-color: rgb(171, 209, 234);
  background-size: cover;
  padding: 15px 0px 15px 0px;
  border-radius: 10px;



}
</style>
