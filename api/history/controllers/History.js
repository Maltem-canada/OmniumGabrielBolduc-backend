'use strict';

/**
 * History.js controller
 *
 * @description: A set of functions called "actions" for managing `History`.
 */

module.exports = {

  /**
   * Retrieve history records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.history.search(ctx.query);
    } else {
      return strapi.services.history.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a history record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.history.fetch(ctx.params);
  },

  /**
   * Count history records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.history.count(ctx.query);
  },

  /**
   * Create a/an history record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.history.add(ctx.request.body);
  },

  /**
   * Update a/an history record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.history.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an history record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.history.remove(ctx.params);
  }
};
