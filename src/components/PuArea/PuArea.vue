<template>
    <div>
        <van-cell is-link @click="showPopup">{{slideTitle}}
            : {{areaVal}}
        </van-cell>

        <!-- <input type="text" :val="val"> -->
        <van-popup v-model="flag" position="bottom" :style="{ height: '50%' }">
            <van-area :title="title" :area-list="areaList" @confirm="confirm" @cancel="cancel" @change="change" :ref="refName" />
        </van-popup>

    </div>
</template>

<script>
// import area from '../../../public/data/area'
export default {
    model: {
        prop: 'areaVal',
        event: 'confirm'
    },
    props: {
        slideTitle: {
            type: String,
            default: "选择地区"
        },
        title: {
            type: String,
            default: "省市级"
        },
        areaList: {
            type: Object,
            default: {}
        },
        refName: {
            type: String,
            default: 'area'
        },
        areaVal: {
            type: String,
            default: ''
        }
        // flag: {
        //     type: Boolean,
        //     default: false
        // }
    },
    data() {
        return {
            flag: false,
            // areaList: {},
            // val: ''
            areaVal: '',
        }
    },
    methods: {
        showPopup() {
            this.flag = true;
        },
        confirm(e) {
            // console.log(this.$refs.area, e)
            let value = e[0].name + "/" + e[1].name + "/" + e[2].name;
            this.areaVal = value;
            this.flag = false;
            this.$emit('confirm', value, e)
        },
        cancel(e) {
            // console.log(this.$refs.area, e)
            // this.$refs.area.reset();
            this.flag = false;
        },
        change(picker, index, value) {
            let val = picker.getValues();
            this.$emit('changeArea', val)
        }
    },
    created() {
        // this.areaList = area;
    },
}
</script>

<style  scoped>
</style>