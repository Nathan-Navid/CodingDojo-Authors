const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    // title:{
    //     type:String,
    //     required:[true, "Title is require"],
    //     minlength:[2,"Title must be at least 2 characters long"],
    //     maxlength:[255,"Title must be at most 255 characters long"]
    // },
    // genre:{
    //     type:String,
    //     required:[true, "Genre is require"],
    //     minlength:[2,"Genre must be at least 2 characters long"],
    //     maxlength:[255,"Genre must be at most 255 characters long"]
    // },
    // releaseYear:{
    //     type:Number,
    //     required:[true, "Release Year is require"],
    //     min:[1900,"Release Year must be at least 1900"],
    // }, 
    name: {
        type: String,
        required:[true, "Title is require"],
        minlength:[3,"Title must be at least 3 characters long"],
        maxlength:[255,"Title must be at most 255 characters long"]
    },
},
    { timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);