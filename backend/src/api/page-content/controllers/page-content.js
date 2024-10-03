"use strict";

/**
 * page-content controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::page-content.page-content",
  ({ strapi }) => ({
    async find(ctx) {
      // Override the default query to include population of reason_data
      const query = {
        ...ctx.query,
        populate: {
          reason_data: {
            populate: "*", // This will populate all fields in the reason_data component
          },
        },
      };

      // Call the default Strapi entity service with the updated query
      const entities = await strapi.entityService.findMany(
        "api::page-content.page-content",
        query
      );

      return entities;
    },

    async findOne(ctx) {
      const { id } = ctx.params;
      const query = {
        ...ctx.query,
        populate: {
          reason_data: {
            populate: "*", // This will populate all fields in the reason_data component
          },
        },
      };

      // Call the default Strapi entity service with the updated query
      const entity = await strapi.entityService.findOne(
        "api::page-content.page-content",
        id,
        query
      );

      return entity;
    },
  })
);
