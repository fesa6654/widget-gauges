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
  mounted() {
    clearInterval(this.$store.state.inter);
    clearInterval(this.$store.state.inter2);
  },
};
</script>

<style>
</style>