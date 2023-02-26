<template>
    <div class="main-container" :class="isCollapse?'tabs-width2':'tabs-width1'">
        <el-tabs class="tabs" v-model="editableTabsValue" type="card" closable @tab-remove="removeTab" @tab-click="selectedTabHandle" :class="isCollapse?'tabs-width2':'tabs-width1'">
            <el-tab-pane
                v-for="item in editableTabs"
                :key="item.name"
                :label="item.title"
                :name="item.name"
            >
            <span slot="label"><i :class="item.icon"></i> {{item.title}} </span>
            </el-tab-pane>
            <el-dropdown class="tabs-tools" :show-timeout="0" trigger="hover">
                <div style="font-size:20px;width:50px;"><i class="el-icon-arrow-down"></i></div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item @click.native="CloseCurrentTab">关闭当前标签</el-dropdown-item>
                    <el-dropdown-item @click.native="CloseOtherTab">关闭其它标签</el-dropdown-item>
                    <el-dropdown-item @click.native="CloseAllTab">关闭全部标签</el-dropdown-item>
                    <el-dropdown-item @click.native="RefreshCurrentTab">刷新当前标签</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </el-tabs>
        <div class="view">
            <!-- 内容区域 -->
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
import { mapState } from 'vuex'
	export default {
        computed: {
        ... mapState({
                headerColor: state=>state.menu.headerColor,
                isCollapse: state=>state.menu.isCollapse,
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
	    data() {
	      return {
                         
            tabIndex: 2
            };
	    },
	    methods: {
            // tabs, 选中tab
            selectedTabHandle (tab) {
                tab = this.editableTabs.filter(item => item.name === tab.name)
                if (tab.length >= 1) {
                    //切换标签页时同步更新高亮菜单
                    this.$store.commit('activeIndex', tab[0].menuId.toString());
                    this.$router.push(tab[0].url);
                }
            },
            //删除标签页
	        removeTab(targetName) {
                let tabs = this.editableTabs;
                let activeName = this.editableTabsValue;
                if (activeName === targetName) {
                tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                });
                }
                //当前标签序号
                this.editableTabsValue = activeName;
                //标签
                this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                var tab2 = this.editableTabs.filter(item => item.name === this.editableTabsValue);
                if (tab2.length >= 1) {
                    //切换标签页时同步更新高亮菜单
                    this.$store.commit('activeIndex', tab2[0].menuId.toString());
                    //跳转
                    this.$router.push(tab2[0].url);
                }
            },
            // tabs, 关闭当前
            CloseCurrentTab () {
                this.removeTab(this.editableTabsValue)
            },
            // tabs, 关闭其它
            CloseOtherTab () {
                this.editableTabs = this.editableTabs.filter(item => item.name === this.editableTabsValue)
            },
            // tabs, 关闭全部
            CloseAllTab () {
                this.editableTabs = [];
                this.editableTabsValue = '1';
                this.$store.commit('activeIndex', null);
                this.$router.push("/")
            },
            // tabs, 刷新当前
            RefreshCurrentTab () {
                var tab2 = this.editableTabs.filter(item => item.name === this.editableTabsValue);
                if (tab2.length >= 1) {
                    this.$nextTick(() => {
                        //跳转
                        this.$router.push(tab2[0].url);
                    })
                }
                
            }
	    }
	  }
</script>


<style>
	.main-container{
        padding: 0 5px 5px;
        position: absolute;
        top: 5rem;
        left: 1px;
        right: 1px;
        bottom: 0px;
    }
    .tabs {
        position: fixed;
        top: 60px;
        right: 2px;
        padding-left: 0px;
        padding-right: 2px;
        z-index: 1020;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background: rgb(255, 253, 255);
        border-color: rgba(200, 206, 206, 0.5);
        /* // border-left-width: 1px;
        // border-left-style: solid; */
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
    .tabs-width1{
        left: 200px;
    }
    .tabs-width2{
        left: 65px;
    }
    .view{
        position: absolute;
        top: 45px;
        left: 5px;
        right: 5px;
        bottom: 5px;
        padding: 5px;
    }
    .tabs-tools {
        position: fixed;
        top: 60px;
        right: 0;
        z-index: 1000;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        cursor: pointer;
        border-color: rgba(200, 206, 206, 0.5);
        border-left-width: 1px;
        border-left-style: solid;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        background: rgba(255, 255, 255, 1);
    }
</style>