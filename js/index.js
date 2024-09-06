const footer = document.createElement('footer');
const body = document.querySelector('body');
body.appendChild(footer);

const today = new Date();
const year = today.getFullYear();
const copyright = document.createElement('p');
copyright.innerHTML ='<span>Virginia</span><span>&#169</span><span>${year}</span>'
footer.appendChild(copyright);

const skillsList =['html','css','python','canva'];
const skillsSection= document.getElementById('skills');
const skillsUl= skillsSection.querySelector('ul');

for (let skill of skillsList){
    let skillItem = document.createElement('li');
    skillItem.innerHTML = skill;
    skillsUl.appendChild(skillItem);
}
//handle submission of new message list entries
messageForm.addEventListener('submit',(event)=> {
    event.preventDefault();
    let name= event.target.usersName.value;
    let email= event.target.usersEmail.value;
    let message= event.target.usersMessage.value;

    console.log('Name:',name);
    console.log('Email:',email);
    console.log('Message:',message);
    let uid = makeId();
    let newMessage= document.createElement('li');
    newMessage.classList.add('message-item');

    newMessage.innerHTML='<a href="mailto:${email}'

    entryById[uid] ={ usersName:name, usersEmail: email, message:message}
    newMessage.appendChild(makeEditButton());
    newMessage.appendChild(makeRemoveButton());

    messageList.appendChild(newMessage);
    messageForm.reset();
    messageSection.hidden= false;
});
//handle submission of new entry
const messageForm = document.forms['leave_message'];

messageForm.addEventListener('sunmit', function(event){
    event.preventDefault();

    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    console.log('Name:${usersName}');
    console.log('Email:${usersEmail}');
    console.log('Message:${usersMessage}');

    const messageSection =document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');

    const newMessage = document.createElement('li');

    newMessage = innerHTML= '<a href="mailto:${usersEmail}">${userName}</a><span> wrote: ${usersMessage}</a><span>wrote: ${usersMessage}</span>';


    //remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button';

    //
    removeButton.addEventListener('click',function(){
        const entry = removeButton.parentNode;
        entry.remove();
    });
    //appending remove button
    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    messageForm.rest();
});