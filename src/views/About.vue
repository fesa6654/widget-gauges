<template>
  <div>
    <Circular-Bar></Circular-Bar>
  </div>
</template>

<script>
import CircularBar from "../components/CircularBar";

export default {
  components: {
    CircularBar,
  },
  created() {
    clearInterval(this.$store.state.inter);
  },
};
</script>

<style>
</style>