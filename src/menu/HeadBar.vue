<template>
    <div class="headbar" :style="{'background-color':headerColor}" 
    :class="isCollapse?'headbar-width2':'headbar-width1'">
        <!-- 导航菜单收缩 -->
        <span class="CollapseCon">
            <el-menu class="el-menu-demo" :background-color="headerColor" text-color="#fff" mode="horizontal">
                <el-menu-item index="1" @click="changeCollapse">
                    <i :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'" class="colorI"></i>
                </el-menu-item>
            </el-menu>
        </span>
        <!-- 导航菜单左 -->
        <span class="leftBar">
            <el-menu :default-active="index" class="el-menu-demo"
                :background-color="headerColor" text-color="#fff" active-text-color="#ffd04b" mode="horizontal">
                <el-menu-item index="1" @click="$router.push('/')">
                    <i class="el-icon-s-home"></i>
                </el-menu-item>
            </el-menu>
        </span>
        <!-- 导航菜单右 -->
        <span class="rightBar">
            <el-menu :default-active="index" class="el-menu-demo"
                :background-color="headerColor" text-color="#fff" mode="horizontal">
                <!-- 主题颜色改变 -->
                <el-menu-item index="1">
                    <div class="block">
                        <el-color-picker v-model="headerColor" size="medium"></el-color-picker>
                    </div>
                </el-menu-item>
                <!-- 用户信息 -->
                <el-menu-item index="5" v-popover:popover-personal>
                    <span class="userInfo">
                        {{user.name}}
                        <img :src="user.img" class="userImg"/>
                    </span>
                    <el-popover ref="popover-personal" placement="bottom-end" trigger="click" :visible-arrow="false">
                        <user-info-div :user="user"></user-info-div>
                    </el-popover>
                </el-menu-item>
            </el-menu>
        </span>
        
    </div>
</template>

<script>
import { mapState } from 'vuex';
import UserInfoDiv from './UserInfoDiv.vue';
	export default {
        computed:{
        ...mapState({
                isCollapse: state=>state.menu.isCollapse
            })
        },
        components:{
            UserInfoDiv
        },
	    data() {
	      return {user: {
            name: "张三",
            sex:"el-icon-male",
            img: "user.png",
            deptName:"软件部",
            position:"程序员",
            birth:"1998-1-1",
            registeInfo: "注册时间：2021-1-1"
        },
              headerColor:'#409EFF',
              index:'1'
	      };
	    },
	    methods: {
	      changeCollapse(){
              this.$store.commit('isCollapse')
          }
	    },
        watch:{
            headerColor:function(headerColor){
                this.$store.commit('headerColor', headerColor)
            }
        }
	  }
</script>


<style scoped>
    .headbar {
        position: fixed;
        top: 0;
        right: 0;
        z-index: 1030;
        height: 60px;
        border-color: rgba(180, 190, 190, 0.8);
        border-left-width: 1px;
        border-left-style: solid;
    }
    .CollapseCon, .leftBar{
        float: left;
    }
    .rightBar{
        float: right;
    }
    .headbar-width1{
        left: 200px;
    }
    .headbar-width2{
        left: 65px;
    }
    .userInfo {
        font-size: 20px;
        color: #fff;
        cursor: pointer;
    }
    .userImg{
        width: 40px;
        height: 40px;
        border-radius: 10px;
        margin: 10px 0px 10px 10px;
        float: right;
    }
    .colorI{
        color: #000;
        font-size: 25px;
    }
</style>