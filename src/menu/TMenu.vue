<!-- TMenu.vue -->
<template>
  <!-- 源码问题，需加上:popper-append-to-body="false"，不然会导致重复调用 -->
  <el-submenu v-if="menu.children && menu.children.length >= 1" :index="menu.menuId + ''" :key="menu.menuId" :popper-append-to-body="false">
    <template slot="title">
      <i :class="menu.icon"></i>
      <span slot="title">{{menu.menuName}}</span>
    </template>
    <t-menu v-for="item in menu.children" :menu="item" :key="item.menuId"></t-menu>
  </el-submenu>
  <el-menu-item v-else :index="menu.menuId + ''" @click="handleRouter(menu)" :key="menu.menuId">
    <i :class="menu.icon"></i>
    <span slot="title">{{menu.menuName}}</span>
  </el-menu-item>
</template>
<script>
import { mapState } from 'vuex';
export default {
  name: 'TMenu', //组件名
  props: {
    menu: {
      type: Object,
      required: true
    }
  },
  computed: {
    ... mapState({
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
  methods: {
    handleRouter(menu) {
      // tab标签页选中, 如果不存在则先添加
      var tab = this.editableTabs.filter(item => item.name === menu.menuName)[0]
      if (!tab) {
        tab = {
          name: menu.menuName,
          title: menu.menuName,
          icon: menu.icon,
          url:menu.route,
          menuId:menu.menuId
        }
        this.editableTabs = this.editableTabs.concat(tab)
      }
      this.editableTabsValue = tab.name;
      //改变高亮导航
      this.$store.commit('activeIndex', menu.menuId.toString());
      // 跳转路由
      this.$router.push(menu.route);
    }
  }
}
</script>
<style scoped>
</style>