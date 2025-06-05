
export default {
    routes: [
        {
            method: 'GET',
            path: '/articles/:id/views',
            handler: 'article.incrementViewsCount',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ]
}