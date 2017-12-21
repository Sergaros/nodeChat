const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

const publicPath = path.join(__dirname,'../public');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(serveStatic(publicPath));

if(require.main === module){
    app.listen(port, () => {
      console.log(`Started on port ${port}`);
    });
} else {
    module.exports = {app};
}
