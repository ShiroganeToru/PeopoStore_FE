const routes = {
    public: {
        home: '/',
        login: '/login',
        register: '/register',
        forgotPassword: '/forgot-password',
        setPassword: '/set-password',
        notFound: '/404'
    },
    customer: {
        profile: '/profile',
        cart: '/cart',
        checkout: '/checkout',
        purchased: '/purchased',
        purchasedDetail: '/purchased/:purchasedId',
        orderSuccess: '/confirm',
    }, 
    admin: {
        dashboard: '/admin',
        profile: '/admin/profile',
    },
    api: {
        loginGoogle: 'auth/callback/google/redirect'
    },
};

export default routes;