<template>
  <div  class="container-fluid">
    <div class="container-fluid" >
      <ReviewComp v-for="(review, index) in reviews" :key="index" :review="review" />
    </div>
  </div>
  
</template>
  
  <script>
  import ReviewComp from "../components/ReviewComp.vue";
  
  export default {
    components: {
      ReviewComp
    },
    data() {
      return {
        reviews: [
          {
            name: "Olona K.",
            rating: 5,
            review: "Excellent service! The team at Uhambolwethu went above and beyond to ensure my booking was smooth and hassle-free."
          },
          {
            name: "Thembi M.",
            rating: 4,
            review: "I was impressed with the prompt response to my booking inquiry. The team was very helpful and friendly."
          },
          {
            name: "Luyolo L.",
            rating: 3,
            review: "The booking process was easy, but I had some issues with the payment gateway. However, the team resolved it quickly."
          },
          {
            name: "Mbo M.",
            rating: 5,
            review: "Uhambolwethu exceeded my expectations! The team was professional, and the booking process was seamless."
          },
          {
            name: "Olwethu M.",
            rating: 4,
            review: "I was happy with the variety of options available for booking. The team was responsive and helpful throughout the process."
          },
          {
            name: "Sifiso M.",
            rating: 5,
            review: "The booking process was incredibly straightforward, thanks to the team's clear guidance and support."
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  #testimonials {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;
    height: 100%;
    width: 100%;
  }
  </style>