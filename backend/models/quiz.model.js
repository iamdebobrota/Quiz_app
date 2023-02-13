const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
    title : {type : String, require : true},
    description : {type : String, default:"Choose correct command from below options."},
    options: {type : Object, require : true},
    userId : {type : String, require : true}
})

const QuizModel = mongoose.model("task", quizSchema)

module.exports = QuizModel;

