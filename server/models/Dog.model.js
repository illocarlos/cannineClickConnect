const { Schema, model } = require("mongoose");

const dogSchema = new Schema(
    {

        name: {
            type: String,
            required: [true, 'Name is required.'],
        },

        // EXTENDER LA VALIDACIÓN DE LOS MODELOS RESPONSABLEMENTE

        description: {
            type: String,
            minlength: [10, 'Description must be at least 20 characters long']
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
