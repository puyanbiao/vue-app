<template>
    <div class="flexBox">
        <div class="label">
            <label for="">{{label}}</label>:
        </div>
        <div class="value">
            <!-- 插槽 -->
            <slot></slot>
            <span v-if="errStatus" class="err">{{errMsg}}</span>
        </div>
    </div>
</template>

<script>
import Schema from 'async-validator'
export default {
    props: ['label', 'prop'],
    inject: ["PForm"],
    data() {
        return {
            errStatus: false,
            errMsg: '',
        }
    },
    methods: {

        validator() {
            console.log('开始校验')
            // this.prop是FormItm这个组件接收回来的属性值
            // this.PForm是inject进来的
            const rules = this.PForm.rules[this.prop];
            const value = this.PForm.model[this.prop];
            const descriptor = { [this.prop]: rules };
            const schema = new Schema(descriptor);
            // validate()第一个参数是一个对象
            schema.validate({ [this.prop]: value }, errors => {
                console.log('==error==', errors)
                if (errors) {//校验失败
                    this.errMsg = errors[0].message;
                    this.errStatus = true;
                } else {//校验成功
                    this.errMsg = "";
                    this.errStatus = false;
                }
            })
        }
    },
    mounted() {
        console.log(this.label)
        // this.$on('input', this.validator);//input 事件是子组件发出的,$on 无法监听
        this.$on('validate', this.validator);
    },

}
</script>

<style scoped>
.flexBox {
    display: flex;
    justify-content: center;
    align-self: center;
    margin-bottom: 20px;
}
.label {
    flex: 2;
}
.value {
    flex: 3;
}
.err {
    color: red;
}
</style>