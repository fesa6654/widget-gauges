<template>
  <div class="back">
    <div class="background">
      <div class="limit-ground">
        <div
          class="limit"
          :style="{ transform: 'rotate(' + (-45 + start) + 'deg)' }"
        ></div>
      </div>
      <div class="name">Faz 1</div>
      <div class="value">{{ gaugeData.toFixed(1) }} {{ unit }}</div>
      <div class="zero">{{ minValue }}</div>
      <div class="one">50</div>
      <div class="two">100</div>
      <div class="three">150</div>
      <div class="four">200</div>
      <div class="five">250</div>
      <div class="six">{{ maxValue }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      gaugeData: this.data,
      maxValue: 300,
      minValue: 0,
      average: 0,
      unit: "V",
      screenValue: 0,
    };
  },
  watch: {
    data: function (val) {
      this.gaugeData = val;
    },
  },
  computed: {
    start() {
      if (this.minValue < 0) {
        if (this.gaugeData <= this.minValue) {
          this.screenValue = 0;
          return this.screenValue;
        } else if (this.gaugeData > this.maxValue) {
          this.screenValue = 270;
          return this.screenValue;
        } else if (this.gaugeData < 0) {
          this.average = Math.abs(this.gaugeData) + this.minValue;
          this.screenValue =
            (270 * Math.abs(this.average)) /
            (this.maxValue + Math.abs(this.minValue));
        } else if (this.gaugeData >= 0) {
          this.average =
            (270 * Math.abs(this.minValue)) /
            (this.maxValue + Math.abs(this.minValue));
          this.negative =
            (270 * this.gaugeData) / (this.maxValue + Math.abs(this.minValue));
          this.screenValue = this.average + this.negative;
        }
      } else if (this.minValue >= 0) {
        if (this.gaugeData <= this.minValue) {
          this.screenValue = 0;
          return this.screenValue;
        } else if (this.gaugeData > this.maxValue) {
          this.screenValue = 270;
          return this.screenValue;
        } else if (this.gaugeData > this.minValue) {
          this.average =
            (270 * this.minValue) / (this.maxValue - this.minValue);
          this.negative =
            (270 * this.gaugeData) / (this.maxValue - this.minValue);
          this.screenValue = this.negative - this.average;
        }
      }
      return this.screenValue;
    },
  },
};
</script>

<style scoped>
.back {
  position: relative;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  background-color: rgb(41, 71, 181);
  box-shadow: 0 0 15px rgb(16, 40, 127);
  border-radius: 50%;
}

.background {
  position: relative;
  margin-top: 33px;
  width: 250px;
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  z-index: 10;
}

.limit-ground {
  position: relative;
  width: 250px;
  height: 108px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
}

.limit {
  position: absolute;
  border-color: transparent rgba(208, 128, 9, 0.755) transparent transparent;
  border-style: solid;
  border-width: 7px 100px 7px 0px;
  width: 0px;
  height: 0px;
  left: 25px;
  padding-top: 1px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  transition: transform 0.3s linear;
  transform-origin: right center;
  transform-style: preserve-3D;
  z-index: 12;
}

.name {
  position: absolute;
  width: 80px;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  z-index: 11;
}

.value {
  position: absolute;
  top: 120px;
  width: 80px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgb(81, 81, 81);
  border-radius: 5px;
  color: white;
  box-shadow: inset 0 0 15px black;
  z-index: 11;
}

.zero {
  position: absolute;
  left: 44px;
  bottom: -80px;
  color: white;
}

.one {
  position: absolute;
  left: 3px;
  bottom: -2px;
  color: white;
}

.two {
  position: absolute;
  left: 30px;
  bottom: 78px;
  color: white;
}

.three {
  position: absolute;
  text-align: center;
  bottom: 108px;
  color: white;
}

.four {
  position: absolute;
  right: 30px;
  bottom: 78px;
  color: white;
}

.five {
  position: absolute;
  right: 3px;
  bottom: -2px;
  color: white;
}

.six {
  position: absolute;
  right: 44px;
  bottom: -80px;
  color: white;
}
</style>