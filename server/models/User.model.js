const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {

    username: {
      type: String,
      required: [true, 'Username is required.'],
      unique: true,

    },

    imageUser: {
      type: String,
      required: true,
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

    aboutMe: {
      type: String,
    },

    city: {
      type: String,
    },

    pack: [{
      type: Schema.Types.ObjectId,
      ref: 'dog'
    }],
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    }
  }

);

const User = model("User", userSchema);

module.exports = User;
