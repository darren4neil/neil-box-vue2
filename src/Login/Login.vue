<template>
  <div style="width: 100%;height: 100%;overflow: hidden;">
  <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <h2 class="title" style="padding-left:112px;" >系统登录</h2>
    <el-form-item prop="account">
      <el-input type="text" v-model="loginForm.user" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
    <el-form-item style="width:100%;">
      <el-button type="primary" style="width:45%;" @click.native.prevent="reset">重 置</el-button>
      <el-button type="primary" style="width:45%;" @click.native.prevent="login" :loading="loading">登 录</el-button>
    </el-form-item>
  </el-form>
  <!-- <video  autoplay loop muted>
    <source src="../assets/video/小鸟.mp4" type="video/mp4"  />
    Your browser does not support the video tag.
  </video> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cookies from "js-cookie"
export default {
  name: 'Login',
  data() {
    return {
      loading: false,
	  twtwtw:{
		  deptName:'董事会',
		  postName:'超级管理员',
		  uName:'张三',
		  uSex:'女',
		  umBrith: '2020-02-24T00:00:00.000+0000',
		  
	  },
      loginForm: {
        user: 'admin',
        password: '123456'
      },
      fieldRules: {
        user: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      checked: true
    }
  },
  methods: {
    login() {
      this.loading = true
      let userInfo = {uName:this.loginForm.user, uPass:this.loginForm.password}
        this.loading = false
         
            sessionStorage.setItem('uid', 1) // 用户id
            // sessionStorage.setItem('power', data.power) // 保存用户到本地会话
            sessionStorage.setItem('deptName', "董事会") // 部门
            sessionStorage.setItem('postName', "超级管理员") // 职位
            sessionStorage.setItem('uName', "张三") // 名称
            sessionStorage.setItem('uSex', '女') // 性别
            sessionStorage.setItem('umBrith', "2020-02-24T00:00:00.000+0000") // 生日
            sessionStorage.setItem('umJoindate', "2020-03-19T00:00:00.000+0000") // 加入时间
            sessionStorage.setItem('umImg',"http://tw704216987.oss-cn-shenzhen.aliyuncs.com/banner1588123455000.jpg") // 头像
            sessionStorage.setItem('ucolor', "#3E2F33")     // 主题颜色
            // sessionStorage.setItem('user',JSON.stringify(data));
            Cookies.set('token', null) // 放置token到Cookie
			
            //this.$store.commit('routeLoaded', false) // 要求重新加载导航菜单
            this.$router.push('/')  // 登录成功，跳转到主页
    },
    getUserMes(){

    },
    reset() {
      this.$refs.loginForm.resetFields()
    },
  },
  computed:{
    // ...mapState({
    //   themeColor: state=>state.app.themeColor
    // })
  }
}
</script>

<style scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    position: fixed;
    z-index: 1;
    right: 36%;
    top: 26%;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background:rgba(255,255,255,0.3);
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #505458;
    }

    video{
      position: absolute;
      display: none;
      right: 0px;
      bottom: 0px;
      max-width: 100% !important;
      max-height: 100%;
      height: auto;
      width: auto;
      top: 0px;
      left: 0px;
      z-index: -11;
    }
    source{
      min-width: 100px;
      min-height: 100px;

    }

  
</style>
