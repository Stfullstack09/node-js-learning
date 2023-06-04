const  mongoose =  require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoDelete = require('mongoose-delete')

const { Schema } = mongoose;

const Course = new Schema(
    {
        name: {
            type : String,
            minLength: 18,
            maxLength: 255,
            required: true
        },
        description: String,
        image: String,
        level: String,
        slug: {
            type:String,
            slug: 'name',
            unique: true,
        }
    },{
        timestamps: true
    }
)

mongoose.plugin(slug);
Course.plugin(mongoDelete, {
    deletedAt: true,
    overrideMethods: true
})

/* 

    Truy van du lieu

*/