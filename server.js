const app = require('./backend/app');//Import from the folder backend the file app.js
app.listen(3000, ()=>{
console.log('App listening on PORT 3000');// the server is listening and configurated by me on the port 3000
});
// this file is configurated only once
