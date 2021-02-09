const mongoose = require('mongoose'),
      { Schema } = mongoose;
      

const postsSchema = new Schema({
    title: {
        type: String,
        required: "post need a title",
    },
    body: {
        type: String,
        required: "post need a text",
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        default: Date.now,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comments"
        }
    ],
    likes: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String
    },
  
});

const Posts = mongoose.model("Posts", postsSchema);

module.exports = Posts;