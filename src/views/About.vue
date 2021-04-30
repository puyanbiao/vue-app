
<template>
  <div>
    <input type="button" value="改变msg" @click="changeMsg" />
    <div>{{msg}}</div>
    <div>
      <span>通过computed计算属性计算出来的值:</span>
      {{reverseMsg}}
      <!-- {{reserveMsg}} -->
    </div>
    <div>这个时间是通过computed计算出来的,但是不是响应式依赖,意味着这个时间不再更新:{{nowDate}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "this is a about page"
    };
  },
  methods: {
    changeMsg() {
      console.log(this.msg);
      this.msg = this.msg
        .split("")
        .reverse()
        .join("");
    },

    // 本地数据存放在public目录下(vue-cli3.x),vue-cli2.x存放在static目录下
    getA() {
      let p = this.$axios.get("data/dataA.json");
      console.log(p);
    },
    getB() {
      this.$axios.get("data/dataB.json").then(res => {});
    },
    getC() {
      this.$axios.get("data/dataC.json").then(res => {});
    },
    promiseAll() {
      Promise.all([
        this.$axios.get("data/dataA.json"),
        this.$axios.get("data/dataB.json"),
        this.$axios.get("data/dataC.json")
      ]).then(
        res => {
          console.log(res);
          let [p1, p2, p3] = res;
          console.log(p1, p2, p3);
          // console.log(`p1=${p1},p2=${p2},p3=${p3}`);
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  async created() {
    this.promiseAll();
    // this.getA();
    // let resC = await this.getC();
    // let resB = await this.getB();
    // console.log(resA, resB, resC);
  },
  watch: {
    msg(newValue, oldValue) {}
  },
  computed: {
    reverseMsg() {
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
    nowDate() {
      return Date().toLocaleString();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
