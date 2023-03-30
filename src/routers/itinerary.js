const {Router} = require('express');
const router=Router();
const {CreateItineary,getItineary}=require('../controlls/itinerary-control.js');

router.route('/')
    .get(CreateItineary)
    .post(getItineary)
        
module.exports=router;