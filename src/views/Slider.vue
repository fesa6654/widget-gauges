<template>
  <div>
    <Slider :data="data"></Slider>
  </div>
</template>

<script>
import Slider from "../components/Slider.vue";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      data: 0,
    };
  },
};
</script>

<style>
</style>