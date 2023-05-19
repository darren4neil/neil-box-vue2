import Layout from '@/layout'

export default {
    path: '/link',
    component: Layout,
    name: 'externalLinkExample',
    meta: {
        title: '外链',
        icon: 'sidebar-external-link'
    },
    children: [
        {
            path: 'https://www.baidu.com',
            meta: {
                title: '百度一下'
            }
        },
        {
            path: 'https://mail.163.com',
            meta: {
                title: '网易邮箱'
            }
        }
    ]
}
