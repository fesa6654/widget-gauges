<template>
  <div class="background">
    <div class="gauge">
      <div class="gauge__body">
        <div
          class="gauge__fill"
          :style="{
            transform: 'rotate(' + start + 'deg)',
            backgroundColor: backColor,
          }"
        ></div>
        <div class="gauge__cover">{{ barValue.toFixed(2) }}</div>
      </div>
      <div class="min">{{ minValue }}</div>
      <div class="max">{{ maxValue }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["max", "min", "data", "color"],
  data() {
    return {
      sayac: 0,
      maxValue: this.max,
      minValue: this.min,
      barValue: this.data,
      backColor: this.color,
      average: 0,
      screenValue: 0
    };
  },
  watch: {
    data: function (val) {
      this.barValue = val;
    },
  },
  computed: {
    start() {
      if (this.minValue < 0) {
        if (this.barValue <= this.minValue) {
          this.screenValue = 0;
          return this.screenValue;
        } else if (this.barValue > this.maxValue) {
          this.screenValue = 180;
          return this.screenValue;
        } else if (this.barValue < 0) {
          this.average = Math.abs(this.barValue) + this.minValue;
          this.screenValue =
            (180 * Math.abs(this.average)) /
            (this.maxValue + Math.abs(this.minValue));
        } else if (this.barValue >= 0) {
          this.average =
            (180 * Math.abs(this.minValue)) /
            (this.maxValue + Math.abs(this.minValue));
          this.negative =
            (180 * this.barValue) / (this.maxValue + Math.abs(this.minValue));
          this.screenValue = this.average + this.negative;
        }
      } else if (this.minValue >= 0) {
        if (this.barValue <= this.minValue) {
          this.screenValue = 0;
          return this.screenValue;
        } else if (this.barValue > this.maxValue) {
          this.screenValue = 180;
          return this.screenValue;
        } else if (this.barValue > this.minValue) {
          this.average = (180 * this.minValue) / (this.maxValue - this.minValue)
          this.negative = (180 * this.barValue) / (this.maxValue - this.minValue)
          this.screenValue = this.negative - this.average;
        }
      }
      return this.screenValue;
    },
  },
};
</script>

<style>
.background {
  width: 200px;
  height: 130px;
  padding: 15px;
  border-radius: 10px;
  background-color: rgb(164, 164, 164);
  box-shadow: 0 0 15px rgb(117, 116, 116);
}

.gauge {
  position: relative;
  user-select: none;
  width: 100%;
  max-width: 250px;
  font-size: 25px;
  color: black;
}

.gauge__body {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background-color: rgb(181, 181, 173);
  box-shadow: inset 0 0 15px rgb(32, 32, 32);
  position: relative;
  border-top-left-radius: 100% 200%;
  border-top-right-radius: 100% 200%;
  overflow: hidden;
}

.gauge__fill {
  position: absolute;
  top: 100%;
  left: 0;
  width: inherit;
  height: 100%;
  transform-origin: center top;
  transform: rotate(0.25turn);
  transition: transform 0.2s ease-out;
}

.gauge__cover {
  width: 75%;
  height: 150%;
  background-color: rgb(164, 164, 164);
  box-shadow: 0 0 15px rgb(32, 32, 32);
  position: absolute;
  border-radius: 50%;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  /*Text*/
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 25%;
  box-sizing: border-box;
}

.min {
  position: absolute;
  width: 100%;
  font-size: 22px;
  bottom: -40px;
  left: 5px;
  text-align: left;
  z-index: 99999;
}

.max {
  position: absolute;
  width: 100%;
  font-size: 22px;
  bottom: -40px;
  right: -5px;
  text-align: right;
  z-index: 99999;
}
</style>