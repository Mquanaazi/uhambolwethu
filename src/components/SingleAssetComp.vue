<template>
    <div id="section">
      <h1>This is the {{ assetType }} we got</h1>
      <!-- <p>on every {{ assetType }} there must be a purchase button, incl an alert that the item has been purchased on click, only allow user to purchase once they got the token.</p> -->
      <section>
        <template v-for="asset in assets" :key="asset[assetIdKey]">
          <SingleAssetView :asset="asset" :assetType="assetType" :assetIdKey="assetIdKey" />
          <router-link :to="{ name: `${assetType}Detail`, params: { id: asset[assetIdKey] } }">
            View Details
          </router-link>
        </template>
      </section>
      <p>fetching data...</p>
    </div>
  </template>
  
  <script>
  import SingleAssetView from './SingleAssetView.vue'
  
  export default {
    components: { SingleAssetView },
    props: {
      assets: Array,
      assetType: String,
      assetIdKey: String
    },
    data() {
      return {
        loading: true
      }
    },
    methods: {
      getAssetsDb() {
        this.loading = true;
        this.$store.dispatch(`get${this.assetType}Db`).then(() => {
          this.loading = false;
        });
      }
    },
    mounted() {
      this.$store.dispatch(`get${this.assetType}Db`)
    }
  }
  </script>