<template>
  <div class="background">
    <div class="name">Dimmer</div>
    <div class="value">{{ gaugeData }}</div>
    <input
      type="range"
      min="0"
      max="100"
      class="slider"
      v-model="gaugeData"
      @change="newData(gaugeData)"
    />
    <div class="min">0</div>
    <div class="max">100</div>
  </div>
</template>

 

<script>
export default {
  props: ["data"],
  data() {
    return {
      asd: "",

      gaugeData: this.data,
    };
  },
  watch: {
    data: function (val) {
      this.gaugeData = val;
    },
  },
  methods: {
    newData(d) {
      console.log(d);
    },
  },
};
</script>

 

<style scoped>
.background {
  position: relative;
  width: 250px;
  height: 100px;
  background: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(164, 164, 164);
  border-radius: 10px;
  box-shadow: 0 0 15px rgb(117, 116, 116);
  user-select: none;
}

.name {
  position: absolute;
  color: white;
  top: 10px;
}

.value {
  position: absolute;
  color: white;
  top: 72px;
  font-weight: bold;
  z-index: 999999;
}

.slider {
  position: absolute;
  -webkit-appearance: none;
  width: 200px;
  height: 25px;
  background: #666666;
  box-shadow: inset 0 0 15px black;
  outline: none;
  border-radius: 40px;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: #5eba62;
  box-shadow: inset 0 0 15px #4a9b4d;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.slider::-webkit-slider-thumb:hover {
  box-shadow: 0 0 15px #3b6f3d;
}

.min {
  position: absolute;
  color: white;
  top: 72px;
  left: 20px;
}

.max {
  position: absolute;
  color: white;
  top: 72px;
  right: 15px;
}
</style>