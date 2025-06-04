/**
 *  article controller
 */

/*

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article');
*/

"use strict";

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", ({ strapi }) => ({
  // Основной метод для увеличения просмотров
  async incrementViews(ctx) {
    try {
      const { documentId } = ctx.params;

      // Находим статью по documentId
      const article = await strapi.db.query("api::article.article").findOne({
        where: { documentId },
        select: ["id", "views"],
      });

      if (!article) {
        return ctx.notFound("Article not found");
      }

      // Обновляем счётчик
      const updatedArticle = await strapi.db
        .query("api::article.article")
        .update({
          where: { id: article.id },
          data: {
            views: (article.views || 0) + 1,
          },
          select: ["views"], // Возвращаем только обновлённое количество просмотров
        });

      return {
        success: true,
        views: updatedArticle.views,
      };
    } catch (err) {
      ctx.throw(500, "Internal server error", { details: err });
    }
  },
}));
