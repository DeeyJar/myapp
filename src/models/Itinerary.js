const {Schema,model}=require('mongoose');
const ItinerarySchema = new Schema({
    tittle:{ type : String},
    profilePic:{type:String},
    rating:{type:Number},
    duration:{type: Number},
    price:{type: Number},
    hastags:{type: Array}
});

module.exports= model("Itinerary",ItinerarySchema)