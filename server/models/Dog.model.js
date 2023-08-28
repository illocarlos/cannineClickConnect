const { Schema, model } = require("mongoose");

const dogSchema = new Schema(
    {

        name: {
            type: String,
            required: [true, 'Name is required.'],
        },


        description: {
            type: String,
        },

        image: {
            type: String,
            default: "#"
        },

        age: {
            type: Number,
            require: [true, 'Age is required']
        },

        size: {
            type: String,
            enum: ['LARGE', 'MEDIUM', 'SMALL'],
            required: [true, 'Size is required.'],
        },

        gender: {
            type: String,
            enum: ['MALE', 'FEMALE'],

        },

        castrated: {
            type: Boolean,
            require: [true, 'Castrated is required ']
        },
    })


const Dog = model("Dog", dogSchema);
module.exports = Dog;
