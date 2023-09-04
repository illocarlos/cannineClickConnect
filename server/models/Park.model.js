const { Schema, model } = require("mongoose");

const parkSchema = new Schema(
    {

        name: {
            type: String,
            required: [true, 'You need a name']
        },

        description: {
            type: String,
            required: [true, 'You need a description'],
            minlength: [20, 'Description must have 20 digits.']
        },

        gallery: {
            type: [String],
            validate: {
                validator: value => value.length > 0,
                message: 'at least one photo is required'
            }
        },

        size: {
            type: String,
            enum: ['LARGE', 'MEDIUM', 'SMALL'],
            default: 'MEDIUM'
        },

        crowdedness: {
            type: String,
            enum: ['HIGH', 'MODERATE', 'LOW'],
            default: 'MODERATE'
        },

        open: {
            type: Boolean,
            default: true,
        },

        rating: {
            type: Number
        },

        address: {
            street: String,
            number: Number,
            zipcode: Number,
            city: String,
            country: String
        },

        location: {

            type: {
                type: String,
            },
            cordinates: {
                type: [Number],
                default: [100, 100],
            },
        },

    }
);

const Park = model("Park", parkSchema)
module.exports = Park