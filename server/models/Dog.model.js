const { Schema, model } = require("mongoose");

const dogSchema = new Schema(
    {

        dogname: {
            type: String,
            required: [true, 'Name is required.'],
        },

        imageDog: {
            type: String,
            required: true,

        },

        birthday: {
            type: Date,
            require: [true, 'birthday is required']
        },

        size: {
            type: String,
            enum: ['LARGE', 'MEDIUM', 'SMALL'],
            required: [true, 'size is required.'],
        },

        gender: {
            type: String,
            enum: ['male', 'female',],

        },

        castrated: {
            type: Boolean,
            require: [true, 'castrated is required ']
        },

        aboutMyDog: {
            type: String,
        },

    })


const Dog = model("Dog", dogSchema);

module.exports = Dog;
