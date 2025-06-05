
export default {
    routes: [
        {
            method: 'PUT',
            path: '/articles/:id/views',
            handler: 'article.incrementViewsCount',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/articles/:id/views',
            handler: 'article.getViewsCount',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ]
}