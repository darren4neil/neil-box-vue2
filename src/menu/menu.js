/**
 * 权限管理在后台，前端接收到的是已经过滤完的菜单树
 * @menuId 菜单唯一识别
 * @menuName 名称
 * @icon 图标
 * @parentId 父菜单，前端不用，后端用来嵌套树
 * @route 只有叶子结点有路由
 * @type 是菜单级别，只有一级菜单和二级菜单
 * @orderNum 是菜单排序，后台需要用来排序，前端不用
 * @children 叶子结点没有该属性或者为空数组
 */
// 获取菜单树
export  const menuTreeData = [{
    "menuId": 1,
    "menuName": "系统管理",
    "parentId": 0,
    "route": null,
    "type": 0,
    "icon": "el-icon-setting",
    "orderNum": 0,
    "children": [{
            "menuId": 11,
            "menuName": "权限管理",
            "parentId": 1,
            "parentName": "系统管理",
            "route": "/views/new1",
            "type": 1,
            "icon": "el-icon-warning-outline",
            "orderNum": 1,
            "component": resolve => require([`../views/new1.vue`], resolve),
            "children": []
        },
        {
            "menuId": 12,
            "menuName": "菜单管理",
            "parentId": 1,
            "parentName": "系统管理",
            "route": "/views/new2",
            "type": 1,
            "icon": "el-icon-menu",
            "orderNum": 2,
            "children": []
        }
    ]
},
{
    "menuId": 2,
    "menuName": "个人管理",
    "parentId": 0,
    "route": null,
    "type": 0,
    "icon": "el-icon-user",
    "orderNum": 2,
    "children": [
        {
            "menuId": 21,
            "menuName": "密码管理",
            "parentId": 4,
            "parentName": "个人管理",
            "route": null,
            "type": 1,
            "icon": "el-icon-view",
            "orderNum": 1,
            "children": [
                {
                    "menuId": 211,
                    "menuName": "密保管理",
                    "parentId": 5,
                    "parentName": "密码管理",
                    "route": "/views/new3",
                    "type": 2,
                    "icon": "el-icon-link",
                    "orderNum": 1,
                    "children": []
                }]
        },
        {
            "menuId": 22,
            "menuName": "历史记录",
            "parentId": 5,
            "parentName": "个人管理",
            "route": "/views/new4",
            "type": 1,
            "icon": "el-icon-zoom-in",
            "orderNum": 1,
            "children": []
        }]
}]