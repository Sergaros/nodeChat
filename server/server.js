const path = require('path');
const app = require('express')();

const bodyParser = require('body-parser');
const serveStatic = require('serve-static');

const publicPath = path.join(__dirname,'../public');

const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(serveStatic(publicPath));

io.on('connection', (socket)=>{
    console.log('new user connected');


    socket.on('createMessage', message=>{
        console.log('createMessage ', message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: Date.now()
        });
    })

    socket.on('disconnect', (socket)=>{
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});

// if(require.main === module){
//     server.listen(port, () => {
//       console.log(`Started on port ${port}`);
//     });
// } else {
//     module.exports = {app};
// }
