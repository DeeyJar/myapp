const {Router} = require('express');
const router=Router();
const {CreateActivities,getActivities,ActivitiesIDitinerary,Createcomment,deleteComment,ModificarComentarios}=require('../controlls/Activities-control.js');

router.route('/')
    .get(getActivities)
    .post(CreateActivities)

router.route('/:id_itinerary')
    .get(ActivitiesIDitinerary)
    // .post(PostComment)

router.route('/:id')
    .put(Createcomment)

router.route('/comment/:id')
    .put(deleteComment)

router.route('/Modicarcomentarios/:id')
    .put(ModificarComentarios)


        
module.exports=router;