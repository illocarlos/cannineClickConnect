const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {

        title: {
            type: String,
            required: [true, 'You need a title']
        },

        imageEvent: {
            type: String,
            default: '#'
        },

        description: {
            type: String,
            required: [true, 'You need a description'],
            minlength: [20, 'Description must have 20 digits.']
        },

        date: {
            type: date,
            required: [true]
        },

        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },


        attendees: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        }],

        eventAdresss: {
            type: String,
        },

        eventLocation: {

            type: {
                Types: String,
                required: [true],
            },

            cordinates: {
                type: [Number],
                required: [true, 'You need a location']

            }

        },




    }
);

eventSchema.index({ location: '2dsphere' })
const Event = model("Event", eventSchema)
module.exports = Event