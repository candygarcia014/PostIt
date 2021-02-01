const fileUpload = require("express-fileupload");
const express = require("express"),
      app = express(),
      mongoose = require('mongoose'),
      passport = require("passport"),
      apiRoute = require('./routes/apiRoutes'),
      session = require("express-session"),
      PORT = process.env.PORT || 3001;
      db = require("./models");
require("dotenv").config();
app.use(fileUpload())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ resave:true, saveUninitialized:true, secret: 'Pirate Pickles',}));
app.use(passport.initialize());
app.use(passport.session());
if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SCP",   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
});
//define routes 
app.use("/api", apiRoute);
//comments route
// app.get("/comments", (req, res) => {
//     db.Comments.find({})
//       .then(dbComments => {
//         res.json(dbComments);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
//   //user route
//   app.get("/user", (req, res) => {
//     db.User.find({})
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
//   //sumbit comments route
//   app.post("/submit", ({ body }, res) => {
//     db.Comments.create(body)
//       .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { comments: _id } }, { new: true }))
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
// //populate the comments with this route- edit the params 
// app.get("/populateduser", (req, res) => {
//     db.User.find({})
//       .populate("comments")
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });