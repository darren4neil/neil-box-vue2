import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);

// 导入
import store from './store/index.js'
// 挂载到Vue实力上，全局可通过this.$store进行调用
Vue.prototype.$store = store

Vue.config.productionTip = false

new Vue({
	router: router,   //加上这句
	render: h => h(App),
}).$mount('#app')
