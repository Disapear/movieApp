export  default {
    name:'movie',
    path:'/movie',
    component : () =>import('@/views/Movie'),
    children:[
        {
            path:'city',
            component:()=>import('@/components/City')
        },
        {
            path:'comming',
            component:()=>import('@/components/Comming')
        },
        {
            path:'search',
            component:()=>import('@/components/Search')
        },
        {
            path:'playing',
            component:()=>import('@/components/Playing')
        },
        {
            path:'/movie',
            redirect:'playing'
        }

    ]
}
