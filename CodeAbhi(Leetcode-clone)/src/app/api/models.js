// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;


// const UserSchema = new Schema({
//     name:{
//         type:String,
        
//     },
//     email : {
//         type: String,
//         required:true
//     },
//     password:{
//         type: String,
//         required:true
//     }

// },{timestamps: true})


// const ProblemSchema = new Schema ({
//     no: Number,
//     name: String,
//     acceptance: String,
//     difficulty: String,
//     description: String,
//     example: String
// })


// const SubmissionSchema = new Schema({
//     no:{
//         type:Number,
//         required: true
        
//     },
//     name : {
//         type: String,
//         required:true
//     },
//     userid : {
//         type: String,
//         required:true
//     },
//     submission:{
//         type: String,
//         required:true
//     },
//     status:{
//         type:String,
//         required:true

//     }

// },{timestamps: true})


// const User = mongoose.model('User',UserSchema);
// const Problem = mongoose.model('Problem',ProblemSchema);
// const Submission = mongoose.model('Solution', SubmissionSchema);

// module.exports = {User,Problem,Submission};