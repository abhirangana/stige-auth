const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const userSchema=new Schema({
	username:String,
	googleId:String,
	// name:{
    //     type:String,
    //     required:true
    // },
    // email:{
    //     type:String,
    //     required:true
    // },
    // password:{
    //     type:String,
    //     required:true
    // },
    // date:{
    //     type:String,
    //     default:Date.now()
    // }
});


const User=mongoose.model('user',userSchema);

module.exports=User; 