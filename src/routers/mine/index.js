export  default {
    name:'mine',
    path:'/mine',
    component : () =>import('@/views/Mine'),
    children:[
        {
            path:'login',
            component : ()=>import('@/components/login')
        },
        {//配置默认路由
            path:'/mine',
            redirect:'login'
        }
    ]
}
