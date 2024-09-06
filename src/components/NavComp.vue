<template >
  <header class="container-fluid">
    <img src="https://mquanaazi.github.io/huluImages/uhambolwethuLogo.png" class="gif" alt="logo">
    
    <h1>UHAMBOLWETHU</h1>
  </header>
  <nav class="container-fluid">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/checkout">Checkout</router-link>
    <router-link to="/reviews">Reviews</router-link> 
    <router-link to="/admin">Admin</router-link> 
    <router-link to="/contact">Customer Help Service</router-link>
    <div v-if="!$cookies.get('token')" class="container-fluid">
      <button id="signuplogin" @click="$router.push('/auth')">Login </button>
      <!-- <div class="position-absolute top-50 start-50 translate-middle">
        <h3 id="header-title">!BROWSING AS GUEST!</h3>
      </div> -->
    </div>
    <div v-else class="container-fluid">
      <!-- <div class="position-absolute top-50 start-50 translate-middle">
        <h3 id="header-title">!BROWSING AS REGULAR!</h3>
      </div> -->
      <button @click="logOut()">Logout</button>
    </div>
   
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
/*  */

#header-title {
  color: rgb(139, 104, 7);
  transition: transform 0.5s ease-in-out;
  position: relative; 
}

#header-title.animate {
  transform: translateX(20px); 
}

</style>
