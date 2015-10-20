var mongoose = require('mongoose');

var ItemsSchema = new mongoose.Schema({
    title: {type: String, default: ''},
    description: {type: String, default: ''},
    price: {type: Number, default: 0},
    imageURL: {type: Array}
});

mongoose.model('Items', ItemsSchema);