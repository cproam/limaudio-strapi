/**
 *  article controller
 */

import { factories } from '@strapi/strapi';

// export default factories.createCoreController('api::article.article');

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
    async incrementViewsCount(ctx) {
        const { id } = ctx.params as { id: string };

        try {
            // Находим запись по ID
            const article = await strapi.entityService.findOne('api::article.article', parseInt(id, 10));

            if (!article) {
                return ctx.notFound('Article not found');
            }

            // Увеличиваем счетчик просмотров
            const updatedArticle = await strapi.entityService.update('api::article.article', parseInt(id, 10), {
                data: {
                    views: (article.views || 0) + 1,
                },
            });

            return ctx.send(updatedArticle);
        } catch (error) {
            return ctx.throw(500, 'Error updating view count');
        }
    },
}));