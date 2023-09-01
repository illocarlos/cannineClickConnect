const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {

    username: {
      type: String,
      required: [true, 'Username is required.'],
      minlength: [2, 'Username must be 2 characters length']
    },

    avatar: {
      type: [String],
      validate: {
        validator: value => value.length > 0,
        message: 'at least one photo is required'
      }
    },

    email: {
      type: String,
      required: [true, 'Email is required.'],
      lowercase: true,
      trim: true,
      unique: true,
    },

    password: {
      type: String,
      required: [true, 'Password is required.']
    },

    about: {
      type: String,
    },

    city: {
      type: String,
    },

    dogs: [{
      type: Schema.Types.ObjectId,
      ref: 'Dog'
    }],

    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    }
  },

);

const User = model("User", userSchema);
module.exports = User;
