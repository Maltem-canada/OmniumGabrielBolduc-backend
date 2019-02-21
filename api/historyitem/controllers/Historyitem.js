'use strict';

/**
 * Historyitem.js controller
 *
 * @description: A set of functions called "actions" for managing `Historyitem`.
 */

module.exports = {

  /**
   * Retrieve historyitem records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.historyitem.search(ctx.query);
    } else {
      return strapi.services.historyitem.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a historyitem record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.historyitem.fetch(ctx.params);
  },

  /**
   * Count historyitem records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.historyitem.count(ctx.query);
  },

  /**
   * Create a/an historyitem record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.historyitem.add(ctx.request.body);
  },

  /**
   * Update a/an historyitem record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.historyitem.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an historyitem record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.historyitem.remove(ctx.params);
  }
};
