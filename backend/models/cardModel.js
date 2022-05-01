const mongoose = require("mongoose");

const cardSchema = mongoose.Schema(
  {
    cardId: {
      type: Number,
      required: [true, "Please add an id"],
    },
    name: {
      type: String,
      required: [true, "Please add a text value"],
    },
    rarity: {
      type: String,
    },
    atk: {
      type: Number,
    },
    def: {
      type: Number,
    },
    passive: {
      type: String,
    },
    leader: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Card", cardSchema);
