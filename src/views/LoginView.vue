<template >
    <button id="signuplogin" @click="signup =!signup">Register/login</button> 
    <div v-if="signup">
      <h1>WELCOME</h1>  
      <table border="1">
          <tr><th><label>Image URL:</label></th><td><input type="text" v-model="image_url"></td></tr>
        <tr><th><label>First Name:</label></th><td><input type="text" v-model="firstName"></td></tr>
        <tr><th><label>Last Name:</label></th><td><input type="text" v-model="lastName"></td></tr>
        <tr><th><label>Age:</label></th><td><input type="number" v-model="userAge"></td></tr>
        <tr><th><label>Gender:</label></th><td><input type="text" v-model="Gender"></td></tr>
        <tr><th><label>Email:</label></th><td><input type="email" v-model="emailAdd"></td></tr>
        <tr><th><label>Password:</label></th><td><input type="password" v-model="userPass"></td></tr>
        <button id="signup" @click="addUser">Register</button>    
      </table>
    </div>
    <div v-else>
      <h1>HELLO VALUED USER</h1>
      <table border="1">
        <tr><th><label>Email:</label></th><td><input type="email" v-model="emailAdd"></td></tr>
        <tr><th><label>Password:</label></th><td><input type="password" v-model="userPass"></td></tr>
        <button id="signin" @click="loginUser()">login</button>
      </table>
    </div>
  </template>
  
  <script>
  /* eslint-disable */ 
  export default {
    data() {
      return {
        firstName: "",
        lastName: "",
        userAge: "",
        Gender: "",
        emailAdd: "",
        userPass: "",
        image_url: "",
        username: "",
        password: "",
        signup: true,
      }
    },
    methods: {
      async loginUser() {
        await this.$store.dispatch('loginUser', { emailAdd: this.emailAdd, userPass: this.userPass })
        location.reload()
      }
    },
    computed: {
      addUser() {
        this.$store.dispatch('addUser', {
          image_url: this.image_url,
          firstName: this.firstName,
          lastName: this.lastName,
          userAge: this.userAge,
          Gender: this.Gender,
          emailAdd: this.emailAdd,
          userPass: this.userPass
        })
      }
    }
  }
  </script>
  
  <style lang="">
  
  </style>