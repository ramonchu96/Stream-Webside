const { Schema, model } = require("mongoose");

//Struct creation PaymentSystem from the database

const PaymentSchema = new Schema(
  {
    option1: {
      type: Boolean,
      required: false
    },
    option2: {
      type: Boolean,
      required: false
    },
    option3: {
      type: Boolean,
      required: false
    },
    option4: {
      type: Boolean,
      required: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("Payment", PaymentSchema);