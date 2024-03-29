module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Classes', [
			{
				start_date: "2020-02-01",
				levelId: 1,
				professorId: 6,
				createdAt: new Date(),
				updatedAt: new Date()				 
			},
			{
				start_date: "2020-02-01",
				levelId: 2,
				professorId: 5,
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				start_date: "2020-02-01",
				levelId: 3,
				professorId: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
				},
			{
				start_date: "2020-07-01",
				levelId: 3,
				professorId: 6,
				createdAt: new Date(),
				updatedAt: new Date()			
			}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Classes', null, {})
  }
}
