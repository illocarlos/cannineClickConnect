const { Schema, model } = require("mongoose");

const parkSchema = new Schema(
    {

        parkName: {
            type: String,
            require: [true, 'You need a name']
        },

        description: {
            type: String,
            require: [true, 'You need a description'],
            minlength: [30, 'Description must have 30 digits.']
        },

        imagePArk: {
            type: String,
            default: '#'
        },

        dimensions: {
            type: String,
            enum: ['LARGE', 'MEDIUM', 'SMALL'],
            default: 'MEDIUM'
        },

        crowdedness: {
            type: String,
            enum: ['HIGH', 'MODERATE', 'LOW'],
            default: 'MEDIUM'
        },

        closed: {
            type: Boolean,
            required: [true, 'It is a closed park or not?']
        },

        rating: {
            type: Number
        },

        parkAdresss: {
            type: String,
        },

        parkLocation: {

            type: {
                Types: String,
                required: [true],
            },
            cordinates: {
                type: [Number],
                required: [true, 'You need a location']

            },
        },


    }
);

const Park = model("Park", parkSchema)
module.exports = Park