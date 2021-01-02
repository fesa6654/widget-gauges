<template>
  <div>
    <div class="gauge">
      <div class="gauge__body">
        <div class="gauge__fill"></div>
        <div class="gauge__cover"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const gaugeElement = document.querySelector(".gauge");

    function setGaugeValue(gauge, value) {
      if (value < 0 || value > 1) {
        return;
      }
      gauge.querySelector(".gauge__fill").style.transform = `rotate(${
        value / 2
      }turn)`;
      gauge.querySelector(".gauge__cover").textContent = `${Math.round(
        value * 100
      )}%`;
    }
    setGaugeValue(gaugeElement, 0.2);
  },
};
</script>

<style>
.gauge {
  user-select: none;
  width: 100%;
  max-width: 250px;
  font-size: 32px;
  color: black;
}

.gauge__body {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  background-color: rgb(181, 181, 173);
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
  background-color: rgb(18, 145, 48);
  transform-origin: center top;
  transform: rotate(0.25turn);
  transition: transform 0.2s ease-out;
}

.gauge__cover {
  width: 75%;
  height: 150%;
  background-color: white;
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
</style>