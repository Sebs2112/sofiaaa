var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    categoryName: {type: String, required: true, max: 20},
    subCategories: [
        {
        subCategoryName: {type: String, required: true, max: 20},
        skills: [
            {
                skill: {type:String, required :true}
            }
        ],
        }
    ]
});

module.exports = mongoose.model('category', CategorySchema);