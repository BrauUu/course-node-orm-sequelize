'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		return queryInterface.bulkInsert('Enrollment', [
			{
				status: "confirmado",
				studentId: 1,
				classId: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				status: "confirmado",
				studentId: 2,
				classId: 1,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				status: "confirmado",
				studentId: 3,
				classId: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				status: "confirmado",
				studentId: 4,
				classId: 3,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				status: "cancelado",
				studentId: 1,
				classId: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				status: "cancelado",
				studentId: 2,
				classId: 2,
				createdAt: new Date(),
				updatedAt: new Date()
			}
		], {})
	},

	async down(queryInterface, Sequelize) {
		return queryInterface.bulkDelete('Enrollment', null, {})
	}
};
