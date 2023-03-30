const ItineraryCtrl={};
const itinerary= require('../models/Itinerary.js')

ItineraryCtrl.CreateItineary= async (req,res)=> {
    const Itinerary=await itinerary.find();
    res.json(Itinerary)
}

ItineraryCtrl.getItineary= async (req,res)=>{
    await new itinerary({tittle:req.body.tittle, 
                      profilePic:req.body.profilePic, 
                      rating:req.body.rating, 
                      duration:req.body.duration, 
                      price:req.body.price, 
                      hastags:req.body.hastags}).save()

    res.json({message:'Guardado/Save'})
}

module.exports=ItineraryCtrl;
