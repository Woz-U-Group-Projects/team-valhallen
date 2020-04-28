// "use strict";
// module.exports = (sequelize, DataTypes) => {
//   const TicketRef = sequelize.define(
//     "TicketRef",
//     {
//       userId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         references: {
//           model: 'User',
//           key: 'userId'
//         }
//       },
//       unitId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         references: {
//           model: 'PropertyUnit',
//           key: 'unitId'
//         }
//       },
//       ticketId: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         primaryKey: true,
//         references: {
//           model: 'Ticket',
//           key: 'ticketId'
//         }
//       },
//       last_update: {
//         type: DataTypes.DATE,
//         allowNull: false,
//         defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
//       }
//     },
//     {}
//   );
//   TicketRef.associate = function(models) {
//     // associations can be defined here
//   };
//   return TicketRef;
// };