'use strict';

/**
 * Header.js controller
 *
 * @description: A set of functions called "actions" for managing `Header`.
 */

module.exports = {

  /**
   * Retrieve header records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.header.search(ctx.query);
    } else {
      return strapi.services.header.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a header record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.header.fetch(ctx.params);
  },

  /**
   * Count header records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.header.count(ctx.query);
  },

  /**
   * Create a/an header record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.header.add(ctx.request.body);
  },

  /**
   * Update a/an header record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.header.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an header record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.header.remove(ctx.params);
  }
};
