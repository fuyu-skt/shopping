<template>
    <div>
       <div class="pictu"><img :src="arr.PICTURE_ADDRESS"></div>

    </div>

    
</template>

<script>
    export default {
        name: "Private",
        components: {},
        props: {},
        data() {
            return {
                arr:{}
            }
        },
        methods: {
            getDate(){
                this.$axios.req('/recommend').then(res =>{
                    this.arr = res.data.advertesPicture
                    console.log(this.arr)
                }).catch(err =>{
                    console.log(err)
                })
            }
        },
        mounted() {
            this. getDate();
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
    .pictu{
        img{
            width: 360px;

        }
    }
</style>