"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const sequelize_1 = require("../sequelize");
const sequelize_2 = require("sequelize");
const playerPositions = ["keeper", "half-back", "sweeper", "forward"];
exports.Player = sequelize_1.default.define("Player", {
    id: {
        type: sequelize_2.UUID,
        defaultValue: sequelize_2.DataTypes.UUIDV4,
        primaryKey: true,
        validate: { isUUID: 4 },
    },
    firstName: {
        type: sequelize_2.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize_2.STRING,
        allowNull: false,
    },
    dateOfBirth: {
        type: sequelize_2.DATEONLY,
        allowNull: false,
        validate: { isDate: true },
    },
    position: {
        type: (0, sequelize_2.ENUM)(...playerPositions),
        allowNull: false,
        validate: { isIn: [playerPositions] },
    },
});
//# sourceMappingURL=Player.js.map