<template>
  <div>
    <Ibreli-Gauge :data="rotation"></Ibreli-Gauge>
  </div>
</template>

<script>
import IbreliGauge from "../components/ibreligauge.vue";

export default {
  components: {
    IbreliGauge,
  },
  data() {
    return {
      rotation: 360,
    };
  },
  computed: {},
  created() {
    this.degis();
  },
  methods: {
    degis() {
      setInterval(() => {
        this.rotation = this.rotation - 20;
      }, 1000);
    },
  },
};
</script>

<style scoped>
</style>