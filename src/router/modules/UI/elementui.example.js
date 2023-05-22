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
                },
                {
                    path: 'minxed',
                    name: 'elementuiExampleLayoutMixed',
                    component: () => import(/* webpackChunkName: 'element_ui_example' */ '@/views/UI/element_ui_example/layout/minxed'),
                    meta: {
                        title: '混合布局'
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
        },
        {
            path: 'form',
            name: 'uiElementUIForm',
            component: EmptyLayout,
            redirect: '/elementui_example/form/radio',
            meta: {
                title: '表单'
            },
            children: [
                {
                    path: 'radio',
                    name: 'uiElementUIFormRadio',
                    component: EmptyLayout,
                    redirect: '/elementui_example/form/radio/basic',
                    meta: {
                        title: '单选框'
                    },
                    children: [
                        {
                            path: 'basic',
                            name: 'uiElementUIFormRadioBasic',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/radio/basic'),
                            meta: {
                                title: '基础用法'
                            }
                        },
                        {
                            path: 'disabled',
                            name: 'uiElementUIFormRadioDisabled',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/radio/disabled'),
                            meta: {
                                title: '禁用状态'
                            }
                        },
                        {
                            path: 'group',
                            name: 'uiElementUIFormRadioGroup',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/radio/group'),
                            meta: {
                                title: '单选框组'
                            }
                        },
                        {
                            path: 'style',
                            name: 'uiElementUIFormRadioStyle',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/radio/style'),
                            meta: {
                                title: '按钮样式'
                            }
                        },
                        {
                            path: 'border',
                            name: 'uiElementUIFormRadioBorder',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/radio/border'),
                            meta: {
                                title: '带有边框'
                            }
                        }
                    ]
                },
                {
                    path: 'checkbox',
                    name: 'uiElementUIFormRadio',
                    component: EmptyLayout,
                    redirect: '/elementui_example/form/checkbox/basic',
                    meta: {
                        title: '复选框'
                    },
                    children: [
                        {
                            path: 'basic',
                            name: 'uiElementUIFormCheckBoxBasic',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/checkbox/basic'),
                            meta: {
                                title: '基础用法'
                            }
                        },
                        {
                            path: 'disable',
                            name: 'uiElementUIFormCheckBoxDisabled',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/checkbox/disable'),
                            meta: {
                                title: '禁用状态'
                            }
                        },
                        {
                            path: 'multi',
                            name: 'uiElementUIFormCheckBoxMulti',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/checkbox/multi'),
                            meta: {
                                title: '单选框组'
                            }
                        },
                        {
                            path: 'indeterminate',
                            name: 'uiElementUIFormCheckBoxIndeterminate',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/checkbox/indeterminate'),
                            meta: {
                                title: 'indeterminate 状态'
                            }
                        },
                        {
                            path: 'count',
                            name: 'uiElementUIFormCheckBoxCount',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/checkbox/count'),
                            meta: {
                                title: '单选框组'
                            }
                        },
                        {
                            path: 'style',
                            name: 'uiElementUIFormCheckBoxStyle',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/checkbox/style'),
                            meta: {
                                title: '数量限制'
                            }
                        },
                        {
                            path: 'border',
                            name: 'uiElementUIFormCheckBoxBorder',
                            component: () => import(/* webpackChunkName: 'multilevel_menu_example' */ '@/views/UI/element_ui_example/form/checkbox/border'),
                            meta: {
                                title: '带有边框'
                            }
                        }
                    ]
                }
            ]
        }
    ]
}
