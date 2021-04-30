<template>
    <div>
        <!-- 绑定值,监听事件 -->
        <!-- {{someval}} -->
        <input :type=type :value="value" @input="onInput" />
    </div>
</template>

<script>
export default {
    // inject: ['someval'],
    props: ["value"],
    props: {
        value: {
            type: String,
            default: "",
        },
        type: {
            type: String,
            default: 'text'
        }
    },
    data() {
        return {};
    },
    methods: {
        onInput(e) {
            let value = e.target.value;
            this.$emit("input", value);//子组件告诉父组件,数据发生了变化
            this.$parent.$emit('validate');
            //因为formItem校验那里还是一个插槽,通过这种方式,相当于formItem发出一个事件,然后到formItem,vue中,自己监听自己,
        }
    }
};
</script>

<style lang="scss" scoped>
</style>