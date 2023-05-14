const AuthorModel = require("../models/author.model")

module.exports = {
    //creat product
    createAuthor: (req, res) => {
        AuthorModel.create(req.body)
            .then(newAuthor => res.status(201).json(newAuthor))
            .catch(err => res.status(400).json(err))
    },

    //display product
    getOneAuthor: (req, res) => {
        AuthorModel.findById(req.params.id)
            .then(oneAuthor => res.json(oneAuthor))
            .catch(err => res.json(err))
    },

    //list of all products
    getAllAuthors: (req, res) => {
        AuthorModel.find()
            .then(allAuthors => res.json(allAuthors))
            .catch(err => res.json(err));
    },
    updateAuthor: (req, res) => {
        AuthorModel.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.json(err));

    },
    deleteAuthor: (req, res) => {
        AuthorModel.findByIdAndDelete(req.params.id)
            .then(deleteAuthor => res.json(deleteAuthor))
            .catch(err => res.json(err));
    }

}