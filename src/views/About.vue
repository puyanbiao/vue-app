
<template>
    <div>
        <input type="button" value="改变msg" @click="changeMsg" />
        <div>{{msg}}</div>
        <!-- <div>
            <span>通过computed计算属性计算出来的值:</span>{{reverseMsg}}
        </div>
        <div>
            这个时间是通过computed计算出来的,但是,不是响应式依赖,意味着这个时间不再更新:{{nowDate}}
        </div> -->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div v-for="item in list" :key="item.id" class="flexbox">
                <span>{{item.name}}</span>
                <span>{{item.age}}</span>
                <span>{{item.job}}</span>
            </div>
        </van-list>

    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: "this is a about page",
            list: [],
            loading: false,
            finished: false,
        };
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
    },
    async created() {
        this.promiseAll();
        // this.getDemoList();
        // this.getA();
        // let resC = await this.getC();
        // let resB = await this.getB();
        // console.log(resA, resB, resC);
    },
    methods: {
        onLoad() {
            this.getDemoList();
        },
        getDemoList() {
            this.$axios.get('/api/query').then(res => {
                console.log("==mock data==", res.data);
                const { data, message, status } = res.data;
                if (Object.is(status, 200)) {
                    this.list = Object.assign({}, data.rows);
                    // this.finished = true
                }
            });
        },
        changeMsg() {
            console.log(this.msg);
            this.msg = this.msg.split("").reverse().join("");
        },

        // 本地数据存放在public目录下(vue-cli3.x),vue-cli2.x存放在static目录下
        getA() {
            let p = this.$axios.get("data/dataA.json");
            console.log(p);
        },
        getB() {
            this.$axios.get("data/dataB.json").then(res => { });
        },
        getC() {
            this.$axios.get("data/dataC.json").then(res => { });
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

    watch: {
        msg(newValue, oldValue) { }
    },

};
</script>

<style  scoped>
.flexbox {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
</style>
