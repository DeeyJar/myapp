const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://julian:Bariloche12@cluster0-355qj.mongodb.net/myin?retryWrites=true&w=majority', {
  useNewUrlParser: true
});


const connection = mongoose.connection
connection.once('open', () => console.log("OK"))
