const users=[];
//join user to chat
function userJoin(id,username,room)
{const user={id,username,room};
users.push(user);
return user;
}

//get current user
function getCurrentUser(id){console.log("ko");
    return users.find(user=>{
        if(user.id===id)
   { return user;}});
}


function userLeave(id){
    const index=users.findIndex(user=>user.id===id);
    console.log(index);
    if(index!=-1)
    return users.splice(index,1)[0];
}

function getRoomUsers(room){
    return users.filter(user=> user.room===room);
}

module.exports={userJoin,getCurrentUser,userLeave,getRoomUsers};