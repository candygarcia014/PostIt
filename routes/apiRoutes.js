const fileUpload = require("express-fileupload");
const AWS = require("aws-sdk");
const keys = require("../utils/keys.js");
const router = require("express").Router();
const jwt = require("../configs/jwt");
const { User, Posts, Comments } = require("../models/index");
const passport = require("../configs/passport");
const isUserAuthenticated = require("../middlewear/isAuthenticated");
const path = require ("path") 
// creating s3 instance (to allow uploads)
const s3 = new AWS.S3({
  accessKeyId: keys.s3key,
  secretAccessKey: keys.s3secret,
});
router.post("/signup", (req, res) => {
  console.log(req.body);
  const { email, firstName, lastName, username, password } = req.body;
  if (!email || !firstName || !lastName || !username || !password) {
    return res.status(500).send("Please fill out all fields");
  } //Creates user - sign-up
  User.findOne({ $or: [{ email }, { username }] })
    .select("firstName lastName username email date")
    .then((user) => {
      if (user === null) {
        User.create(req.body);
        return res.status(200).send("User created");
      } // Checking if email/username exists in the database
      if (email === user.email) {
        return res
          .status(500)
          .send("Email already exists. Please use a different email.");
      }
      if (username === user.username) {
        return res
          .status(500)
          .send("Username already exists. Please use a different username.");
      }
    })
    .catch((err) => res.status(500).json(err));
});
//login route
router.post("/login", passport.authenticate("local"), (req, res) => {
  const { id } = req.user;
  res.status(200).json({ token: jwt.sign({ id }), token_type: "Bearer" });
});
//logout route
router.get("/logout", (req, res) => {
  req.logout();
  res.json("User logged out");
});
//gets user and all of their posts
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .populate(["userPosts", "userComments"])
    .populate("comments")
    .then((user) => res.json(user));
});
//posts route - to post the new posts
// 1. send post req to backend - in the backend we need to find the user ID to get all of his posts out of his database and update with the new posts.
router.post("/posts/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  Posts.create(req.body).then((data) => {
    console.log(data);
    User.findOneAndUpdate(
      { _id: id },
      { $push: { userPosts: data.id } },
      { new: true }
    ).then((res) => {
      return res.status(200).json("posted");
    });
  });
  console.log(req.body);
});
//route to find all posts and sends back to user/frontend
router.get("/posts", (req, res) => {
  Posts.find()
    .sort({ date: -1 })
    .then((data) => res.json(data));
});
// Photo Upload
router.post("/upload/:userId", async (req, res) => {
  const { userId } = req.params;
  // Sending error back if no file was uploaded
  if (!req.files) {
    return res.status(400).send("No file was uploaded.");
  }
  // references the file uploaded from the input field with the 'name' attribute specified following 'req.files.'
  const uploadFile = req.files.file;
  console.log(req.files);
  // setting up S3 upload parameters
  const params = {
    Body: uploadFile.data, // data from uploaded file
    Bucket: keys.s3bucket, // bucket name
    Key: `${Date.now()}-${uploadFile.name}`, // file name to use for S3 bucket
  };
  // uploading file to the bucket
  s3.upload(params, (err, response) => {
    if (err) throw err;
    User.findOneAndUpdate(
      { _id: userId },
      { image: response.Location },
      { new: true }
    ).then((x) => x);
    console.log(`File uploaded successfully at ${response.Location}`);
    // terminating the req/res cycle by sending a JSON object with the uploaded
    // file path AND any date sent along with the upload... this is where you
    // could write to your db if needed, now that you have the url path for the
    // newly uploaded file!
    res.json({ url: response.Location, data: req.body });
  });
});
//route to get individual post and returns data for that post
router.get("/posts/:id", (req, res) => {
  Posts.findById(req.params.id)
    .populate("comments")
    .then((data) => {
        console.log(data)
      res.json(data);
    })
    .catch((err) => {
        console.log(err)
      res.json(err);
    });
});
//create a new comment under the post
router.post("/posts/:postId/:userId/comments", (req, res) => {
  const { postId, userId } = req.params;
  Comments.create(req.body).then((data) => {
    console.log(data);
    //comments get pushed into the posts model
    Posts.findOneAndUpdate ({ _id: postId }, { $push: { comments: data.id } }, { new: true }).populate("comments").then((data) => {
        //Comment gets pushed into the user model
        User.findOneAndUpdate({ _id: userId }, { $push: { userComments: data.id } }, { new: true }).then((data1) => data1);
        return res.status(200).json(data);
    });
    });
});

// User Bio Route
router.post("/bio/:userId", async (req, res) => {
    const { userId } = req.params;
    console.log(req.params)
    console.log(req)
    User.findOneAndUpdate(
        { _id: userId },
        { bio : req.body.bio },
        { new: true }
        ).then((x) => x);
        
    return res.status(200).json("posted");
})

//   Update User Bio Route
router.get("/bio/:userId", (req, res) => {
    const { userId } = req.params;
    User.findById(userId)
      .populate(["userBio"])
      .then((bio) => res.json(bio));
});

router.get("/posts/:postId", (req, res) => {
  const { postId } = req.params;
  User.findById(postId)
    .populate(["post"])
    .then((post) => res.json(post));
});

router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
