// module.exports = function(models) {



//     //------------------associations for User, Ticket and propertyUnit tables--------------*
//     models.User.belongsTo(models.PropertyUnit, 
//         { 
//             through: models.UserPropertyUnit,
//             foreignKey: 'userId'
//         });
//     models.PropertyUnit.belongsToMany(models.User,
//         {
//             through: models.UserPropertyUnit,
//             foreignKey: 'unitId'
//         });
//     // // //--------------------End associations--------------------------------------------------*
// }