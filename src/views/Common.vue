<template id="body">
    <div>
<div><van-search placeholder="请输入搜索关键词" v-model="value" /></div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Common",
        components: {},
        props: {},
        data() {
            return {
                value:''
            }
        },
        methods: {},
        mounted() {

        },
        created() {

        },
        filters: {},
        computed: {},
        watch: {},
        directives: {}
    }
</script>

<style scoped lang="scss">

</style>