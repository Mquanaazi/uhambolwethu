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
        <tr><th><label>User/Admin:</label></th><td><input type="text" v-model="userRole"></td></tr>
        <tr><th><label>Email:</label></th><td><input type="email" v-model="emailAdd"></td></tr>
        <tr><th><label>Password:</label></th><td><input type="password" v-model="userPass"></td></tr>
        <button id="signup" @click="addUser()">Register</button>    
      </table>
    </div>
    <div v-else>
      <h1>HELLO VALUED USER</h1>
      <table border="1">
        <tr><th><label>Email:</label></th><td><input type="email" v-model="emailAdd"></td></tr>
        <tr><th><label>Password:</label></th><td><input type="password" v-model="userPass"></td></tr>
        <button id="signin" @click="loginUser()" v-if="!token">login</button>
      <button id="signout" @click="logoutUser()" v-else>logout</button>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
 /* eslint-disable */ 
  export default {
    data() {
      return {
        firstName: "Sponge",
        lastName: "Bob",
        userAge: "18",
        Gender: "Trans",
        userRole: "User",
        emailAdd: "spongebob@uhambo.co.za",
        image_url: "https://codjoelmayer.github.io/projectImages/images/profile-Image.png",
        username: "spongy",
        userPass: "spongy",
        signup: true,
        token: null
      }
    },
    methods: {
      async loginUser() {
          try {
            this.$store.dispatch('loginUser',{ emailAdd: this.emailAdd, userPass: this.userPass })
            } catch (error) {
            console.error(error)
          }
  },
    logoutUser() {
      this.token = null,
      this.isLoggedIn = false,
      axios.defaults.headers.common['Authorization'] = null
  },


  async addUser() {
    await this.$store.dispatch('addUser', {
      image_url: this.image_url,
      firstName: this.firstName,
      lastName: this.lastName,
      userAge: this.userAge,
      Gender: this.Gender,
      userRole: this.userRole,
      emailAdd: this.emailAdd,
      userPass: this.userPass
    })
  }
}
  }
  </script>
  
  <style lang="css">
  #signuplogin {
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  #signuplogin:hover {
    background-color: #3e8e41;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #f0f0f0;
  }
</style>