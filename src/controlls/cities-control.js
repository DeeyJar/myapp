const cityCtrl={};
const cities= require('../models/citymod.js')

cityCtrl.getcity= async (req,res)=> {
    const city=await cities.find();
    res.json(city)
}

cityCtrl.CreatCity= async (req,res)=>{
    await new cities({city:req.body.city, 
                    country:req.body.country
                    }).save()
    res.json({message:'Guardado/Save'})
}

module.exports=cityCtrl;
