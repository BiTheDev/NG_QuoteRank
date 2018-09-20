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

    EditAuthor:(req,res) =>QuoteRank.findByIdAndUpdate(req.params.id, req.body, {new : true})
                            .then(data=>console.log("Edit Author success") || res.json(data))
                            .catch(errs=>console.log("Edit Author error") || res.json(errs)),

    GetAuthor:(req,res) =>QuoteRank.findById(req.params.id)
                            .then(data=>console.log("get author success") || res.json(data))
                            .catch(errs =>console.log("get author errors") || res.json(errs)),

    DeleteAuthor:(req,res) =>QuoteRank.findByIdAndRemove(req.params.id)
                            .then(data=>console.log("remove author success") || res.json(data))
                            .catch(errs =>console.log("remove author errors") || res.json(errs)),

    DeleteQuote:(req,res) =>QuoteRank.findOneAndUpdate({"Quotes._id" : req.params.quote_id}, 
                                {$pull: {"Quotes": {"_id": req.params.quote_id}}},{new:true})
                            .then(data => console.log("Delete quote success")|| res.json(data))
                            .catch(errs=>console.log("Delete quote errors") || res.json(errs)),

    UpdateQuote: (req, res) =>QuoteRank.findOneAndUpdate({"Quotes._id": req.params.quote_id}, 
                                { $inc: { "Quotes.$.Votes": req.body.Votes }}, {new:true})
                            .then(data => console.log("Update Quote success", data)||res.json(data))
                            .catch(err => console.log("Update Quote error", err)||res.json(err)),
    SortAuthor:(req,res) =>QuoteRank.find().sort({name : req.params.sort})
                            .then(data=>console.log("Sort Author success")|| res.json(data))
                            .catch(errs=>console.log("Sort Author error") || res.json(errs)),
   
    }