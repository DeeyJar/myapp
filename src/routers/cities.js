const {Router} = require('express');
const router=Router();
const {getcity,CreatCity}=require('../controlls/cities-control.js');

router.route('/')
    .get(getcity)
    .post(CreatCity)
        
module.exports=router;
// router.post('/api/cities/new', async function(req,res){
//   console.log(req.body);
//   await new City({city:req.body.city , country:req.body.country}).save()
//   res.send('Creado')
// })

// app.get('/api/cities',  async function (req, res) {
//  const data = await City.find();
//  res.send(data);
// })

