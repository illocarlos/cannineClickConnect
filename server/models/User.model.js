const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {

    username: {
      type: String,
      required: [true, 'Username is required.'],
    },

    avatar: {
      type: String,
      default: "#"
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
