<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    provide() {
        return {
            PForm: this,//把自己provide出去,方便跨级调用
        }
    },
    props: {
        model: {
            type: Object,
            required: true,
        },
        rules: {
            type: Object,

        }
    },

}
</script>

<style scoped>
</style>