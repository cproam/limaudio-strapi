/**
 * article router.
 */
/*
import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::article.article');
*/

"use strict";

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/articles/:documentId/increment-views",
      handler: "article.incrementViews",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
  ],
};
