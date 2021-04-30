<template>
    <div>
        <div class="home flexbox">
            <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
            <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
            <div v-for="(item,index) in datalist.corpList" :key="index" class="item" :class=" { active:index === currentIndex }" @click="changeBg(index)">{{item.accName}}</div>
            <hr />
            <div v-for="(item,index) in datalist2.corpList" :key="index+2" class="item" :class=" { active2:item.checked==true }" @click="changeBg2(item)">{{item.accName}}</div>
        </div>
        <div>
            <van-cell is-link @click="showPopup">选择地区</van-cell>
            {{val}}
            <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
                <van-area title="省市级" :area-list="areaList" @confirm="confirm" @cancel="cancel" @change="change" ref="area" />
            </van-popup>
        </div>

        <hr>
       

    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { obj } from "../../obj";
import area from '../../public/data/area'

import PuArea from '@/components/PuArea/PuArea.vue'

export default {
    name: "Home",
    components: {
        // HelloWorld
        PuArea
    },
    data() {
        return {
            datalist: {},
            datalist2: {},
            currentIndex: 0,

            show: false,
            areaList: {},
            val: ''
        };
    },
    methods: {
        changeBg(index) {
            this.currentIndex = index;
        },
        // 响应式更新数组，直接赋值是不会更新视图的
        changeBg2(item) {
            let _this = this;
            this.datalist2.corpList.map(i => {
                i.checked = false;
                _this.$set(_this.datalist2.corpList, "checked", false);
            });
            _this.$set(_this.datalist2.corpList, "checked", true);
            console.log("this.datalist2.corpList", this.datalist2.corpList);
        },
        showPopup() {
            this.show = true;
        },
        confirm(e) {
            console.log(this.$refs.area, e)
            let value = e[0].name + "/" + e[1].name + "/" + e[2].name;
            this.val = value;
            this.show = false;
        },
        cancel(e) {
            console.log(this.$refs.area, e)
            this.$refs.area.reset();
            this.show = false;
        },
        change(picker, index, value) {
            console.log(picker, index, value)
            let val = picker.getValues();
            console.log('==val==', val)
        },

        // =============================================
        changeArea(param) {
            console.log(param)
        }
    },
    mounted() {

        this.areaList = Object.assign({}, area);

        this.datalist = Object.assign({}, obj);
        this.datalist2 = Object.assign({}, obj);
    }
};
</script>
<style scoped>
.flexbox {
    display: flex;
}
.item {
    margin-left: 10px;
    padding: 20px;
    border: 1px solid coral;
}
.active {
    background-color: cyan;
}
.active2 {
    background-color: hotpink;
}
</style>
