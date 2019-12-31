<template>
    <div class="box">
<!--        返回图标-->
        <div class="box-head">
            <div class="box-head-icon">
                <div><van-icon name="arrow-left" /></div>
            </div>
        </div>

<!--卡片里面的内容-->
        <div class="card-box">
            <br>
            <div class="Log-in-to-register">登录&nbsp;/&nbsp;注册</div>
            <van-cell-group>
                <van-field  v-model="from.username" placeholder="请输入用户名" />
                <br>
                <van-field  type="password" v-model="from.password" placeholder="请输入密码" />
                <br>
<!--                输入手机号码-->
                <van-field
                        v-model="phone"
                        label="手机号"
                        placeholder="请输入手机号"
                />
            </van-cell-group>
<!--            点击发送手机验证码验证码-->
            <div>
                <van-cell-group>
                    <van-field
                            v-model="sms"
                            center
                            clearable
                            label="短信验证码"
                            placeholder="请输入短信验证码"
                    >
                        <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                    </van-field>
                </van-cell-group>
            </div>
<!--            验证码图片-->
            <div class="cedes">
            <van-cell-group>
                <van-field  label="验证码" v-model="from.code" placeholder="请输入验证码" />
               <span  @click="getlogin()"><img src="api/verify" ref="captcha">点击切换</span>

            </van-cell-group>
            </div>
            <br>
<!--            登录注册-->
            <div class="login-registered">
                <van-button type="primary" style="width: 80px" @click="login()">登录</van-button>&nbsp;
                &nbsp;<van-button type="danger" style="width: 80px" @click="registered()">注册</van-button>
            </div>

        </div>



    </div>
</template>
<script>
    export default {
        name: "Login",
        components: {},
        props: {},
        data() {
            return {
                phone:'',
                sms:'',
                from:{
                    username:'',
                    password:'',
                    code:'',
                }
            }
        },
        methods: {
            getlogin() {
                this.$refs.captcha.src = "api/verify?time=" + Date.now();
            },
            // 登录
            login(){
                console.log(this.from)
                    this.$axios.req('/login',{
                    nickname:this.from.username,
                    password:this.from.password,
                    verify:this.from.code
                }).then(res =>{
                    if (res.code === 200){
                        this.from = {}
                        alert('登录成功')
                    }else {
                        alert('登录失败')
                    }
                })
            },
            //注册
            registered(){
                this.$axios.req('/register' , {
                    nickname:this.from.username,
                    password:this.from.password,
                    verify:this.from.code
                }).then(res =>{
                    if (res.code === 200){
                        this.from = {}
                        alert('注册成功')
                    }else {
                        alert('用户名已存在')
                    }
                })
            }
        },
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
.box{
  width: 340px;
  height: 650px;
  background-image: url("../../assets/img/1.gif");
    .box-head{
        width: 100%;
        height: 200px;
    .box-head-icon{
        width: 50px;
        height: 50px;
        background: #707175;
        border-radius:50%;
        margin: 10px;
        div{
                line-height: 50px;
            text-align: center;
        }
    }
    }
    .card-box{
        width: 340px;
        height: 430px;
        background: white;
        box-shadow:2px 2px 20px 2px rgba(0,0,0,0.8);
        margin: 0 0 0 14px;

    }

}
    .cedes{
        width: 210px;
       span{
           margin: 0 20px;
       }
    }
    .Log-in-to-register{
       font-size: 20px;
       font-weight: bold;
        margin: 0 20px;
    }
    .login-registered{
        margin: 0 20px;
    }
</style>