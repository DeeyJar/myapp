const {Schema,model}=require('mongoose');
const CitySchema = new Schema({
    city: String,
    country: String,
    Url: String
});

module.exports= model('City', CitySchema);
