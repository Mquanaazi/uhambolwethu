<template>
  <div class="container-fluid" id="rates">
    <h3>{{ review.name }}</h3>
    <div class="figure">
      <span v-for="n in review.rating" :key="n">
        <font-awesome-icon icon="star" style="color: #ffd700;"></font-awesome-icon>
      </span>
      <span v-for="n in 5 - review.rating" :key="n + review.rating">
        <font-awesome-icon icon="star" style="color: #ccc;"></font-awesome-icon>
      </span>
    </div>
    <p>{{ review.review }}</p>
  </div>
</template>




<script>
export default {
  props: {
    review: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.rating {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
 
}
#rates{

    /* max-width: 100%; */
    margin: 40px auto;
    padding: 20px;
    color:aliceblue;
    background-color: #2d0027ef;
    border: 1px solid #7a0899c1;
    box-shadow: 0 0 10px rgba(91, 4, 66, 0.748);
    transition: 1s;
}
#rates:hover{
  cursor: pointer;
  transform: scale(1.05);
  background-color: #3498DB;
}

.rating span {
  /* margin-right: 5px; */
  font-size: 20px;
  margin: auto;
}

.rating i {
  color: gold; 
}
</style>