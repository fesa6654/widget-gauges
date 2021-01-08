<template>
  <div>
    <Digital-Gauge></Digital-Gauge>
  </div>
</template>

<script>
import DigitalGauge from "../components/VerticalDigitalGauge";

export default {
  components: {
    DigitalGauge,
  },
  mounted() {
    clearInterval(this.$store.state.inter);
  },
};
</script>

<style>
</style>