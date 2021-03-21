<template>
  <div class="home">
    <Gauge :max="100" :min="-60" :data="deger" color="red"></Gauge>
  </div>
</template>

<script>
import Gauge from "../components/Gauge";

export default {
  name: "Home",
  components: {
    Gauge,
  },
  data() {
    return {
      sayac: 0,
      deger: 0
    }
  },
  methods: {
    start() {
      this.$store.state.inter = setInterval(() => {
        this.deger = this.deger + 20;
      }, 1000);
    },
  },
  created() {
    this.start();
  },
};
</script>

<style>
</style>
