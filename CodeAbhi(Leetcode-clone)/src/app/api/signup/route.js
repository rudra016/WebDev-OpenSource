// import { NextResponse } from 'next/server.js';
// import { mongoconnect } from '../mongodb.js';

// const { User, Problem, Submission } = require('../models.js');
// const mongoose = require('mongoose');



// export async function POST(req){

//     mongoconnect();

   

//     const {name,email,password} = await req.json();
    
  
  
//     if (!email || !password) {
//       NextResponse.status(400).json({ msg: 'Missing input' })
//       return;
//     }
  
//     let alreadyexist = await User.findOne({ email: email });
  
  
  
//     if (alreadyexist) {
  
//       NextResponse.status(409).json({ msg: 'This email already exists' })
//       return;
//     }
//     const NewUser = new User({
//       name,
//       email,
//       password,
  
  
//     })
  
//     NewUser.save()
//       .then(result => {
//         console.log("Sign up done");
        
//       })
//       .catch(err => {
//         NextResponse.send(err);
//       })
  
//     NextResponse.status(200).json({msg:'Sign up succesful'})
  
//   }