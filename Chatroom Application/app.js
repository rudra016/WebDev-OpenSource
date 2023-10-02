const express=require('express');
const http=require('http');
const path=require('path');
const socketio=require('socket.io');
const formatMessage=require("./utils/message");
const {userJoin, getCurrentUser,userLeave,getRoomUsers}=require("./utils/users");
const app=express();
const server=http.createServer(app);
const io=socketio(server);

app.use(express.static(path.join(__dirname,'public')));

const name='Conversate Server';

io.on('connection', (socket) =>{
console.log("WS conn");
socket.on('joinRoom',({username,room})=>{
    const user=userJoin(socket.id,username,room);
    socket.join(user.room);
    socket.emit('message', formatMessage(name,'Welcome to Conversate'));

    socket.broadcast.to(user.room).emit('message',formatMessage(name,`${user.username} has entered the chat`));

    io.to(user.room).emit('roomUsers',{room:user.room,
    users:getRoomUsers(user.room)})

});
   
    socket.on('chatMessage',(msg)=>{
        console.log(msg);
        const user=getCurrentUser(socket.id);
        console.log(user);
      io.to(user.room).emit('message',formatMessage(user.username,msg));
    });

    socket.on('disconnect',()=>{
        const user=userLeave(socket.id);
        if(user)
        {
        io.to(user.room).emit('message',formatMessage(name, `${user.username} left the chat`));
        io.to(user.room).emit('roomUsers',{room:user.room,
            users:getRoomUsers(user.room)});
          }})
        
  
});
server.listen(process.env.PORT || 3000, ()=>console.log('Server running successfully'));