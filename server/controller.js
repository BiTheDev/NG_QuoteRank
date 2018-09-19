const QuoteRank = require('./model.js')

module.exports = {
    AllAuthors : (req,res) =>QuoteRank.find({})
                            .then(data=>console.log("Get all Authors success") || res.json(data))
                            .catch(errs => console.log("Get all Author error") || res.json(errs)),
    CreateAuthor:(req,res) =>QuoteRank.create(req.body)
                            .then(data => console.log("Create Author success") || res.json(data))
                            .catch(errs =>console.log("Create Author error") || res.json(errs)),
    CreateQuote:(req,res) =>QuoteRank.findByIdAndUpdate(req.params.id , {$push:{Quotes : req.body }}, {new:true, runValidators : true})
                            .then(data=>console.log("Create Quote Success") || res.json(data))
                            .catch(errs=>console.log("Create Quote Error") || res.json(errs)),
    EditAuthor:(req,res) =>QuoteRank.findByIdAndUpdate(req.params.id, req.body, {new : true, runValidators:true})
                            .then(data=>console.log("Edit Author success") || res.json(data))
                            .catch(errs=>console.log("Edit Author error") || res.json(errs)),
    GetAuthor:(req,res) =>QuoteRank.findById(req.params.id)
                            .then(data=>console.log("get author success") || res.json(data))
                            .catch(errs =>console.log("get author errors") || res.json(errs)),
    DeleteAuthor:(req,res) =>QuoteRank.findByIdAndRemove(req.params.id)
                            .then(data=>console.log("remove author success") || res.json(data))
                            .catch(errs =>console.log("remove author errors") || res.json(errs)),
    }