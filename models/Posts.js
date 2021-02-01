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
    username: {
        type: String,
        required: true,
    },
    totalBolts: {
        type: Number,
        required: false,
        default: 0
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
  
});

const Posts = mongoose.model("Posts", postsSchema);

module.exports = Posts;