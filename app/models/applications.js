module.exports = (sequelize, DataTypes) => {
    const Application = sequelize.define('Application', {
      candidate_id: DataTypes.INTEGER,
      opportunity_id: DataTypes.INTEGER,
      comments: DataTypes.STRING,
    });
  
    Application.associate = function(models){
        Application.belongsTo(models.Candidate, {foreignKey: 'candidate_id'})
        Application.belongsTo(models.Opportunity, {foreignKey: 'opportunity_id'})
    };

  //Application.associate = (models) => {
  //  Application.belongsTo(model.Candidate, {
   //   through: 'Candidate',
   //   foreingKey: 'candidate_id',
   // });
   // Application.belongsTo(model.Opportunity, {
   //   through: 'Opportunity',
   //   foreingKey: 'opportunity_id',
   // });
  //};
  
    return Application;
  }
  