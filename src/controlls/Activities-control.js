const ActivitiesCtrol={};
const Activities= require('../models/Activities.js')

ActivitiesCtrol.getActivities= async (req,res)=> {
    const Activity=await Activities.find();
    res.json(Activity)
}
//////////////////////////////////////////////////////////////////
ActivitiesCtrol.ActivitiesIDitinerary= async(req,res)=>{
    const id_Itinerary =req.params.id_itinerary;
    const Activity= await Activities.find({id_itinerary:id_Itinerary})
    console.log("controls",id_Itinerary)
    res.json(Activity)
}
////////////////////////////////////////////////////////
ActivitiesCtrol.CreateActivities= async (req,res)=>{
    await new Activities({
                        id_itinerary:req.body.id_itinerary,
                        details:req.body.details,
                        comment:req.body.comment
                        }).save()

    res.json({message:'Guardado/Save'})
}


ActivitiesCtrol.Createcomment= async(req,res)=>{
   var id =req.params.id
   await Activities.findOneAndUpdate({_id: id}, {$push: {comment: req.body}
})
    res.json({"respuesta":"comentario agregado"})
}
/////////////////////////////////////////////////////
ActivitiesCtrol.deleteComment= async(req,res)=>{

    const comment = req.body;
    console.log('comentario a eliminar: ', comment);
    let activity = await Activities.findOne(
        {
            _id: req.params.id,
            comment: { $elemMatch: { _id: req.body.comment_id} }
        }

        ).catch(err => {
            if (err.path='userId'){
                return res.send({message:'no se puede eliminar el comentario'})
            }
    })

    console.log('itinerario con comentario a elimnar: ', activity);

    if (!activity){
        return res.send({message:'no se puede eliminar el comentario'})
    }

    Activities.update(
        { "_id": req.params.id },
        {
            $pull: {
                comment: {
                    _id:comment.comment_id
                }
            }
        }).then(function (activity) {
            res.json({ success: true, comment: activity.comment });
        });
}
//////////////////////////////////////////////////////////////

ActivitiesCtrol.ModificarComentarios= async(req,res)=>{
    
    const comment = req.body.comment;
    const comment_id=req.body.comment_id;

    await Activities.findByIdAndUpdate(
        {_id: req.params.id },
        {$set:{"comment.$[e].comment":comment}},{
            arrayFilters:[{"e._id":comment_id}],
            new:true
        },
    ).then(data=>res.send(data))
    .catch(error=>console.log(error));
    
}

module.exports=ActivitiesCtrol;


    
    