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

