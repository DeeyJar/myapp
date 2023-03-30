const {Schema,model}=require('mongoose');
const AccountSchema = new Schema({
    Username: {type:String,unique:true},
    Password: String,
    Email: {type:String,unique:true},
    FistName: String,
    LastName:String
    // Country:Array
});



module.exports= model('Account', AccountSchema);


