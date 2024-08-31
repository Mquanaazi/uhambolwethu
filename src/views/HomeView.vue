<template lang="">
  <div id=section>
    <home-comp/>
  </div>
</template>
<script>
import HomeComp from "../components/HomeComp.vue";
export default {
  name: "HomeView",
  
  components: {
    HomeComp
    }
  
}
</script>
<style scoped>
#section{
  height: 100%;
  width:100%

}
</style>
