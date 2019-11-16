var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SkillSchema = new Schema({
    skillName: {type: String, required: true, max: 20},
    description: {type: String, required: true},
    skillLevels: [
        {
        level: {type: Number},
        objectives: [
            {
                objective: {type:String, required :true}
            }
        ],
        }
    ]
});

module.exports = mongoose.model('skill', SkillSchema);