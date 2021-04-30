<template>
    <div>
        <div class="home flexbox">
            <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
            <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
            <div v-for="(item,index) in datalist.corpList" :key="index" class="item" :class=" { active:index === currentIndex }" @click="changeBg(index)">{{item.accName}}</div>
            <hr />
            <div v-for="(item,index) in datalist2.corpList" :key="index+2" class="item" :class=" { active2:item.checked==true }" @click="changeBg2(item)">{{item.accName}}</div>
        </div>

        <hr>

        <PuArea slideTitle="选择地区1" title="省市级1" :areaList="areaList" v-model="content.areaVal" @confirm="confirm" @changeArea="change"></PuArea>

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
            val: '',
            content: { areaVal: "", }

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


        // =============================================
        confirm() {
            console.log('==areaVal==', this.content.areaVal);
            console.log(arguments[0])
        },
        change() {
            console.log(arguments)
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
