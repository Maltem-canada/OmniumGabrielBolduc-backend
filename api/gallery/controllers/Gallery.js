'use strict';

/**
 * Gallery.js controller
 *
 * @description: A set of functions called "actions" for managing `Gallery`.
 */

module.exports = {

  /**
   * Retrieve gallery records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.gallery.search(ctx.query);
    } else {
      return strapi.services.gallery.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a gallery record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.gallery.fetch(ctx.params);
  },

  /**
   * Count gallery records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.gallery.count(ctx.query);
  },

  /**
   * Create a/an gallery record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.gallery.add(ctx.request.body);
  },

  /**
   * Update a/an gallery record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.gallery.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an gallery record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.gallery.remove(ctx.params);
  }
};
