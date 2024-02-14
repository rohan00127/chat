var socket = io();

var textarea = document.getElementById("textarea");
var messagearea = document.querySelector(".message__area")



let name;
do{
     name = prompt('please enter your name');
}while(!name);

textarea.addEventListener("keyup" , function(e){

       if(e.key == "Enter"){
          sendmessage(e.target.value);
       }
});

function sendmessage(msg){

    let message = {

        user : name ,
        message : msg.trim()
    };

    //append

    appendmessage(message , 'outgoing');
    textarea.value = ''
    scrolltobottom();

    // send to server

    socket.emit('message' , message )
}

function appendmessage(msg , type){

     let maindiv = document.createElement('div');
     let classname = type;
     maindiv.classList.add(classname , "message");

     let markup = `
     
         <h4> ${msg.user}</h4>
         <p> ${msg.message}</p>
     
     `;

     maindiv.innerHTML = markup;
     messagearea.appendChild(maindiv)
}


//receive

socket.on("message2" , function(data){
   appendmessage(data , 'incoming')
   scrolltobottom();
})

function scrolltobottom(){
    messagearea.scrollTop = messagearea.scrollHeight;
}