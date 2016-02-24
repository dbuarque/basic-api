import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
		"gender": String,
		"name": {
			"title": String,
			"first": String,
			"last": String
		},
		"location": {
			"street": String,
			"city": String,
			"state": String,
			"zip": Number
		},
		"email": String,
		"username": String,
		"password": String,
		"salt": String,
		"md5": String,
		"sha1": String,
		"sha256": String,
		"registered": Number,
		"dob": Number,
		"phone": String,
		"cell": String,
		"PPS": String,
		"picture": {
			"large": String,
			"medium": String,
			"thumbnail": String
		}
});

module.exports = mongoose.model('users', userSchema);