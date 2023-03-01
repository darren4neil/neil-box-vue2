import Layout from '@/layout'
import EmptyLayout from '@/layout/empty'

export default {
    path: '/elementui_example/',
    component: Layout,
    redirect: '/elementui_example/layout/basic',
    name: 'elementuiExample',
    meta: {
        title: 'Element UI',
        icon: 'sidebar-breadcrumb'
    },
    children: [
        {
            path: 'layout',
            name: 'elementuiExampleLayout',
            component: EmptyLayout,
            redirect: '/elementui_example/layout/basic',
            meta: {
                title: '布局'
            },
            children: [
                {
                    path: 'basic',
                    name: 'elementuiExampleLayoutBasic',
                    component: () => import(/* webpackChunkName: 'element_ui_example' */ '@/views/UI/element_ui_example/layout/basic'),
                    meta: {
                        title: '基本布局'
                    }
                },
                {
                    path: 'gutter',
                    name: 'elementuiExampleLayoutGutter',
                    component: () => import(/* webpackChunkName: 'element_ui_example' */ '@/views/UI/element_ui_example/layout/gutter'),
                    meta: {
                        title: '分栏间隔'
                    }
                }
            ]
        },
        {
            path: 'container',
            name: 'uiElementUIContainer',
            component: EmptyLayout,
            redirect: '/elementui_example/container/basicContainer',
            meta: {
                title: '容器'
            },
            children: [
                {
                    path: 'basicContainer',
                    name: 'elementuiExampleContainerBasic',
                    component: () => import(/* webpackChunkName: 'element_ui_example' */ '@/views/UI/element_ui_example/container/basicContainer'),
                    meta: {
                        title: '常见页面布局'
                    }
                }
            ]
        }
    ]
}
