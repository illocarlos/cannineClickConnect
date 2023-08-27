const { Schema, model } = require("mongoose");

const parkSchema = new Schema(
    {

        parkName: {
            type: String,
            required: [true, 'You need a name']
        },

        description: {
            type: String,
            require: [true, 'You need a description'],
            minlength: [15, 'Description must have 30 digits.']
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
            default: 'MODERATE'
        },

        cerrado: {
            type: Boolean,
            default: true,

        },

        rating: {
            type: Number
        },

        parkAdresss: {
            type: String,
        },

        // parkLocation: {

        //     type: {
        //         Types: String,
        //         required: [true],
        //     },
        //     cordinates: {
        //         type: [Number],
        //         required: [true, 'You need a location']

        //     },
        // },


    }
);

const Park = model("Park", parkSchema)
module.exports = Park