const goose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

goose.connect("mongodb://localhost:27017/QuoteRank", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db QuoteRank"));

const AuthorSchema = new goose.Schema({
    name:{
        type :String,
        unique:true,
        minlength:[4, "minLength 4"]
        
    },
    Quotes:[{
        title:{
        type:String,
        minlength:[5, "Your Quote is too short"]
    },
    Votes:{
        type:Number,
        default: 0
    }},{timestamps : true}]

},{timestamps : true});

AuthorSchema.plugin(uniqueValidator,  { message: 'Error, {PATH} already in the database' });
const QuoteRank = goose.model('QuoteRank', AuthorSchema);
module.exports = QuoteRank;