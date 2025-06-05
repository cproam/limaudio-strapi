/**
 * article router.
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::article.article', {
    config: {
        find: {
            middlewares: [
                (ctx, next) => {
                    // console.log(111111111111);
                    return next();
                },
            ],
        }
    }
});
