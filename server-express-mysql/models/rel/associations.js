module.exports = function(models) {
    //------------------associations for User, Ticket and propertyUnit tables--------------*
    models.User.belongsToMany(models.Ticket, 
        { 
            through: models.PropertyUnit,
            foreignKey: 'userId'
        });
    models.Ticket.belongsToMany(models.User,
        {
            through: models.PropertyUnit,
            foreignKey: 'ticketId'
        });
    //--------------------End associations--------------------------------------------------*
}