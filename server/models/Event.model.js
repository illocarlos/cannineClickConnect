const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {

        title: {
            type: String,
            required: [true, 'You need a title']
        },

        cover: {
            type: String,
            default: "img"
        },

        description: {
            type: String,
            required: [true, 'You need a description'],
            minlength: [20, 'Description must have 20 digits.']
        },

        date: {
            type: Date,
            required: [true, 'You need a date']
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

        attendees: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],

        address: {
            street: String,
            number: Number,
            zipcode: Number,
            city: String,
            country: String,

        },

        location: {
            type: {
                type: String,
                default: 'Point'
            },

            coordinates: {
                type: [Number],
            }

        },

    }
);

const Event = model("Event", eventSchema)
module.exports = Event