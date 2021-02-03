const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }],
  date: {
    type: Date,
    default: Date.now,
},
  body: String
  
});

const Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;
