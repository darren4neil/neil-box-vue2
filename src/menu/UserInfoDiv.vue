<template>
  <div class="personal-panel">
    <div class="personal-desc" :style="{'background':this.$store.state.headerColor}">
        <div class="avatar-container">
          <img class="avatar" :src="user.img" />
        </div>
        <div class="name-role">
          <span class="sender">{{ user.name }}<i style="font-weight: bold;" :class="user.sex"></i></span>
        </div>
        <div class="registe-info">
          <span class="registe-info">
            <li class="fa fa-clock-o"></li>
            {{ user.registeInfo }}
          </span>
        </div>
    </div>
    <div class="personal-relation">
        <span class="relation-item">{{user.deptName}}</span>
        <span class="relation-item">{{user.position}}</span>
    </div>
    <div class="main-operation">
        <span class="main-operation-item">
          <el-button size="small" icon="fa fa-male" @click="setPersonal()"> 编辑资料</el-button>
        </span>
        <span class="main-operation-item">
          <el-button size="small" icon="fa fa-key" @click="setOperaion()"> 修改密码</el-button>
        </span>
    </div>
    <div class="other-operation">
        <div class="other-operation-item">
          <li class="fa fa-eraser"></li>
          部门：{{user.deptName}}
        </div>
        <div class="other-operation-item">
          <li class="fa fa-user"></li>
          职位：{{user.position}}
        </div>
        <div class="other-operation-item">
          <li class="fa fa-bell"></li>
          生日：{{user.birth}}
        </div>

    </div>
    <div class="personal-footer" @click="logout">
      <li class="fa fa-sign-out"></li>
      <!-- {{$t("common.logout")}} -->
      退出登录
    </div>
    <!-- <kt-pass ref="KtPass"></kt-pass>
    <kt-personal ref="KtPersonal"></kt-personal> -->
  </div>
</template>

<script>
import Cookies from "js-cookie"
// import KtPass from './KtPass.vue'
// import KtPrint from './KtPrint.vue'
// import KtPersonal from './KtPersonal.vue'
import { mapState } from 'vuex';
export default {
  computed: {
    ... mapState({
                routeLoaded: state=>state.menu.routeLoaded
            }),
  },
  components:{
  	// KtPass,
    // KtPrint,
    // KtPersonal
  },
  name: 'UserInfoDiv',
  props: {
    user: {
      type: Object,
      default: {
        name: "Louis",
        sex:"el-icon-male",
        img: "@/assets/user.png",
        deptName:"技术部",
        position:"技术员",
        birth:"2018-12-20",
        registeInfo: "注册时间：2018-12-20 "
      }
    },
    size: {
      type: String,
      default: 'mini'
    }
  },
  data() {
    return{
      dataFormRules: {
      	oldPass: [{ required: true, message: '请输入原先密码', trigger: 'blur' }],
        newPass: [
          {required: true, message: "请输入新的密码", trigger: 'blur'},
          {min:2, max:10, message:'长度必须在2-10之间',trigger: 'blur'}],
        again:[{required: true, message: "选择重新输入密码", trigger: 'change'}]
      },
      dataForm: {
        oldPass:'',
      	newPass: '',
      	again: ''
      },
      PassdialogVisible: false
    }
  },
  methods: {
    // 退出登录
    logout: function() {
      this.$confirm("确认退出吗?", "提示", {
        type: "warning"
      })
      .then(() => {
        sessionStorage.removeItem("uName")
        this.deleteCookie("token")
        this.$store.commit('routeLoaded', false);
        this.$router.push("/Login")
        this.$api.login.logout().then((res) => {
          }).catch(function(res) {
        })
      })
      .catch(() => {})
    },
    // 删除cookie
    deleteCookie: function(name) {
        Cookies.remove(name)
    },
    setOperaion:function(){
      this.$refs.KtPass.setDialogVisible(true)
    },
    setPersonal:function(){
      this.$refs.KtPersonal.setDialogVisible(true)
    },
    setimg:function(img){
      this.user.img=img
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.personal-panel {
  font-size: 14px;
  width: 280px;
  text-align: center;
  border-color: rgba(180, 190, 190, 0.2);
  border-width: 1px;
  border-style: solid;
  background: rgba(182, 172, 172, 0.1);
  margin: -14px;
}
.personal-desc {
  padding: 15px;
  color: #fff;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 90px;
}
.name-role {
  font-size: 16px;
  padding: 5px;
}
.personal-relation {
  font-size: 16px;
  padding: 12px;
  margin-right: 1px;
  background: rgba(200, 209, 204, 0.3);
}
.relation-item {
  padding: 12px;
}
.relation-item:hover {
  cursor: pointer;
  color: rgb(19, 138, 156);
}
.main-operation {
  padding: 8px;
  margin-right: 1px;
  /* background: rgba(175, 182, 179, 0.3); */
  border-color: rgba(201, 206, 206, 0.2);
  border-top-width: 1px;
  border-top-style: solid;
}
.main-operation-item {
  margin: 15px;
}
.other-operation {
  padding: 15px;
  margin-right: 1px;
  text-align: left;
  border-color: rgba(180, 190, 190, 0.2);
  border-top-width: 1px;
  border-top-style: solid;
}
.other-operation-item {
  padding: 12px;
}
.other-operation-item:hover {
  cursor: pointer;
  background: #9e94941e;
  color: rgb(19, 138, 156);
}
.personal-footer {
  margin-right: 1px;
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-color: rgba(180, 190, 190, 0.2);
  border-top-width: 1px;
  border-top-style: solid;
}
.personal-footer:hover {
  cursor: pointer;
  color: rgb(19, 138, 156);
  background: #b1a6a61e;
}
li{
  list-style: none;
}
.upimg{
  position: absolute;
  font-size: 10px;
  background-color: rgba(180, 190, 190, 0.5);
  border-radius: 0;
  z-index: 3000;
  left: 100px;
  top: 70px;
}
.arc {
  background-color: rgba(180, 190, 190, 0.8);
  border-radius: 0  0 300px 300px;
  width: 70px;
  position: absolute;
  left: 105px;
  top: 70px;
}
</style>
