export default {
    // 全局属性变量
    state: {
        headerColor:'#409EFF',  //主题颜色
        isCollapse: false,
        menus:[],               //目录
        activeIndex:null,       //当前高亮目录index
        //标签
        editableTabs:[],       
        editableTabsValue:'1',   //当前标签序号
        routeLoaded:false       //路由是否加载
    },
    getters: {
        isCollapse(state){// 对应着上面state
            return state.isCollapse
        }
    },
    // 全局同步方法, 调用方法,this.$store.commit("xxx")
    mutations: {
        headerColor(state,params){  
        state.headerColor = params
        },
        isCollapse(state){  
        state.isCollapse =  !state.isCollapse;
        },
        menus(state,params){  
        state.menus = params
        },
        activeIndex(state,params){  
        state.activeIndex = params
        },
        editableTabs(state,params){  
        state.editableTabs = params
        },
        editableTabsValue(state,params){  
        state.editableTabsValue = params
        },
        routeLoaded(state,params){  
            state.routeLoaded = params
        }
    },
  }
  