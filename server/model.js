const goose = require("mongoose");


goose.connect("mongodb://localhost:27017/QuoteRank", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db QuoteRank"));

const AuthorSchema = new goose.Schema({
    name:{
        type :String,
        minlength:[4, "minLength 4"]
        
    },
    Quotes:[{title:{
        type:String,
        minlength:[5, "Your Quote is too short"]
    },
    Vote:{
        type:Number,
        default: 0
    }},{timestamps : true}]

},{timestamps : true});

const QuoteRank = goose.model('QuoteRank', AuthorSchema);

module.exports = QuoteRank;