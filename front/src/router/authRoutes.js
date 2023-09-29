const authRoutes = {
    path: '/auth',
    name: 'auth',
    component: () => import('@/views/auth/AuthLayout.vue'),
    children:[
        {
            path: 'login',
            name: 'login',
            component: () => import('@/views/auth/LoginView.vue')
        }
    ]
}

export default authRoutes;