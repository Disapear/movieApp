export  default {
    name:'cinema',
    path:'/cinema',
    component : () =>import('@/views/Cinema'),
    children:[
        {
            path:'allCity',
            component:()=>import('@/components/cinemaList')
        },
        {
            path:'allCityBrand',
            component:()=>import('@/components/cinemaList_2')
        },
        {
            path:'allCityNews',
            component:()=>import('@/components/cinemaList_3')
        },
        {//配置默认路由
            path:'/cinema',
            redirect:'allCity'
        }

    ]
}
