<template>
  <article>
    <section class="text-center">
      <div id="section">
        <AboutComp /> <!-- Render the AboutComp component here -->
      </div>
    </section>
  </article>
</template>

<script>
import AboutComp from '../components/AboutComp.vue'; // Import the AboutComp component

export default {
  components: { AboutComp }
}
</script>

<style scoped>
article {
  height: 48vh;
}

#section {
  height: 100%;
  width: 100%;
}

h3 {
  color: rgb(0, 5, 9);
  background-color: rgba(252, 77, 255, 0.682);
}
</style>