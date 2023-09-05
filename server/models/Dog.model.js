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
<<<<<<< HEAD
            minlength: [10, 'Description must be at least 20 characters long'],
=======
            minlength: [5, 'Description must be at least 20 characters long'],

>>>>>>> 925a64d4f16093397e08e2f35f60db1b288f3c33
        },

        images: {
            type: [String],
            validate: {
                validator: value => value.length > 0,
                message: 'at least one photo is required'
            }
        },

        age: {
            type: Number,
            require: [true, 'Age is required']
        },

        size: {
            type: String,
            enum: ['BIG', 'MEDIUM', 'SMALL'],
            required: [true, 'Size is required.'],
        },

        gender: {
            type: String,
            enum: ['MALE', 'FEMALE'],
            required: [true, 'gender is required.'],
        },

        castrated: {
            type: Boolean,
            require: [true, 'Castrated is required ']
        },
    })


const Dog = model("Dog", dogSchema);
module.exports = Dog;
