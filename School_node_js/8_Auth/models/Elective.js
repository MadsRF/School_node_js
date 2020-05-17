const { Model } = require('objection');

const User = require("../models/User.js");

class Elective extends Model {
    static tableName = 'electives';

    static relationMappings = {
        user: {
            relation: Model.BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'electives.userId',
                to: 'user.id'
            }
        }
    };
}

module.exports = Elective;
