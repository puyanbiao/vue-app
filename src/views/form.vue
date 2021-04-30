<template>
  <div>
    <input type="text" v-model="msg" />
    <p>{{msg}}</p>
    <hr />

    <div class="radio">
      <input type="radio" v-model="picked" value="chinese" id="chinese" />
      <label for="chinese">chinese</label>
    </div>
    <div class="radio">
      <input type="radio" v-model="picked" value="math" id="math" />
      <label for="math">math</label>
    </div>
    <div class="radio">
      <input type="radio" v-model="picked" value="english" id="english" />
      <label for="english">english</label>
    </div>
    <div>pick:{{picked}}</div>
    <hr />
    <p>checkbox 1</p>
    <input type="checkbox" v-model="checked" value="biu" id="name" />
    <label for="name">biu</label>
    <p>checkbox group</p>
    <input type="checkbox" v-model="checkArr" value="pu" id="pu" />
    <label for="pu">pu</label>
    <input type="checkbox" v-model="checkArr" value="yan" id="yan" />
    <label for="yan">yan</label>
    <input type="checkbox" v-model="checkArr" value="biu" id="biu" />
    <label for="biu">biu</label>
    <p>checkArr: {{checkArr}}</p>
    <hr />
    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />
    toggle 's value
    <h3>{{toggle}}</h3>
  </div>
</template>

<script>
// import { cell } from "vux";不兼容vue-cli@3.x
export default {
  data() {
    return {
      msg: "this is a text kuang",
      picked: "",
      checked: false,
      checkArr: [],

      toggle: ""
    };
  }
};
</script>

<style scoped>
.radio {
  padding: 10px;
}
</style>