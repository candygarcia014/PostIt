require("dotenv").config();
const keys = {
	"s3bucket": process.env.BUCKET,
	"s3key": process.env.S3KEY,
	"s3secret": process.env.S3SECRET,
};

console.log('track please')
module.exports = keys;