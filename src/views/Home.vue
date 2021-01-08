<template>
  <div class="home">
    <Gauge></Gauge>
  </div>
</template>

<script>
import Gauge from "../components/Gauge";

export default {
  name: "Home",
  components: {
    Gauge,
  },
  mounted() {
    clearInterval(this.$store.state.inter2);
  },
};
</script>

<style>
</style>
