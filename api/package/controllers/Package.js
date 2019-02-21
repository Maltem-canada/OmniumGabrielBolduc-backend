'use strict';

/**
 * Package.js controller
 *
 * @description: A set of functions called "actions" for managing `Package`.
 */

module.exports = {

  /**
   * Retrieve package records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.package.search(ctx.query);
    } else {
      return strapi.services.package.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a package record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.package.fetch(ctx.params);
  },

  /**
   * Count package records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.package.count(ctx.query);
  },

  /**
   * Create a/an package record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.package.add(ctx.request.body);
  },

  /**
   * Update a/an package record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.package.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an package record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.package.remove(ctx.params);
  }
};
