<template>
  <div>
    <div class="container-fluid">
      <div class="row align-items-center justify-content-around text-center">
        <div class="col-lg-6">
          <div class="out">
            <div class="back">
              <div class="bar">
                <div class="degerler">{{ deger1 }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deger1: 0,
    };
  },
  methods: {
    gaugeData(value) {
      const aha = document.querySelector("div.bar");
      aha.style.height = value + "px";
    },
    start() {
      this.$store.state.inter2 = setInterval(() => {
        this.deger1 = this.deger1 + 20;
        if (this.deger1 == 320) {
          this.deger1 = 0;
        }
        this.gaugeData(this.deger1);
      }, 2000);
    },
  },
  mounted() {
    this.start();
  },
};
</script>

<style>
.out {
  position: relative;
  width: 200px;
  height: 400px;
  background-color: brown;
  border-radius: 10px;
}

.back {
  position: absolute;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 300px;
  background-color: grey;
  text-align: center;
}

.bar {
  position: absolute;
  bottom: 0;
  width: 100px;
  box-shadow: 0 0 15px yellow;
  background-color: yellow;
}

.degerler {
  position: absolute;
  bottom: -30px;
  left: 50%;
  box-sizing: border-box;
  color: black;
}
</style>