/**
 *  article controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }) => ({
    async incrementViewsCount(ctx) {
        const { id } = ctx.params as { id: string };
        try {
            // Находим запись по ID
            const article = await strapi.documents('api::article.article').findOne({
                documentId: id
            });
            if (!article) {
                return ctx.notFound('Article not found');
            }
            // Увеличиваем счетчик просмотров
            const updatedArticle = await strapi.documents('api::article.article').update({
                documentId: id,
                data: {
                    views: (article.views || 0) + 1,
                }
            });
            return ctx.send(updatedArticle);
        } catch (error) {
            return ctx.throw(500, 'Error updating view count');
        }
    },

    async getViewsCount(ctx) {
        const { id } = ctx.params as { id: string };
        try {
            const article = await strapi.documents('api::article.article').findOne({
                documentId: id
            });
            if (!article) {
                return ctx.notFound('Article not found');
            }
            return ctx.send(article);
        } catch (error) {
            return ctx.throw(500, 'Error updating view count');
        }
    },
}));