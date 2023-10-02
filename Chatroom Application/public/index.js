const messageForm=document.getElementById('messageForm');
const chatMessages=document.querySelector('.chat-messsages');
const roomName=document.getElementById('room-name');
const userList=document.getElementById('users');

const socket=io('ws://localhost:3000', {transports: ['websocket']});

const {username,room}=Qs.parse(location.search,{
    ignoreQueryPrefix:true
});

console.log(username,room);
//join room
socket.emit('joinRoom',{username,room});

//get rooms and users
socket.on('roomUsers',(({room,users})=>{
outputRoomName(room);
outputUsers(users);

}));

//msg from server
socket.on('message',(message) =>{console.log(message);
 outputMessage(message);
//chatMessages.scrollTop=chatMessages.scrollHeight;
})

messageForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const msg=e.target.elements.msg.value;
    console.log(msg);
    socket.emit('chatMessage', msg);
    e.target.elements.msg.value='';
});

function outputMessage(message){
const div=document.createElement('div');
div.classList.add('message');
div.innerHTML=`<p class="meta">${message.user} <span> ${message.time}</span></p>
<p class="text">
${message.text}
</p>`;
document.querySelector('.chat-messages').appendChild(div);
}

//add room to DOM
function outputRoomName(room){
 roomName.innerText=room;
    }

    function outputUsers(users){
userList.innerHTML=`${users.map(user=>`<li>${user.username}</li>`).join('')}`

    }