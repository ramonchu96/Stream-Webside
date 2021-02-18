<<<<<<< HEAD
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

=======
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

>>>>>>> 0c60aa6e9923496e666647d167a0316a171e698a
module.exports = model("Payment", PaymentSchema);