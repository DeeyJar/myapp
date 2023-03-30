const {Schema,model}=require('mongoose');
const moongose=require('mongoose');

const CommentSchema=new Schema({
    comment:{type:String},
    id_user:{type: moongose.Schema.ObjectId, ref:'Account'}
})

const ActivitiesSchema = new Schema({
    id_itinerary:{type: moongose.Schema.ObjectId, ref:'Itinerary'},
    details:{type: Array},
    comment: [CommentSchema]
    //documento embebidos

});

module.exports= model("Activity",ActivitiesSchema)