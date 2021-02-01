const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  username: String,
  date: {
    type: Date,
    default: Date.now,
},
  body: String
  
});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;
