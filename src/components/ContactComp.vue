<template>
  <div class="grid text-center" >
  <div class="contact-page">
    <h2>GET IN TOUCH WITH OUR CUSTOMER SERVICE TEAM🤳</h2>
    <div class="contact-links"></div>
     
    <!-- <i class="fas fa-envelope"></i> -->
    <a :href="'mailto:olwethumalumla31@gmail.com?subject=' + encodeURIComponent('ENQUIRIES') + '&body=' + encodeURIComponent('Hello uhambolwethu team I am having issues with my booking process and this is the specific problem that I am facing:(write your specific message here)')" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg></a>
      
     
        <!-- <i class="fas fa-phone"></i> -->
        <a href="tel:+27763936097" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" fill="currentColor" class="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
</svg></a>
      
    
    <form @submit.prevent="handleSubmit">
      <label for="name">Customer Name and Surname:</label>
      <input type="text" id="name" v-model="formData.name">
      <br>
      <label for="email">Customer email:</label>
      <input type="email" id="email" v-model="formData.email">
      <br>
      <label for="message">Message:</label>
      <textarea id="message" v-model="formData.message"></textarea>
      <br>
      <button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
  <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
</svg></button>
     
    </form>
    
    <!-- Display success message after form submission -->
    <p v-if="showSuccessMessage">MESSAGE SUBMITED,WE'LL GET BACK TO YOU AS SOON AS POSSIBLE!</p>
  </div>
  <div class="contact-page">
    <form class="disabled-form">
      <label for="contact-number">Contact Number:</label>
      <input type="text" id="contact-number" value="0763936097" disabled>
      <br>
      <label for="email-address">Email Address:</label>
      <input type="email" id="email-address" value="olwe2tcpipv4@duck.com" disabled>
      <br>
      <label for="home-address">Our physical Address:</label>
      <input type="text" id="home-address" value="Western Cape, South Africa" disabled>
    </form>
  </div>
</div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      showSuccessMessage: false
    }
  },
  methods: {
    handleSubmit() {
      if (!this.formData.name || !this.formData.email || !this.formData.message) {
        Swal.fire({
          title: 'Error',
          text: 'Please fill in all fields',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        return;
      }

      // Send form data to Formcarry
      fetch('https://formspree.io/f/h5boWH8R3UJ', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      })
      .then(response => response.json())
      .then(() => {
        // Display success message and clear form
        this.showSuccessMessage = true;
        this.formData.name = '';
        this.formData.email = '';
        this.formData.message = '';
      })
      .catch(error => {
        Swal.fire({
          title: 'Error',
          text: 'Error sending form: ' + error.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      });
    }
  }
}
</script>

  <style>
  .contact-page {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    color:aliceblue;
    background-color: #2d0027ef;
    border: 1px solid #7a0899c1;
    box-shadow: 0 0 10px rgba(91, 4, 66, 0.748);
    
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  
  i {
    margin-right: 10px;
  }
  
  form {
    margin-top: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 10px;
  }
  
  input, textarea {
    width: 100%;
    /* height:30px; */
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #7490ecb3;
    background-color: #a0d2e0;
    border: 2px solid #eb36d3;
    border-radius: 10px;
  }
  
  button[type="submit"] {
    background-color: #08bcedc2;
    color:aliceblue;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #610351;
  }
  
  .modal {
    position:absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(167, 232, 239, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: #a0d2e0;
    padding: 20px;
    border: 1px solid #23e1e7;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(44, 57, 65, 0.1);
  }
  
  .modal-content h2 {
    margin-top: 0;
  }
  
  .modal-content button {
    background-color: #7f9aebc6;
    color: #16011b95;
    padding: 10px 20px;
    border: none;
    border: radius 10px;}
    .disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.2; 
}
svg{
  color: #23e1e7;
}
.disabled-form {
    margin-top: 20px;
    background-color: #38275fc3;
    padding: 20px;
    border: 1px solid #ccc;
  }
  .disabled-form input[type="text"], .disabled-form input[type="email"] {
    background-color: #acf4f8d5;
    border: 2px solid #eb36d3;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
  }
  .disabled-form label {
    display: block;
    margin-bottom: 10px;
  } 
#contact-container{
  display: flex;
  justify-content: center;
  align-content:space-evenly;
 
}
  /* align-items: center; */
  /* flex-direction: column; */


    </style>    
