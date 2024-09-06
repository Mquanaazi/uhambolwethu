<template>
  <section>
    <div class="container text-center">
      <div id="card" v-for="(image, index) in images" :key="index">
        <router-link :to="image.link">
          <img :src="image.src" class="card-img-top" :alt="image.alt" />
        </router-link>
        <div class="card-body">
          <h5 class="card-title">{{ image.title }}</h5>
          <p class="card-text">{{ image.text }}</p>
        </div>
        <div class="card-footer">
          <router-link :to="image.link" id="text">{{ image.linkText }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyHome',
  data() {
    return {
      images: [
      {
          src: 'https://mquanaazi.github.io/huluImages/miami.jpg',
          alt: 'miami hotel',
          // title: 'comfort stay',
          link: '/hotels',
          linkText: 'comfort stay',
          // text: 'Book a hotel of your choice with us.'
        },
        {
          src: 'https://mquanaazi.github.io/huluImages/Delta.jpg',
          alt: 'delta flight',
          // title: 'safe travels',
          link: '/flights',
          linkText: 'safe travels',
          // text: 'Book a flight of your choice with us .'
        },
        {
          src: 'https://mquanaazi.github.io/huluImages/audi.jpg',
          alt: 'AUDI Q5',
          // title: 'drive around',
          link: '/cars',
          linkText: 'drive around',
          // text: 'Rent a car of your choice with us .'
        }
        // Add more images here
      ]
    }
  }
}
</script>

<style scoped>
#container {
  display: flex;
  justify-content:space-evenly;
  /* margin-left: 0.5rem; */
}
#text{
  font-size:x-large;
  text-decoration:none;
  color: black;
  font-weight: bold;
  background-color: #87CEEB;
  border-radius: 5%;
  border: 5px #3498DB solid; 

}

#card {
  /* width: 500%;
  height: 30px; */
  /* margin-left:200px; */
  border: 2px solid rgba(161, 217, 247, 0);
  border-radius: 10px;
  animation: shrink-and-grow 2s forwards;
  background-color: rgba(209, 194, 245, 0);
}

#card:hover {

  cursor:grab;
  border-radius: 10px;
  animation: shrink-and-grow 2s forwards;
  background-color: rgba(0, 255, 255, 0);
}


img {
  /* width: 400px; */
  height: 5PX;
  border-radius: 10%;
}

@keyframes shrink-and-grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

#card:hover {
  transform: scale(1.4);
  cursor: pointer;
}
/* For screens 300px and below */
@media only screen and (max-width: 300px) {
  #container {
    flex-direction: column;
    margin: 20px;
  }
  #card {
    width: 15rem;
    height: 20rem;
    /* margin: 10px; */
  }
 
}

/* For screens between 301px and 768px */
@media only screen and (min-width: 301px) and (max-width: 768px) {
  #container {
    flex-direction: row;
    margin: 30px;
  }
  #card {
    width: 18rem;
    height: 55rem;
    margin: 10px;
  }
  img {
    height: 25%;
  }
}

/* For screens 769px and above */
@media only screen and (min-width: 769px) {
  #container {
    flex-direction: row;
    margin: 40px;
  }
  #card {
    width: 20rem;
    height: 30rem;
    margin: 10px;
  }
  img {
    height: 80%;
    width: 460px;
  }
}

</style>