<template>
    <div>
        <betterScroll class="wrapper">
            <div class="goods">
                <div v-for="(item,index) in arr":key="index">
                    <div class="picture"><img v-lazy="item.image" /></div>
                    <div class="goodsName">{{item.goodsName}}</div>
                    <div class="goods-price">
                    <div class="mallPrice">￥{{item.mallPrice}}</div>
                    <div class="price">￥{{item.price}}</div>
                    </div>
<!--                    购物车和详情页-->
                    <div class="details">
                   <div  class="shopp"><van-button icon="cart" color="#feca3a" ></van-button></div>
                        <div class="detailsys"><van-button type="danger">查看详情</van-button></div>
                    </div>
                </div>
            </div>
        </betterScroll>

    </div>
    
</template>

<script>
import betterScroll from "../../components/BetterScroll"
    export default {
        name: "Recommendation",
        components: {
            betterScroll
        },
        props: {},
        data() {

            return {
                arr:[]
            }
        },
        methods: {
            //横向滚动
            getDate(){
                this.$axios.req('recommend').then(res => {
                    this.arr = res.data.recommend
                    console.log(this.arr)
                }).catch(err => {
                    console.log(err)
                })
            }
        },
        mounted() {
            this.getDate();
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
.goods{
    width: 2550px;
    height: 240px;
    border: 1px solid red;
    display: flex;
    .goodsName{
        font-size: 14px;
        width: 100px;
        white-space: nowrap;/*一行显示*/
        overflow: hidden;/*超出部分隐藏*/
        text-overflow: ellipsis;/*用...代替超出部分*/

    }
    .price{
        font-size: 12px;
        margin: 5px;
        text-decoration:line-through;
        color: #999;
    }
    .goods-price{
        display: flex;
        margin: 0px 5px;
    }
    .picture{
        img{
            width: 150px;
            height: 150px;
        }

    }
}
.wrapper{
overflow: hidden;
    width: 100%;
}
    .details{
        display: flex;
        .detailsys{

            flex: 3;
        }
        .shopp{
            background: #feca3a;
            flex: 1;

        }
    }
</style>