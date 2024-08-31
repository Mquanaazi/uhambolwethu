<template>
    <div>
      <!-- Spinner will be displayed until the content is fully loaded -->
      <div v-if="!contentLoaded" class="spinner-container">
        <div class="spinner"></div>
      </div>      
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        contentLoaded: false,
      }
    },
    mounted() {
  // Call your API to fetch the content
  fetch('https://mquanaazi.github.io/first_api/data/index.json')
   .then(response => response.text())
   .then(data => {
      this.content = data
      this.$root.contentLoaded = true // Set contentLoaded to true when content is fully loaded
    })
   .catch(error => {
      console.error(error)
    })
}
  }
  </script>
  
  <style scoped>
  .spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; 
  }
  
  .spinner {
    border: 4px solid #850dc1; 
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  .content {
    display: none; /* Hide the content until it's fully loaded */
  }
  
  .contentLoaded {
    display: block; /* Show the content when it's fully loaded */
  }
  </style>