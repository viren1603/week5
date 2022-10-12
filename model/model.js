const database = require("../config/db")
const sequlize = require("sequelize")

const team = database.define('team', {
    id: {
        type: sequlize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequlize.DataTypes.STRING,
        allowNull: false,
    }
}, {
    paranoid: true
})
team.sync()

const devloper = database.define('devloper', {
    id: {
        type: sequlize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: sequlize.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequlize.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequlize.DataTypes.STRING,

    },
    imgPath: {
        type: sequlize.DataTypes.STRING,
    },
    team_id: {
        type: sequlize.DataTypes.INTEGER,
        references: {
            model: team,
            key: "id",
        },
        onUpdate: "RESTRICT",
        onDelete: "RESTRICT",
        allowNull: false,
    },
    dob: {
        type: sequlize.DataTypes.STRING
    },
    isActive: {
        type: sequlize.DataTypes.BOOLEAN,
        defaultValue: true
    }
}, {
    paranoid: true
})
devloper.sync()


team.hasMany(devloper, { foreignKey: 'team_id' })
devloper.belongsTo(team, { foreignKey: 'team_id' })


module.exports = { devloper, team };

