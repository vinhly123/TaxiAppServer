const express = require('express');
const app = express();

app.set('port',process.env.PORT || 5000);
app.listen(app.get('port'), () =>{
    console.log(`Server is running at port ${app.get('port')}`);
});