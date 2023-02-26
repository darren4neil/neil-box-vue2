<template>
    <div class="menu-bar-container">
        <!-- logo -->
        <div class="logo" index="" :style="{'background-color':headerColor}" :class="isCollapse?'el-menu-width2':'el-menu-width1'">
            <img src="../assets/logo.png" class="logoImg" v-if="isCollapse">
            <div class="tohide" v-if="!isCollapse">管理系统</div>
        </div>
        <!-- 左侧目录 -->
        <el-menu ref="navmenu" :default-active="activeIndex" :collapse="isCollapse" 
        :class="isCollapse?'el-menu-width2':'el-menu-width1'" :collapse-transition="false">
            <t-menu v-for="item in menus" :menu="item" :key="item.menuId"></t-menu>
        </el-menu>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import  TMenu  from './TMenu'
	export default {
        
        computed: {
        ... mapState({
                headerColor: state=>state.menu.headerColor,
                isCollapse: state=>state.menu.isCollapse,
                menus: state=>state.menu.menus,
                activeIndex: state=>state.menu.activeIndex
            }),
            editableTabs:{
                get () { return this.$store.state.menu.editableTabs },
                set (val) { this.$store.commit('editableTabs', val) }
            },
            editableTabsValue:{
                get () { return this.$store.state.menu.editableTabsValue },
                set (val) { this.$store.commit('editableTabsValue', val) }
            }
        },
        components:{
            TMenu
        },
	    data() {
	      return {
              
	      };
	    },
	    methods: {
            // 跳转方法
	        goTo(name){
              this.$router.push(name);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
	    },
        created () {
        }
	  }
</script>


<style>
    .menu-bar-container {
        position: fixed;
        top: 0px;
        left: 0;
        bottom: 0;
        z-index: 1100;
    }
	.logo{
        height: 60px;
        font-size: 25px;
        color: white;
    }
    .logoImg{
        width: 100%;
    }
    .tohide{
        padding: 12px;
    }
    .el-menu-width1{
        width: 200px;
    }
    .el-menu-width2{
        width: 65px;
    }
</style>