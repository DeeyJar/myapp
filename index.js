const app = require('./app');
require('./src/database');

async function main(){
  await app.listen(app.get('port'));
  console.log('Server :', app.get('port'));
  
}
main();

// app.get('/api/cities',  async function (req, res) {
//  const data = await City.find();
//  res.send(data);
// })

// 
