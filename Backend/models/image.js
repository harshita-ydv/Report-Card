const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({

  image: { type: String }, // URL to the product image
 
});

const Profile = mongoose.model('profile', profileSchema);

module.exports = Profile;