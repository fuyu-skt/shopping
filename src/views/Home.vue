<template>
    <div>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <div class="shuffling"><img v-lazy="image.image" /></div>
            </van-swipe-item>
        </van-swipe>

        <div class="small-icon">
       <div v-for="(item,index) in arr" :key="index">
           <div class="icon"><img v-lazy="item.image" /></div>
           <div class="The-text">{{item.mallCategoryName}}</div>
       </div>
        </div>
        <br>
<!--        内测期间的图片-->
        <Private></Private>
        <br>
<!--       滚动图-->
        <Recommendation></Recommendation>
        <br>
<!--        休闲食品-->
        <Snackfood></Snackfood>
    </div>
    
</template>

<script>
    import Private from "../components/homepage/Private";
    import Recommendation from  '../components/homepage/Recommendation'
    import Snackfood from "../components/homepage/Snackfood";
    export default {
        name: "Home",
        components: {
            Private,
            Recommendation,
            Snackfood
        },
        props: {},
        data() {
            return {
                images: [],
                arr:[]
            }
        },
        methods: {
            //轮播图
            getDate(){
                this.$axios.req('recommend').then(res =>{
                    this.images = res.data.slides
                    // console.log(this.images)
                }).catch(err =>{
                    // console.log(err)
                })
            },
            //小图标
            iconDate(){
                this.$axios.req('recommend').then(res =>{
                    this.arr = res.data.category
                    // console.log(this.arr)
                }).catch(err =>{
                    // console.log(err)
                })

            }
        },
        mounted() {
  this.getDate();
  this.iconDate();
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

.shuffling{
    img{
      width: 380px;
        height: 200px;
    }
}
    .small-icon{
        height: 120px;
        background: white;
        border: 1px solid red;
        margin: 10px auto;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .icon{
            img{
                width: 70px;
                height: 70px;
            }
        }
        .The-text{
            font-size: 16px;
        }
    }
</style>