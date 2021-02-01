// let mongoose = require("mongoose");
// let db = require("../models");

// mongoose.connect("mongodb://localhost/SCP", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// let commentsSeed = [
//   {
//     username:
//     date: new Date().setDate(new Date().getDate()-10),
//     body: "Example of comment about beards and the products to use... ",
//   },
//   {
//     day: new Date().setDate(new Date().getDate()-9),
//         title: "Yoga for cool guys",
//         body: "Example of comment super long comment fnewoinfaienfaikefdnaikefnaiekrnfviaedrnvfjaerfjuerjuerfvjuernfvjukerfveujrfdvbaujedrfvnikfdrnaedolrnf ",
//     },
//   {
//     day: new Date().setDate(new Date().getDate()-8),
//         title: "Pets and things",
//         body: "Pet comment... ",
//     },
//   {
//     day: new Date().setDate(new Date().getDate()-7),
//         title: "Tomorrow is Friday ",
//         body: "Hello this is ca comment example ... ",
//     },
//   {
//     day: new Date().setDate(new Date().getDate()-6),
//         title: "Resistance bands for things ... ",
//         body: "Example of comment about meditation benefits for all ... ",
//     },
//   {
//     day: new Date().setDate(new Date().getDate()-5),
//         title: "Meditation",
//         body: "Example of comment about meditation benefits for all ... ",
//   },
//   {
//     day: new Date(new Date().setDate(new Date().getDate() - 4)),
//         title: "Cooking and stuff ",
//         body: "This is a seed for the comments ... ",
//   },
//   {
//     day: new Date(new Date().setDate(new Date().getDate() - 3)),
//         title: "Zoom calls for all",
//         body: "Zoom is crashing all the time. Fun stuff....  ",
//   },
//   {
//     day: new Date(new Date().setDate(new Date().getDate() - 2)),
//         title: "Coding is fun",
//         body: "Super helful comment is displayed here ",
//    }
// ];


// const postsSeed = [
//   {
//     date: 'October 10, 1992',
//     time: '10:30pm',
//     username: 'shannisnax',
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium aperiam ut! Voluptate et accusantium natus a omnis at odio fuga perferendis nulla similique recusandae dolor dolore placeat aspernatur nostrum, quisquam molestiae repellat, nemo laboriosam. Reprehenderit debitis hic dolorum, possimus veniam eligendi, optio saepe reiciendis sed exercitationem inventore voluptas quas sequi ipsa dolor excepturi est aliquam odio ex enim repudiandae eius quos? Iste nemo cum harum vitae aspernatur perferendis maiores minus esse quidem, recusandae saepe repellat. Molestiae quos doloribus ad natus nemo expedita quidem necessitatibus aperiam sed reprehenderit laboriosam odit rem iure eveniet commodi dolores tempore, distinctio odio corporis minus eligendi nostrum corrupti! Non nulla placeat dicta cumque ea velit sed? Reiciendis quidem corrupti, ratione sed aspernatur inventore deserunt voluptates dolore nulla ea quo tempora amet modi possimus ipsa nemo blanditiis omnis? Ipsum dolores autem dolore aperiam voluptate nesciunt eveniet, earum commodi rem quasi. Distinctio, maiores dolore sit quo cum quos ex nobis repellendus ea laboriosam necessitatibus atque libero eaque voluptatibus vitae cupiditate officiis assumenda expedita deleniti saepe doloremque quaerat asperiores incidunt. Saepe, et quaerat. Ea cupiditate vel quisquam fuga repellendus accusamus. Voluptatibus iste similique adipisci sint aperiam illo quam ratione voluptas sapiente perspiciatis, cum nesciunt, quia facilis quidem aut.",
//     title: 'OMG Skin Care',
//     id: 1
//   },
//   {
//     date: 'January 3, 2020',
//     time: '9:00am',
//     username: 'kajshdsa',
//     body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur accusantium aperiam ut! Voluptate et accusantium natus a omnis at odio fuga perferendis nulla similique recusandae dolor dolore placeat aspernatur nostrum, quisquam molestiae repellat, nemo laboriosam. Reprehenderit debitis hic dolorum, possimus veniam eligendi, optio saepe reiciendis sed exercitationem inventore voluptas quas sequi ipsa dolor excepturi est aliquam odio ex enim repudiandae eius quos? Iste nemo cum harum vitae aspernatur perferendis maiores minus esse quidem, recusandae saepe repellat. Molestiae quos doloribus ad natus nemo expedita quidem necessitatibus aperiam sed reprehenderit laboriosam odit rem iure eveniet commodi dolores tempore, distinctio odio corporis minus eligendi nostrum corrupti! Non nulla placeat dicta cumque ea velit sed? Reiciendis quidem corrupti, ratione sed aspernatur inventore deserunt voluptates dolore nulla ea quo tempora amet modi possimus ipsa nemo blanditiis omnis? Ipsum dolores autem dolore aperiam voluptate nesciunt eveniet, earum commodi rem quasi. Distinctio, maiores dolore sit quo cum quos ex nobis repellendus ea laboriosam necessitatibus atque libero eaque voluptatibus vitae cupiditate officiis assumenda expedita deleniti saepe doloremque quaerat asperiores incidunt. Saepe, et quaerat. Ea cupiditate vel quisquam fuga repellendus accusamus. Voluptatibus iste similique adipisci sint aperiam illo quam ratione voluptas sapiente perspiciatis, cum nesciunt, quia facilis quidem aut.",
//     title: 'What in the world is eye cream?',
//     id: 2
//   },
//   {
//     date: 'January 3, 2020',
//     time: '9:00am',
//     username: 'kajshdsa',
//     body: "sdhkjhsadsahasdjsakldjsaljdsa",
//     title: 'Face wash yay or nay?',
//     id: 3
//   },
//   {
//     date: 'January 3, 2020',
//     time: '9:00am',
//     username: 'kajshdsa',
//     body: "sdhkjhsadsahasdjsakldjsaljdsa",
//     title: 'Who uses manscape products?',
//     id: 4
//   },
//   {
//     date: 'January 3, 2020',
//     time: '9:00am',
//     username: 'kajshdsa',
//     body: "sdhkjhsadsahasdjsakldjsaljdsa",
//     title: 'Found the best beard oil ever wow!',
//     id: 5
//   }
// ]

// db.Comments.deleteMany({})
//   .then(() => db.Comments.collection.insertMany(commentsSeed))
//   .then(data => {
//     console.log(data.result.n + " comments inserted!");

//     //pulling posts in 
//     db.Posts.deleteMany({})
//     .then(() => db.Posts.collection.insertMany(postsSeed))
//     .then(data => {
//       console.log(data.result.n + " posts inserted!");
//       process.exit(0);
//     })
//     .catch(err => {
//       console.error(err);
//       process.exit(1);
//     });

//   })
//   .catch(err => {
//     console.error(err);
//   });


