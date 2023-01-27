"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "camiseta",
          description: "lorem ipsum dolor sit amet lobortis, consectetur adipiscing elit lobortis vel aug",
          productImage:"1",
          discount:"20",
          brand_id:"1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "pantaloneta",
          description: "lorem ipsum dolor sit amet lobortis, consectetur adipiscing elit lobortis vel aug",
          productImage:"2",
          discount:"30",
          brand_id:"1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "sudadera",
          description: "lorem ipsum dolor sit amet lobortis, consectetur adipiscing elit lobortis vel aug",
          productImage:"3",
          discount:"10",
          brand_id:"1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "buzo",
          description: "lorem ipsum dolor sit amet lobortis, consectetur adipiscing elit lobortis vel aug",
          productImage:"4",
          discount:"45",
          brand_id:"1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  },
};
