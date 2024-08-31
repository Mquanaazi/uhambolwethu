<!-- <template>
  <nav>
    <nav-bar/>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/hotels">Hotels</router-link> |
    <router-link to="/flights">Flights</router-link> |
    <router-link to="/cars">Cars</router-link> |
    <router-link to="/checkout">Checkout</router-link> |
    <router-link to="/reviews">Reviews</router-link> |
    <router-link to="/contact">Customer Help Service</router-link>
   
    <div v-if="!$cookies.get('token')">
     
      <router-link to="/login">Sign Up/Sign In</router-link>
      </div>
    <div v-else>
      <button @click="logOut()">Logout</button>

    </div>
    
  </nav>
  <router-view/>
  <div id="bodysection">
    <spinner-comp-vue v-if="!contentLoaded"/> 
    <router-view v-if="contentLoaded"/> 
  </div>
  <footer-comp/>
</template>
<script>
export default{
  methods:{
    logOut(){
      this.$cookies.remove('token')
      location.reload();
     
      }
  }

}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style> -->

<template>
  <nav-comp/>
  <div id="bodysection">
    <spinner-comp-vue v-if="!contentLoaded"/> 
    <router-view v-if="contentLoaded"/>
  </div>
  <footer-comp/>
</template>
<script>
import NavComp from "../src/components/NavComp.vue";
import FooterComp from "../src/components/FooterComp.vue";
import SpinnerCompVue from '../src/components/SpinnerComp.vue';


export default {
  components: {
    NavComp,
    FooterComp,
    SpinnerCompVue
  },
  data() {
    return {
      contentLoaded: false
    }
  }
}
</script>
<style>

 #footer{
  background-color: rgba(213, 164, 240, 0.426);
  border-radius: 10px;
  justify-content: center;
 
  width: 95vw;

  bottom: 0;
 }
 #bodysection{
  height: 100%;
  width:95vw

}

</style>

