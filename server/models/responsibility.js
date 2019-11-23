var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ResponsibiltySchema = new Schema({
    responsibiltyLevel: {type: Number, required: true},
    competencies: [
        {
        competency: {type: String, required: true},
        objectives: [
            {
                objective: {type:String, required :true}
            }
        ],
        }
    ]
});

module.exports = mongoose.model('responsibilty', ResponsibiltySchema);